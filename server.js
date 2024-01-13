const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const formSubmissionRoute = require("./formSubmissionRoute.js"); // Adjust the path as necessary
const dotenv = require("dotenv");
dotenv.config();
console.log(process.env); // This will log all the loaded environment variables.

const app = express();

app.use(cors()); // to handle cross-origin requests
app.use(bodyParser.json()); // to handle JSON payloads

// Use your form submission router
app.use("/api", formSubmissionRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

