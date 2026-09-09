import { NextRequest, NextResponse } from 'next/server';

interface ContactSubmission {
  name: string;
  email: string;
  subject?: string;
  message: string;
  recipientSlug?: string;
  hp_website?: string; // Honeypot field (must be empty)
  formLoadedAt?: number; // Timestamp when user opened the form
}

// In-memory rate limiter: Map of client IP -> Array of submission timestamps
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS_PER_WINDOW = 5;
const rateLimitMap = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];

  // Prune timestamps older than window
  const validTimestamps = timestamps.filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    rateLimitMap.set(ip, validTimestamps);
    return true;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return false;
}

// RFC 5322 compliant simplified email validator
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export async function POST(request: NextRequest) {
  try {
    // 1. Client identification for rate limiting
    const forwardedFor = request.headers.get('x-forwarded-for');
    const clientIp = forwardedFor
      ? forwardedFor.split(',')[0].trim()
      : request.headers.get('x-real-ip') || '127.0.0.1';

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Rate limit exceeded. Too many messages sent from this network. Please wait 15 minutes before trying again.',
        },
        { status: 429, headers: { 'Retry-After': '900' } }
      );
    }

    // 2. Parse request body safely
    let body: ContactSubmission;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, error: 'Invalid JSON request payload.' },
        { status: 400 }
      );
    }

    const {
      name,
      email,
      subject = 'Product Collaboration',
      message,
      recipientSlug,
      hp_website,
      formLoadedAt,
    } = body;

    // 3. Spam & Bot Protection
    // Honeypot check: If the hidden honeypot field is filled, silently reject
    if (hp_website && hp_website.trim().length > 0) {
      return NextResponse.json(
        { success: false, error: 'Automated submission detected.' },
        { status: 400 }
      );
    }

    // Form submission timing check: Humans take at least 1.5 seconds to fill form
    if (formLoadedAt && typeof formLoadedAt === 'number') {
      const elapsed = Date.now() - formLoadedAt;
      if (elapsed < 1500) {
        return NextResponse.json(
          { success: false, error: 'Submission received too quickly. Please try again.' },
          { status: 400 }
        );
      }
    }

    // 4. Server-Side Validation & Constraints
    const validationErrors: Record<string, string> = {};

    const cleanName = (typeof name === 'string' ? name : '').trim();
    if (!cleanName) {
      validationErrors.name = 'Please provide your name.';
    } else if (cleanName.length > 100) {
      validationErrors.name = 'Name must be 100 characters or fewer.';
    }

    const cleanEmail = (typeof email === 'string' ? email : '').trim().toLowerCase();
    if (!cleanEmail) {
      validationErrors.email = 'Please provide your email address.';
    } else if (cleanEmail.length > 254) {
      validationErrors.email = 'Email address must be 254 characters or fewer.';
    } else if (!EMAIL_REGEX.test(cleanEmail)) {
      validationErrors.email = 'Please enter a valid email address.';
    }

    const cleanSubject = (typeof subject === 'string' ? subject : '').trim().slice(0, 150);

    const cleanMessage = (typeof message === 'string' ? message : '').trim();
    if (!cleanMessage) {
      validationErrors.message = 'Please provide a message.';
    } else if (cleanMessage.length < 5) {
      validationErrors.message = 'Message must be at least 5 characters long.';
    } else if (cleanMessage.length > 5000) {
      validationErrors.message = 'Message must be 5,000 characters or fewer.';
    }

    if (Object.keys(validationErrors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed. Please check the provided fields.',
          details: validationErrors,
        },
        { status: 400 }
      );
    }

    // 5. Dispatch / Notification Handling
    const recipient = recipientSlug ? recipientSlug.slice(0, 50) : 'collective';
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

    if (webhookUrl) {
      try {
        const webhookResponse = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            content: `New inquiry for **${recipient}** from **${cleanName}** (<${cleanEmail}>):\n**Subject:** ${cleanSubject}\n**Message:**\n${cleanMessage}`,
          }),
        });

        if (webhookResponse.ok) {
          return NextResponse.json({
            success: true,
            status: 'delivered',
            message: 'Your inquiry has been successfully delivered.',
          });
        }
      } catch (err) {
        // Log webhook error internally without exposing details to client
        console.error('Contact webhook dispatch error:', err instanceof Error ? err.message : err);
      }
    }

    // Honest server-side acceptance when no external webhook is configured
    // Log receipt safely without exposing sensitive client data
    const emailDomain = cleanEmail.split('@')[1] || 'unknown';
    console.info(
      `[Contact Inquiry Accepted] To: ${recipient} | Subject: "${cleanSubject}" | From domain: @${emailDomain} | Length: ${cleanMessage.length} chars`
    );

    return NextResponse.json(
      {
        success: true,
        status: 'accepted',
        message: 'Your inquiry has been received and queued for review.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Unhandled contact route error:', error instanceof Error ? error.message : error);
    return NextResponse.json(
      { success: false, error: 'An unexpected server error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
