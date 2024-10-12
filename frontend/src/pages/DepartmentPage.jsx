import React from "react";
import { Link } from "react-router-dom";

const DepartmentPage = ({ departmentName, description, headOfDepartment }) => {
  return (
    <Link to={"/department-link"}>
      <div className="p-6 mb-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 h-56 flex flex-col justify-between overflow-hidden">
        <h2 className="text-2xl font-bold mb-2 text-blue-600">{departmentName}</h2>
        
        {/* Truncate description if it's too long */}
        <p className="text-gray-700 mb-4 line-clamp-2 overflow-hidden">{description}</p>

        <p className="font-semibold">
          Head of Department:{" "}
          <span className="font-normal text-gray-800">{headOfDepartment}</span>
        </p>
      </div>
    </Link>
  );
};

export default DepartmentPage;
