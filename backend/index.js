import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";
import userRoutes from "./routes/userRoutes.js"
import genreRoutes from "./routes/genreRoutes.js"
import movieRoutes from "./routes/movieRoutes.js"
import cors from 'cors';
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
app.use(cors({
  origin: 'http://localhost:5173',
  credentials : true,
}))

const PORT = process.env.PORT||3000;

app.use('/api/v1/users',userRoutes)
app.use('/api/v1/genre' , genreRoutes)
app.use('/api/v1/movies',movieRoutes);

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