import { Router } from 'express';
const router = Router();

import {createTask, getTasks} from '../controllers/task.controller';

router.post('/', createTask);
router.get('/', getTasks);

export default router;