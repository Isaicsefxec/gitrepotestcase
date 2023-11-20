
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
const port = process.env.PORT || 3036;

// Load environment variables from a .env file
dotenv.config();

// Create a MySQL database connection
const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost" ,
  user: process.env.DB_USER  || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "novtestdb",
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error: ' );
    return;
  }
  console.log('Connected to the database as ID ');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post('/signup', (req, res) => {
  const { username, password } = req.body;

  // Insert the user into the database (replace 'users' with your table name)
  const query = 'INSERT INTO user (username, password) VALUES (?, ?)';
  db.query(query, [username, password], (err, result) => {
    if (err) {
      res.status(500).send('Error signing up');

    } else {
      res.status(200).send('Signed up successfully');
    }
  });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if the user exists and the password matches (replace 'users' with your table name)
  const query = 'SELECT * FROM user WHERE username = ? AND password = ?';
  db.query(query, [username, password], (err, results) => {
    if (err) {
      res.status(500).send('Error logging in');
    } else if (results.length === 0) {
      res.status(401).send('User not found');
    } else {
      res.status(200).send('Login successful');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
