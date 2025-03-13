import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { sendFormDataToEmail } from "../../services/emailService";

interface QuestionCardProps {
  title: string;
  content: React.ReactNode;
  canContinue?: boolean;
  backButton?: boolean;
  isLast?: boolean;
  hideButtons?: boolean;
}

const CardQuestionnaire: React.FC = () => {
  // Track current question and all answers
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({
    helpWith: "",
    moreDetails: "",
    name: "",
    email: "",
    phone: "",
  });

  // Add loading and error states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Initialize EmailJS when component mounts
  useEffect(() => {
    emailjs.init("YOUR_PUBLIC_KEY_HERE");
  }, []);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setAnswers((prev) => ({ ...prev, [name]: value }));
  };

  // Handle radio button selection
  const handleSelect = (option: string) => {
    setAnswers((prev) => ({ ...prev, helpWith: option }));
  };

  // Move to next question
  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  // Move to previous question
  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  // Updated handleSubmit function:
  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Log what we're trying to send
      console.log("Sending form data:", answers);

      // Call the email service
      const success = await sendFormDataToEmail(answers);

      if (success) {
        console.log("Email sent successfully");
        nextStep();
      } else {
        setSubmitError("Unable to send your message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Define all the question cards
  const questions: QuestionCardProps[] = [
    // Card 1: What can I help you with?
    {
      title: "What can I help you with?",
      content: (
        <div className="space-y-3">
          {[
            "Personal Training",
            "Nutrition Plan",
            "Weight Loss",
            "Muscle Building",
            "Other",
          ].map((option) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              className={`p-4 border rounded-lg cursor-pointer transition-all ${
                answers.helpWith === option
                  ? "border-indigo-500 bg-indigo-50"
                  : "border-gray-200 hover:border-indigo-300"
              }`}
            >
              {option}
            </div>
          ))}
        </div>
      ),
      canContinue: answers.helpWith !== "",
      backButton: false,
    },

    // Card 2: More details
    {
      title: "Can you tell me more?",
      content: (
        <div className="space-y-3">
          <p className="text-gray-600">
            This helps me understand how I can best assist you with{" "}
            {answers.helpWith.toLowerCase()}.
          </p>
          <textarea
            name="moreDetails"
            value={answers.moreDetails}
            onChange={handleChange}
            placeholder="Share your goals, current fitness level, or any specific needs..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            rows={4}
          ></textarea>
        </div>
      ),
      canContinue: true,
      backButton: true,
    },

    // Card 3: Contact info
    {
      title: "How can I reach you?",
      content: (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={answers.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={answers.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number (optional)
            </label>
            <input
              type="tel"
              name="phone"
              value={answers.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
        </div>
      ),
      canContinue: answers.name !== "" && answers.email !== "",
      backButton: true,
      isLast: true,
    },

    // Thank you card
    {
      title: "Thank You!",
      content: (
        <div className="text-center py-4">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
            <svg
              className="h-6 w-6 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="mt-3 text-lg font-medium text-gray-900">
            Message Received!
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            I'll get back to you as soon as possible about your{" "}
            {answers.helpWith.toLowerCase()} inquiry.
          </p>
          <button
            onClick={() => setCurrentStep(0)}
            className="mt-6 text-sm text-indigo-600 hover:text-indigo-500"
          >
            Send another message
          </button>
        </div>
      ),
      hideButtons: true,
    },
  ];

  // Get current question
  const currentQuestion = questions[currentStep];

  return (
    <div className="max-w-md mx-auto">
      {/* Main card container */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Progress bar */}
        {!currentQuestion.hideButtons && (
          <div className="w-full bg-gray-200 h-1">
            <div
              className="bg-indigo-600 h-1 transition-all duration-300"
              style={{
                width: `${(currentStep / (questions.length - 1)) * 100}%`,
              }}
            ></div>
          </div>
        )}

        {/* Card content */}
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            {currentQuestion.title}
          </h2>

          <form
            onSubmit={
              currentQuestion.isLast ? handleSubmit : (e) => e.preventDefault()
            }
          >
            {currentQuestion.content}

            {/* Error message display */}
            {submitError && (
              <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
                {submitError}
              </div>
            )}

            {/* Buttons */}
            {!currentQuestion.hideButtons && (
              <div
                className={`mt-6 flex ${
                  currentQuestion.backButton ? "justify-between" : "justify-end"
                }`}
              >
                {currentQuestion.backButton && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                    disabled={isSubmitting}
                  >
                    Back
                  </button>
                )}

                <button
                  type={currentQuestion.isLast ? "submit" : "button"}
                  onClick={currentQuestion.isLast ? undefined : nextStep}
                  disabled={!currentQuestion.canContinue || isSubmitting}
                  className={`px-4 py-2 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : currentQuestion.isLast ? (
                    "Submit"
                  ) : (
                    "Continue"
                  )}
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CardQuestionnaire;
