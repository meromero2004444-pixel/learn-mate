import { buildScreenshotsFromPublic } from "@/lib/learnmate-screen-sections"
import { getPublicAppScreenshots } from "@/lib/learnmate-public-screenshots"
import { PresentationShell } from "@/components/presentation/presentation-shell"

export default function HomePage() {
  const appScreens = buildScreenshotsFromPublic(getPublicAppScreenshots())
  return <PresentationShell appScreens={appScreens} />
}
