const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const db = require('./db');  // Assuming you're using SQLite

const router = express.Router();

// Register route with validation
router.post('/register', [
  body('email').isEmail().withMessage('Please enter a valid email.'),
  body('password').isLength({ min: 8 }).matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/).withMessage('Password must be at least 8 characters long and include both letters and numbers.'),
  body('username').isLength({ min: 3 }).withMessage('Username must be at least 3 characters long.'),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, email, password } = req.body;

  db.get('SELECT * FROM Users WHERE email = ?', [email], async (err, row) => {
    if (row) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 10);  // Hash the password
      db.run('INSERT INTO Users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword], function (err) {
        if (err) {
          return res.status(500).json({ message: 'Error registering user' });
        }
        res.status(201).json({ message: 'User registered successfully' });
      });
    } catch (err) {
      res.status(500).json({ message: 'Error hashing password' });
    }
  });
});

// Login route with validation
router.post('/login', [
  body('email').isEmail().withMessage('Please enter a valid email.'),
  body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters.'),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  db.get('SELECT * FROM Users WHERE email = ?', [email], async (err, row) => {
    if (err || !row) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, row.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const accessToken = jwt.sign({ userId: row.id }, 'your-secret-key', { expiresIn: '1h' });
    const refreshToken = jwt.sign({ userId: row.id }, 'your-refresh-secret-key', { expiresIn: '7d' });

    res.json({ accessToken, refreshToken });
  });
});

module.exports = router;
