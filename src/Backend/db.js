const sqlite3 = require('sqlite3').verbose();

// Create and connect to SQLite database (authDB.db)
const db = new sqlite3.Database('./authDB.db', (err) => {
    if (err) {
        console.error("Error opening database:", err.message);
    } else {
        console.log("Connected to SQLite database.");
    }
});

// Create Posts table if it does not exist
db.run(`
    CREATE TABLE IF NOT EXISTS Posts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        type TEXT,
        title TEXT NOT NULL,
        summary TEXT,
        description TEXT,
        date DATE NOT NULL,
        format TEXT,
        location TEXT NOT NULL UNIQUE,
        duration TEXT,
        audience TEXT,
        size INTEGER,
        provider TEXT
    );
`, (err) => {
    if (err) {
        console.error("Error creating Posts table:", err.message);
    } else {
        console.log("Posts table created or exists.");
    }
});

module.exports = db;
