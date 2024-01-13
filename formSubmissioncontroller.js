const { sendFormSubmissionEmail } = require('./utils.js'); // Update the path as necessary

const sendForm = async (req, res) => {
  const { name, email } = req.body;
  try {
    // Send confirmation email
    sendFormSubmissionEmail(email, name);

    res.status(200).json({
      message: "Form submitted Successfully",
      data: req.body
    });
  } catch (error) {
    res.status(500).json({
      message: "Error processing form submission",
    });
  }
};

// Trial Endpoint
const trialEndpoint = async (req, res) => {
  res.status(200).json({
    message: "This is working of course",
  });
};

module.exports = { sendForm, trialEndpoint };
