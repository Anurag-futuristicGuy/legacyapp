import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from './theme-toggle'
import { MainNav } from './main-nav'

export default function Header() {
  return (
    <header className="bg-background shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="LegacyLeeink Logo" width={40} height={40} />
          <span className="ml-2 text-2xl font-bold text-primary">LegacyLiennk</span>
        </Link>
        <MainNav />
        <div className="flex items-center space-x-4">
          <Button asChild variant="outline"><Link href="/login">Login</Link></Button>
          <Button asChild><Link href="/register">Register</Link></Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

