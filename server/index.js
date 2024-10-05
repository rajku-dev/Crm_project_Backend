import express from "express";
import connectDb from "./config/dbConnection.js";
import dotenv from "dotenv";
import routes from "./routes/employeeRouter.js";
import cors from "cors";

dotenv.config();
const app = express();
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

const port = process.env.PORT || 5002;

connectDb()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server listening at localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to start server:", err);
    process.exit(1);
  });

//Routers
app.use("/api/employee", routes);
connectDb()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server listening at localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to start server:", err);
    process.exit(1);
  });

//Routers
app.use("/api/employee", routes);
