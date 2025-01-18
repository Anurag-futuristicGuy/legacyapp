"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import Link from 'next/link'

export default function RecruiterDashboard() {
  const [jobs] = useState([
    { id: 1, title: 'Senior Project Manager', applicants: 12 },
    { id: 2, title: 'Financial Advisor', applicants: 8 },
    { id: 3, title: 'HR Consultant', applicants: 5 },
  ])

  const handleJobPost = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Here you would typically send the new job data to your backend
    console.log('New job posted')
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Recruiter Dashboard</h1>
      <Tabs defaultValue="jobs">
        <TabsList className="mb-4">
          <TabsTrigger value="jobs">Posted Jobs</TabsTrigger>
          <TabsTrigger value="post">Post a New Job</TabsTrigger>
          <TabsTrigger value="applicants">Applicants</TabsTrigger>
        </TabsList>
        <TabsContent value="jobs">
          <Card>
            <CardHeader>
              <CardTitle>Your Posted Jobs</CardTitle>
              <CardDescription>Manage your job postings here.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {jobs.map((job) => (
                  <div key={job.id} className="flex justify-between items-center p-4 border rounded-lg">
                    <div>
                      <h3 className="text-lg font-medium">{job.title}</h3>
                      <p className="text-sm text-muted-foreground">{job.applicants} applicants</p>
                    </div>
                    <Button asChild variant="outline">
                      <Link href={`/jobs/${job.id}/applicants`}>View Applicants</Link>
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="post">
          <Card>
            <CardHeader>
              <CardTitle>Post a New Job</CardTitle>
              <CardDescription>Create a new job listing for retirees.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleJobPost} className="space-y-4">
                <div>
                  <Label htmlFor="jobTitle">Job Title</Label>
                  <Input id="jobTitle" required />
                </div>
                <div>
                  <Label htmlFor="jobDescription">Job Description</Label>
                  <Textarea id="jobDescription" required />
                </div>
                <div>
                  <Label htmlFor="requirements">Requirements</Label>
                  <Textarea id="requirements" required />
                </div>
                <div>
                  <Label htmlFor="salary">Salary Range</Label>
                  <Input id="salary" placeholder="e.g. $50,000 - $70,000" required />
                </div>
                <Button type="submit">Post Job</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="applicants">
          <Card>
            <CardHeader>
              <CardTitle>Applicants</CardTitle>
              <CardDescription>Review and manage applicants for your job postings.</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Add applicant management interface here */}
              <p>You have no new applicants at this time.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

