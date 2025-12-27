const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/db');

const officersRoutes = require('./routes/officers.routes');
const schemesRoutes = require('./routes/schemes.routes'); // ✅ ADD THIS
const reportRoutes = require('./routes/reports.routes');
const aboutRoutes = require('./routes/about.routes');

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// db
connectDB();

// routes
app.use('/api/officers', officersRoutes);
app.use('/api/schemes', schemesRoutes); // ✅ ADD THIS
app.use('/api/reports', reportRoutes);
app.use('/api/about', aboutRoutes);


// test route
app.get('/', (req, res) => {
  res.send('API running');
});

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on ${PORT}`)
);
