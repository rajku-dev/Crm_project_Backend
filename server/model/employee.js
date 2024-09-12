import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  full_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  post: { type: String, required: true },
  departments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'department' }],
  password: { type: String, required: true },
  isAdmin:{type:Boolean,default:'false'}
});

const employee = mongoose.model('employee', employeeSchema);

export default employee;