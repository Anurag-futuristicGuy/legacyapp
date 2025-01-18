import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const blogPosts = [
  {
    id: 1,
    title: "The Power of Unretirement: Why Experienced Professionals Are Returning to Work",
    excerpt: "Discover why more retirees are choosing to return to the workforce and how their expertise is shaping modern businesses...",
    author: "John Smith",
    date: "March 15, 2024",
    category: "Career Insights",
    image: "/blog/unretirement.jpg"
  },
  {
    id: 2,
    title: "How Companies Thrive with Seasoned Expertise",
    excerpt: "Learn how businesses are leveraging the knowledge and experience of senior professionals to drive innovation and growth...",
    author: "Sarah Johnson",
    date: "March 14, 2024",
    category: "Success Stories",
    image: "/blog/expertise.jpg"
  },
  {
    id: 3,
    title: "Bridging the Generation Gap: The Value of Experience in Modern Workplaces",
    excerpt: "Exploring how experienced professionals are mentoring younger generations and creating stronger, more diverse teams...",
    author: "Michael Chen",
    date: "March 13, 2024",
    category: "Workplace Culture",
    image: "/blog/mentoring.jpg"
  },
  {
    id: 4,
    title: "From Retirement to Entrepreneurship: Second Career Success Stories",
    excerpt: "Inspiring stories of retirees who have successfully transitioned into entrepreneurship and consulting roles...",
    author: "Emily Rodriguez",
    date: "March 12, 2024",
    category: "Success Stories",
    image: "/blog/entrepreneurship.jpg"
  },
  {
    id: 5,
    title: "The Rise of Expert Consulting: How Experience Drives Business Growth",
    excerpt: "An in-depth look at how experienced consultants are helping businesses overcome challenges and achieve their goals...",
    author: "David Wilson",
    date: "March 11, 2024",
    category: "Industry Trends",
    image: "/blog/consulting.jpg"
  },
  {
    id: 6,
    title: "Transforming Industries: The Impact of Seasoned Professionals",
    excerpt: "Case studies of companies that have achieved remarkable growth by leveraging the expertise of experienced professionals...",
    author: "Lisa Thompson",
    date: "March 10, 2024",
    category: "Industry Impact",
    image: "/blog/impact.jpg"
  }
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Latest Blog Posts</h1>
        <p className="text-muted-foreground">
          Stay updated with the latest insights, tips, and trends in leveraging experienced talent
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Card key={post.id} className="flex flex-col">
            <CardHeader>
              <Image
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="mt-4">
                <span className="text-sm text-muted-foreground">{post.category}</span>
                <CardTitle className="mt-2 line-clamp-2">{post.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="mt-auto flex justify-between items-center">
              <div className="text-sm text-muted-foreground">
                By {post.author} • {post.date}
              </div>
              <Button asChild variant="outline">
                <Link href={`/blog/${post.id}`}>Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

