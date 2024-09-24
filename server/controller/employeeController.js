import mongoose from "mongoose";
import sendMail from "../mail/employeeMail.js";
import Employee from "../model/employee.js";
import bcrypt from "bcrypt";

//Adding New Employee
export const addEmployee = async (req, res) => {
  try {
    const {
      full_name,
      email,
      gender,
      phone,
      post,
      departmentId,
      address,
      city,
      state,
      country,
      college,
      qualification,
      qualificationYear,
      dob,
      doj,
    } = req.body;

    if (
      !full_name ||
      !email ||
      !gender ||
      !phone ||
      !post ||
      !address ||
      !city ||
      !state ||
      !country ||
      !college ||
      !qualification ||
      !qualificationYear ||
      !dob ||
      !doj ||
      !req.file
    ) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields!" });
    }

    const image = `/uploads/${req.file.filename}`;

    //checking employee is exist or not
    const exisitingEmployee = await Employee.findOne({ email });
    if (exisitingEmployee) {
      return res.status(409).json({ message: "Employee is already exist!" });
    }

    //checking phone is exactly 10
    if (phone.toString().length != 10) {
      return res
        .status(400)
        .json({ message: "Exactly 10 digits required for phone number!" });
    }

    //Generate password in this format username@dob
    const password = full_name.toLowerCase() + "@" + dob.replace(/-/g, "");

    //Hash password
    const hashPassword = await bcrypt.hash(password, 10);
    const newEmployee = new Employee({
      full_name,
      email,
      gender,
      phone,
      password: hashPassword,
      departments: departmentId,
      post,
      address,
      city,
      state,
      country,
      college,
      image,
      qualification,
      qualificationYear,
      dob,
      doj,
    });

    //Save New Employee
    await newEmployee.save();

    //Sending username and password through email
    sendMail(full_name, email, password);
    return res
      .status(200)
      .json({ message: "New Employee registered successfully!" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error!", error });
  }
};

//Login Employee
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields!" });
    }

    //employee is exist or not
    const exisitingEmployee = await Employee.findOne({ email });

    if (!exisitingEmployee) {
      return res.status(404).json({ message: "Employee not found!" });
    }

    //checking password is right or wrong
    const isMatch = await bcrypt.compare(password, exisitingEmployee.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials!" });
    }
    return res.status(200).json({ message: "Login successfully!" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error!" });
  }
};

//Get perticular employee details
export const getEmployee = async (req, res) => {
  try {
    const { id } = req.headers;
    if (!id) {
      return res.status(400).json({ message: "Please provide employee id!" });
    }

    //check employee is exist or not
    const emp = await Employee.findById(id);
    if (!emp) {
      return res.status(404).json({ message: "Employee not found!" });
    }

    //return employee detail
    return res
      .status(200)
      .json({ message: "Getting Employee Details succussfully!", emp });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error!" });
  }
};

//Getting all employee details
export const getAllEmployee = async (req, res) => {
  try {
    //get all employee details in order
    const allEmployee = await Employee.find().sort({ createdAt: -1 });

    //return all employee details
    return res.status(200).json({
      message: "Getting All Employee Details successfully!",
      allEmployee,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error!" });
  }
};

//Removed perticular employee
export const removeEmployee = async (req, res) => {
  try {
    const { id } = req.headers;
    if (!id) {
      return res.status(400).json({ message: "Please provide employee id!" });
    }
    const emp = await Employee.findByIdAndDelete(id);
    if (!emp) {
      return res.status(404).json({ message: "Employee not found!" });
    }
    return res.status(200).json({ message: "Employee removed successfully!" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error!" });
  }
};

//Updaing Password field
export const updatePassword = async (req, res) => {
  try {
    const { email, oldPassword, newPassword } = req.body;

    if (!oldPassword || !newPassword || !email) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields!" });
    }

    //Password must be greater than 6
    if (newPassword.length <= 6) {
      return res
        .status(400)
        .json({ message: "Password must be greater than 6!" });
    }

    //Checking employee is exist or not
    const emp = await Employee.findOne({ email });
    if (!emp) {
      return res.status(404).json({ message: "Employee not found!" });
    }

    //checking oldPassword is same as employee password
    const isMatch = await bcrypt.compare(oldPassword, emp.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials!" });
    }

    //Hash new password
    const hashPassword = await bcrypt.hash(newPassword, 10);

    //Update password field
    await emp.updateOne({
      $set: { password: hashPassword },
    });

    return res.status(200).json({ message: "Password updated successfully!" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error!" });
  }
};

//Adding into new department
export const addIntoDepartment = async (req, res) => {
  try {
    const { departmentId } = req.body;
    const { id } = req.headers;

    const emp = await Employee.findById(id);
    if (!emp) {
      return res.status(404).json({ message: "Employee not found!" });
    }

    if (!departmentId) {
      return res
        .status(400)
        .json({ message: "Please provide deparmentId field!" });
    }

    //push new departmentid in emp model
    await emp.updateOne({
      $push: { departments: departmentId },
    });
    return res
      .status(200)
      .json({ message: "Employee added in new deparment successfully!" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error!" });
  }
};

//remove from department
export const removedFromDepartment = async (req, res) => {
  try {
    const { departmentId } = req.body;
    const { id } = req.headers;

    const emp = await Employee.findById(id);
    if (!emp) {
      return res.status(404).json({ message: "Employee not found!" });
    }

    if (!departmentId) {
      return res
        .status(400)
        .json({ message: "Please provide deparmentId field!" });
    }

    //pull departmentId from department model
    await emp.updateOne({
      $pull: { departments: departmentId },
    });
    return res
      .status(200)
      .json({ message: "Employee removed from this deparment successfully!" });
  } catch (error) {
    return res.status(200).json({ message: "Internal server error!" });
  }
};
