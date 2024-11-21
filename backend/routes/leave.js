import express from 'express';
import Leave from '../models/Leave.js';

const router = express.Router();

router.post('/request', async (req, res) => {
  try {
    const { employeeId, startDate, endDate, reason } = req.body;
    const leave = new Leave({ employee: employeeId, startDate, endDate, reason });
    await leave.save();
    res.status(201).json({ message: 'Leave request submitted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/employee/:employeeId', async (req, res) => {
  try {
    const leaves = await Leave.find({ employee: req.params.employeeId });
    res.json(leaves);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;

