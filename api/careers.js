/**
 * Vercel Edge Function for handling careers form submissions
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
    const firstName = formData.get('first-name');
    const lastName = formData.get('last-name');
    const email = formData.get('email');
    const country = formData.get('country');
    const phone = formData.get('phone');
    const role = formData.get('role');
    const message = formData.get('message');
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
    if (!firstName || !lastName || !email || !message) {
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
    // AND/OR integrate with Breezy HR API if applicable

    // Example with Resend (requires RESEND_API_KEY environment variable):
    /*
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'careers@alkyme.io',
        to: 'hello@alkyme.io',
        subject: `Careers Inquiry: ${role || 'General'} - ${firstName} ${lastName}`,
        html: `
          <h2>New Careers Form Submission</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Country:</strong> ${country || 'Not provided'}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Role of Interest:</strong> ${role || 'Not specified'}</p>
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
    console.log('Careers form submission:', { firstName, lastName, email, role, message });

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Thank you for your interest. We will review your inquiry and get back to you soon.'
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

  } catch (error) {
    console.error('Careers form error:', error);
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
