'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Twitter, Download, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function PortfolioComponent() {
  return (
    <div className="bg-[#F5F5F5] text-[#424242] min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-[#229799]">
            Your Name
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="#about" className="hover:text-[#48CFCB]">About Me</Link>
            <Link href="#projects" className="hover:text-[#48CFCB]">Projects</Link>
            <Link href="#skills" className="hover:text-[#48CFCB]">Skills</Link>
            <Link href="#achievements" className="hover:text-[#48CFCB]">Achievements</Link>
            <Link href="#contact" className="hover:text-[#48CFCB]">Contact</Link>
            <Link href="#resume" className="hover:text-[#48CFCB]">Resume</Link>
          </nav>
          <div className="flex space-x-2">
            <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Github className="h-6 w-6 text-[#229799] hover:text-[#48CFCB]" />
            </Link>
            <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-6 w-6 text-[#229799] hover:text-[#48CFCB]" />
            </Link>
            <Link href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-6 w-6 text-[#229799] hover:text-[#48CFCB]" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-12 md:pt-32 md:pb-24 bg-gradient-to-r from-[#48CFCB] to-[#229799] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">I&apos;m Your Name</h1>
          <p className="text-xl md:text-2xl mb-8">A Software Engineer Specializing in Your Specialty</p>
          <div className="flex justify-center space-x-4">
            <Button variant="secondary" asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#resume">View Resume</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Your Name"
              width={200}
              height={200}
              className="rounded-full mb-8 md:mb-0 md:mr-8"
            />
            <div>
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <p className="text-lg mb-4">
                Here&apos;s a brief introduction about yourself. Highlight your strengths, passion, and what makes you unique as a software engineer.
              </p>
              <div className="flex space-x-4">
                <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6 text-[#229799] hover:text-[#48CFCB]" />
                </Link>
                <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6 text-[#229799] hover:text-[#48CFCB]" />
                </Link>
                <Link href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-6 w-6 text-[#229799] hover:text-[#48CFCB]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <Card key={project} className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <CardTitle>Project {project}</CardTitle>
                  <CardDescription>Brief description of the project</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Technologies used: React, Node.js, MongoDB</p>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="#" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View GitHub
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="#" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {['JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'Git', 'AWS', 'Docker'].map((skill) => (
              <div key={skill} className="flex items-center p-4 bg-white rounded-lg shadow">
                <div className="mr-4 text-[#229799]">
                  {/* You can replace this with actual skill icons */}
                  <div className="w-8 h-8 bg-[#48CFCB] rounded-full"></div>
                </div>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Achievements</h2>
          <div className="space-y-8">
            {[1, 2, 3].map((achievement) => (
              <Card key={achievement}>
                <CardHeader>
                  <CardTitle>Achievement {achievement}</CardTitle>
                  <CardDescription>Year Achieved</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Brief description of the achievement or certification.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
          <div className="max-w-md mx-auto">
            <form className="space-y-4">
              <Input type="text" placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Textarea placeholder="Your Message" />
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
            <div className="mt-8 text-center">
              <p className="mb-2">Email: your.email@example.com</p>
              <div className="flex justify-center space-x-4">
                <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6 text-[#229799] hover:text-[#48CFCB]" />
                </Link>
                <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6 text-[#229799] hover:text-[#48CFCB]" />
                </Link>
                <Link href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-6 w-6 text-[#229799] hover:text-[#48CFCB]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#229799] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <nav className="flex flex-wrap justify-center md:justify-start space-x-4 mb-4 md:mb-0">
              <Link href="#about" className="hover:text-[#48CFCB]">About Me</Link>
              <Link href="#projects" className="hover:text-[#48CFCB]">Projects</Link>
              <Link href="#skills" className="hover:text-[#48CFCB]">Skills</Link>
              <Link href="#achievements" className="hover:text-[#48CFCB]">Achievements</Link>
              <Link href="#contact" className="hover:text-[#48CFCB]">Contact</Link>
            </nav>
            <Button variant="secondary" asChild>
              <Link href="/your-resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Link>
            </Button>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}