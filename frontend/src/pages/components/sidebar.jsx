import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar.jsx";
import AddEmployee from "../addEmployee.jsx";
import DepartmentPage from "../Department.jsx";

import { MdMailOutline } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { GoProject } from "react-icons/go";
import { MdGroupAdd } from "react-icons/md";
import { SiGraphql } from "react-icons/si";
import { FaPeopleGroup } from "react-icons/fa6";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedPanel, setSelectedPanel] = useState("dashboard");

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Function to render the selected panel content
  const renderPanelContent = () => {
    switch (selectedPanel) {
      case "add-employee":
        return <AddEmployee></AddEmployee>;

      case "departments":
        return <DepartmentPage></DepartmentPage>;

      case "addJob":
        return <p>Welcome to the fg!</p>;

      case "companyList":
        return <p>Welcome to the fg!</p>;

      case "joblist":
        return <p>Welcome to the seco!</p>;

      default:
        return <p>Welcome to the Dashboard!</p>;
    }
  };

  return (
    <>
      <div className="bg-white p-8 rounded-xl">
        <Navbar></Navbar>
        <div className="flex">
          {/* Sidebar */}
          <div
            className={`${
              isOpen ? "w-64" : "w-20"
            } bg-blue-600 h-screen  p-5 pt-8 relative duration-300`}
          >
            <button
              className={`absolute -right-3 top-9 w-7 h-7 bg-white rounded-full ${
                !isOpen && "rotate-180"
              }`}
              onClick={toggleSidebar}
            >
              {isOpen ? "<" : ">"}
            </button>

            <ul className="pt-6">
              {/* Common options for both recruiters and students */}
              <div className="flex flex-row items-center justify-start gap-2 tracking-wide">
                <SiGraphql size={25} className="text-white" />
                <li
                  className="text-white font-poppins font-semibold text-[15px] leading-[22.5px] flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-500 rounded-md mt-2 justify-center"
                  onClick={() => setSelectedPanel("departments")}
                >
                  {isOpen && (
                    <span className="text-[15px] font-bold">Departments</span>
                  )}
                </li>
              </div>

              <div className="flex flex-row items-center justify-start gap-2 tracking-wide">
                <MdGroupAdd size={25} className="text-white" />
                <li
                  className="text-white font-poppins font-semibold text-[15px] leading-[22.5px] flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-500 rounded-md mt-2 justify-center"
                  onClick={() => setSelectedPanel("add-employee")}
                >
                  {isOpen && (
                    <span className="text-[15px] font-bold">Add Employee</span>
                  )}
                </li>
              </div>

              <div className="flex flex-row items-center justify-start gap-2 tracking-wide">
                <GoProject size={25} className="text-white" />
                <li
                  className="text-white font-poppins font-semibold text-[15px] leading-[22.5px] flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-500 rounded-md mt-2 justify-center"
                  onClick={() => setSelectedPanel("myApplication")}
                >
                  {isOpen && (
                    <span className="text-[15px] font-bold">Project</span>
                  )}
                </li>
              </div>

              <div className="flex flex-row items-center justify-start gap-2 tracking-wide">
                <IoPersonOutline size={25} className="text-white" />
                <li
                  className="text-white font-poppins font-semibold text-[15px] leading-[22.5px] flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-500 rounded-md mt-2 justify-center"
                  onClick={() => setSelectedPanel("joblist")}
                >
                  {isOpen && (
                    <span className="text-[15px] font-bold">Contact</span>
                  )}
                </li>
              </div>

              <div className="flex flex-row items-center justify-start gap-2 tracking-wide">
                <MdMailOutline size={25} className="text-white" />
                <li
                  className="text-white font-poppins font-semibold text-[15px] leading-[22.5px] flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-500 rounded-md mt-2 justify-center"
                  onClick={() => setSelectedPanel("joblist")}
                >
                  {isOpen && <span className="font-bold">Mail</span>}
                </li>
              </div>

              <div className="flex flex-row items-center justify-start gap-2 tracking-wide">
                <FaPeopleGroup size={25} className="text-white" />
                <li
                  className="text-white font-poppins font-semibold text-[15px] leading-[22.5px] flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-500 rounded-md mt-2 justify-center"
                  onClick={() => setSelectedPanel("joblist")}
                >
                  {isOpen && <span className="font-bold">Interns</span>}
                </li>
              </div>
            </ul>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 bg-blue-50 p-7 rounded-b-xl h-screen overflow-scroll overflow-x-hidden">
            <div className="text-gray-600 mt-4">
              {/* Render the content based on selected panel */}
              {renderPanelContent()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
