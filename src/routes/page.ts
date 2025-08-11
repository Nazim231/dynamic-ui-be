import { Router } from "express";
import pageController from "@controllers/Page";

const app = Router();

app.post("/", pageController.create);
app.get("/", pageController.get);

export default app;
