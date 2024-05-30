const express = require('express');
const router = express.Router();
const {
  getDrivers,
  addDriver,
  assignDriver,
  updateDriverStatus,
} = require('../controllers/driverController');

// Get all drivers
router.get('/', getDrivers);

// Add a new driver
router.post('/', addDriver);

// Assign a driver to a task
router.post('/assign', assignDriver);

// Update driver status
router.put('/status', updateDriverStatus);

module.exports = router;
