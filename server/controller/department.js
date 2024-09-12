import department from "../model/department.js";
import admin from "../model/admin.js";
import bcrypt from  "bcrypt";
import jwt from "jsonwebtoken";

const addDepartment = async (req, res) => {
  try {
    const { name } = req.body;
    const newDepartment = new department({ name });
    await newDepartment.save();
    res.status(201).send(newDepartment);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const addAdmin = async (req, res) => {
  try {
    const { name, email, password} = req.body;
    const existingAdmin = await admin.findOne({ email: email });
    if (existingAdmin) {
        return res.status(400).json({ status: "failed", message: "Email already exists" });
    } 
      // Validate that all fields contain data
      if (!name || !email || !password) {
        return res.status(400).json({ status: "failed", message: "All fields are required" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
     const newAdmin = new admin({
      name: name,
      email: email,
      password: hashPassword
  });

  const savedAdmin = await newAdmin.save();

  // Optionally, generate JWT token
  const token = jwt.sign({ adminID: savedAdmin._id }, process.env.JWT_SECRET_KEY, { expiresIn: '5d' });
    res.status(201).send(newAdmin);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};



export{addDepartment,addAdmin};

