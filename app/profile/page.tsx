import { Button } from '@/components/ui/button'

// This would typically come from a database
const profile = {
  name: 'John Doe',
  title: 'Retired Senior Project Manager',
  expertise: ['Project Management', 'Team Leadership', 'Agile Methodologies'],
  experience: 30,
  bio: 'Experienced project manager with a track record of successful large-scale IT implementations.',
}

export default function Profile() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{profile.name}</h1>
        <h2 className="text-xl text-gray-600 mb-6">{profile.title}</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Areas of Expertise</h3>
          <div className="flex flex-wrap gap-2">
            {profile.expertise.map((skill, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Years of Experience</h3>
          <p>{profile.experience} years</p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Bio</h3>
          <p>{profile.bio}</p>
        </div>
        
        <Button>Edit Profile</Button>
      </div>
    </div>
  )
}

