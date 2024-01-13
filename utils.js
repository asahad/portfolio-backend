const mailjetPackage = require('node-mailjet');
const dotenv = require('dotenv');
dotenv.config();


// Configure Mailjet Mail
const mailjetClient = connect(
  process.env.MAILJET_API_KEY,
  process.env.MAILJET_API_SECRET_KEY
)


const sendFormSubmissionEmail = (userEmail, userName) => {
  const emailData = {
    Messages: [
      {
        From: {
          Email: "alhassansahad24@gmail.com",
          Name: "Winehub",
        },
        To: [
          {
            Email: userEmail,
            Name: userName,
          },
        ],
        Subject: "Form Submission Confirmation",
        TextPart: `Hello, ${userName}! Your form has been submitted successfully.`,
        HTMLPart: `<h1>Hello, ${userName}!</h1><p>Your form has been submitted successfully. We will get back to you soon.</p>`,
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

export { sendFormSubmissionEmail };
