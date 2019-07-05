import { Router } from 'express';
const router = Router();

import {createTask, getTasks, deleteTask, updateTask} from '../controllers/task.controller';

router.post('/', createTask);
router.get('/', getTasks);
router.delete('/:id', deleteTask);
router.put('/:id',updateTask);

export default router;