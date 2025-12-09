

import { getPool } from "../db/config";

// get all users
export const getUsers = async () => {
    const pool = await getPool();
    const result = await pool.query('SELECT * FROM users');
    return result.rows;
}

// get user by id
export const getUserById = async (id: number) => {
    const pool = await getPool();
    const result = await pool.query('SELECT * FROM users WHERE user_id = $1', [id]);
    return result.rows[0];
}

// add new user
// export const addUser = async (name: string, email: string, password: string) => {
//     const pool = await getPool();
//     await pool.query(
//         `INSERT INTO users (name, email, password)
//          VALUES ($1, $2, $3)` 


// deleting user by id
export const deleteUserById = async (id: number) => {
    const pool = await getPool();
    await pool.query('DELETE FROM users WHERE user_id = $1', [id]);
    return { message: 'User deleted successfully' };
}