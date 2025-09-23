import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-featured online store with user authentication, payment processing, inventory management, and admin dashboard. Built with React frontend and node.js backend.",
      technologies: ["React", "node.js", "PostgreSQL", "Stripe", "Redis", "Docker"],
      features: ["User Authentication", "Payment Processing", "Inventory Management", "Admin Dashboard", "Order Tracking"],
      github: "https://github.com/Ahmed122223-g/E-commerce-Platform",
      demo: "https://github.com/Ahmed122223-g/E-commerce-Platform",
      status: "Live"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team workspaces, file sharing, and progress tracking. Features drag-and-drop interface and notifications.",
      technologies: ["React", "Node.js", "pgstoreSQL", "Express", "JWT"],
      features: ["Real-time Collaboration", "Drag & Drop Interface", "File Sharing", "Team Workspaces", "Push Notifications"],
      github: "https://ahmed-mohamed-portfolio.vercel.app",
      demo: "https://ahmed-mohamed-portfolio.vercel.app",
      status: "In Development"
    },
    {
      title: "Social Media Clone",
      description: "Instagram-inspired social platform with photo sharing, real-time messaging, stories, and social interactions. Includes content moderation and recommendation algorithms.",
      technologies: ["React", "FastAPI", "PostgreSQL", "AWS S3"],
      features: ["Photo Sharing", "Real-time Chat", "Stories Feature", "Like & Comment System", "Content Moderation"],
      github: "https://ahmed-mohamed-portfolio.vercel.appg",
      demo: "https://ahmed-mohamed-portfolio.vercel.app",
      status: "In Development"
    },
    {
      title: "Portfolio Website",
      description: "Responsive personal portfolio showcasing projects, skills, and experience. Features smooth animations, dark theme, and optimized performance with perfect lighthouse scores.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      features: ["Responsive Design", "Smooth Animations", "SEO Optimized", "Performance Optimized", "Contact Form"],
      github: "https://github.com/Ahmed122223-g/byte-brigade-portfolio",
      demo: "https://ahmed-mohamed-portfolio.vercel.app",
      status: "Live"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-accent-gradient bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative solutions and technical expertise across various domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-card-gradient border-border hover:shadow-glow-accent transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <Badge 
                    variant={project.status === "Live" ? "default" : "secondary"}
                    className={project.status === "Live" ? "bg-green-500/20 text-green-400 border-green-500/30" : ""}
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs border-accent/30 text-accent">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    size="sm" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
