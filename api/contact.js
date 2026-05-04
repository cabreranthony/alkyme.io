/**
 * Vercel Edge Function for handling contact form submissions
 * Replaces formsubmit.co dependency for better security and control
 */

export const config = {
  runtime: 'edge',
};

export default async function handler(request) {
  // Only allow POST requests
  if (request.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      {
        status: 405,
        headers: {
          'Content-Type': 'application/json',
          'Allow': 'POST',
        },
      }
    );
  }

  try {
    // Parse form data
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    const subject = formData.get('subject') || 'Contact Form Submission';
    const honeypot = formData.get('_gotcha'); // Anti-spam honeypot

    // Validate honeypot (bot check)
    if (honeypot) {
      return new Response(
        JSON.stringify({ error: 'Spam detected' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Basic validation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Email validation (basic)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email address' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // TODO: Integrate with email service (SendGrid, Resend, or similar)
    // For now, this is a placeholder that would need to be implemented
    // Option 1: Use SendGrid API
    // Option 2: Use Resend API (recommended for simplicity)
    // Option 3: Use native SMTP

    // Example with Resend (requires RESEND_API_KEY environment variable):
    /*
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'noreply@alkyme.io',
        to: 'hello@alkyme.io',
        subject: subject,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      }),
    });

    if (!resendResponse.ok) {
      throw new Error('Failed to send email');
    }
    */

    // For now, return success (implement email sending above)
    console.log('Contact form submission:', { name, email, subject, message });

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Thank you for your message. We will get back to you soon.'
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({
        error: 'Failed to process form submission',
        message: 'Please try again later or email us directly at hello@alkyme.io'
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
