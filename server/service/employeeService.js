import departments from "../model/department.js";
import employees from '../model/employee.js'
import socialMediaMarketing from "../model/ socialMediaMarketing.js";
import WebDev from "../model/webDev.js";
import UIUX from "../model/uiux.js";
import Telecalling from "../model/telecalling.js";
import HrDepartment from "../model/hrDepartment.js";
import Marketing from "../model/marketing.js";
import CampusAmbassador from "../model/campusAmbassador.js";
import GraphicDesign from "../model/graphicDesign.js";
import DataScience from "../model/dataScience.js";
import ContentWriting from "../model/contentWriting.js";
import DigitalMarketing from "../model/digitalMarketing.js";
import VideoEditing from "../model/videoEditing.js";
import Fundraising from "../model/fundraising.js";
import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

const addEmployees = async (data) => {
  try {
    const { full_name, email, post, department_id, password, isAdmin } = data;
    
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const departmentRefs = department_id.map(id => new mongoose.Types.ObjectId(id));

    // Fetching the department data using the provided department_id
    for (const id of departmentRefs){
    const departmentData= await departments.findById(id);

    // If department doesn't exist, throwing an error
    if (!departmentData) {
      throw new Error("Provided department ID does not exist.");
    }

    // finding the department name
    const departmentName = departmentData.name;

    // Determining on which department employee is indulged
    let departmentModel;
    switch (departmentName) {
      case "Video Editing":
        departmentModel = VideoEditing;
        break;
      case "Digital Marketing":
        departmentModel = DigitalMarketing;
        break;
      case "Social Media Marketing":
        departmentModel = socialMediaMarketing;
        break;
      case "Web Developer":
        departmentModel = WebDev;
        break;
      case "Graphic Design":
        departmentModel = GraphicDesign;
        break;
      case "Data Science":
        departmentModel = DataScience;
        break;
      case "Fundraising":
        departmentModel = Fundraising;
        break;
      case "HR (Human Resources)":
        departmentModel = HrDepartment;
        break;
      case "Campus Ambassador":
        departmentModel = CampusAmbassador;
        break;
      case "Content Writing":
        departmentModel = ContentWriting;
        break;
      case "UI/UX":
        departmentModel = UIUX;
        break;
        case "Marketing":
          departmentModel = Marketing;
          break;
          case "Telecalling":
          departmentModel = Telecalling;
          break;
      default:
        throw new Error(
          `Department name "${departmentName}" is not supported.`
        );
    }
    const departmentEmployee = new departmentModel({
      fullName:full_name,
      email,
      post,
      department_id: id, 

    });
    await departmentEmployee.save();

  }
  console.log(department_id)
  const newEmployee = new employees({
      full_name,
      email,
      post,
      departments: departmentRefs, 
      isAdmin,
      password:hashPassword
    });

    await newEmployee.save();
    return newEmployee;
  } catch (error) {
    console.log(error.message)
    throw new Error(`Error adding employee: ${error.message}`);
  }
};


const signIn=async(data)=>{
  try{
    const {email,password}=data;
    console.log(email)
    console.log(password)
    if (email && password) {
      const employee = await employees.findOne({email: email});
      console.log(employee)
      if (employee) {    

          const isMatch = await bcrypt.compare(password, employee.password);
          if (isMatch) {
               // Now generate JWT 
               const token = jwt.sign({
              adminExistingData: {ID: employee._id,
                  isAdmin:employee.isAdmin}
              }, 
                  process.env.JWT_SECRET_KEY,
                   {expiresIn: '5d'});
               
               return { token };     
              }
              else{
            return ({"status": "failed", "message": "Invalid email or password"});
          }
      }else{
        return ({"status": "failed", "message": "You are not registered"});
      }
  }
  }catch(error){
    throw new Error(`Error in signin: ${error.message}`);
  }
}
export  {addEmployees,signIn};
