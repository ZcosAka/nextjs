import { Phudu } from 'next/font/google'
import type { Metadata } from "next"
import '../styles/globals.css'
import { ThemeProvider } from '@/context/ThemeProvider'
import { Suspense } from 'react'
import { Loading } from '@/components/common'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'


const phudu = Phudu({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "OM NƯỚNG",
  icons: {
    icon: "./images/icon/icon_logo.png"
  },
  description: "OM NƯỚNG - Authetic Vietnamese Cuisine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${phudu.className} min-h-screen flex flex-col `} >
        <Header />
        <Suspense fallback={<Loading />}>
          <ThemeProvider>
            <main className="flex-1 overflow-y-auto">
              {children}
            </main>
          </ThemeProvider>
        </Suspense>
        <Footer />
      </body>
    </html >
  );
}
