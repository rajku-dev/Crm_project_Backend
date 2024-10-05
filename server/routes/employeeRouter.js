import express from "express";
import {
  addIntoDepartment,
  addEmployee,
  getAllEmployee,
  getEmployee,
  login,
  removeEmployee,
  updatePassword,
  removedFromDepartment,
} from "../controller/employeeController.js";
import upload from "../multer/multer.js";
import { authenticationToken } from "../auth/auth.js";
const router = express.Router();

router
  .route("/add-employee")
  .post(authenticationToken, upload.single("image"), addEmployee);
router.route("/login").post(login);
router.route("/get-employee-details").get(authenticationToken, getEmployee);
router
  .route("/get-all-employee-details")
  .get(authenticationToken, getAllEmployee);
router.route("/remove-employee").delete(authenticationToken, removeEmployee);
router.route("/update-password").put(authenticationToken, updatePassword);
router.route("/add-deparment").put(authenticationToken, addIntoDepartment);
router
  .route("/remove-from-deparment")
  .put(authenticationToken, removedFromDepartment);

export default router;
