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
const router = express.Router();

router.route("/add-employee").post(upload.single("image"), addEmployee);
router.route("/login").post(login);
router.route("/get-employee-details").get(getEmployee);
router.route("/get-all-employee-details").get(getAllEmployee);
router.route("/remove-employee").delete(removeEmployee);
router.route("/update-password").put(updatePassword);
router.route("/add-deparment").put(addIntoDepartment);
router.route("/remove-from-deparment").put(removedFromDepartment);

export default router;
