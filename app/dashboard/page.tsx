import Link from 'next/link'
import { Button } from '@/components/ui/button'

// This would typically come from a database
const postedJobs = [
  { id: 1, title: 'Senior Project Manager', applicants: 12 },
  { id: 2, title: 'Financial Advisor', applicants: 8 },
  { id: 3, title: 'HR Consultant', applicants: 5 },
]

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Recruiter Dashboard</h1>
      
      <div className="mb-8">
        <Button asChild>
          <Link href="/post-job">Post a New Job</Link>
        </Button>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Your Posted Jobs</h2>
      <div className="space-y-4">
        {postedJobs.map((job) => (
          <div key={job.id} className="border p-4 rounded-lg shadow-sm flex justify-between items-center">
            <div>
              <h3 className="text-lg font-medium">{job.title}</h3>
              <p className="text-gray-600">{job.applicants} applicants</p>
            </div>
            <Button asChild variant="outline">
              <Link href={`/jobs/${job.id}/applicants`}>View Applicants</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

