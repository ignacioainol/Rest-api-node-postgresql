import { Router } from 'express';
const router = Router();

import { createProject, getProjects, getOneProject } from '../controllers/project.controller';

// /api/projects/
router.post('/', createProject);
router.get('/', getProjects);
router.get('/:id', getOneProject);

export default router;