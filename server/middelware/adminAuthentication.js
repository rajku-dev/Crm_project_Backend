import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import employees from '../model/employee.js';

const validateAdminToken = asyncHandler(async (req, res, next) => {
  let token;
  let authHeader = req.headers.authorization || req.headers.Authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res
      .status(401)
      .json({ message: "Unauthorized - Token not provided" });
  }

  token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized - Invalid token" });
    }

    if (!decoded.adminExistingData.isAdmin) {
      return res.status(403).json({ message: "Forbidden - Not an admin" });
    }
console.log(decoded.adminExistingData)
    try {
      const adminData = await employees.findOne({ _id: decoded.adminExistingData.ID });
      console.log(decoded.adminExistingData.ID)

      if (!adminData) {
        return res.status(404).json({ message: "Admin not found" });
      }

      req.adminData = decoded;
      next();
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  });
});

export default validateAdminToken;
