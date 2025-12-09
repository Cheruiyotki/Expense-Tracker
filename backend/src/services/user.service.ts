
import { listUsers } from '../types/user.types';
import * as userRepository from '../repositories/user.repositories';

export const  listUsers = async () => await userRepository.getUsers();
export const getUser = async (id: number):  => {
    if (isNaN(id)) {
        throw new Error('Invalid user ID');
    }
    return await userRepository.getUserById(id);
}    
