import express from "express";
import type { RequestHandler } from "express";
import { getIdea } from "../services/idea.service.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { HttpStatus } from "../constants/httpStatus.js";

export const createIdea: RequestHandler = asyncHandler(async (req, res) => {
    const { category, difficulty, platform } = req.body;
    const idea = await getIdea(category, difficulty, platform);
    res.status(HttpStatus.OK).json(idea);
});