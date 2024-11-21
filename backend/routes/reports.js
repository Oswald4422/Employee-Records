import express from 'express';
import Employee from '../models/Employee.js';

const router = express.Router();

router.get('/employee-details', async (req, res) => {
  try {
    const employees = await Employee.find().select('-__v');
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;

