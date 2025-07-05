import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, ExternalLink, Download, MapPin, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">Hyeonu Cha</div>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Resume
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container py-24 md:py-32">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Software
                <span className="text-primary"> Developer</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-[600px]">
                Passionate about creating exceptional digital experiences with modern technologies. Specialized in
                React, Next.js, and cloud solutions.
              </p>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Sydney, NSW, Australia</span>
              <span>•</span>
              <span>Available for work</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <a href="mailto:ericcha901@gmail.com">
                  <Mail className="h-4 w-4 mr-2" />
                  Get In Touch
                </a>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent" asChild>
                <a href="https://github.com/Hyeonu-Cha" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  View GitHub
                </a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-8">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Profile"
                width={400}
                height={400}
                className="rounded-xl object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container py-24 bg-muted/50">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a passionate Functional Tester with 1+ years of experience building test plans and Automation Testing. I
            specialize in React ecosystem, cloud architecture, and creating user-centric solutions that drive business
            growth. My experience spans from early-stage startups to enterprise-level applications.
          </p>
          <div className="grid gap-6 md:grid-cols-3 mt-12">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-primary">20+</CardTitle>
                <CardDescription>Projects Completed</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-primary">1+</CardTitle>
                <CardDescription>Years Experience</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-primary">10+</CardTitle>
                <CardDescription>Technologies Mastered</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container py-24">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience in building modern web
              applications.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Project 1 */}
            <Card className="group hover:shadow-lg transition-shadow">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=200&width=350"
                  alt="E-commerce Platform"
                  width={350}
                  height={200}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>E-commerce Platform</CardTitle>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardDescription>
                  Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Stripe</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="group hover:shadow-lg transition-shadow">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=200&width=350"
                  alt="Task Management App"
                  width={350}
                  height={200}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Task Management App</CardTitle>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardDescription>
                  Collaborative project management tool with real-time updates, team collaboration, and analytics.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Socket.io</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="group hover:shadow-lg transition-shadow">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=200&width=350"
                  alt="Analytics Dashboard"
                  width={350}
                  height={200}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Analytics Dashboard</CardTitle>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardDescription>
                  Real-time analytics dashboard with interactive charts, data visualization, and reporting features.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Vue.js</Badge>
                  <Badge variant="secondary">D3.js</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Redis</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container py-24 bg-muted/50">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Skills & Technologies</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I work with modern technologies and frameworks to build scalable, performant applications.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Frontend</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge>React</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>Vue.js</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>Tailwind CSS</Badge>
                  <Badge>Framer Motion</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Backend</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge>Node.js</Badge>
                  <Badge>Python</Badge>
                  <Badge>Express</Badge>
                  <Badge>FastAPI</Badge>
                  <Badge>REST APIs</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Database</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge>PostgreSQL</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>Redis</Badge>
                  <Badge>Supabase</Badge>
                  <Badge>Prisma</Badge>
                  <Badge>Firebase</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">DevOps & Tools</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge>AWS</Badge>
                  <Badge>Vercel</Badge>
                  <Badge>Docker</Badge>
                  <Badge>Git</Badge>
                  <Badge>CI/CD</Badge>
                  <Badge>Figma</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="container py-24">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Experience</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My professional journey and key achievements in software development.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Functional Tester</CardTitle>
                    <CardDescription className="text-base">Rode Microphones.</CardDescription>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    2024 Feb - Present
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Design and implement comprehensive test plans to validate software and hardware quality and functionality</li>
                  <li>• Develop Automated UI/UX Tests for RØDE Central using Python, Swift</li>
                  <li>• Enhance the overall integrity and functionality of products including RODECaster Video.</li>
                  <li>• Collaborated with product and software/firmware teams to deliver user-centric features</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>System Integration Software</CardTitle>
                    <CardDescription className="text-base">Zen Consulting</CardDescription>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    2020 Jan - 2020 Mar
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Optimized code and troubleshot errors in ABAP, delivering high-quality SAP solutions using debuggers</li>
                  <li>• Assisted in designing backend (ABAP) and frontend (SAP GUI) for various projects</li>
                  <li>• Collaborated in agile development environment with cross-functional teams</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container py-24 bg-muted/50">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground">
              I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your
              ideas to life.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <a href="mailto:ericcha901@gmail.com">
                <Mail className="h-4 w-4 mr-2" />
                ericcha901@gmail.com
              </a>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
              <a href="https://www.linkedin.com/in/hyeonu-cha/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </a>  
            </Button>
          </div>
          <div className="pt-8 border-t">
            <p className="text-sm text-muted-foreground">© 2025 Hyeonu Cha. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
