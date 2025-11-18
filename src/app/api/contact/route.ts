import { Resend } from "resend";
import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";
import axios from "axios";

export const runtime = "nodejs";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = new Resend(resendApiKey!);

const publicEmail = process.env.NEXT_PUBLIC_EMAIL || "";
const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY;

async function verifyRecaptcha(token: string): Promise<boolean> {
  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      null,
      {
        params: {
          secret: recaptchaSecretKey,
          response: token,
        },
      }
    );

    return response.data.success && response.data.score >= 0.5;
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, position, recaptchaToken } = body;

    if (!name || !email || !subject || !message || !position) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    if (!recaptchaToken) {
      return NextResponse.json(
        { error: "reCAPTCHA token is missing" },
        { status: 400 }
      );
    }

    const isValidRecaptcha = await verifyRecaptcha(recaptchaToken);

    if (!isValidRecaptcha) {
      return NextResponse.json(
        { error: "reCAPTCHA verification failed" },
        { status: 400 }
      );
    }

    const supabase = await createAdminClient();

    const { data: submission, error: dbError } = await supabase
      .from("contact_submissions")
      .insert([
        {
          name,
          email,
          subject,
          message,
          position,
        },
      ])
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      throw dbError;
    }

    if (process.env.RESEND_API_KEY) {
      try {
        await resend.emails.send({
          from: "Brix Avengoza <noreply@brixavengoza.dev>",
          to: [email],
          subject: "Thanks for reaching out!",
          html: `
            <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html xmlns="http://www.w3.org/1999/xhtml">
              <head>
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              </head>
              <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f4f4f4;">
                  <tr>
                    <td align="center" style="padding: 40px 10px;">
                      <table border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border-radius: 8px;">
                        <tr>
                          <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 28px;">Thanks for reaching out!</h1>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 40px 30px;">
                            <h2 style="margin: 0 0 10px 0; color: #333333;">Hi ${name},</h2>
                            <p style="margin: 0; color: #666666; font-size: 16px; line-height: 1.6;">
                              Thank you for contacting me regarding the <strong style="color: #667eea;">${position}</strong> position.
                            </p>
                            <p style="margin: 20px 0 0 0; color: #666666; font-size: 16px;">
                              I'll get back to you within <strong>24 hours</strong>.
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 30px; background-color: #f9f9f9; border-top: 1px solid #e0e0e0;">
                            <p style="margin: 0; color: #333333; font-weight: bold;">Best regards,</p>
                            <p style="margin: 5px 0 0 0; color: #667eea; font-weight: bold;">Brix Avengoza</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </body>
            </html>
          `,
        });

        await resend.emails.send({
          from: "Contact Form <noreply@brixavengoza.dev>",
          to: [publicEmail],
          subject: `New Contact: ${subject}`,
          html: `
            <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html xmlns="http://www.w3.org/1999/xhtml">
              <head>
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              </head>
              <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f4f4f4;">
                  <tr>
                    <td align="center" style="padding: 40px 10px;">
                      <table border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border-radius: 8px;">
                        <tr>
                          <td style="background-color: #667eea; padding: 30px; text-align: center;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 24px;">New Contact Form</h1>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 30px;">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                              <tr>
                                <td style="padding-bottom: 15px;">
                                  <strong style="color: #667eea;">Name:</strong><br/>
                                  <span style="color: #333333;">${name}</span>
                                </td>
                              </tr>
                              <tr>
                                <td style="padding-bottom: 15px;">
                                  <strong style="color: #667eea;">Email:</strong><br/>
                                  <a href="mailto:${email}" style="color: #667eea;">${email}</a>
                                </td>
                              </tr>
                              <tr>
                                <td style="padding-bottom: 15px;">
                                  <strong style="color: #667eea;">Position:</strong><br/>
                                  <span style="background-color: #667eea; color: #ffffff; padding: 4px 12px; border-radius: 12px; font-size: 14px;">${position}</span>
                                </td>
                              </tr>
                              <tr>
                                <td style="padding-bottom: 15px;">
                                  <strong style="color: #667eea;">Email:</strong><br/>
                                  <span style="color: #333333;">${subject}</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <strong style="color: #667eea;">Message:</strong><br/>
                                  <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #667eea; margin-top: 10px;">
                                    <p style="margin: 0; color: #333333; white-space: pre-wrap;">${message}</p>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </body>
            </html>
          `,
        });
      } catch (emailError) {
        console.error("Email error (non-fatal):", emailError);
      }
    }

    return NextResponse.json({
      success: true,
      data: submission,
    });
  } catch (error: any) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      {
        error: "Failed to process contact form",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
