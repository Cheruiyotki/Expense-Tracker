import express from 'express';
import dotenv from 'dotenv';
import { getPool } from './db/config';

dotenv.config();

const app = express();
app.use(express.json());

// Root route
app.get('/', (_, res) => {
    res.send("Hello, express API is running...");
});

// Fetch users
app.get('/users', (req, res) => {
    getPool()
        .then(pool => pool.query('SELECT * FROM users'))
        .then(result => res.json(result.rows))
        .catch(err => {
            console.error("PostgreSQL error", err);
            res.status(500).send("Server error");
        });
});

// Fetch todos (example)
app.get('/categories', (req, res) => {
    getPool()
        .then(pool => pool.query('SELECT * FROM  categories'))
        .then(result => res.json(result.rows))
        .catch(err => {
            console.error("PostgreSQL error", err);
            res.status(500).send("Server error");
        });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port: http://localhost:${port}`);
});

// Test DB connection
getPool()
    .then(() => console.log("Database connected"))
    .catch(err => console.log("Database connection failed: ", err));
