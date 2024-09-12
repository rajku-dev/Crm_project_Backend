import mongoose from 'mongoose';

const digitalMarketingSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.ObjectId,
        ref: 'Employee',
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

const DigitalMarketing = mongoose.model('DigitalMarketing', digitalMarketingSchema);

export default DigitalMarketing;
