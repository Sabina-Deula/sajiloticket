import connectDB from "./config/db.js";
import dotenv from "dotenv";
import express from "express";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
