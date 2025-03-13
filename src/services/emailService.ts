import emailjs from "emailjs-com";

// EmailJS credentials
const EMAILJS_USER_ID = "GfpI74SNU5kklUzzp"; // Your Public Key
const EMAILJS_SERVICE_ID = "service_menl4jc"; // Your Service ID
const EMAILJS_TEMPLATE_ID = "template_68ag6uo"; // Your Template ID

// Store recipient email in one place for easy updates later
export const RECIPIENT_EMAIL = "vctrfgr1@gmail.com";

// Initialize EmailJS - call this directly, not in useEffect
emailjs.init(EMAILJS_USER_ID);

// Interface for the form data
interface FormData {
  helpWith: string;
  moreDetails: string;
  name: string;
  email: string;
  phone: string;
}

/**
 * Sends form data to the specified email address using EmailJS
 * @param formData The data collected from the form
 * @returns Promise that resolves when the email is sent
 */
export const sendFormDataToEmail = async (
  formData: FormData
): Promise<boolean> => {
  try {
    // Prepare the template parameters
    const templateParams = {
      to_email: RECIPIENT_EMAIL, // Makes it easy to change in one place
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      service_type: formData.helpWith,
      message: formData.moreDetails,
      reply_to: formData.email,
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
