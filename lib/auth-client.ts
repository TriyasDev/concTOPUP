import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient()

export function safeRedirect(path: string | undefined, fallback = "/") {
  if (!path) return fallback
  if (!path.startsWith("/") || path.startsWith("//") || path.startsWith("/\\")) {
    return fallback
  }
  return path
}