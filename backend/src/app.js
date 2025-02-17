//app.js
import router from './routes/index.js';
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
// import bodyParser from "body-parser";


dotenv.config();
// connectDB();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

//Routers
app.use("/api", router);

export default app;