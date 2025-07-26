import { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories = [
    {
      category: "Languages",
      skills: [
        { name: 'C++', level: 70, icon: '💻' },
        { name: 'Java', level: 65, icon: '☕' },
        { name: 'JavaScript', level: 90, icon: '🟨' },
        { name: 'HTML/CSS', level: 90, icon: '🌐' },
      ]
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        { name: 'ReactJS', level: 95, icon: '⚛️' },
        { name: 'TypeScript', level: 20, icon: '🔷' },
      ]
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: 'GitHub', level: 85, icon: '🐙' },
        { name: 'VS Code', level: 95, icon: '💙' },
        { name: 'IntelliJ IDEA', level: 80, icon: '🧠' },
        { name: 'NetBeans', level: 75, icon: '☕' },
      ]
    },
    {
      category: "Database",
      skills: [
        { name: 'SQL', level: 75, icon: '🗄️' },
        { name: 'MySQL', level: 80, icon: '🐬' },
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 heading-primary">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-professional max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <div key={category.category} className="space-y-6 animate-slide-in-left" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
                <h3 className="text-2xl font-bold heading-secondary text-center lg:text-left">
                  {category.category}
                </h3>
                
                <div className="grid gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="text-lg font-semibold heading-secondary">{skill.name}</span>
                        </div>
                        <span className="text-sm text-professional font-medium">{skill.level}%</span>
                      </div>
                      
                      <div className="h-4 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * category.skills.length + skillIndex) * 150}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;