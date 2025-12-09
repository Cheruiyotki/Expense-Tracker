

import * as expsenseService from "../repositories/expense.repositories";

export const listExpenses = async () => await expsenseService.getExpenses();
export const createExpense = async (newexpense:any) => await expsenseService.addExpense(newexpense);