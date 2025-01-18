"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const partners = [
  { name: "Think Startup", logo: "/partners/think-startup.png" },
  { name: "Baud Resources", logo: "/partners/baud-resources.png" },
  { name: "NonStop", logo: "/partners/nonstop.png" },
  { name: "Michael Page", logo: "/partners/michael-page.png" },
]

export function PartnersScroll() {
  const [shouldAnimate, setShouldAnimate] = useState(false)

  useEffect(() => {
    setShouldAnimate(true)
  }, [])

  return (
    <div className="bg-white dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300">
            Trusted by leading companies
          </h3>
        </div>
        <motion.div 
          className="flex justify-center items-center gap-12 flex-wrap"
          initial={{ opacity: 0 }}
          animate={shouldAnimate ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-32 h-16 relative grayscale hover:grayscale-0 transition-all"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="object-contain w-full h-full"
                width={100}
                height={100}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

