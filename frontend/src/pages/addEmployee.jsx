import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "./axios";
// import departments from "../constant/Department";

function addEmployee() {
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  // const [full_name, setFull_name] = useState("");
  // const [email, setEmail] = useState("");
  // const [gender, setGender] = useState("");
  // const [phone, setPhone] = useState("");
  // const [password, setPassword] = useState("");
  // const [departments, setDepartments] = useState("");
  // const [post, setPost] = useState("");
  // const [address, setAddress] = useState("");
  // const [city, setCity] = useState("");
  // const [state, setState] = useState("");
  // const [country, setCountry] = useState("");
  // const [college, setCollege] = useState("");
  // const [image, setImage] = useState("");
  // const [qualification, setQualification] = useState("");
  // const [dob, setDob] = useState("");
  // const [doj, setDoj] = useState("");

  const [employee, setEmployee] = useState({
    full_name: "",
    email: "",
    gender: "",
    phone: "",
    selectedDepartments: selectedDepartments,
    // password,
    // departments,
    post: "",
    address: "",
    city: "",
    state: "",
    country: "",
    college: "",
    image: "",
    qualification: "",
    // qualificationYear,
    dob: "",
    doj: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const headers = {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      const response = await axios.post("/add-employee", {
        employee,
        headers,
      });
      console.log("Employee added!", response.data);
      navigate("/sidebar");

      // localStorage.setItem("id", response.data.id);
      localStorage.setItem("id", response.data.id);
    } catch (err) {
      console.log(err);
    }
  };

  const departmentOptions = [
    { value: "HR", label: "HR" },
    { value: "Engineering", label: "Engineering" },
    { value: "Marketing", label: "Marketing" },
  ];

  const handleDepartmentChange = (selectedOptions) => {
    setSelectedDepartments(selectedOptions || []);
  };

  return (
    <section className=" min-h-screen">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
        Add Employee
      </h2>

      <form
        className="bg-white p-8 rounded-2xl shadow-md mx-auto"
        onSubmit={handleSubmit}
      >
        {/* Full Name and Address in one row */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          {/* Full Name */}
          <div className="w-full md:w-1/2">
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Enter full name"
              name="full_name"
              onChange={(e) =>
                setEmployee({ ...employee, full_name: e.target.value })
              }
            />
          </div>

          {/* Address */}
          <div className="w-full md:w-1/2">
            <input
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Enter address"
              name="address"
              onChange={(e) =>
                setEmployee({ ...employee, address: e.target.value })
              }
            ></input>
          </div>
        </div>

        {/* Gender and College in one row */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          {/* Gender */}
          <div className="w-full md:w-1/2">
            <select
              className="w-full border border-gray-300 p-2 rounded"
              name="gender"
              onChange={(e) =>
                setEmployee({ ...employee, gender: e.target.value })
              }
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* College */}
          <div className="w-full md:w-1/2">
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Enter college"
              name="college"
              onChange={(e) =>
                setEmployee({ ...employee, college: e.target.value })
              }
            />
          </div>
        </div>

        {/* Date of Birth and Qualification */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          {/* Date of Birth */}
          <div className="w-full md:w-1/2">
            <input
              type="date"
              className="w-full border border-gray-300 p-2 rounded"
              name="dob"
              onChange={(e) =>
                setEmployee({ ...employee, dob: e.target.value })
              }
            />
          </div>

          {/* Qualification */}
          <div className="w-full md:w-1/2">
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Highest Qualification"
              name="qualification"
              onChange={(e) =>
                setEmployee({ ...employee, qualification: e.target.value })
              }
            />
          </div>
        </div>

        {/* Country, Department, and Post */}
        <div className="flex flex-col lg:flex-row gap-4 mb-4">
          {/* Left Half: Country */}
          <div className="w-full lg:w-1/2">
            <select
              className="w-full border border-gray-300 p-2 rounded"
              name="country"
              onChange={(e) =>
                setEmployee({ ...employee, country: e.target.value })
              }
            >
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
                name="departments"
              />
              {/* <select
                name="department"
                id="department"
                className="w-full border border-gray-300 p-2 rounded"
                onChange={(e) => setSelectedDepartments(e.target.value)}
                defaultValue={[selectedDepartments]}
              >
                <option value="" disabled selected hidden>
                  Select departments
                </option>
                {departments.map((d, idx) => {
                  return (
                    <option value={d.departmentName} key={idx}>
                      {d.departmentName}
                    </option>
                  );
                })}
              </select> */}
            </div>

            {/* Post */}
            <div className="w-full lg:w-1/2">
              <select
                className="w-full border border-gray-300 p-2 rounded"
                name="post"
                onChange={(e) =>
                  setEmployee({ ...employee, post: e.target.value })
                }
              >
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
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Enter state"
              name="state"
              onChange={(e) =>
                setEmployee({ ...employee, state: e.target.value })
              }
            />
          </div>

          {/* Date of Joining */}
          <div className="w-full md:w-1/2">
            <input
              type="date"
              className="w-full border border-gray-300 p-2 rounded"
              name="doj"
              onChange={(e) =>
                setEmployee({ ...employee, doj: e.target.value })
              }
            />
          </div>
        </div>

        {/* City and Photo */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          {/* City */}
          <div className="w-full md:w-1/2">
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Enter city"
              name="city"
              onChange={(e) =>
                setEmployee({ ...employee, city: e.target.value })
              }
            />
          </div>

          {/* Photo */}
          <div className="w-full md:w-1/2">
            <input
              type="file"
              className="w-full border border-gray-300 p-2 rounded"
              name="image"
              onChange={(e) =>
                setEmployee({ ...employee, image: e.target.value[0] })
              }
            />
          </div>
        </div>

        {/* Mobile and Email */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Mobile */}
          <div className="w-full md:w-1/2">
            <input
              type="tel"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Enter mobile number"
              name="phone"
              onChange={(e) =>
                setEmployee({ ...employee, phone: e.target.value })
              }
            />
          </div>

          {/* Email */}
          <div className="w-full md:w-1/2">
            <input
              type="email"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Enter email"
              name="email"
              onChange={(e) =>
                setEmployee({ ...employee, email: e.target.value })
              }
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            className="bg-blue-600 text-white w-[180px] h-[41px] rounded-[6px] p-[10px] hover:bg-blue-700"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </section>
  );
}

export default addEmployee;
