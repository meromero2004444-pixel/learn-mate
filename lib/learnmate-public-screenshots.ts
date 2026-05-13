import fs from "node:fs"
import path from "node:path"

const IMAGE_EXT = /\.(png|jpe?g|webp|gif)$/i

const EXCLUDED_KEYWORDS = [
  "logo",
  "icon",
  "placeholder",
  "apple-icon",
  "favicon",
  "الاء اسماعيل حسب",
  "نور علاء سمير",
  "يمنى وائل شعلان",
  "رضوى حسنين محمد",
  "روان عادل المحمدى",
  "عزة على احمد",
  "سلمى سامى محمد",
  "حنين يوسف احمد",
  "مروة محمد خيرى",
  "ايمان محمد على",
  "نوران هانى احمد",
  "نور هانى سعيد",
  "WhatsApp Image 2026-05-11 at 4.53.23 PM"
]

function fileOrder(filename: string): number {
  // Match a number at the very end of the filename (before the extension)
  // e.g. "some text 7.jpg" → 7, "10.jpg" → 10, "3.jpg" → 3
  const m = filename.match(/(\d+)\.[^.]+$/)
  return m ? parseInt(m[1], 10) : Number.MAX_SAFE_INTEGER
}

/**
 * لقطات التطبيق في `public/`.
 * يشمل كل الصور التي لم يتم استثناؤها (مثل الشعارات وصور الفريق).
 */
export function getPublicAppScreenshots(): string[] {
  const pub = path.join(process.cwd(), "public")
  if (!fs.existsSync(pub)) return []

  const urls: string[] = []
  for (const ent of fs.readdirSync(pub, { withFileTypes: true })) {
    if (!ent.isFile()) continue
    if (!IMAGE_EXT.test(ent.name)) continue
    
    const nameLower = ent.name.toLowerCase()
    if (EXCLUDED_KEYWORDS.some(k => nameLower.includes(k.toLowerCase()))) continue

    const urlPath = `/${ent.name.split(path.sep).join("/")}`
    urls.push(urlPath)
  }

  // ترتيب حسب الرقم المضمّن في اسم الملف (آخر رقم قبل الامتداد)
  return urls.sort((a, b) => {
    const orderA = fileOrder(decodeURIComponent(path.basename(a)))
    const orderB = fileOrder(decodeURIComponent(path.basename(b)))
    if (orderA !== orderB) return orderA - orderB
    return a.localeCompare(b, "ar")
  })
}
