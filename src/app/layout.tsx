import { Roboto } from 'next/font/google'
import type { Metadata } from "next"
import '../styles/globals.css'
import { ThemeProvider } from '@/context/ThemeProvider'
import { Suspense } from 'react'
import { Loading } from '@/components/common'


const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Tiệm Nướng Nọ",
  description: "Tiệm Nướng Nọ kính chào quý khách",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className} >
        <Suspense fallback={<Loading />}>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </Suspense>
      </body>
    </html >
  );
}
