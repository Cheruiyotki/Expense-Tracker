

import { getPool } from "../db/config";

//get all expenses
export const getExpenses = async () => {
      const pool = await getPool(); 
        const result = await pool.query('SELECT * FROM expenses');
        return result.rows;
        
}

//add a new expense
export const addExpense = async (newexpense:any) =>{
    const { user_id, category_id, amount, expense_date, description } = newexpense;
     const pool = await getPool();
        await pool.query(
            `INSERT INTO expenses (user_id, category_id, amount, expense_date, description)
             VALUES ($1, $2, $3, $4, $5)`,
            [user_id, category_id, amount, expense_date, description]
      
        );
          return {message: 'Expense added successfully'  }
}