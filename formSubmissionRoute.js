const express = require('express')
const router = express.Router();

const { sendForm, trialEndpoint } = require('./formSubmissioncontroller.js');

router.route('/form-submission').post(sendForm);
router.route('/trial').get(trialEndpoint);

module.exports = router;
