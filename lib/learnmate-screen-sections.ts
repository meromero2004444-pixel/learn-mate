export type LearnmateScreen = { image: string; text: string }

function cleanFilename(filename: string): string {
  // Removing extension
  let name = filename.replace(/\.[^/.]+$/, "")
  // Removing feem_ prefix if any
  name = name.replace(/^feem_/i, "")
  // Removing WA numbers and dates if any (optional, but user wants "exact text")
  // Let's assume the user renamed them exactly, so we just clean common noise.
  name = name.replace(/WhatsApp Image \d{4}-\d{2}-\d{2} at \d{1,2}\.\d{2}\.\d{2} [AP]M/i, "")
  
  return name.trim() || "لقطة شاشة"
}

export function buildScreenshotsFromPublic(images: string[]): LearnmateScreen[] {
  return images.map((image) => ({
    image,
    text: cleanFilename(decodeURIComponent(image.split("/").pop() || "")),
  }))
}
