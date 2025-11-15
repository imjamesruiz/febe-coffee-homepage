import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormRequest {
  subject: string;
  name: string;
  email: string;
  phone?: string;
  availability?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { subject, name, email, phone, availability, message }: ContactFormRequest = await req.json();

    console.log("Received contact form submission:", { subject, name, email });

    // Prepare email content
    let emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #A44A3F; border-bottom: 3px solid #D4E09B; padding-bottom: 10px;">
          New ${subject} from ${name}
        </h2>
        
        <div style="background-color: #F6F4D2; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
          ${phone ? `<p style="margin: 10px 0;"><strong>Phone:</strong> ${phone}</p>` : ''}
          <p style="margin: 10px 0;"><strong>Subject:</strong> ${subject}</p>
          ${availability ? `<p style="margin: 10px 0;"><strong>Availability:</strong> ${availability}</p>` : ''}
        </div>
        
        <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #F19C79; margin: 20px 0;">
          <h3 style="color: #A44A3F; margin-top: 0;">Message:</h3>
          <p style="color: #666666; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #CBDFBD; color: #999999; font-size: 12px;">
          <p>This email was sent from the Febe Coffee contact form.</p>
        </div>
      </div>
    `;

    // Send email using Resend API directly
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Febe Coffee <onboarding@resend.dev>",
        to: ["febecoffee@gmail.com"],
        reply_to: email,
        subject: `${subject} - ${name}`,
        html: emailContent,
      }),
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error("Resend API error:", resendData);
      throw new Error(resendData.message || "Failed to send email via Resend");
    }

    console.log("Email sent successfully:", resendData);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Email sent successfully",
        id: resendData.id 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message || "Failed to send email",
        success: false 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
