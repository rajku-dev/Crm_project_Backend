import mongoose from "mongoose";

const departmentSchema = mongoose.Schema({
    name:{type:String,required:true},
    createdAt: { type: Date, default: Date.now }, 
    updatedAt: { type: Date, default: Date.now },
})

const department=mongoose.model("department",departmentSchema);

export default department;