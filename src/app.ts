import express from "express";
import cors from "cors";
import routes from "@routes/index";

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// registering routes
app.use(routes);

export default app;
