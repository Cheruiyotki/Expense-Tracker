
import { Express} from 'express';
import * as userController from '../controllers/user.controller';

const userRouter = (app: Express) => {
    app.get('/users', userController.getAllUsers);
    app.put('/users/:id', userController.updateUser);
    app.post('/addusers', userController.addUser);
    app.get('/users/:id', userController.getUserById);
    app.delete('/users/:id', userController.deleteUserById);
}

export default userRouter;