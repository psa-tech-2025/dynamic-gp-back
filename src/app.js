const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

app.use('/api/upload', require('./routes/upload.routes'));
app.use('/api/gallery', require('./routes/gallery.routes'));

module.exports = app;
