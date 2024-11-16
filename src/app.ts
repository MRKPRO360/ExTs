import express, { Application, Request, Response } from 'express';
import cors from 'cors';

const app: Application = express();
//BODY PARSER
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Hello World!',
  });
});

export default app;
