import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/index.js";
import database from "./config/db.js";

dotenv.config();

const app = express();

// Middleware
// app.use(cors({ origin: "*" }));
// app.use(
//   cors({
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTION", "HEAD"],
//     origin: ["https://tax-calculation-portal-rl.vercel.app"],
//     credentials: true,
//   })
// );
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use("/api", router);

export default app;
