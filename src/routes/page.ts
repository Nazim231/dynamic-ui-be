import { Router } from "express";
import pageController from "@controllers/Page";

const app = Router();

app.post("/", pageController.create);

export default app;