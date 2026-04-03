# StartUP

A full-stack web application for generating, evaluating, and managing startup ideas. This personal project serves as an experimental playground combining manual backend engineering with cutting-edge AI-driven frontend generation.

## Project Origin

- **Backend (Server):** Manually developed by me. Built from the ground up to be a robust API using Express, TypeScript, and Google's AI SDK.
- **Frontend (Client):** Generated via "vibe coding" using the Antigravity model powered by Claude Opus. This experimental approach demonstrates how AI can rapidly prototype and build out user interfaces.

## Technology Stack

**Backend (Manual Development):**
- Node.js & Express
- TypeScript (`tsx`)
- `@google/genai` for AI-powered startup idea evaluation and generation
- `cors` and `dotenv` for configuration and security

**Frontend (AI Vibe-Coded):**
- React 19
- Vite for fast bundling and hot module replacement
- TailwindCSS v4 for utility-first styling

## Local Development Setup

To run this project locally, you will need to configure and start both the backend server and the frontend client.

### Prerequisites

- Node.js installed
- A Google Gemini API key (for the GenAI integration)

### 1. Backend Setup

Open a terminal, navigate to the `server` directory, and install dependencies:

```bash
cd server
npm install
```

Create a `.env` file in the `server` directory and add your required environment variables (e.g., your Gemini API key, PORT).

Start the backend development server:

```bash
npm run dev
```
*The server will run at http://localhost:3000 (or the port specified in your .env).*

### 2. Frontend Setup

Open a new terminal window, navigate to the `client` directory, and install dependencies:

```bash
cd client
npm install
```

Start the frontend development server:

```bash
npm run dev
```
*The React application will be served via Vite.*

## Project Structure

```
StartUP/
├── client/             # React frontend (Vibe coded via Claude Opus)
├── server/             # Express/TypeScript backend (Manual development)
├── docs/               # Project documentation
└── README.md           # This file
```
