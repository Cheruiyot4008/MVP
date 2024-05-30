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

// Route to serve the services-offered.html page
app.get('/services-offered', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'services-offered.html'));
});

// Route to serve the collection-mechanism.html page
app.get('/collection-mechanism', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'collection-mechanism.html'));
});

// Route to serve the payment.html page
app.get('/payment', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'payment.html'));
});

// Handle form submission for account creation
app.post('/create-account', (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  console.log(`First Name: ${firstname}`);
  console.log(`Last Name: ${lastname}`);
  console.log(`Email: ${email}`);
  console.log(`Password: ${password}`);
  res.redirect('/log-in');
});

// Handle form submission for login
app.post('/log-in', (req, res) => {
  const { email, password } = req.body;
  console.log(`Email: ${email}`);
  console.log(`Password: ${password}`);
  res.redirect('/inquiry');
});

// Handle form submission for location verification
app.post('/location-verification', (req, res) => {
  const { location } = req.body;
  console.log(`Location: ${location}`);
  res.redirect('/services-offered');
});

// Handle form submission for collection mechanism
app.post('/collection-mechanism', (req, res) => {
  const { collectionMethod } = req.body;
  console.log(`Collection Method: ${collectionMethod}`);
  res.redirect('/payment');
});

// Handle form submission for payment method
app.post('/payment', (req, res) => {
  const { paymentMethod } = req.body;
  console.log(`Payment Method: ${paymentMethod}`);
  res.send('Payment method received. Thank you!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
