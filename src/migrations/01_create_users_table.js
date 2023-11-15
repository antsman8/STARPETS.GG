const { Pool } = require('pg');
const databaseConfig = require('../../config/databaseConfig');

const pool = new Pool(databaseConfig);

const createUserTable = async () => {
    const createTableText = `CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        balance INTEGER NOT NULL
    )`;
    const insertUserText =
        'INSERT INTO users (balance) VALUES (10000) RETURNING id';
    try {
        await pool.query(createTableText);
        console.log('Table created successfully');
        const res = await pool.query(insertUserText);
        console.log(`User created with ID: ${res.rows[0].id}`);
        pool.end();
    } catch (error) {
        console.error('migration failed', error);
        pool.end();
    }
};

createUserTable();
