import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Header from '@/components/Header'
import Banner from '@/components/Banner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bearded Blog',
  description: 'BeardedCash Blog website where you can find articles related to web and app design, and development.',
  other: {
    "twitter:image": 'https://i.ibb.co/BGkVHpN/Beard-Logo-Orange-8.png',
    "twitter:card": "summary_large_image",
    "twitter:site": "@beardedcash",
    "og:url": "beardedblog.vercel.app",
    "og:image": 'https://i.ibb.co/BGkVHpN/Beard-Logo-Orange-8.png',
    "og:type": "website",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="max-w-7xl mx-auto">
        <Header />
        <Banner />
        {children}
      </body>
    </html>
  )
}
