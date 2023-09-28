import express from 'express';
import { 
  createUser,
  getUser,
  getUsers
} from '../controllers/users';

const router = express.Router();

router.get('/users', getUsers);
router.post('/signup', createUser);
router.get('/user/:id', getUser);

export { router as UserRouter };