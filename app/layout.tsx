import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { Header } from '@/components/header'

export const metadata: Metadata = {
   title: 'ClassicUI - Flexible UI Components for Every Project',
   description:
      'ClassicUI provides a fully customizable and responsive component library for React and Next.js. With built-in Framer Motion animations and TailwindCSS styling, our components give you the power to build beautiful, seamless user interfaces that work on any device.',
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en">
         <body className="bg-background-light dark:bg-background-dark dark:text-color-dark">
            <Script strategy="beforeInteractive" id="theme">
               {`(function () {
                  try {
                     const theme = localStorage.getItem('theme')
                     if (!theme || theme === 'system') {
                        const isDark = matchMedia(
                           '(prefers-color-scheme: dark)',
                        ).matches
                        if (isDark) {
                           document.documentElement.classList.add('dark')
                        } else document.documentElement.classList.remove('dark')
                        return
                     }
                     if (theme === 'dark') {
                        document.documentElement.classList.add('dark')
                     } else document.documentElement.classList.remove('dark')
                  } catch (error) {}
               })()`}
            </Script>
            <Header />
            {children}
         </body>
      </html>
   )
}
