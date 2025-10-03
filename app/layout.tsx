import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'YORX - Personalized WOD Scaling for Your Whole Class',
  description: 'Every athlete gets the right weights and targets. Happy trainers run smoother classes. Gym owners keep members.',
  keywords: 'CrossFit, WOD scaling, fitness, gym management, athlete training',
  openGraph: {
    title: 'YORX - Personalized WOD Scaling',
    description: 'Every athlete gets the right weights and targets. Happy trainers run smoother classes.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
