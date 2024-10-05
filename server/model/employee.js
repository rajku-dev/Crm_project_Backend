import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    full_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    post: {
      type: String,
      required: true,
      enum: ["CEO", "COO", "Sr. HOD", "HOD", "INTERNS"],
    },
    departments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "department",
      },
    ],
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    college: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    qualificationYear: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    doj: {
      type: Date,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: "false",
    },
  },
  {
    timestamps: true,
  }
);

const Employee = mongoose.model("employee", employeeSchema);

export default Employee;
