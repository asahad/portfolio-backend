import express from "express";
const router = express.Router();
import { sendForm, trialEndpoint} from "./formSubmissioncontroller.js";
router.route("/form-submission").post(sendForm);
router.route("/trial").get(trialEndpoint)
export default router;
