import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import close from '@/assets/closet.png';
import news from '@/assets/new.png';
import subj from '@/assets/subject.png';

const Projects = () => {
  const projects = [
    {
      title: "Closet",
      description: "A React.js-based bridal and groom attire rental platform with a sleek UI, real-time inventory display, and smooth booking flow.",
      image: close,
      technologies: ["React","Bootstrap", "HTML/CSS3", "Material UI"],
      demo: "https://closet-web-project-sstz.vercel.app/",
      featured: true
    },
    {
      title: "News Summarizer",
      description: "An AI-powered text summarizer built with Python, Flask, and the BART model using Hugging Face Transformers.",
      image: news,
      technologies: ["Python", "React", "TailwindCSS", "Flask"],
      demo: "https://www.loom.com/share/badeece5f29240c8bd3f89d1272d7431",
    },
    {
      title: "Subject Withdrawal App",
      description: "A MERN stack subject withdrawal application with user authentication, form submission, and an admin panel for managing student requests.",
      image: subj,
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
      demo: "https://subject-withdrawl-app-988d-git-master-mariakambohs-projects.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and the technologies I've used to build them
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`group card-hover border-0 shadow-md overflow-hidden ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" size="sm" className="w-full">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Demo
                    </Button>
                  </a>
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
