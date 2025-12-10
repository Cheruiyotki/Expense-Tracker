import express from 'express';
import dotenv from 'dotenv';
import { getPool } from './db/config';
import expenseRoutes from './router/expense.router';
import userRouter from './router/user.router';

dotenv.config();

const app = express();
app.use(express.json());

//middleware
app.use(express.json());

// Root route
app.get('/', (_, res) => {
    res.send("Hello, express API is running...");
});

// Expense routes
expenseRoutes(app);

userRouter(app);
 

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is running on port: http://localhost:${port}`);
});

// Test DB connection
getPool()
    .then(() => console.log("Database connected"))
    .catch(err => console.log("Database connection failed: ", err));
