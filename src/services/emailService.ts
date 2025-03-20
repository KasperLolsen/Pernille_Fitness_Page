import emailjs from "emailjs-com";

// EmailJS credentials
const EMAILJS_USER_ID = "aUA1aUd6viyPOLpXH"; // Your Public Key
const EMAILJS_SERVICE_ID = "service_fl6v9gl"; // Your Service ID
const EMAILJS_TEMPLATE_ID = "template_3a6p0pc"; // Replace with your actual template ID from dashboard

// Store recipient email in one place for easy updates later
export const RECIPIENT_EMAIL = "pernille-strand@hotmail.com";

// Initialize EmailJS - call this directly, not in useEffect
emailjs.init(EMAILJS_USER_ID);

// Interface for the form data
interface FormData {
  helpWith: string;
  birthdate: string;
  moreDetails: string;
  annetDetails: string;
  name: string;
  email: string;
  phone: string;
}

/**
 * Test function to verify EmailJS is working correctly
 * Call this from the browser console: import('../../services/emailService').then(mod => mod.testEmailService())
 */
export const testEmailService = async (): Promise<boolean> => {
  try {
    // Simple test parameters
    const testParams = {
      to_email: RECIPIENT_EMAIL,
      from_name: "Test User",
      from_email: "test@example.com",
      phone: "123-456-7890",
      service_type: "Test Service",
      message: "This is a test message",
      reply_to: "test@example.com",
    };

    console.log("Testing EmailJS with params:", testParams);
    console.log("Using Service ID:", EMAILJS_SERVICE_ID);
    console.log("Using Template ID:", EMAILJS_TEMPLATE_ID);

    // Send the test email
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      testParams
    );

    console.log("Test email sent successfully!", response.status, response.text);
    return true;
  } catch (error) {
    console.error("Failed to send test email:", error);
    return false;
  }
};

/**
 * Sends form data to the specified email address using EmailJS
 * @param formData The data collected from the form
 * @returns Promise that resolves when the email is sent
 */
export const sendFormDataToEmail = async (
  formData: FormData
): Promise<boolean> => {
  try {
    // Create a formatted message string instead of relying on template variables
    const formattedMessage = `
Name: ${formData.name || "Ikke angitt"}
Email: ${formData.email || "Ikke angitt"}
Phone: ${formData.phone || "Ikke angitt"}
Birthdate: ${formData.birthdate || "Ikke angitt"}
Service: ${formData.helpWith || "Ikke spesifisert"}
${formData.annetDetails ? `Annet Details: ${formData.annetDetails}` : ""}
${formData.moreDetails ? `Additional Details: ${formData.moreDetails}` : ""}
    `.trim();
    
    // Determine service type for subject line
    let serviceType = formData.helpWith || "Ikke spesifisert";
    if (serviceType === "Annet" && formData.annetDetails) {
      serviceType = "Annet: " + formData.annetDetails.substring(0, 30) + (formData.annetDetails.length > 30 ? "..." : "");
    }
    
    // Simplified template parameters
    const templateParams = {
      to_email: RECIPIENT_EMAIL,
      from_name: formData.name || "Ikke angitt",
      from_email: formData.email || "Ikke angitt",
      phone: formData.phone || "Ikke angitt",
      service_type: serviceType,
      message: formattedMessage,
      reply_to: formData.email || "",
    };

    console.log("Attempting to send email with params:", templateParams);

    // Send the email
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log("Email sent successfully!", response.status, response.text);
    return true;
  } catch (error) {
    console.error("Failed to send email:", error);
    return false;
  }
};
