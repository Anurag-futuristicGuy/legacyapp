import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Code, PenTool, Users, Activity, Car } from 'lucide-react'

const categories = [
  { name: "Accounting / Finance", icon: Briefcase, count: 12 },
  { name: "Marketing", icon: PenTool, count: 86 },
  { name: "Design", icon: PenTool, count: 43 },
  { name: "Development", icon: Code, count: 12 },
  { name: "Human Resource", icon: Users, count: 55 },
  { name: "Automotive Jobs", icon: Car, count: 2 },
  { name: "Customer Service", icon: Activity, count: 2 },
  { name: "Health and Care", icon: Activity, count: 25 },
  { name: "Project Management", icon: Briefcase, count: 92 },
]

export function JobCategories() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Popular Job Categories</h2>
      <p className="text-center mb-12 text-muted-foreground">
        2020 jobs live - 293 added today.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {category.name}
              </CardTitle>
              <category.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{category.count}</div>
              <p className="text-xs text-muted-foreground">
                Open position{category.count !== 1 ? 's' : ''}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

