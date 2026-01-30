export const runtime = "nodejs";

import nodemailer from "nodemailer";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.verify();

    // Mail to YOU
 await transporter.sendMail({
  from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
  to: process.env.ADMIN_EMAIL,
  subject: "📩 New Portfolio Contact Message",
 html: `
<div style="background:#f4f6fb;padding:32px 16px;font-family:Inter,Arial,sans-serif;">
  <div style="max-width:620px;margin:auto;background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 15px 40px rgba(0,0,0,0.08);">

    <!-- Header -->
    <div style="background:linear-gradient(135deg,#0d1b2a,#1b263b);color:#ffffff;padding:20px 26px;">
      <h2 style="margin:0;font-size:20px;letter-spacing:0.4px;">
        📬 New Portfolio Message
      </h2>
      <p style="margin:6px 0 0;font-size:13px;opacity:0.85;">
        Someone just contacted you via your portfolio
      </p>
    </div>

    <!-- Content -->
    <div style="padding:26px;color:#1f2937;font-size:14px;line-height:1.7;">
      <table style="width:100%;border-collapse:collapse;">
        <tr>
          <td style="padding:6px 0;font-weight:600;width:90px;">Name</td>
          <td style="padding:6px 0;">${name}</td>
        </tr>
        <tr>
          <td style="padding:6px 0;font-weight:600;">Email</td>
          <td style="padding:6px 0;">
            <a href="mailto:${email}" style="color:#2563eb;text-decoration:none;">
              ${email}
            </a>
          </td>
        </tr>
      </table>

      <hr style="border:none;border-top:1px solid #e5e7eb;margin:22px 0;" />

      <p style="margin:0 0 8px;font-weight:600;">Message</p>
      <div style="background:#f9fafb;padding:16px;border-radius:10px;border:1px solid #e5e7eb;">
        ${message.replace(/\n/g, "<br/>")}
      </div>
    </div>

    <!-- Footer -->
    <div style="background:#f1f5f9;text-align:center;padding:14px;font-size:12px;color:#6b7280;">
      Portfolio Contact • ${new Date().toLocaleString()}
    </div>

  </div>
</div>
`,

});


    // Auto-reply to USER
  await transporter.sendMail({
  from: `"Omkar Gawali" <${process.env.EMAIL_USER}>`,
  to: email,
  subject: "Thanks for contacting me 👋",
 html: `
<div style="background:#f4f6fb;padding:32px 16px;font-family:Inter,Arial,sans-serif;">
  <div style="max-width:620px;margin:auto;background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 15px 40px rgba(0,0,0,0.08);">

    <!-- Header -->
    <div style="background:linear-gradient(135deg,#0d1b2a,#1b263b);color:#ffffff;padding:22px 26px;">
      <h2 style="margin:0;font-size:20px;">
        Thanks for reaching out 👋
      </h2>
    </div>

    <!-- Body -->
    <div style="padding:26px;color:#1f2937;font-size:14px;line-height:1.7;">
      <p>Hi <strong>${name}</strong>,</p>

      <p>
        Thanks for contacting me through my portfolio.  
        I’ve received your message and will get back to you as soon as possible.
      </p>

      <p>
        Meanwhile, feel free to explore my work or connect with me here:
      </p>


      <div style="margin:18px 0;">
  <!-- GitHub -->
  <a
    href="https://github.com/Omkar-Gawali"
    target="_blank"
    style="text-decoration:none;display:inline-flex;align-items:center;margin-right:18px;"
  >
    <img
      src="https://your-domain.com/email-icons/github.png"
      width="20"
      height="20"
      alt="GitHub"
      style="vertical-align:middle;display:inline-block;"
    />
    <span
      style="margin-left:8px;color:#1a73e8;font-size:14px;font-weight:500;"
    >
      GitHub
    </span>
  </a>

  <!-- LinkedIn -->
  <a
    href="https://linkedin.com/in/omkar-ashruba-gawali-33855a22b"
    target="_blank"
    style="text-decoration:none;display:inline-flex;align-items:center;"
  >
    <img
      src="https://your-domain.com/email-icons/linkedin.png"
      width="20"
      height="20"
      alt="LinkedIn"
      style="vertical-align:middle;display:inline-block;"
    />
    <span
      style="margin-left:8px;color:#1a73e8;font-size:14px;font-weight:500;"
    >
      LinkedIn
    </span>
  </a>
</div>

      <p style="margin-top:26px;">
        Best regards,<br/>
        <strong>Omkar Gawali</strong><br/>
        <span style="color:#6b7280;">Full Stack Developer</span>
      </p>
    </div>

    <!-- Footer -->
    <div style="background:#f1f5f9;text-align:center;padding:14px;font-size:12px;color:#6b7280;">
      This is an automated response — no reply required
    </div>

  </div>
</div>
`,

});

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("EMAIL ERROR:", error);
    return NextResponse.json(
      { error: "Mail failed" },
      { status: 500 }
    );
  }
}
