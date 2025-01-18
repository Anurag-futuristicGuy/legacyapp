"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ProcessFlow } from '@/components/process-flow';
import { Testimonials } from '@/components/testimonials'
import { PartnersScroll } from '@/components/partners-scroll'

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section with Background */}
      <div 
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url("/business-bg.jpg")',
        }}
      >
        <div className="container mx-auto px-4 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6 text-gray-100">Welcome to LegacyLiennk</h1>
            <p className="text-xl mb-12 text-gray-300">Bridging Expertise with Opportunity</p>
            <div className="flex justify-center gap-6">
              <Button 
                asChild 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 text-white"
              >
                <Link href="/register?type=expert">Register as Expert</Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 border-2 border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-black"
              >
                <Link href="/register?type=recruiter">Register as Business</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Partners Section */}
      <PartnersScroll />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <section className="mb-20 relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 skew-y-6"
          />
          <div className="relative">
            <div className="text-center mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                Unlock the Power of Experience
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-gray-600 dark:text-gray-300"
              >
                Transform your business with seasoned expertise. Connect with professionals who bring decades of wisdom to drive your success.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Process Flow Section */}
        <ProcessFlow />
      </div>

      {/* Testimonials with gray background */}
      <Testimonials />
    </div>
  )
}

