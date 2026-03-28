import { generateIdea } from "./gemini.service.js";
import { ApiError } from "@google/genai";
import type { AppIdea } from "../types/idea.js";
export const getIdea: (
  category: string,
  difficulty: string,
  platform: string,
) => Promise<AppIdea> = async (category: string, difficulty: string, platform: string) => {
  const prompt: string = `
                You are an AI that generates startup/app ideas.

                Return ONLY valid JSON.

                {
                "title": string,
                "description": string,
                "target_users": string[],
                "core_features": string[],
                "tech_stack": string[],
                "monetization": string,
                "difficulty": "easy" | "medium" | "hard",
                "estimated_build_time": string
                }

                Category: ${category}
                Difficulty: ${difficulty}
                Platform: ${platform}
                `;

  const ideaText = await generateIdea(prompt);
  return JSON.parse(ideaText) as AppIdea;
};
