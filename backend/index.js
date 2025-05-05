const express = require('express');
const bcrypt = require('bcryptjs');
const { Pool } = require('pg');
require('dotenv').config();
const cors = require('cors');

const app = express();
const port = 5050;

app.use(express.json());    // read JSON body from requests

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

// Database connection
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

app.get('/', (req, res) => {
  res.send('API is running...');
});


// Register user route
app.post('/api/auth/register', async (req, res) => {
  const { username, email, password } = req.body;

  // Basic validation
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    // Check if the email or username already exists
    const emailCheck = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (emailCheck.rows.length > 0) {
      return res.status(400).json({ message: 'Email is already in use.' });
    }

    const usernameCheck = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    if (usernameCheck.rows.length > 0) {
      return res.status(400).json({ message: 'Username is already taken.' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user into the database
    const result = await pool.query(
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
      [username, email, hashedPassword]
    );

    const newUser = result.rows[0];
    sendToken(res, newUser);

    // Return success response
    res.status(201).json({
      message: 'User registered successfully!',
      user: { id: newUser.id, username: newUser.username, email: newUser.email }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  const { username_email, password } = req.body;

  try {
    // Check if the user exists by email OR username
    const userResult = await pool.query(
      'SELECT * FROM users WHERE email = $1 OR username = $1',
      [username_email]
    );

    if (userResult.rows.length === 0) {
      return res.status(400).json({ message: 'Invalid email/username or password.' });
    }

    const user = userResult.rows[0]; // Get user

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email/username or password.' });
    }

    sendToken(res, user);
    res.status(200).json({
      message: 'Login successful!',
      user: {
        id: user.id,
        username: user.username,
        email: user.email
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const sendToken = (res, user) => {
  const token = jwt.sign(
    { id: user.id, username: user.username, email: user.email },
    JWT_SECRET,
    { expiresIn: '7d' }
  );

  res.cookie('token', token, {
    httpOnly: true,
    secure: false,
    sameSite: 'Lax',
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });
};