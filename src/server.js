const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const connectDB = require('./config/db');
const projectMiddleware = require('./middleware/project.middleware');

const officersRoutes = require('./routes/officers.routes');
const schemesRoutes = require('./routes/schemes.routes');
const reportRoutes = require('./routes/reports.routes');
const aboutRoutes = require('./routes/about.routes');

const app = express();

/* ✅ 1. CORS FIRST */
app.use(cors({
  origin: true, // ✅ allow any frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'X-Project-Id'
  ],
  credentials: true
}));

/* ❌ REMOVED app.options('*', cors()); */

/* ✅ 2. Body parser */
app.use(express.json());

/* ✅ 3. Project middleware */
app.use(projectMiddleware);

/* ✅ 4. Static uploads */
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

/* ✅ 5. DB connection */
connectDB();

/* ✅ 6. Routes */
app.use('/api', require('./routes/upload.routes'));
app.use('/api/officers', officersRoutes);
app.use('/api/schemes', schemesRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/about', aboutRoutes);
app.use('/api/home-notices', require('./routes/homeNotices.routes'));
app.use('/api/home-announcements', require('./routes/homeAnnouncements.routes'));
app.use('/api/home-intro', require('./routes/homeIntro.routes'));
app.use('/api/home-map', require('./routes/homeMap.routes'));
app.use('/api/gallery', require('./routes/gallery.routes'));

/* ✅ Health check */
app.get('/', (req, res) => {
  res.send('API running');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
