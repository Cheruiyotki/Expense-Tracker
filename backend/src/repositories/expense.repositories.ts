
import {  newExpense, uupdateExpense } from "../types/expense.types";
import { getPool } from "../db/config";
import { Request, Response } from "express";

//get all expenses
export const getExpenses = async () => {
      const pool = await getPool(); 
        const result = await pool.query('SELECT * FROM expenses');
        return result.rows;
        
}

//add a new expense
export const addExpense = async (newexpense: newExpense ) =>{
    const { user_id, category_id, amount, expense_date, description } = newexpense;
     const pool = await getPool();
        await pool.query(
            `INSERT INTO expenses (user_id, category_id, amount, expense_date, description)
             VALUES ($1, $2, $3, $4, $5)`,
            [user_id, category_id, amount, expense_date, description]
      
        );
          return {message: 'Expense added successfully'  }
}

// get expsense by id

export const getExpenseById = async (id:number) => {
    const pool = await getPool();
    const result = await pool.query('SELECT * FROM expenses WHERE expense_id = $1', [id]);
    return result.rows[0];
}

// detele expensse by id

export const deleteExpenseById = async (id:number) => {
    const pool = await getPool();
    await pool.query('DELETE FROM expenses WHERE expense_id = $1', [id]);
    return { message: 'Expense deleted successfully' };
}

//update expense 

export const updateExpense = async (req: Request, res: Response) => {
    const { category_id, amount, expense_date, description } = (req.body as  uupdateExpense) || {};
    const { id } = req.params;
    const pool = await getPool();
    await pool.query('UPDATE expenses SET category_id = $1, amount = $2, expense_date = $3, description = $4 WHERE expense_id = $5',
    [category_id, amount, expense_date, description, id]);
    return { message: 'Expense updated successfully' };
}

const ExpenseRepository = {
    getExpenses,
    addExpense,
    getExpenseById,
    deleteExpenseById,
    updateExpense,
};

export default ExpenseRepository;