import { Router } from "express";
import Page from "@routes/page";

const routes = Router();

routes.use("/page", Page);

export default routes;
