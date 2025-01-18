"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const jobComponents: { title: string; href: string; description: string }[] = [
  {
    title: "Find Jobs",
    href: "/jobs",
    description: "Search and apply for job opportunities that match your expertise.",
  },
  {
    title: "Job Categories",
    href: "/jobs/categories",
    description: "Browse jobs by industry, function, and location.",
  },
  {
    title: "Saved Jobs",
    href: "/jobs/saved",
    description: "View and manage your saved job listings.",
  },
  {
    title: "Job Alerts",
    href: "/jobs/alerts",
    description: "Set up and manage your job alert preferences.",
  },
]

const employerComponents: { title: string; href: string; description: string }[] = [
  {
    title: "Post a Job",
    href: "/employer/post-job",
    description: "Create and publish job listings to find the perfect candidate.",
  },
  {
    title: "Browse Candidates",
    href: "/employer/candidates",
    description: "Search through our database of experienced professionals.",
  },
  {
    title: "Company Profile",
    href: "/employer/profile",
    description: "Manage your company's presence and employer brand.",
  },
  {
    title: "Recruitment Dashboard",
    href: "/employer/dashboard",
    description: "Track your recruitment activities and manage applications.",
  },
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                pathname === "/" && "bg-accent/50"
              )}
            >
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Find Jobs</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {jobComponents.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href="/register?type=retiree"
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>For Employers</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {employerComponents.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href="/register?type=company"
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/blog" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                pathname === "/blog" && "bg-accent/50"
              )}
            >
              Blog
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

