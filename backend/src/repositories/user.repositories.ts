

import { getPool } from "../db/config";
import { NewUser, UpdateUser, User } from "../types/user.types";

// get all users
export const getUsers = async () => {
    const pool = await getPool();
    const result = await pool.query('SELECT * FROM users');
    return result.rows;
}

// get user by id
export const getUserById = async (id: number): Promise<User[]> => {
    const pool = await getPool();
    const result = await pool.query('SELECT * FROM users WHERE user_id = $1', [id]);
    return result.rows;
}

// update user
export const updateUser = async (id: number, user: UpdateUser) =>{
    const pool = await getPool();
    const {  username, email, password_hash } = user;
    await pool.query(
        `UPDATE users SET  username = $1, email = $2, password_hash = $3 WHERE user_id = $4`,
        [username, email, password_hash, id]
    );
    return { message: 'User updated successfully' };
}

// add new user
export const addUser = async (user:  NewUser) => {
    const pool = await getPool();
    const { username, email, password_hash } = user;
    await pool.query(
        `INSERT INTO users (username, email, password_hash)
         VALUES ($1, $2, $3)`,
        [username, email, password_hash]
    );
    return { message: 'User added successfully' };
}

       


// deleting user by id
export const deleteUserById = async (id: number) => {
    const pool = await getPool();
    await pool.query('DELETE FROM users WHERE user_id = $1', [id]);
    return { message: 'User deleted successfully' };
}