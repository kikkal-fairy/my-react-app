const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./authDB.db', (err) => {
    if (err) {
        console.error("Error opening database:", err.message);
    } else {
        console.log("Connected to SQLite database.");
    }
});

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

db.run(`
    CREATE TABLE IF NOT EXISTS Users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        email TEXT UNIQUE,
        password TEXT,
        account_type TEXT
    );
`, (err) => {
    if (err) {
        console.error("Error creating Users table:", err.message);
    } else {
        console.log("Users table created or exists.");
    }
});

module.exports = db;
