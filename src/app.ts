import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student.route';

const app: Application = express();
//BODY PARSER
app.use(express.json());
app.use(cors());

// ROUTES
app.use('/api/v1/student', StudentRoutes);

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Hello World!',
  });
});

export default app;
