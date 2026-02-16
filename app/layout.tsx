import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { profileData } from '@/data/profile'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: `${profileData.name} - ${profileData.roles[0]}`,
    template: `%s | ${profileData.name}`,
  },
  description: profileData.bio,
  keywords: [
    'portfolio',
    'developer',
    'web development',
    'software engineer',
    'full stack developer',
    ...profileData.techStack,
    ...profileData.expertise,
  ],
  authors: [{ name: profileData.name }],
  creator: profileData.name,
  publisher: profileData.name,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://myportfolio.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://myportfolio.com',
    title: `${profileData.name} - ${profileData.roles[0]}`,
    description: profileData.bio,
    siteName: `${profileData.name}'s Portfolio`,
    images: [
      {
        url: profileData.profileImage || '/images/profile/profile-image.jpg' || '/images/profile/profile-image.png',
        width: 1200,
        height: 630,
        alt: `${profileData.name} - Portfolio`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profileData.name} - ${profileData.roles[0]}`,
    description: profileData.bio,
    creator: profileData.socialLinks.twitter?.replace('https://twitter.com/', '@') || undefined,
    images: [profileData.profileImage || '/images/profile/profile-image.jpg' || '/images/profile/profile-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <LanguageProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </LanguageProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

