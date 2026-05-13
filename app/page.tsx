import { buildScreenshotsFromPublic, SCREEN_CAPTIONS } from "@/lib/learnmate-screen-sections"
import { getPublicAppScreenshots } from "@/lib/learnmate-public-screenshots"
import { PresentationShell } from "@/components/presentation/presentation-shell"

export default function HomePage() {
  const appScreens = buildScreenshotsFromPublic(getPublicAppScreenshots(), SCREEN_CAPTIONS)
  return <PresentationShell appScreens={appScreens} />
}
