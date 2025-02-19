import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/index.js"; 
import database from "./config/db.js";

dotenv.config();

const app = express();

// Middleware
// app.use(cors());
app.use(cors({ origin: "*" }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", router);

export default app;
