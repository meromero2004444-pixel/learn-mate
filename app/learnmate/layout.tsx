import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "LearnMate",
}

export default function LearnMateRedirectLayout({ children }: { children: React.ReactNode }) {
  return children
}
