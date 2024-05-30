const express = require('express');
const router = express.Router();
const { getFeedback, submitFeedback } = require('../controllers/feedbackController');

// Get all feedback
router.get('/', getFeedback);

// Submit feedback
router.post('/', submitFeedback);

module.exports = router;
