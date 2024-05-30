const Driver = require('../models/Driver');

// Get all drivers
exports.getDrivers = async (req, res) => {
  try {
    const drivers = await Driver.find();
    res.json(drivers);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

// Add a new driver
exports.addDriver = async (req, res) => {
  const { name } = req.body;
  try {
    const newDriver = new Driver({ name });
    const driver = await newDriver.save();
    res.json(driver);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

// Assign a driver to a task
exports.assignDriver = async (req, res) => {
  try {
    const driver = await Driver.findOneAndUpdate(
      { isAvailable: true },
      { isAvailable: false },
      { new: true }
    );

    if (!driver) {
      return res.status(400).json({ message: 'No available drivers' });
    }

    res.json({ message: `Driver ${driver.name} assigned` });
  } catch (error) {
    res.status(500).send('Server error');
  }
};

// Update driver status
exports.updateDriverStatus = async (req, res) => {
  const { id, isAvailable } = req.body;
  try {
    const driver = await Driver.findByIdAndUpdate(
      id,
      { isAvailable },
      { new: true }
    );

    if (!driver) {
      return res.status(400).json({ message: 'Driver not found' });
    }

    res.json(driver);
  } catch (error) {
    res.status(500).send('Server error');
  }
};
