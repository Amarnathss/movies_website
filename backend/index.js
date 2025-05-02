import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";
import userRoutes from "./routes/userRoutes.js"
import genreRoutes from "./routes/genreRoutes.js"
import movieRoutes from "./routes/movieRoutes.js"
import uploadRoutes from "./routes/uploadRoutes.js"
import cors from 'cors';
//files
import connectDB from "./config/db.js";
import exp from "constants";

 
//configuration
dotenv.config();
connectDB();

const app = express()

const allowedOrigins = [
  'https://movies-website-fhj9.vercel.app', // your frontend
  'http://localhost:3000'                   // dev (optional)
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true // if you're using cookies or auth headers
}));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://movies-website-fhj9.vercel.app");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});


app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
// app.use(cors({
//   origin: [
//     'http://localhost:5173', 
//     'https://your-frontend-domain.vercel.app'
//   ],
//   credentials: true,
// }));

const PORT = process.env.PORT||3000;

app.use('/api/v1/users',userRoutes)
app.use('/api/v1/genre' , genreRoutes)
app.use('/api/v1/movies',movieRoutes);
app.use('/api/v1/upload',uploadRoutes);


const __dirname = path.resolve()
app.use('/uploads',express.static(path.join(__dirname + "/uploads")));

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