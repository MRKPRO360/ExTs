import { Request, Response } from 'express';
import { StudentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;

    const result = await StudentServices.createStudentInDB(studentData);

    res.status(201).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (err) {
    console.error(err);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();

    res.status(201).json({
      success: true,
      message: 'Students retrieved successfully',
      data: result,
    });
  } catch (err) {
    console.error(err);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(id);

    res.status(200).json({
      success: true,
      message: 'Student retrieved successfully',
      data: result,
    });
  } catch (err) {
    console.error(err);
  }
};

export const StudentController = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
