import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ConsoleEasterEgg } from "@/components/console-easter-egg"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ARcade",
  icons: {
    icon: "/DumDum.ico"
  },
  description: "Your one stop platform for learning Web3 Auditing and CTF's",
  keywords: ['Smart Contract Security', 'AI-Powered Auditing', 'Web3'],
  authors: [{ name: 'Aryan', url: 'https://github.com/aryanzutshi' }],
  creator: 'Aryan Zutshi',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    title: "ARcade",
    description: "Your one stop platform for learning Web3 Auditing and CTF's",
    siteName: "ARcade",
    locale: "en_US",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-white flex flex-col`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <ConsoleEasterEgg />
        </ThemeProvider>
      </body>
    </html>
  )
}
