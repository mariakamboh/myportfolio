import { GraduationCap, Award, ExternalLink, Newspaper } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Education = () => {
  const education = {
    degree: "BS Computer Science",
    institution: "IBA University",
    duration: "2022 – Present",
    status: "Currently Pursuing",
    gpa: "Maintaining High Academic Standards"
  };

  const achievements = [
    {
      title: "Fully Funded Scholarship",
      description: "Awarded through Sindh Talent Hunt Program",
      icon: Award,
      highlight: true
    },
    {
      title: "Published Article",
      description: "\"Unfaithful Friend\" featured in Dawn Newspaper",
      date: "December 29, 2022",
      link: "https://www.dawn.com/news/1728838",
      icon: Newspaper,
      highlight: true
    }
  ];

  return (
    <section id="education" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic journey and notable accomplishments
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Education */}
          <Card className="card-hover border-0 shadow-lg mb-12 animate-slide-in-right">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-tr from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{education.degree}</h3>
                  <h4 className="text-xl font-semibold text-primary mb-2">{education.institution}</h4>
                  <div className="text-muted-foreground space-y-1">
                    <p>{education.duration} • {education.status}</p>
                    <p>{education.gpa}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className={`card-hover border-0 shadow-lg ${achievement.highlight ? 'ring-2 ring-primary/20' : ''} animate-slide-in-left`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-tr from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <achievement.icon className="h-6 w-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-foreground mb-2">{achievement.title}</h4>
                      <p className="text-muted-foreground mb-3">{achievement.description}</p>
                      
                      {achievement.date && (
                        <p className="text-sm text-primary font-medium mb-3">{achievement.date}</p>
                      )}
                      
                      {achievement.link && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="group"
                          onClick={() => window.open(achievement.link, '_blank')}
                        >
                          Read Article
                          <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;