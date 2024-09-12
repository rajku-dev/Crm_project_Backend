import asyncHandler from 'express-async-handler';
import { addEmployees, signIn } from '../service/employeeService.js';
import SuccessHandler from "../SuccessResponse.js";





const addEmployee = asyncHandler(async (req, res) => {
    const employeeData = req.body;
    try {
        const savedEmployee = await addEmployees(employeeData);
        SuccessHandler.sendSuccessResponse(res, "Employee registered successfully", {
            employeeData: {
              full_name: savedEmployee.full_name,
              email: savedEmployee.email,
              post: savedEmployee.post,
              departments: savedEmployee.departments,
              _id: savedEmployee._id,
              isAdmin: savedEmployee.isAdmin
            }
          });
          
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


const signInEmployee= asyncHandler(async(req, res) => {
    try {
        const employeeData = req.body;
        const Employee = await signIn(employeeData);
        SuccessHandler.sendSuccessResponse(res, "Login successfully", {
            Employee,
          });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

export { addEmployee, signInEmployee };
