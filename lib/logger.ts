// Simple logger utility to log events to a file and console
import fs from "fs";
import path from "path";

const logFilePath = path.join(process.cwd(), "logs", "interview.log");

export function logEvent(message: string, data?: any) {
  const timestamp = new Date().toISOString();
  const logMsg = `[${timestamp}] ${message}${data ? ": " + JSON.stringify(data) : ""}`;
  // Log to console
  console.log(logMsg);
  // Log to file
  try {
    fs.mkdirSync(path.dirname(logFilePath), { recursive: true });
    fs.appendFileSync(logFilePath, logMsg + "\n");
  } catch (err) {
    console.error("Failed to write log:", err);
  }
}
