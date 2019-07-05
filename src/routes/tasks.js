import { Router } from 'express';
const router = Router();

import {createTask, getTasks, deleteTask, updateTask, getOneTask, getTaskByProject} from '../controllers/task.controller';

router.post('/', createTask);
router.get('/', getTasks);
router.get('/:id',getOneTask);
router.delete('/:id', deleteTask);
router.put('/:id',updateTask);

//api/tasks/project/:id
router.get('/project/:projectid',getTaskByProject);

export default router;