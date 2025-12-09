
import { Express } from "express";
import * as expenseController from '../controllers/expense.controllers';

const expenseRoutes = (app: Express) => {
    app.get('/expense', expenseController.getExpenses);
    app.post('/addexpense', expenseController.addExpense);
    app.get('/expense/:id', expenseController.getExpenseById);

    app.put('/expense/:id', expenseController.updateExpenseById);

    app.delete('/expense/:id', expenseController.deleteExpenseById);
}

export default expenseRoutes;