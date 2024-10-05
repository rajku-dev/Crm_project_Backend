import jwt from "jsonwebtoken";

//Genarate token
export const generateToken = async (payload) => {
  const token = jwt.sign(payload, process.env.SECRETKEY);
  return token;
};

//Verify token
export const authenticationToken = async (req, res, next) => {
  //Get token by headers
  const authHeader = req.headers["Authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized!" });
  }

  jwt.verify(token, process.env.SECRETKEY, (err, payload) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token!" });
    } else {
      req.user = payload;
      next();
    }
  });
};
