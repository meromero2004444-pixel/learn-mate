import type { Metadata } from 'next'
import { Inter, Playfair_Display, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono'
});

export const metadata: Metadata = {
  title: 'NEXUS | Graduation Project',
  description: 'The Future of Connected Intelligence - A cinematic project presentation',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

import { ThemeProvider } from '@/components/theme-provider'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ── Inject theme CSS custom properties directly ── */}
        <style dangerouslySetInnerHTML={{ __html: `
          :root {
            --bg: #eef2ff;
            --fg: #1e1b4b;
            --card-bg: #ffffff;
            --card-fg: #1e1b4b;
            --nexus-primary: #7c3aed;
            --nexus-primary-fg: #ffffff;
            --nexus-secondary: #0284c7;
            --nexus-secondary-fg: #ffffff;
            --nexus-muted: #e0e7ff;
            --nexus-muted-fg: #6366f1;
            --nexus-accent: #db2777;
            --nexus-border: #c7d2fe;
          }
          html.dark {
            --bg: #09090b;
            --fg: #f8fafc;
            --card-bg: #18181b;
            --card-fg: #f8fafc;
            --nexus-primary: #a78bfa;
            --nexus-primary-fg: #1e1b4b;
            --nexus-secondary: #38bdf8;
            --nexus-secondary-fg: #0c4a6e;
            --nexus-muted: #27272a;
            --nexus-muted-fg: #a1a1aa;
            --nexus-accent: #f472b6;
            --nexus-border: #3f3f46;
          }
          html, body {
            background-color: var(--bg) !important;
            color: var(--fg) !important;
            transition: background-color 0.45s ease, color 0.35s ease;
          }
        ` }} />
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {/* Cinematic Ambient Blobs */}
          <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
            <div
              className="absolute top-[-15%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[130px] animate-pulse-slow"
              style={{ background: "var(--nexus-primary)", opacity: 0.15 }}
            />
            <div
              className="absolute bottom-[-15%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[130px] animate-pulse-slow"
              style={{ background: "var(--nexus-secondary)", opacity: 0.12, animationDelay: "2s" }}
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.025]"
              style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}
            />
          </div>

          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}
