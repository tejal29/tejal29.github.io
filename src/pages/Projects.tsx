import { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Play } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function Projects() {
  const [isPilotFormOpen, setIsPilotFormOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const projects = [
    {
      id: '1',
      title: '🎓 BrickMaster AI',
      description: 'A full-stack AI-powered LEGO learning platform that creates personalized build instructions and educational content based on kids\' interests and age. Features generative AI for creating custom LEGO builds and architecture lesson plans for children aged 7–13.',
      tags: ['AI', 'EdTech', 'Full-Stack'],
      link: 'https://brickmasterai.com',
      type: 'external',
      status: 'Live'
    },
    {
      id: '2',
      title: '🧠 Interactive Math Game',
      description: 'A playful multiplication game for kids with animated bees, designed to reinforce math skills with fun and visual cues. Built in React with Framer Motion animations and responsive design. Features engaging bee death animations and progressive difficulty levels.',
      tags: ['React', 'Educational', 'Animation'],
      link: '#/MathCorner',
      type: 'internal',
      status: 'Live'
    },
    {
      id: '3',
      title: '👩🏽‍💻 Facilitate Kids Coding Clubs',
      description: 'Teaching coding to kids using Scratch and Python through custom curriculum design and one-on-one tutoring for elementary and middle school students.',
      tags: ['Curriculum', 'Mentorship', 'Education'],
      link: '#',
      type: 'internal',
      status: 'In Progress'
    },
    {
      id: '4',
      title: '💻 CodeCrafter Kids',
      description: 'Simple, hands-on coding lessons to help kids learn Scratch and Python, designed from real experience working with elementary and middle school students.✨ Fun, beginner-friendly, and easy to follow — even for first-time coders.',
      tags: ['EdTech', 'Curriculum', 'Kids'],
      link: '#/Blog',
      type: 'internal',
      status: 'Coming Soon'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <Link to={createPageUrl("Home")}>
            <Button variant="outline" className="mb-8 border-2 border-orange-500 text-orange-600 hover:bg-orange-50">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Home
            </Button>
          </Link>
          
          <div className="text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Projects
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A showcase of my development work, from AI-powered educational platforms to interactive learning experiences.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} className="bg-purple-100 text-purple-700">{tag}</Badge>
                    ))}
                  </div>
                  <Badge className={`${
                    project.status === 'Live' 
                      ? 'bg-green-100 text-green-700' 
                      : project.status === 'Coming Soon'
                      ? 'bg-orange-100 text-orange-700'
                      : project.status === 'In Progress'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {project.status}
                  </Badge>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex gap-3">
                  {project.id === '3' ? (
                    // No button for Facilitate Kids Coding Clubs
                    <div className="w-full text-center text-gray-500 text-sm py-2">
                      Ongoing project
                    </div>
                  ) : project.id === '4' ? (
                    // Join Pilot button for CodeCrafter Kids
                    <Button 
                      onClick={() => setIsPilotFormOpen(true)}
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white"
                    >
                      Join Pilot
                    </Button>
                  ) : (
                    // Regular buttons for other projects
                    <a 
                      href={project.link} 
                      target={project.type === 'external' ? '_blank' : '_self'}
                      rel={project.type === 'external' ? 'noopener noreferrer' : ''}
                    >
                      <Button className={`w-full ${
                        project.type === 'external'
                          ? 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600'
                          : 'bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600'
                      } text-white`}>
                        {project.type === 'external' ? (
                          <>
                            <ExternalLink className="mr-2 w-4 h-4" />
                            Visit Site
                          </>
                        ) : (
                          <>
                            <Play className="mr-2 w-4 h-4" />
                            View Project
                          </>
                        )}
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Interested in collaborating?</h3>
              <p className="text-gray-600 mb-6">
                I'm always excited to work on new projects that make learning more engaging and accessible.
              </p>
              <Button 
                onClick={() => setIsContactFormOpen(true)}
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-3"
              >
                Get In Touch
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Pilot Form Modal */}
      <ContactForm
        isOpen={isPilotFormOpen}
        onClose={() => setIsPilotFormOpen(false)}
        title="Join CodeCrafter Kids Pilot"
        submitText="Join Pilot"
        defaultMessage="I am interested in joining the pilot for Scratch or Python for my 7 year old kid. Send me the details."
      />
      
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
