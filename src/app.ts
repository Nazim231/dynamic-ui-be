import express from "express";
import connectDB from "./connection";

const app = express();

// creating the connection with DB
connectDB();

// routes
export default app;