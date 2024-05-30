const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // To handle JSON payloads

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the create-account.html page
app.get('/create-account', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'create-account.html'));
});

// Route to serve the log-in.html page
app.get('/log-in', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'log-in.html'));
});

// Route to serve the inquiry.html page
app.get('/inquiry', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'inquiry.html'));
});

// Route to serve the location-verification.html page
app.get('/location-verification', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'location-verification.html'));
});

// Handle form submission for account creation
app.post('/create-account', (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  console.log(`First Name: ${firstname}`);
  console.log(`Last Name: ${lastname}`);
  console.log(`Email: ${email}`);
  console.log(`Password: ${password}`);
  
  // Send a response back to the client
  res.send('Account created successfully!');
});

// Handle form submission for login
app.post('/log-in', (req, res) => {
  const { email, password } = req.body;
  console.log(`Email: ${email}`);
  console.log(`Password: ${password}`);
  
  // Send a response back to the client
  res.send('Login successful!');
});

// Handle location verification
app.post('/verify-location', (req, res) => {
  const { location } = req.body;
  console.log(`Location: ${location}`);
  
  // Mock services based on location
  const services = {
    'Westlands': ['Garbage Collection', 'Tunnel Drainage'],
    'Dagoretti North': ['Water Paths Opening'],
    'Dagoretti South': ['Garbage Collection', 'Water Paths Opening'],
    'Langata': ['Tunnel Drainage', 'Water Paths Opening'],
    'Kibra': ['Garbage Collection'],
    'Roysambu': ['Tunnel Drainage'],
    'Kasarani': ['Water Paths Opening'],
    'Ruaraka': ['Garbage Collection', 'Tunnel Drainage'],
    'Embakasi South': ['Water Paths Opening'],
    'Embakasi North': ['Garbage Collection'],
    'Embakasi Central': ['Tunnel Drainage'],
    'Embakasi East': ['Water Paths Opening'],
    'Embakasi West': ['Garbage Collection'],
    'Makadara': ['Tunnel Drainage'],
    'Kamukunji': ['Water Paths Opening'],
    'Starehe': ['Garbage Collection'],
    'Mathare': ['Tunnel Drainage']
  };

  const offeredServices = services[location] || ['No services available for this location'];

  // Send a response back to the client
  res.json({ services: offeredServices });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
