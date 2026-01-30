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
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>

<body style="margin:0;padding:0;background-color:#f4f6fb;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6fb;padding:16px 0;">
    <tr>
      <td align="center">

        <!-- MAIN CONTAINER -->
        <table width="100%" cellpadding="0" cellspacing="0"
               style="max-width:620px;background:#ffffff;border-radius:14px;
                      overflow:hidden;box-shadow:0 15px 40px rgba(0,0,0,0.08);">

          <!-- HEADER -->
          <tr>
            <td style="background:#0d1b2a;padding:20px 24px;color:#ffffff;">
              <h2 style="margin:0;font-size:20px;font-family:Arial,sans-serif;">
                📬 New Portfolio Message
              </h2>
              <p style="margin:6px 0 0;font-size:13px;opacity:0.85;">
                Someone just contacted you via your portfolio
              </p>
            </td>
          </tr>

          <!-- CONTENT -->
          <tr>
            <td style="padding:24px 24px 20px 24px;
                       font-family:Arial,sans-serif;
                       font-size:14px;
                       color:#1f2937;
                       line-height:1.7;">

              <!-- DETAILS TABLE -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:6px 0;font-weight:bold;width:80px;">
                    Name
                  </td>
                  <td style="padding:6px 0;">
                    ${name}
                  </td>
                </tr>
                <tr>
                  <td style="padding:6px 0;font-weight:bold;">
                    Email
                  </td>
                  <td style="padding:6px 0;">
                    <a href="mailto:${email}"
                       style="color:#2563eb;text-decoration:none;">
                      ${email}
                    </a>
                  </td>
                </tr>
              </table>

              <!-- DIVIDER -->
              <hr style="border:none;border-top:1px solid #e5e7eb;margin:22px 0;" />

              <!-- MESSAGE -->
              <p style="margin:0 0 8px;font-weight:bold;">
                Message
              </p>

              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#f9fafb;
                             padding:16px;
                             border-radius:10px;
                             border:1px solid #e5e7eb;">
                    ${message.replace(/\n/g, "<br/>")}
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background:#f1f5f9;
                       text-align:center;
                       padding:14px;
                       font-size:12px;
                       color:#6b7280;
                       font-family:Arial,sans-serif;">
              Portfolio Contact • ${new Date().toLocaleString()}
            </td>
          </tr>

        </table>
        <!-- END CONTAINER -->

      </td>
    </tr>
  </table>
</body>
</html>
`,
    });

    await transporter.sendMail({
      from: `"Omkar Gawali" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thanks for contacting me 👋",
      html: `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#f4f6fb;">
  <div style="width:100%;padding:24px 12px;font-family:Inter,Arial,sans-serif;">

    <div style="
      max-width:600px;
      margin:0 auto;
      background:#ffffff;
      border-radius:14px;
      overflow:hidden;
      box-shadow:0 12px 30px rgba(0,0,0,0.08);
    ">

      <!-- HEADER -->
      <div style="
        background:linear-gradient(135deg,#0d1b2a,#1b263b);
        padding:22px 24px;
        color:#ffffff;
      ">
        <h2 style="margin:0;font-size:20px;font-weight:600;">
          Thanks for reaching out 👋
        </h2>
      </div>

      <!-- BODY -->
      <div style="
        padding:26px 24px;
        color:#1f2937;
        font-size:15px;
        line-height:1.7;
      ">
        <p style="margin-top:0;">
          Hi <strong>${name}</strong>,
        </p>

        <p>
          Thank you for contacting me through my portfolio.
          I’ve received your message and will get back to you as soon as possible.
        </p>

        <p>
          Meanwhile, feel free to explore my work or connect with me:
        </p>

        <!-- SOCIAL LINKS -->
        <div style="margin:22px 0;">
          <!-- GitHub -->
          <a
            href="https://github.com/Omkar-Gawali"
            target="_blank"
            style="
              text-decoration:none;
              display:inline-block;
              margin-right:18px;
            "
          >
            <img
              src="https://omkargawali.vercel.app/icons/github.png"
              width="20"
              height="20"
              alt="GitHub"
              style="vertical-align:middle;"
            />
            <span style="
              margin-left:8px;
              color:#1a73e8;
              font-size:14px;
              font-weight:500;
              vertical-align:middle;
            ">
              GitHub
            </span>
          </a>

          <!-- LinkedIn -->
          <a
            href="https://linkedin.com/in/omkar-ashruba-gawali-33855a22b"
            target="_blank"
            style="text-decoration:none;display:inline-block;"
          >
            <img
              src="https://omkargawali.vercel.app/icons/linkedin.png"
              width="20"
              height="20"
              alt="LinkedIn"
              style="vertical-align:middle;"
            />
            <span style="
              margin-left:8px;
              color:#1a73e8;
              font-size:14px;
              font-weight:500;
              vertical-align:middle;
            ">
              LinkedIn
            </span>
          </a>
        </div>

        <p style="margin-top:28px;">
          Best regards,<br/>
          <strong>Omkar Gawali</strong><br/>
          <span style="color:#6b7280;font-size:14px;">
            Full Stack Developer
          </span>
        </p>
      </div>

      <!-- FOOTER -->
      <div style="
        background:#f1f5f9;
        text-align:center;
        padding:14px;
        font-size:12px;
        color:#6b7280;
      ">
        This is an automated response — no reply required
      </div>

    </div>
  </div>
</body>
</html>
`,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("EMAIL ERROR:", error);
    return NextResponse.json({ error: "Mail failed" }, { status: 500 });
  }
}
