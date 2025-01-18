"use client"

import { motion } from 'framer-motion'

const steps = [
  {
    number: 1,
    title: "Sign Up",
    description: "Create your Legacy Liennk profile by providing your resume, skills, and experience details."
  },
  {
    number: 2,
    title: "Browse Openings",
    description: "Explore the available job postings and contractual opportunities that match your qualifications."
  },
  {
    number: 3,
    title: "Apply",
    description: "Submit your application for the roles that interest you, highlighting how your expertise can benefit the organization."
  },
  {
    number: 4,
    title: "Get Hired",
    description: "Connect with businesses that recognize the value you can bring, and start your next meaningful chapter."
  }
]

export function ProcessFlow() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <p className="text-gray-600 dark:text-gray-300">Simple steps to start your journey with Legacy Liennk</p>
      </div>
      
      <div className="relative">
        {/* Connection Line */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-blue-200 dark:bg-blue-900 -translate-y-1/2 hidden md:block" />
        
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg relative z-10">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4 mx-auto">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

