import { GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Education = () => {
  const educationHistory = [
    {
      level: "🎓 Matriculation",
      institution: "Sindh Public High School",
      duration: "2017 – 2019",
      description: "Secondary School Certificate with strong academic foundation"
    },
    {
      level: "🎓 Intermediate", 
      institution: "Government Girls Degree College",
      duration: "2019 – 2021",
      description: "Higher Secondary Certificate in Pre-Engineering"
    },
    {
      level: "🎓 Bachelor's – BS Computer Science",
      institution: "IBA University", 
      duration: "2022 – Present",
      description: "Currently pursuing Bachelor's degree with focus on software development",
      highlight: true
    }
  ];

  return (
    <section id="education" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 heading-primary">
            <span className="gradient-text">Education</span> History
          </h2>
          <p className="text-xl text-professional max-w-2xl mx-auto">
            Academic journey and educational background
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {educationHistory.map((edu, index) => (
            <Card 
              key={index} 
              className={`card-hover border-0 shadow-lg animate-slide-in-left ${
                edu.highlight ? 'ring-2 ring-primary/30' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-tr from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold heading-primary mb-2">{edu.level}</h3>
                    <h4 className="text-xl font-semibold text-primary mb-2">{edu.institution}</h4>
                    <p className="text-professional mb-3">{edu.duration}</p>
                    <p className="text-professional leading-relaxed">{edu.description}</p>
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

export default Education;