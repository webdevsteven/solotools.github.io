import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider as NextThemeProvider } from "next-themes"
import { ThemeProvider } from "@/contexts/theme-context"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Solo Journal - TTRPG Companion",
  description: "A minimalist and customizable solo TTRPG journaling toolkit",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NextThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ThemeProvider>{children}</ThemeProvider>
        </NextThemeProvider>
        <Script id="register-sw" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js').then(
                  function(registration) {
                    console.log('Service Worker registration successful with scope: ', registration.scope);
                  },
                  function(err) {
                    console.log('Service Worker registration failed: ', err);
                  }
                );
              });
            }
          `}
        </Script>
      </body>
    </html>
  )
}



import './globals.css'