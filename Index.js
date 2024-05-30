const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Serve HTML pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/create_account', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'create_account.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Routes for account creation and login
app.post('/api/create_account', (req, res) => {
    const { username, password } = req.body;
    // Placeholder for creating an account
    // Here you would normally add the user to your database
    res.json({ message: 'Account created successfully', username });
});

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    // Placeholder for user login
    // Here you would normally validate the user's credentials
    if (username === 'testuser' && password === 'password') {
        res.json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
