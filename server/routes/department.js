import express from 'express'
const departmentRouter = express.Router();
import {addDepartment,addAdmin} from '../controller/department.js'
departmentRouter.post('/add',addDepartment);
departmentRouter.post('/add-admin',addAdmin);

export default departmentRouter;
