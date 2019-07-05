import express, {json} from 'express';
import morgan from 'morgan';

//itialization
const app = express();

//Importing routes
import projectRoutes from './routes/projects';
import taskRoutes from './routes/tasks';

//Middlewares
app.use(morgan('dev'));
app.use(json());

//routes
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);

export default app;