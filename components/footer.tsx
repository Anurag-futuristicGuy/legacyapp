import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p>We connect retired professionals with organizations, offering expertise and empowering businesses with the value of seasoned experience.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="https://www.linkedin.com/company/legacyliennk/" className="hover:text-blue-600" target="_blank" rel="noopener noreferrer">About Us</a></li>
              <li><a href="https://www.linkedin.com/company/legacyliennk/" className="hover:text-blue-600" target="_blank" rel="noopener noreferrer">Contact</a></li>
              <li><Link href="/privacy" className="hover:text-blue-600">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-blue-600">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600">Facebook</a></li>
              <li><a href="#" className="hover:text-blue-600">Twitter</a></li>
              <li><a href="https://www.linkedin.com/company/legacyliennk/" className="hover:text-blue-600" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 LegacyLeinnk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

