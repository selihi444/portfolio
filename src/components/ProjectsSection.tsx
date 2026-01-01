import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";


export function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Plateforme e-commerce complète avec authentification utilisateur. Développée en HTML, CSS, PHP et SQL.",
      image: "login_img.jpg",
      technologies: ["HTML", "CSS", "PHP", "SQL"],
      liveUrl: "https://pin.it/6jLsBDDy4",
      githubUrl: "https://github.com/selihi444/ecommerce-platform.git"
    },
    {
      title: "gestion des Ressources Humaines App",
      description: "Une application de gestion des ressources humaines (GRH) est un logiciel qui centralise et automatise les tâches RH (paie, congés, recrutement, talents, formation, administration) (en cours).",
      image: "Slide5.jpg",
      technologies: ["Next.js", "JavaScript", "SQL", "Radix ui","React"],
      liveUrl: "",
      githubUrl: "https://github.com/selihi444"
    },
    // {
    //   title: "Weather Dashboard",
    //   description: "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    //   image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    //   technologies: ["Vue.js", "Express.js", "MongoDB", "Chart.js", "OpenWeather API"],
    //   liveUrl: "https://example.com",
    //   githubUrl: "https://github.com"
    // },
    // {
    //   title: "Social Media Dashboard",
    //   description: "A comprehensive social media management tool with analytics, scheduling, and multi-platform integration.",
    //   image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=600&h=400&fit=crop",
    //   technologies: ["React Native", "Firebase", "Python", "FastAPI", "Redis"],
    //   liveUrl: "https://example.com",
    //   githubUrl: "https://github.com"
    // },
    // {
    //   title: "Learning Management System",
    //   description: "An educational platform with course management, video streaming, progress tracking, and certificate generation.",
    //   image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    //   technologies: ["Next.js", "Prisma", "PostgreSQL", "AWS S3", "Stripe"],
    //   liveUrl: "https://example.com",
    //   githubUrl: "https://github.com"
    // },
    // {
    //   title: "Real Estate Platform",
    //   description: "A modern real estate platform with property listings, virtual tours, mortgage calculator, and agent management.",
    //   image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    //   technologies: ["React", "Django", "PostgreSQL", "Google Maps API", "AWS"],
    //   liveUrl: "https://example.com",
    //   githubUrl: "https://github.com"
    // }
  ];

  return (
    <section id="projects" className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects I've worked on, showcasing different technologies and approaches to problem-solving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group hover:shadow-lg transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <div>
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
              
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div> */} 
      </div>
    </section>
  );
}