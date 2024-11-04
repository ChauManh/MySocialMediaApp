const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const db = require('./config/connectDb');
const route = require('./routes');
require('dotenv').config();

const app = express();

// Connect to MongoDB
db.connect();

const port = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Đảm bảo Frontend có thể gọi API ở Backend
app.use(express.json());
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public'))); // Static files

app.use(express.urlencoded({ extended: true })); // Xử lý form
app.use(express.json()); // Xử lý JSON

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Gọi route với app
route(app); // Cấu hình các route

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
