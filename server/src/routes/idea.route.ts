import express from "express";
import { createIdea } from "../controllers/idea.controller.js";

const ideaRouter = express.Router();

ideaRouter.post("/ideas", createIdea);

export default ideaRouter;