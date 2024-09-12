import express from 'express'
const EmployeeRouter = express.Router();
import {addEmployee,signInEmployee} from '../controller/employeeController.js'
import validateAdminToken from '../middelware/adminAuthentication.js';
EmployeeRouter.post('/add-employee',validateAdminToken,addEmployee);
EmployeeRouter.post('/signin',signInEmployee)
export default EmployeeRouter;
