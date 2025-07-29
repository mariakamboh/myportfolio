import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: "QA Intern",
      company: "Capelin Solutions",
      duration: "July 2024 – August 2024",
      location: "Remote",
      responsibilities: [
        "Reported UI bugs and functional issues during internal app testing",
        "Collaborated with the development team to resolve issues and improve performance",
        "Conducted UI/UX reviews for responsiveness and user experience",
        "Used task management tools to log bugs and track fixes systematically"
      ],
      technologies: [
        { name: "Bug Tracking", icon: "🐛" },
        { name: "UI Testing", icon: "🔍" }, 
        { name: "Task Management", icon: "📋" },
        { name: "Quality Assurance", icon: "✅" },
        { name: "Performance Testing", icon: "⚡" },
        { name: "User Experience", icon: "👤" },
        { name: "Test Documentation", icon: "📝" }
      ]
    },
    {
      title: "Associate Software Engineer",
      company: "Capelin Solutions",
      duration: "August 2024 - Present",
      location: "Remote",
      responsibilities: [
          "Developed and maintained user interfaces using React and TypeScript",
          "Collaborated with cross-functional teams to implement scalable frontend features",
          "Identified and resolved UI/UX issues to enhance overall user experience",
          "Participated in code reviews and Agile sprints for continuous improvement",
          "Reported and fixed UI bugs, contributing to quality assurance and performance"
  ],
    technologies: [
      { name: "Frontend Development", icon: "💻" },
      { name: "React", icon: "⚛️" },
      { name: "TypeScript", icon: "🟦" },
      { name: "UI/UX", icon: "🎨" },
      { name: "GitHub", icon: "🐙" },
    ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 heading-primary">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-professional max-w-2xl mx-auto">
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
                      <h3 className="text-2xl font-bold heading-primary">{experience.title}</h3>
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
                  <h5 className="text-lg font-semibold mb-3 heading-secondary">Key Responsibilities:</h5>
                  <ul className="space-y-2">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-professional">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="text-lg font-semibold mb-3 heading-secondary">Technologies Used:</h5>
                  <div className="flex flex-wrap gap-3">
                    {experience.technologies.map((tech, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        <span className="text-base">{tech.icon}</span>
                        <span>{tech.name}</span>
                      </div>
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
