import { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Zap, Target, Sparkles } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-amber-100 to-yellow-100 opacity-50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-8 md:py-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Tejal Desai</span>
              </h1>
              <div className="text-xl text-gray-700 leading-relaxed">
                <p className="font-semibold text-gray-800 mb-4">Founder | Software Engineer | EdTech Builder</p>
                <p className="text-lg">
                  Hi, I'm Tejal — a developer, mentor, and builder passionate about making learning more accessible and engaging through technology. 
                  I bring over a decade of experience in cloud infrastructure, DevOps, and developer tools from companies like Google and Twitter, 
                  and I'm now channeling that expertise into the future of education.
                </p>
              </div>
                     <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-6 rounded-xl shadow-lg">
                       <p className="text-lg font-medium">
                         My Mission: To bring joyful, personalized, and accessible learning to every child by blending thoughtful design, powerful technology, and deep empathy.
                       </p>
                     </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-amber-400 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
                <div className="w-full h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center">
                  <div className="text-white text-center">
                    <Sparkles className="w-16 h-16 mx-auto mb-4 opacity-80" />
                    <h3 className="text-xl font-bold">Portfolio Image</h3>
                    <p className="text-sm opacity-90">Coming Soon</p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-3">What I Do</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              I build playful, project-based learning experiences powered by AI and thoughtful design.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "EdTech Innovation",
                description: "Building tools like BrickMaster AI, a generative AI platform that creates personalized LEGO builds and architecture lesson plans for kids aged 7–13.",
                color: "from-orange-500 to-amber-500"
              },
              {
                icon: Users,
                title: "Full-Stack Development",
                description: "End-to-end experience with React, Node.js, TypeScript, and cloud platforms — creating scalable, engaging web applications.",
                color: "from-purple-500 to-indigo-500"
              },
              {
                icon: Zap,
                title: "Coding & STEM Education",
                description: "Teaching coding to kids using Scratch and Python through custom curriculum design and one-on-one tutoring for elementary and middle school students.",
                color: "from-green-500 to-emerald-500"
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
        <section className="py-12 bg-gradient-to-br from-orange-50 to-amber-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-4xl font-bold mb-2">Featured Projects</h2>
                  <p className="text-gray-600">Some of my recent work</p>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  id: '1',
                  title: '🎓 BrickMaster AI',
                  description: 'A full-stack AI-powered LEGO learning platform that creates personalized build instructions and educational content based on kids\' interests and age.',
                  tags: ['AI', 'EdTech'],
                  link: 'https://brickmasterai.com'
                },
                {
                  id: '2',
                  title: '🧠 Interactive Math Game',
                  description: 'A playful multiplication game for kids with animated bees, designed to reinforce skills with fun and visual cues. Built in React.',
                  tags: ['React', 'Educational'],
                  link: '#/MathCorner'
                },
                {
                  id: '3',
                  title: '👩🏽‍💻 Facilitate Kids Coding Clubs',
                  description: 'Teaching coding to kids using Scratch and Python through custom curriculum design and one-on-one tutoring for elementary and middle school students.',
                  tags: ['Curriculum', 'Mentorship'],
                  link: '#'
                }
              ].map((project) => (
                <Card key={project.id} className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="flex gap-2 mb-3">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} className="bg-purple-100 text-purple-700">{tag}</Badge>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <a href={project.link}>
                      <Button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600">
                        Learn More
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>



      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-orange-600 to-amber-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl text-orange-100 mb-8">
            I'm always excited to collaborate on new projects and explore innovative solutions to complex problems.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to={createPageUrl("Projects")}>
              <Button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-6 text-lg rounded-xl">
                View My Work
              </Button>
            </Link>
            <Button 
              onClick={() => setIsContactFormOpen(true)}
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </section>
      
      {/* Contact Form Modal */}
      <ContactForm
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
        title="Get In Touch"
        submitText="Send Message"
      />
    </div>
  );
}