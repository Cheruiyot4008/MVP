const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the create-account.html page
app.get('/create-account', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'create-account.html'));
});

// Handle form submission
app.post('/create-account', (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  console.log(`First Name: ${firstname}`);
  console.log(`Last Name: ${lastname}`);
  console.log(`Email: ${email}`);
  console.log(`Password: ${password}`);
  
  // Send a response back to the client
  res.send('Account created successfully!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
