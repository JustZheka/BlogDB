import Router from 'express';
import UserController from "../Controllers/UserController.js";

const router = new Router();

router.post('/user', UserController.create);
router.get('/users/:id', UserController.getOne);
router.get('/users', UserController.getAll);
router.put('/users', UserController.update);
router.delete('/users/:id', UserController.remove);

export default router;