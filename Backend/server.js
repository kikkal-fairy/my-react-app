// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const db = require('./db');  // Import SQLite DB connection

// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Register Route
// app.post('/api/auth/register', (req, res) => {
//     const { username, password } = req.body;

//     bcrypt.hash(password, 10, (err, hashedPassword) => {
//         if (err) {
//             return res.status(500).json({ message: 'Error hashing password' });
//         }

//         // Insert user into the database
//         db.run(`INSERT INTO Users (username, password) VALUES (?, ?)`, [username, hashedPassword], function (err) {
//             if (err) {
//                 return res.status(400).json({ message: 'Error registering user' });
//             }
//             res.status(201).json({ message: 'User registered successfully' });
//         });
//     });
// });

// // Login Route
// app.post('/api/auth/login', (req, res) => {
//     const { username, password } = req.body;

//     // Check if the user exists in the database
//     db.get(`SELECT * FROM Users WHERE username = ?`, [username], (err, row) => {
//         if (err || !row) {
//             return res.status(400).json({ message: 'User not found' });
//         }

//         // Compare passwords
//         bcrypt.compare(password, row.password, (err, isMatch) => {
//             if (err || !isMatch) {
//                 return res.status(400).json({ message: 'Invalid credentials' });
//             }

//             // Create JWT token
//             const token = jwt.sign({ userId: row.id }, 'your-secret-key', { expiresIn: '1h' });

//             res.json({ token });
//         });
//     });
// });

// // Protected Route (Example)
// app.get('/api/protected', (req, res) => {
//     const token = req.header('Authorization')?.replace('Bearer ', '');

//     if (!token) {
//         return res.status(401).json({ message: 'No token provided' });
//     }

//     jwt.verify(token, 'your-secret-key', (err, decoded) => {
//         if (err) {
//             return res.status(401).json({ message: 'Invalid token' });
//         }

//         res.json({ message: 'Protected route accessed', userId: decoded.userId });
//     });
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

// Initialize Express app
const app = express();
app.use(express.json());
app.use(cors());

// Initialize SQLite database
const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error('Error connecting to database:', err.message);
  } else {
    console.log('Connected to SQLite database');
  }
});

// Create Users table if it doesn't exist
db.run('CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, email TEXT, password TEXT)', (err) => {
  if (err) {
    console.error('Error creating Users table:', err.message);
  } else {
    console.log('Users table created or already exists');
  }
});

// Helper function to generate JWT token
const generateAccessToken = (userId) => {
  return jwt.sign({ userId }, 'your_jwt_secret', { expiresIn: '1h' });
};

// Register route
app.post('/api/auth/register', [
  body('email').isEmail().withMessage('Please enter a valid email.'),
  body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long.'),
  body('username').isLength({ min: 3 }).withMessage('Username must be at least 3 characters long.')
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log('Validation errors:', errors.array()); // Log errors for debugging
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, email, password } = req.body;

  // Check if the user already exists
  db.get('SELECT * FROM Users WHERE email = ?', [email], async (err, row) => {
    if (row) {
      console.log('Email already in use');
      return res.status(400).json({ message: 'Email already in use' });
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      db.run('INSERT INTO Users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword], function (err) {
        if (err) {
          console.error('Error inserting user:', err.message); // Log the error
          return res.status(500).json({ message: 'Error registering user', error: err.message });
        }
        console.log('User registered successfully');
        res.status(201).json({ message: 'User registered successfully' });
      });
    } catch (err) {
      console.error('Error hashing password:', err.message); // Log hashing error
      res.status(500).json({ message: 'Error hashing password', error: err.message });
    }
  });
});

// Login route
app.post('/api/auth/login', [
  body('email').isEmail().withMessage('Please enter a valid email.'),
  body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long.')
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log('Validation errors:', errors.array()); // Log errors for debugging
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  // Check if user exists
  db.get('SELECT * FROM Users WHERE email = ?', [email], async (err, row) => {
    if (!row) {
      console.log('Invalid credentials (user not found)');
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check if password matches
    const isMatch = await bcrypt.compare(password, row.password);
    if (!isMatch) {
      console.log('Invalid credentials (password mismatch)');
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const accessToken = generateAccessToken(row.id);
    console.log('Login successful, JWT token generated');
    res.json({ accessToken });
  });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
