import express from 'express';
import Notification from '../models/Notification.js';

const router = express.Router();

router.post('/create', async (req, res) => {
  try {
    const { userId, message } = req.body;
    const notification = new Notification({ user: userId, message });
    await notification.save();
    res.status(201).json({ message: 'Notification created successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/user/:userId', async (req, res) => {
  try {
    const notifications = await Notification.find({ user: req.params.userId, read: false });
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/read/:notificationId', async (req, res) => {
  try {
    await Notification.findByIdAndUpdate(req.params.notificationId, { read: true });
    res.json({ message: 'Notification marked as read' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;

