# AI Mock Interviews – Project Flow

## Overview

This project is an AI-powered mock interview platform built with Next.js, Firebase, and Vapi. It allows users to practice real interview questions, receive instant feedback, and track their progress. The app features authentication, interview generation, real-time voice interviews, and automated feedback.

---

## Main Flow

### 1. **Authentication**

- Users can sign up or sign in using email and password.
- Authentication is managed via Firebase Auth.
- Authenticated users are redirected to the main dashboard; unauthenticated users see the auth pages.

### 2. **Dashboard**

- After login, users see:
  - **Your Interviews:** List of past interviews with feedback.
  - **Take Interviews:** List of available or upcoming interviews.
- Each interview is displayed as a card with role, type, tech stack, and feedback summary.

### 3. **Interview Generation**

- Users can start a new interview by clicking "Start an Interview".
- The interview generation uses Vapi and AI to create a set of questions based on the selected role, level, and tech stack.
- The backend (API route) stores the generated interview in Firestore.

### 4. **Real-Time Interview**

- The interview is conducted via a real-time voice conversation using Vapi.
- The AI interviewer follows a structured flow, asks questions, and listens to user responses.
- The conversation is transcribed and stored.

### 5. **Feedback Generation**

- After the interview, the transcript is sent to an AI model for evaluation.
- The system generates feedback, including:
  - Total score
  - Category-wise scores (Technical, Problem-Solving, etc.)
  - Strengths and areas for improvement
  - Final assessment
- Feedback is saved in Firestore and shown to the user.

### 6. **Review & Progress**

- Users can review feedback for each interview.
- The dashboard helps users track their progress and identify areas to improve.

---

## Key Technologies

- **Next.js (App Router):** Frontend and API routes.
- **Firebase:** Auth, Firestore database.
- **Vapi:** Real-time voice AI interviews.
- **Zod & React Hook Form:** Form validation.
- **Tailwind CSS:** Styling.

---

## Folder Structure

- `app/` – Next.js app directory (pages, layouts, API routes)
- `components/` – React components (UI, Interview, Auth, etc.)
- `constants/` – Static data and schemas
- `firebase/` – Firebase client and admin setup
- `lib/` – Utility functions and server actions
- `types/` – TypeScript types and interfaces
- `public/` – Static assets

---

## How It Works

1. **User signs up/logs in** → redirected to dashboard.
2. **User starts an interview** → AI generates questions.
3. **User takes the interview** (voice chat) → responses are recorded.
4. **AI analyzes the transcript** → generates structured feedback.
5. **User reviews feedback** → can repeat to improve skills.

---

# In-Depth File-to-File Flow: Interview Start to Report Generation

## 1. Start Interview Button Press

- **File:** `app/(root)/page.tsx`
- **Action:** Renders the "Start an Interview" button (`<Link href="/interview">`). On click, routes to `/interview`.

## 2. Interview Generation Page

- **File:** `app/(root)/interview/page.tsx`
- **Action:** Fetches user (`getCurrentUser`). Renders `<Agent />` with `type="generate"`.
- **Needs:** User must be authenticated and present in DB. `Agent` expects `userName`, `userId`.

## 3. Agent Component (Interview Generation)

- **File:** `components/Agent.tsx`
- **Action:** Handles call flow and state. On "Call" button, triggers `handleCall()`. For `type="generate"`, calls `vapi.start(process.env.NEXT_PUBLIC_VAPI_WORKFLOW_ID!, {...})`. Listens for events, collects messages.
- **Needs:**
  - `NEXT_PUBLIC_VAPI_WEB_TOKEN` and `NEXT_PUBLIC_VAPI_WORKFLOW_ID` set in `.env`.
  - Vapi SDK initialized in `lib/vapi.sdk.ts`.
  - `interviewer` object in `constants/index.ts` must be valid and include a prompt/question flow.
  - Questions must be present and formatted, or agent will not know what to ask.

## 4. Interview Details Page (for Existing Interview)

- **File:** `app/(root)/interview/[id]/page.tsx`
- **Action:** Fetches interview (`getInterviewById`) and feedback (`getFeedbackByInterviewId`). Renders `<Agent />` with `type="interview"`, passing `questions` and `feedbackId`.
- **Needs:** Interview must exist in Firestore. Questions must be present and formatted.

## 5. Interview Generation API

- **File:** `app/api/vapi/generate/route.ts`
- **Action:** Receives POST with interview params. Uses Gemini AI to generate questions. Stores interview in Firestore.
- **Needs:** Google AI SDK and Firestore configured. Prompt must be well-formed. Response must be a valid JSON array of questions.

## 6. Agent Interview Flow

- **File:** `components/Agent.tsx`
- **Action:** Collects all messages during call. On call end, triggers feedback generation (`createFeedback`).

## 7. Feedback Generation

- **File:** `lib/actions/general.action.ts` (`createFeedback`)
- **Action:** Formats transcript. Calls Gemini AI with prompt and schema (`feedbackSchema`). Stores feedback in Firestore.
- **Needs:** Transcript must be non-empty and well-structured. AI model must return a valid object. Firestore must be writable.

## 8. Feedback Display

- **File:** `app/(root)/interview/[id]/feedback/page.tsx`
- **Action:** Fetches interview and feedback. Displays scores, strengths, areas for improvement, and final assessment.
- **Needs:** Feedback must exist for the interview and user.

---

# What Each Step Needs to Work Properly

- **Environment Variables:** `NEXT_PUBLIC_VAPI_WEB_TOKEN`, `NEXT_PUBLIC_VAPI_WORKFLOW_ID`, Firebase and Google AI credentials.
- **Firestore:** Must be initialized and accessible from both client and server.
- **Vapi SDK:** Must be correctly initialized and event handlers must be set up.
- **AI Prompts:** Prompts for question generation and feedback must be clear and match the expected schema.
- **Questions:** Must be generated and passed to the agent in the correct format.
- **Transcript:** Must be collected and passed to feedback generation.
- **Error Handling:** All async calls should handle errors and log them for debugging.

---

# Debugging Tips

- If the agent is unaware of content:
  - Check if questions are being generated and passed to the agent.
  - Ensure the `interviewer` object in `constants/index.ts` is correct and includes the prompt and question placeholders.
  - Make sure the Vapi SDK is receiving the correct variables.
- If things are not working as expected:
  - Check the browser console and server logs for errors.
  - Verify all environment variables are set.
  - Ensure Firestore rules allow read/write for your environment.
  - Test the API route for question generation independently.

---
