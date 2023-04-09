// import express from "express";
import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import studentRoute from "./routes/students.js";
import userRoute from "./routes/users.js";
import mongoDBcunnect from "./config/db.js";
import errorHandler from "./middlewares/errorHandler.js";
import cookieParser from "cookie-parser";

// init express
const app = express();
dotenv.config();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// init env variables
const PORT = process.env.SERVER_PORT || 5000;

// routes
app.use("/api/student", studentRoute);
app.use("/api/user", userRoute);

// express error handler
app.use(errorHandler);

// listen server
app.listen(PORT, () => {
  mongoDBcunnect();
  console.log(`server running port ${PORT}`.bgGreen.black);
});
