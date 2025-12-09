

import * as userService from '../services/user.service';

export const getUsers = async () => await userService.listUsers();