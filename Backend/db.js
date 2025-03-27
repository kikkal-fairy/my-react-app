const sqlite3 = require('sqlite3').verbose();

// Create and connect to SQLite database (authDB.db)
const db = new sqlite3.Database('./authDB.db', (err) => {
    if (err) {
        console.error("Error opening database:", err.message);
    } else {
        console.log("Connected to SQLite database.");
    }
});

// Create Users table (if it doesn't exist)
db.run(`CREATE TABLE IF NOT EXISTS Users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
)`, (err) => {
    if (err) {
        console.error("Error creating Users table:", err.message);
    } else {
        console.log("Users table created or exists.");
    }
});

module.exports = db;
