import express from 'express';
import Payroll from '../models/Payroll.js';

const router = express.Router();

router.post('/generate', async (req, res) => {
  try {
    const { employeeId, month, year, basicSalary, allowances, deductions } = req.body;
    const netSalary = basicSalary + allowances - deductions;
    const payroll = new Payroll({
      employee: employeeId,
      month,
      year,
      basicSalary,
      allowances,
      deductions,
      netSalary,
    });
    await payroll.save();
    res.status(201).json({ message: 'Payroll generated successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/employee/:employeeId', async (req, res) => {
  try {
    const payrolls = await Payroll.find({ employee: req.params.employeeId });
    res.json(payrolls);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;

