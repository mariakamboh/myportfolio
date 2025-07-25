import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "Scientific Bit",
      duration: "March – May 2024",
      location: "Remote",
      responsibilities: [
        "Collaborated with the frontend team to build responsive UI components using React.js and Tailwind CSS",
        "Integrated REST APIs to display dynamic data on the dashboard",
        "Used Git and GitHub for version control and team collaboration",
        "Participated in code reviews, daily standups, and UI testing",
        "Implemented responsive design patterns for mobile and desktop compatibility"
      ],
      technologies: ["React.js", "Tailwind CSS", "REST APIs", "Git", "GitHub", "JavaScript", "HTML", "CSS"]
    },
    {
      title: "Frontend Developer Intern",
      company: "Capelin Solutions",
      duration: "June – August 2024",
      location: "Remote",
      responsibilities: [
        "Developed responsive web layouts using HTML, CSS, Flexbox, and Grid systems",
        "Implemented database integration using Java, JDBC, and MySQL",
        "Built dynamic user interfaces with ReactJS framework",
        "Collaborated with senior developers on multiple client projects",
        "Optimized web applications for performance and user experience"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "ReactJS", "Java", "MySQL", "JDBC"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional experience that shaped my development journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <Card key={index} className="card-hover border-0 shadow-lg mb-8 animate-slide-in-left">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="mb-4 md:mb-0">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      <h3 className="text-2xl font-bold text-foreground">{experience.title}</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-primary mb-2">{experience.company}</h4>
                    
                    <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{experience.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="text-lg font-semibold mb-3 text-foreground">Key Responsibilities:</h5>
                  <ul className="space-y-2">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="text-lg font-semibold mb-3 text-foreground">Technologies Used:</h5>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;