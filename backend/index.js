import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";
import userRoutes from "./routes/userRoutes.js"


//files
import connectDB from "./config/db.js";
import exp from "constants";

 
//configuration
dotenv.config();
connectDB();

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const PORT = process.env.PORT||3000;

app.use('/api/v1/users',userRoutes)


// app.listen(PORT ,()=>{
//     console.log(`server is running on port ${PORT}`)
// })
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  }).on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      console.error(`Port ${PORT} is already in use. Exiting...`);
      process.exit(1);
    } else {
      throw err;
    }
  });