import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: {
    default: "Priyanshu Gupta | Full Stack Developer",
    template: "%s | Priyanshu Gupta",
  },
  description: "Portfolio of Priyanshu Gupta, a passionate Full Stack Developer specializing in React, Next.js, and modern web technologies.",
  keywords: ["Full Stack Developer", "React", "Next.js", "Portfolio", "Web Developer", "Priyanshu Gupta", "Software Engineer"],
  authors: [{ name: "Priyanshu Gupta" }],
  creator: "Priyanshu Gupta",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://priyanshugupta.dev",
    title: "Priyanshu Gupta | Full Stack Developer",
    description: "Building exceptional digital experiences that are fast, accessible, and visually appealing.",
    siteName: "Priyanshu Gupta Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Priyanshu Gupta | Full Stack Developer",
    creator: "@Priyans45961979",
  },
}

import { ScrollToTop } from "@/components/ScrollToTop"
import { ScrollProgress } from "@/components/ScrollProgress"
import { CustomCursor } from "@/components/CustomCursor"
import { SmoothScroll } from "@/components/SmoothScroll"
import { FloatingDock } from "@/components/FloatingDock"

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <ScrollProgress />
          <CustomCursor />
          <SmoothScroll />
          <FloatingDock />
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
