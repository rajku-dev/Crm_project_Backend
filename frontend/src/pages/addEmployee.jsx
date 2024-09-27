import React, { useState } from 'react';
import Select from 'react-select';

function addEmployee() {
  const [selectedDepartments, setSelectedDepartments] = useState([]);

  const departmentOptions = [
    { value: 'HR', label: 'HR' },
    { value: 'Engineering', label: 'Engineering' },
    { value: 'Marketing', label: 'Marketing' },
  ];

  const handleDepartmentChange = (selectedOptions) => {
    setSelectedDepartments(selectedOptions || []);
  };

  return (
    <section className=" min-h-screen">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Add Employee</h2>

      <form className="bg-white p-8 rounded-2xl shadow-md mx-auto">

        {/* Full Name and Address in one row */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          {/* Full Name */}
          <div className="w-full md:w-1/2">
            <input type="text" className="w-full border border-gray-300 p-2 rounded" placeholder="Enter full name" />
          </div>

          {/* Address */}
          <div className="w-full md:w-1/2">
            <input className="w-full border border-gray-300 p-2 rounded" placeholder="Enter address"></input>
          </div>
        </div>

        {/* Gender and College in one row */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          {/* Gender */}
          <div className="w-full md:w-1/2">
            <select className="w-full border border-gray-300 p-2 rounded">
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* College */}
          <div className="w-full md:w-1/2">
            <input type="text" className="w-full border border-gray-300 p-2 rounded" placeholder="Enter college" />
          </div>
        </div>

        {/* Date of Birth and Qualification */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          {/* Date of Birth */}
          <div className="w-full md:w-1/2">
            <input type="date" className="w-full border border-gray-300 p-2 rounded" />
          </div>

          {/* Qualification */}
          <div className="w-full md:w-1/2">
            <input type="text" className="w-full border border-gray-300 p-2 rounded" placeholder="Highest Qualification" />
          </div>
        </div>

        {/* Country, Department, and Post */}
        <div className="flex flex-col lg:flex-row gap-4 mb-4">
  {/* Left Half: Country */}
  <div className="w-full lg:w-1/2">
    <select className="w-full border border-gray-300 p-2 rounded">
      <option value="">Select country</option>
      <option value="USA">USA</option>
      <option value="India">India</option>
      <option value="UK">UK</option>
    </select>
  </div>

  {/* Right Half: Department and Post */}
  <div className="w-full lg:w-1/2 flex flex-col lg:flex-row gap-4">
    {/* Department */}
    <div className="w-full lg:w-1/2">
      <Select
        isMulti
        options={departmentOptions}
        value={selectedDepartments}
        onChange={handleDepartmentChange}
        className="basic-multi-select"
        classNamePrefix="select"
        placeholder="Select departments"
      />
    </div>

    {/* Post */}
    <div className="w-full lg:w-1/2">
  <select className="w-full border border-gray-300 p-2 rounded">
    <option value="">Select post</option>
    <option value="ceo">CEO</option>
    <option value="coo">COO</option>
    <option value="sr-hod">Sr HOD</option>
    <option value="hod">HOD</option>
    <option value="intern">Intern</option>
  </select>
</div>

  </div>
</div>


        {/* State and Date of Joining */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          {/* State */}
          <div className="w-full md:w-1/2">
            <input type="text" className="w-full border border-gray-300 p-2 rounded" placeholder="Enter state" />
          </div>

          {/* Date of Joining */}
          <div className="w-full md:w-1/2">
            <input type="date" className="w-full border border-gray-300 p-2 rounded" />
          </div>
        </div>

        {/* City and Photo */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          {/* City */}
          <div className="w-full md:w-1/2">
            <input type="text" className="w-full border border-gray-300 p-2 rounded" placeholder="Enter city" />
          </div>

          {/* Photo */}
          <div className="w-full md:w-1/2">
            <input type="file" className="w-full border border-gray-300 p-2 rounded" />
          </div>
        </div>

        {/* Mobile and Email */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Mobile */}
          <div className="w-full md:w-1/2">
            <input type="tel" className="w-full border border-gray-300 p-2 rounded" placeholder="Enter mobile number" />
          </div>

          {/* Email */}
          <div className="w-full md:w-1/2">
            <input type="email" className="w-full border border-gray-300 p-2 rounded" placeholder="Enter email" />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
  <button className="bg-blue-600 text-white w-[180px] h-[41px] rounded-[6px] p-[10px] hover:bg-blue-700">
    Add
  </button>
</div>

      </form>
    </section>
  );
}

export default addEmployee;
