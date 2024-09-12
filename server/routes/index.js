import express from 'express';
const router=express.Router();
import departmentRouter from '../routes/department.js';
import EmployeeRouter from '../routes/employee.js'

router.use('/departments',departmentRouter);
router.use('/',EmployeeRouter)

export default router;
