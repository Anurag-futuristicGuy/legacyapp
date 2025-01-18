'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription } from '@/components/ui/alert'

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')

    try {
      const response = await fetch('/api/auth/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Login failed')
      }

      // Store user data and token
      localStorage.setItem('user', JSON.stringify(data.user))
      localStorage.setItem('token', data.token)

      // Redirect based on user role
      if (data.user.role === 'expert') {
        router.push('/dashboard/retiree')
      } else if (data.user.role === 'employer') {
        router.push('/dashboard/recruiter')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err))
    }
    
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Login to LegacyLiennk</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <div className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input 
              id="password" 
              type="password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full">Login</Button>
        </div>
      </form>
      <div className="mt-4 text-center text-sm text-muted-foreground">
        <p>Demo Expert Account: demo@gmail.com / demo</p>
        <p>Demo Employer Account: admin@gmail.com / admin</p>
      </div>
    </div>
  )
}

