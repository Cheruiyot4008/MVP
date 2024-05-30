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

// Handle form submission for account creation
app.post('/create-account', (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  console.log(`First Name: ${firstname}`);
  console.log
