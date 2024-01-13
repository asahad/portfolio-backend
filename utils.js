const dotenv = require("dotenv");
const mailjetPackage = require("node-mailjet");
dotenv.config();

// Configure Mailjet Mail
const mailjetClient = mailjetPackage.connect(
  process.env.MAILJET_API_KEY,
  process.env.MAILJET_API_SECRET_KEY
);

const sendFormSubmissionEmail = (formData) => {
  const { email, message, name } = formData;
  const emailData = {
    Messages: [
      {
        From: {
          Email: "alhassansahad24@gmail.com",
          Name: "Alhassan Sahad",
        },
        To: [
          {
            Email:email,
            Name: name,
          },
        ],
        Subject: "Form Submission to Alhassan Sahad Confirmation",
        // TextPart: `Hello, ${name}! Your message: "${message}" has been received successfully by Alhassan Sahad.`,
        HTMLPart: `<h1>Hello, ${name}!</h1><p>Your message: "${message}" has been received successfully by Alhassan Sahad. He will get back to you as soon as possible!. 
        Than you`
      },
    ],
  };

  mailjetClient
    .post("send", { version: "v3.1" })
    .request(emailData)
    .then(() => console.log("Form submission email sent."))
    .catch((error) =>
      console.error("Error sending form submission email:", error)
    );
};

module.exports = { sendFormSubmissionEmail };
