const { sendFormSubmissionEmail } = require("./utils.js"); // Assuming the path is correct

const sendForm = async (req, res) => {
  try {
    // Extract data from request body
    const { name, email, message } = req.body;

    // Ensure all necessary fields are present
    if (!name || !email || !message) {
      return res.status(400).json({
        message: "Missing required fields",
      });
    }

    // Send confirmation email
    await sendFormSubmissionEmail({ name, email, message });

    // Send success response
    res.status(200).json({
      message: "Form submitted successfully",
      data: req.body,
    });
  } catch (error) {
    // Log the error for server-side debugging
    console.error("Error in sendForm:", error);

    // Send error response
    res.status(500).json({
      message: "Error processing form submission",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

const trialEndpoint = async (req, res) => {
  res.status(200).json({
    message: "This is working of course",
  });
};

module.exports = { sendForm, trialEndpoint };
