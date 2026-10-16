export function safeRedirect(path: string | undefined, fallback = "/") {
  if (!path) return fallback

  // Hanya terima path relatif di dalam website.
  // Tolak "//evil.com" dan "/\evil.com" yang dibaca browser sebagai URL eksternal.
  if (!path.startsWith("/") || path.startsWith("//") || path.startsWith("/\\")) {
    return fallback
  }

  return path
}