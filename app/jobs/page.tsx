import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

// This would typically come from a database
const jobs = [
  { id: 1, title: 'Senior Project Manager', company: 'Tech Corp', location: 'Remote' },
  { id: 2, title: 'Financial Advisor', company: 'Money Matters', location: 'New York, NY' },
  { id: 3, title: 'HR Consultant', company: 'People First', location: 'Chicago, IL' },
]

export default function Jobs() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Find Your Next Opportunity</h1>
      
      <div className="mb-8">
        <form className="flex space-x-4">
          <div className="flex-grow">
            <Label htmlFor="search" className="sr-only">Search Jobs</Label>
            <Input id="search" placeholder="Search for jobs..." />
          </div>
          <Button type="submit">Search</Button>
        </form>
      </div>

      <div className="space-y-6">
        {jobs.map((job) => (
          <div key={job.id} className="border p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
            <p className="text-gray-600 mb-4">{job.company} - {job.location}</p>
            <Button asChild>
              <Link href={`/jobs/${job.id}`}>View Details</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

