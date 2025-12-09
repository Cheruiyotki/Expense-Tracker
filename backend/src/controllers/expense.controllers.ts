import e, {Request, Response} from 'express';
import { getPool } from '../db/config';
import { request } from 'http';
import * as expenseService from '../services/expense.service';


export const getExpenses = async (req:Request, res:Response) => {
    try {
      const expense = await expenseService.listExpenses();  
        res.status(200).json(expense);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving expenses', error });
    }
}

export const addExpense = async (req: Request, res: Response) => {
    

    try {
       const newexpenseData = req.body;
       const result = await expenseService.createExpense(newexpenseData);
        res.status(201).json(result);
    } catch (error: any) {
        console.error(error);
        res.status(500).json({  error:  'Internal Server error' });
    }
}

// get expense by id
export const getExpenseById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        const expense = await expenseService.getExpense(id);
        res.status(200).json(expense);
    } catch (error: any) {
        if(error.message === 'Invalid expense ID') {
            return res.status(400).json({ message: 'Invalid expense ID' });
        } 
        else if (error.message === 'Expense not found') {
            return res.status(404).json({ message: 'Expense not found' });
        }
        res.status(500).json({ message: 'Error retrieving expense', error });
    }
}

// delete expense by id
export const deleteExpenseById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        const result = await expenseService.deleteExpense(id);
        res.status(204).json(result);
    } catch (error: any) {
      if(error.message === 'Invalid expense ID') {
            return res.status(400).json({ message: 'Invalid expense ID' });
        } 
        else if (error.message === 'Expense not found') {
            return res.status(404).json({ message: 'Expense not found' });
        }
        res.status(500).json({ message: 'Error deleting expense', error });
    }
}


// update expense
export const updateExpenseById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const expense = req.body;
    try {
        const result = await expenseService.updateExpense(id, expense);
        res.status(200).json(result);
    } catch (error: any) {
        if(error.message === 'Invalid expense ID') {
            return res.status(400).json({ message: 'Invalid expense ID' });
        } 
        else if (error.message === 'Expense not found') {
            return res.status(404).json({ message: 'Expense not found' });
        }
        res.status(500).json({ message: 'Error  updating expense', error });
    }
}