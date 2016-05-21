import { Router } from 'express';
import * as UserController from '../controllers/user.controller';
const router = new Router();


// // Get all Users
// router.route('/getUsers').get(UserController.getUsers);

// // Get one User by title
// router.route('/getUser').get(UserController.getUser);

// // Add a new User
// router.route('/addUser').User(UserController.addUser);

// // Delete a User
// router.route('/deleteUser').User(UserController.deleteUser);

export default router;
