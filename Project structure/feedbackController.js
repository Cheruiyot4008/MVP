const Feedback = require('../models/Feedback');

// Get all feedback
exports.getFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.json(feedbacks);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

// Submit feedback
exports.submitFeedback = async (req, res) => {
  const { message } = req.body;
  try {
    const newFeedback = new Feedback({ message });
    const feedback = await newFeedback.save();
    res.json(feedback);
  } catch (error) {
    res.status(500).send('Server error');
  }
};
