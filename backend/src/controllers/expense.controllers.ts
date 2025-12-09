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