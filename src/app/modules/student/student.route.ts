import express from 'express';
import { StudentController } from './student.controller';

const router = express.Router();

router
  .route('/')
  .get(StudentController.getAllStudents)
  .post(StudentController.createStudent);

router.route('/:id').get(StudentController.getSingleStudent);

export const StudentRoutes = router;
