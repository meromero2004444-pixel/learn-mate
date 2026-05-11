import type { Metadata } from 'next'
import { Inter, Playfair_Display, Geist_Mono, Cairo, Readex_Pro } from 'next/font/google'
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

const cairo = Cairo({
  subsets: ["arabic"],
  variable: '--font-cairo',
  weight: ['300', '400', '500', '600', '700', '800']
});

const readex = Readex_Pro({
  subsets: ["arabic"],
  variable: '--font-readex',
  weight: ['300', '400', '500', '600', '700']
});

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono'
});

export const metadata: Metadata = {
  title: 'LearnMate | رفيق التعلم',
  description: 'مشروع تخرج - كلية التربية النوعية - جامعة بورسعيد',
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
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        {/* ── Inject theme CSS custom properties directly ── */}
        <style dangerouslySetInnerHTML={{ __html: `
          /* ── LIGHT MODE (default) ── */
          :root {
            /* Short vars — what Tailwind v4 @theme resolves to */
            --background:         #f8faff;
            --foreground:         #0f172a;
            --card:               #ffffff;
            --card-foreground:    #0f172a;
            --popover:            #ffffff;
            --popover-foreground: #0f172a;
            --primary:            #6d28d9;
            --primary-foreground: #ffffff;
            --secondary:          #0369a1;
            --secondary-foreground: #ffffff;
            --muted:              #f1f5f9;
            --muted-foreground:   #475569;
            --accent:             #be185d;
            --accent-foreground:  #ffffff;
            --destructive:        #dc2626;
            --destructive-foreground: #ffffff;
            --border:             #e2e8f0;
            --input:              #e2e8f0;
            --ring:               #6d28d9;

            /* Long vars (--color-*) — also set directly for safety */
            --color-background:         #eef2ff;
            --color-foreground:         #1e1b4b;
            --color-card:               #ffffff;
            --color-card-foreground:    #1e1b4b;
            --color-primary:            #7c3aed;
            --color-primary-foreground: #ffffff;
            --color-secondary:          #0284c7;
            --color-secondary-foreground: #ffffff;
            --color-muted:              #e0e7ff;
            --color-muted-foreground:   #6366f1;
            --color-accent:             #db2777;
            --color-accent-foreground:  #ffffff;
            --color-destructive:        #dc2626;
            --color-destructive-foreground: #ffffff;
            --color-border:             #c7d2fe;
            --color-input:              #c7d2fe;
            --color-ring:               #7c3aed;
          }

          /* ── DARK MODE ── applied when next-themes adds class="dark" to <html> */
          html.dark {
            /* Short vars */
            --background:         #09090b;
            --foreground:         #f8fafc;
            --card:               #18181b;
            --card-foreground:    #f8fafc;
            --popover:            #09090b;
            --popover-foreground: #f8fafc;
            --primary:            #a78bfa;
            --primary-foreground: #1e1b4b;
            --secondary:          #38bdf8;
            --secondary-foreground: #0c4a6e;
            --muted:              #27272a;
            --muted-foreground:   #a1a1aa;
            --accent:             #f472b6;
            --accent-foreground:  #09090b;
            --destructive:        #ef4444;
            --destructive-foreground: #f8fafc;
            --border:             #3f3f46;
            --input:              #3f3f46;
            --ring:               #a78bfa;

            /* Long vars */
            --color-background:         #09090b;
            --color-foreground:         #f8fafc;
            --color-card:               #18181b;
            --color-card-foreground:    #f8fafc;
            --color-primary:            #a78bfa;
            --color-primary-foreground: #1e1b4b;
            --color-secondary:          #38bdf8;
            --color-secondary-foreground: #0c4a6e;
            --color-muted:              #27272a;
            --color-muted-foreground:   #a1a1aa;
            --color-accent:             #f472b6;
            --color-accent-foreground:  #09090b;
            --color-destructive:        #ef4444;
            --color-destructive-foreground: #f8fafc;
            --color-border:             #3f3f46;
            --color-input:              #3f3f46;
            --color-ring:               #a78bfa;
          }

          /* ── Apply background & color to entire page ── */
          html, body {
            background-color: var(--background) !important;
            color:            var(--foreground) !important;
            transition: background-color 0.3s ease, color 0.2s ease;
          }

          /* ── Transition all elements smoothly on theme change ── */
          *, *::before, *::after {
            transition-property: background-color, color, border-color, fill, stroke;
            transition-duration: 0.25s;
            transition-timing-function: ease;
          }
        ` }} />

      </head>
      <body className={`${inter.variable} ${playfair.variable} ${geistMono.variable} ${cairo.variable} ${readex.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {/* Cinematic Ambient Blobs */}
          <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
            <div
              className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full blur-[80px] animate-pulse-slow"
              style={{ background: "var(--primary)", opacity: 0.1 }}
            />
            <div
              className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full blur-[80px] animate-pulse-slow"
              style={{ background: "var(--secondary)", opacity: 0.08, animationDelay: "2s" }}
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
