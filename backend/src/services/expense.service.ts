import { getPool } from "../db/config";

import * as expenseService from "../repositories/expense.repositories";
import { newExpense, uupdateExpense } from "../types/expense.types";

export const listExpenses = async () => await expenseService.getExpenses();
export const createExpense = async (newexpense: newExpense) => {
     
    if (newexpense.amount <= 0) {
        throw new Error('Expense amount must be a positive number.'); // Must match the string in the test
    }
    
    
    return expenseService.addExpense(newexpense);
};


export const getExpense = async (id:number) => {
     if (isNaN(id)) {
        throw new Error('Invalid expense ID');
    }
    const existingExpense = await expenseService.getExpenseById(id);
    if (!existingExpense) {
        throw new Error('Expense not found');
    }
    return existingExpense;
}

export const deleteExpense = async (id:number) =>  {
    if (isNaN(id)) {
        throw new Error('Invalid expense ID');
    }
    
    const existingExpense = await expenseService.getExpenseById(id);
     if (!existingExpense) {
        throw new Error('Expense not found');
    }
    return await expenseService.deleteExpenseById(id);
}    

 

export const updateExpense = async (id: number, updateData:  uupdateExpense) => {
    if (isNaN(id)) {
        throw new Error('Invalid expense ID');
    }

    const pool = await getPool();

    
    const existing = await pool.query(
        "SELECT * FROM expenses WHERE expense_id = $1",
        [id]
    );

    if (existing.rows.length === 0) {
        throw new Error("Expense not found");
    }

     
    const { amount, category_id, expense_date, description } = updateData;

    const updated = await pool.query(
        `UPDATE expenses 
         SET 
            amount = COALESCE($1, amount),
            category_id = COALESCE($2, category_id),
            expense_date = COALESCE($3, expense_date),
            description = COALESCE($4, description)
         WHERE expense_id = $5
         RETURNING *`,
        [
            amount,          
            category_id,     
            expense_date,     
            description,     
            id               
        ]
    );

    return updated.rows[0];
};

const ExpenseService = {
    listExpenses,
    createExpense,
    getExpense,
    deleteExpense,
    updateExpense,
};

 
export default ExpenseService;