// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');

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
