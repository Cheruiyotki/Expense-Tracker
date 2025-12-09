
import { Express } from "express";
import * as expenseController from '../controllers/expense.controllers';

const expenseRoutes = (app: Express) => {
    app.get('/expense', expenseController.getExpenses);
    app.post('/addexpense', expenseController.addExpense);
}

export default expenseRoutes;