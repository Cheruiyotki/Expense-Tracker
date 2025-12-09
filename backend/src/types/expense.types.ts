
// expense types

// new expense interface
export interface newExpense {
    user_id: number;
    category_id: number;
    amount: number;
    expense_date: string;
    description?: string;
}

// update expense interface
export interface uupdateExpense {
    category_id?: number;
    amount?: number;
    expense_date?: string;
    description?: string;
}