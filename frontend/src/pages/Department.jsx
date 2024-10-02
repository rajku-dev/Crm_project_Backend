import React from 'react';
import DepartmentData from '../constant/Department.js';
import DepartmentPage from './DepartmentPage.jsx';

const Department = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Departments</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {DepartmentData.map((dept, index) => (
          <DepartmentPage
            key={index}
            departmentName={dept.departmentName}
            description={dept.description}
            headOfDepartment={dept.headOfDepartment}
          />
        ))}
      </div>
    </div>
  );
};

export default Department;
