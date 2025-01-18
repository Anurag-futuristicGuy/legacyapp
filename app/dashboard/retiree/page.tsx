"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default function RetireeDashboard() {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    title: 'Retired Senior Project Manager',
    expertise: ['Project Management', 'Team Leadership', 'Agile Methodologies'],
    experience: 30,
    bio: 'Experienced project manager with a track record of successful large-scale IT implementations.',
    resume: null as File | null
  })

  const [jobs] = useState({
    applied: [
      { id: 1, title: 'Senior Developer', company: 'Tech Corp', status: 'In Review' },
      { id: 2, title: 'Technical Lead', company: 'Innovation Inc', status: 'Interviewed' }
    ],
    saved: [
      { id: 3, title: 'Software Architect', company: 'Future Systems' },
      { id: 4, title: 'Project Manager', company: 'Global Tech' }
    ],
    shortlisted: [
      { id: 5, title: 'Technical Director', company: 'Digital Solutions' }
    ]
  })

  const handleProfileUpdate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Here you would typically send the updated profile data to your backend
    console.log('Profile updated')
  }

  const handleResumeUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setProfile(prev => ({ ...prev, resume: file }))
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Retiree Dashboard</h1>
      <Tabs defaultValue="profile">
        <TabsList className="mb-4">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="jobs">Jobs</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Your Profile</CardTitle>
              <CardDescription>Update your profile information here.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleProfileUpdate} className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    value={profile.name} 
                    onChange={(e) => setProfile({...profile, name: e.target.value})} 
                  />
                </div>
                <div>
                  <Label htmlFor="title">Professional Title</Label>
                  <Input 
                    id="title" 
                    value={profile.title} 
                    onChange={(e) => setProfile({...profile, title: e.target.value})} 
                  />
                </div>
                <div>
                  <Label htmlFor="expertise">Areas of Expertise</Label>
                  <Input 
                    id="expertise" 
                    value={profile.expertise.join(', ')} 
                    onChange={(e) => setProfile({...profile, expertise: e.target.value.split(', ')})} 
                  />
                </div>
                <div>
                  <Label htmlFor="experience">Years of Experience</Label>
                  <Input 
                    id="experience" 
                    type="number" 
                    value={profile.experience} 
                    onChange={(e) => setProfile({...profile, experience: parseInt(e.target.value)})} 
                  />
                </div>
                <div>
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea 
                    id="bio" 
                    value={profile.bio} 
                    onChange={(e) => setProfile({...profile, bio: e.target.value})} 
                  />
                </div>
                <div>
                  <Label htmlFor="resume">Resume</Label>
                  <Input 
                    id="resume" 
                    type="file" 
                    onChange={handleResumeUpload}
                    accept=".pdf,.doc,.docx"
                  />
                  {profile.resume && (
                    <p className="text-sm text-muted-foreground mt-1">
                      Current resume: {profile.resume.name}
                    </p>
                  )}
                </div>
                <Button type="submit">Update Profile</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="jobs">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Your Jobs</CardTitle>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      View Jobs <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Applied Jobs</DropdownMenuItem>
                    <DropdownMenuItem>Saved Jobs</DropdownMenuItem>
                    <DropdownMenuItem>Shortlisted</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Applied Jobs</h3>
                  {jobs.applied.map(job => (
                    <div key={job.id} className="flex justify-between items-center p-4 border rounded-lg mb-2">
                      <div>
                        <h4 className="font-medium">{job.title}</h4>
                        <p className="text-sm text-muted-foreground">{job.company}</p>
                      </div>
                      <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">
                        {job.status}
                      </span>
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Saved Jobs</h3>
                  {jobs.saved.map(job => (
                    <div key={job.id} className="flex justify-between items-center p-4 border rounded-lg mb-2">
                      <div>
                        <h4 className="font-medium">{job.title}</h4>
                        <p className="text-sm text-muted-foreground">{job.company}</p>
                      </div>
                      <Button variant="outline" size="sm">Apply Now</Button>
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Shortlisted</h3>
                  {jobs.shortlisted.map(job => (
                    <div key={job.id} className="flex justify-between items-center p-4 border rounded-lg mb-2">
                      <div>
                        <h4 className="font-medium">{job.title}</h4>
                        <p className="text-sm text-muted-foreground">{job.company}</p>
                      </div>
                      <Button variant="outline" size="sm">View Details</Button>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="messages">
          <Card>
            <CardHeader>
              <CardTitle>Your Messages</CardTitle>
              <CardDescription>Communicate with potential employers here.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>You have no new messages.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

