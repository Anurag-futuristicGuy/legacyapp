"use client"

import { useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { motion } from 'framer-motion'
import { LinkedinIcon } from 'lucide-react'
import Link from 'next/link'

export default function Register() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [userType, setUserType] = useState(searchParams ? searchParams.get('type') || 'expert' : 'expert');
  const [resume, setResume] = useState<File | null>(null)
  const [customExpertise, setCustomExpertise] = useState('')
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    organization: '',
    website: '',
    designation: '',
    expertise: '',
    mobileNumber: '',
    countryCode: 'IN',
    source: '',
  })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    
    // Check if email already exists
    if (formData.email === 'existing@email.com') {
      setError('Email already exists. Login Instead.')
      return
    }

    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    
    // Redirect to appropriate dashboard
    router.push(userType === 'expert' ? '/dashboard/retiree' : '/dashboard/employer')
  }

  const handleLinkedInSignup = () => {
    window.location.href = 'https://www.linkedin.com/company/legacyliennk/'
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
      >
        <h1 className="text-3xl font-bold mb-6">Create an account</h1>
        <div className="flex justify-between items-center mb-8">
          <p className="text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link href="/login" className="text-primary hover:underline">
              Login
            </Link>
          </p>
        </div>

        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label>I am a:</Label>
            <RadioGroup value={userType} onValueChange={setUserType} className="flex space-x-4 mt-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="expert" id="expert" />
                <Label htmlFor="expert">Expert</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="company" id="company" />
                <Label htmlFor="company">Company</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                required
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                required
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              />
            </div>
          </div>

          {userType === 'company' && (
            <>
              <div>
                <Label htmlFor="organization">Organization Name *</Label>
                <Input
                  id="organization"
                  required
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  type="url"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                />
              </div>
            </>
          )}

          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <p className="text-sm text-muted-foreground mt-1">
              We will send you an email to verify your email address
            </p>
          </div>

          <div>
            <Label htmlFor="mobile">Mobile Number *</Label>
            <div className="flex gap-2">
              <Select
                value={formData.countryCode}
                onValueChange={(value) => setFormData({ ...formData, countryCode: value })}
              >
                <SelectTrigger className="w-[100px]">
                  <SelectValue placeholder="Code" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="IN">IN +91</SelectItem>
                  <SelectItem value="US">US +1</SelectItem>
                  <SelectItem value="UK">UK +44</SelectItem>
                </SelectContent>
              </Select>
              <Input
                id="mobile"
                type="tel"
                required
                value={formData.mobileNumber}
                onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
              />
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              We will send you an OTP to verify your number
            </p>
          </div>

          {userType === 'expert' && (
            <div>
              <Label htmlFor="expertise">Area of Expertise *</Label>
              <Select
                value={formData.expertise}
                onValueChange={(value) => {
                  setFormData({ ...formData, expertise: value })
                  if (value === 'other') {
                    setCustomExpertise('')
                  }
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your area of expertise" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="it">Information Technology</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="hr">Human Resources</SelectItem>
                  <SelectItem value="operations">Operations</SelectItem>
                  <SelectItem value="other">Please Specify</SelectItem>
                </SelectContent>
              </Select>
              {formData.expertise === 'other' && (
                <Input
                  className="mt-2"
                  placeholder="Please specify your area of expertise"
                  value={customExpertise}
                  onChange={(e) => setCustomExpertise(e.target.value)}
                />
              )}
            </div>
          )}

          <div>
            <Label htmlFor="resume">Resume/CV</Label>
            <Input
              id="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => {
                const file = e.target.files?.[0]
                if (file) {
                  setResume(file)
                }
              }}
            />
            {resume && (
              <p className="text-sm text-muted-foreground mt-1">
                Selected file: {resume.name}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="source">How did you hear about us? *</Label>
            <Select
              required
              value={formData.source}
              onValueChange={(value) => setFormData({ ...formData, source: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="search">Search Engine</SelectItem>
                <SelectItem value="social">Social Media</SelectItem>
                <SelectItem value="friend">Friend/Colleague</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="password">Create Password *</Label>
            <Input
              id="password"
              type="password"
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            <p className="text-sm text-muted-foreground mt-1">
              Password must be at least 8 characters
            </p>
          </div>

          <Button type="submit" className="w-full">Submit</Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={handleLinkedInSignup}
          >
            <LinkedinIcon className="mr-2 h-4 w-4" />
            Sign up with LinkedIn
          </Button>
        </form>
      </motion.div>
    </div>
  )
}

