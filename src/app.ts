import express from "express";
import routes from "@routes/index";

const app = express();

// middlewares
app.use(express.json())

// registering routes
app.use(routes);

export default app;
