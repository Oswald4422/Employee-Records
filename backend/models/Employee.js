import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  position: { type: String, required: true },
  department: { type: String, required: true },
  dateOfHire: { type: Date, required: true },
  salary: { type: Number, required: true },
  contactInfo: {
    phone: String,
    address: String,
  },
});

export default mongoose.model('Employee', employeeSchema);

