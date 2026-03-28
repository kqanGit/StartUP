import "dotenv/config.js";
import { GoogleGenAI } from "@google/genai"; 
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { HttpStatus } from "../constants/httpStatus.js";
import type { RequestHandler } from "express";

const GEMINI_API_KEY: string | undefined = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {  
    throw new ApiError(HttpStatus.INTERNAL_SERVER_ERROR, "Gemini API key is not configured");
}
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export const generateIdea: (prompt: string) => Promise<string> = (async (prompt: string) => {
    const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `${prompt}`,
    });
    if (!response || !response.text) {
        throw new ApiError(HttpStatus.INTERNAL_SERVER_ERROR, "Failed to generate content");
    }
    const text: string = response.text;
    return text;
});