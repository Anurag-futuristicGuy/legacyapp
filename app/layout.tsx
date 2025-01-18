import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/header';  // Path is correct
import Footer from '@/components/footer';  // Path is correct
import { ThemeProvider } from '@/components/theme-provider';  // Path is correct
import { Toaster } from '@/components/ui/toaster';  // Correct path to toaster.tsx


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LegacyLiennk - Connecting Experienced Professionals',
  description: 'Find your next opportunity or the perfect candidate with LegacyLiennk',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

