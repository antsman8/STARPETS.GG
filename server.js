require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const userRoutes = require('./src/routes/userRoutes');
const databaseConfig = require('./config/databaseConfig');

const app = express();

app.use(express.json());

const pool = new Pool(databaseConfig);
pool.connect();

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;
