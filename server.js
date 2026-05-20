require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const creatorRoutes = require('./routes/creatorRoutes');

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/creators', creatorRoutes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/qr-snap')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB error:', err));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
