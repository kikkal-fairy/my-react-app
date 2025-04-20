// backend/server.js
const express = require('express');
const cors = require('cors');

const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const db = require('./db');
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 5050;

app.use(cors());
app.use(bodyParser.json());

app.post('/add-post', (req, res) => {
  const {
    type,
    title,
    summary,
    description,
    date,
    format,
    location,
    duration,
    audience,
    size,
    provider
  } = req.body;

  const sql = `
    INSERT INTO Posts (
      type, title, summary, description, date, format, location, duration, audience, size, provider
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    type,
    title,
    summary,
    description,
    date,
    format,
    location,
    duration,
    JSON.stringify(audience),
    size,
    provider
  ];

  db.run(sql, values, function (err) {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ message: 'Post added successfully', postId: this.lastID });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/posts', (req, res) => {
  db.all('SELECT * FROM Posts', [], (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: err.message });
    } else {
      const parsedRows = rows.map(post => ({
        ...post,
        audience: (() => {
          try {
            return JSON.parse(post.audience);
          } catch {
            return post.audience;
          }
        })()
      }));

      res.json(parsedRows);
    }
  });
});


app.get('/posts/:id', (req, res) => {
  const postId = req.params.id;
  db.get(`SELECT * FROM Posts WHERE id = ?`, [postId], (err, row) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: err.message });
    } else if (!row) {
      res.status(404).json({ error: 'Post not found' });
    } else {
      res.json(row);
    }
  });
});

app.post('/register', [
  body('email').isEmail().withMessage('Please enter a valid email.'),
  body('password')
      .isLength({ min: 8 })
      .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
      .withMessage('Password must be at least 8 characters long and include both letters and numbers.'),
  body('username')
      .isLength({ min: 3 })
      .withMessage('Username must be at least 3 characters long.'),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, email, password } = req.body;

  // Check if user exists
  db.get('SELECT * FROM Users WHERE email = ?', [email], async (err, row) => {
    if (err) {
      console.error('Error checking for user:', err.message);
      return res.status(500).json({ message: 'Server error' });
    }

    if (row) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      db.run(
          'INSERT INTO Users (username, email, password) VALUES (?, ?, ?)',
          [username, email, hashedPassword],
          function (err) {
            if (err) {
              console.error('Error inserting user:', err.message);
              return res.status(500).json({ message: 'Error registering user' });
            }
            res.status(201).json({ message: 'User registered successfully' });
          }
      );
    } catch (err) {
      console.error('Error hashing password:', err.message);
      res.status(500).json({ message: 'Server error during registration' });
    }
  });
});

/*router.post('/login', [
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
*/