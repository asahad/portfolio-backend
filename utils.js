const dotenv = require("dotenv");
const mailjetPackage = require("node-mailjet");
dotenv.config();

// Configure Mailjet Mail
const mailjetClient = mailjetPackage.connect(
  process.env.MAILJET_API_KEY,
  process.env.MAILJET_API_SECRET_KEY
);

const sendFormSubmissionEmail = (formData) => {
  const { name, email, message } = formData;

  const emailData = {
    Messages: [
      {
        From: {
          Email: "alhassansahad24@gmail.com",
          Name: "Winehub",
        },
        To: [
          {
            Email: email,
            Name: name,
          },
        ],
        Subject: "Form Submission Confirmation",
        TextPart: `Hello, ${name}! Your message: "${message}" has been received successfully.`,
        HTMLPart: `<h1>Hello, ${name}!</h1><p>Your message: "${message}" has been received successfully. We will get back to you soon.</p>`,
      },
    ],
  };

  mailjet
    .post("send", { version: "v3.1" })
    .request(emailData)
    .then(() => console.log("Form submission email sent."))
    .catch((error) =>
      console.error("Error sending form submission email:", error)
    );
};
