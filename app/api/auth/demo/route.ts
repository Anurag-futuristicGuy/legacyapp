import { NextResponse } from 'next/server'

const DEMO_CREDENTIALS = {
  expert: {
    email: 'demo@gmail.com',
    password: 'demo'
  },
  employer: {
    email: 'admin@gmail.com',
    password: 'admin'
  }
}

export async function POST(request: Request) {
  const body = await request.json()

  if (body.email === DEMO_CREDENTIALS.expert.email && body.password === DEMO_CREDENTIALS.expert.password) {
    return NextResponse.json({
      user: {
        id: 'demo-expert',
        name: 'Demo Expert',
        email: DEMO_CREDENTIALS.expert.email,
        role: 'expert',
        profile: {
          title: 'Senior Software Engineer',
          experience: '20+ years',
          skills: ['JavaScript', 'React', 'Node.js', 'Python'],
          bio: 'Experienced software engineer with a passion for mentoring.',
        }
      },
      token: 'demo-token-expert'
    })
  }

  if (body.email === DEMO_CREDENTIALS.employer.email && body.password === DEMO_CREDENTIALS.employer.password) {
    return NextResponse.json({
      user: {
        id: 'demo-employer',
        name: 'Demo Employer',
        email: DEMO_CREDENTIALS.employer.email,
        role: 'employer',
        profile: {
          companyName: 'Tech Solutions Inc.',
          position: 'HR Manager',
          companySize: '51-200',
          bio: 'Leading tech company seeking experienced professionals.',
        }
      },
      token: 'demo-token-employer'
    })
  }

  return NextResponse.json(
    { error: 'Invalid credentials' },
    { status: 401 }
  )
}

