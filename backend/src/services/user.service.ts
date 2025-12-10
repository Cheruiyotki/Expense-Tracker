
 
import * as userRepository from '../repositories/user.repositories';
import { NewUser, UpdateUser } from '../types/user.types';

export const listUsers = async () => await userRepository.getUsers();

export const getUser = async (id: number) => {
    if (isNaN(id) || id <= 0) {
        throw new Error('Invalid user ID');
    }
    return await ensureUserExists(id);
}

// get user by id
export const getUserById = async (id: number) => {
    if (isNaN(id) || id <= 0) {
        throw new Error('Invalid user ID');
    }
    return await ensureUserExists(id);
}

// update user
export const updateUser = async (id: number, user: UpdateUser) => {
    if (isNaN(id) || id <= 0) {
        throw new Error('Invalid user ID');
    }
    await ensureUserExists(id);
    return await userRepository.updateUser(id, user);
}

// add new user
export const addUser = async (user:  NewUser) => 
    await userRepository.addUser(user);

// delete user by id
export const deleteUserById = async (id: number) => {
    if (isNaN(id) || id <= 0) {
        throw new Error('Invalid user ID');
    }
    await ensureUserExists(id);
    return await userRepository.deleteUserById(id);
}


// reusable function to check if user exists
const ensureUserExists = async (id: number) => {
    const user = await userRepository.getUserById(id);
    if (!user) {
        throw new Error('User not found');
    }
    return user;
}