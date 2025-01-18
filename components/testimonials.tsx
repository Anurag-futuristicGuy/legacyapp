"use client"

import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Nicole Wells",
    role: "Senior Project Manager",
    content: "LegacyLiennk helped me find the perfect opportunity to continue utilizing my expertise. The platform's focus on experienced professionals is refreshing!",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    name: "Gabriel Nolan",
    role: "Financial Consultant",
    content: "Thanks to LegacyLiennk, I found a role that values my years of experience. The platform made it easy to connect with companies seeking seasoned professionals.",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    name: "Ashley Jenkins",
    role: "HR Director",
    content: "LegacyLiennk understands the unique value that experienced professionals bring to organizations. Their platform helped me find my ideal next chapter.",
    avatar: "/placeholder.svg?height=40&width=40"
  }
]

const cardVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 }
}

export function Testimonials() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <section className="py-12 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              ref={ref}
              variants={cardVariants}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-lg font-semibold text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{testimonial.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Next is You
          </h2>
        </motion.div>
      </div>
    </section>
  )
}

