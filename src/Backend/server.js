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
  body('email')
      .isEmail()
      .withMessage('Please enter a valid email.'),
  body('password')
      .isLength({ min: 8 })
      .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
      .withMessage('Password must be at least 8 characters long and include both letters and numbers.'),
  body('username')
      .isLength({ min: 3 })
      .withMessage('Username must be at least 3 characters long.'),
  body('account_type')
      .isIn(['student', 'educator', 'parent', 'provider'])
      .withMessage('Invalid account type.'),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, email, password, account_type } = req.body;

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
          'INSERT INTO Users (username, email, password, account_type) VALUES (?, ?, ?, ?)',
          [username, email, hashedPassword, account_type],
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



app.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.get('SELECT * FROM Users WHERE email = ?', [email], async (err, user) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }

    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const secretKey = process.env.JWT_SECRET || 'dev_secret_key';
    const accessToken = jwt.sign(
        { id: user.id, email: user.email, account_type: user.account_type },
        secretKey,
        { expiresIn: '1h' }
    );

    res.status(200).json({ accessToken });
  });
});