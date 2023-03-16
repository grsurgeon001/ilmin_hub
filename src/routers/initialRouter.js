import express from "express";
import { home } from "../controllers/initialController";

const initialRouter = express.Router();

initialRouter.get("/", home);

export default initialRouter;