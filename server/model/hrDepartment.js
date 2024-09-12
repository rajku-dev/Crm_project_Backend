import mongoose from 'mongoose';    

const hrDepartmentSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.ObjectId,
        ref: 'Employee',
        required: true,
    },
    department_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'Department',
        required: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    post: {
        type: String,
        required: true,
    },
});

const HrDepartment = mongoose.model('HrDepartment', hrDepartmentSchema);

export default HrDepartment;
