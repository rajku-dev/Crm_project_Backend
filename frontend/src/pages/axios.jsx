import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api/employee/",
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
});

export default axiosInstance;
