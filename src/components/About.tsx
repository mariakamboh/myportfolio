import { Code, Palette, Zap, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const profileImage = '/lovable-uploads/77100541-b7cd-44c6-a59f-0294291072e7.png';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user experiences"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in team environments"
    }
  ];

  return (
    <section id="about" className="py-24 bg-surface">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with a love for creating exceptional digital experiences
          </p>
        </div>

        {/* IMAGE + TEXT */}
<div className="flex flex-col-reverse lg:flex-row items-start justify-center gap-12 lg:gap-20 mb-24 text-center lg:text-left">
          {/* Text */}
          <div className="max-w-xl space-y-6 slide-up">
            <h3 className="text-3xl font-bold">Hi, I'm Maria Kamboh</h3>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
            I'm a frontend developer passionate about crafting modern, user-focused web applications. I specialize in React.js and TypeScript, and have experience with JavaScript, Java, and C++.
          </p>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
            I’m focused on clean design, performance, and responsive interfaces. I’m also exploring Node.js and cloud technologies to expand my full-stack capabilities.
          </p>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Outside of coding, I enjoy working on personal projects, exploring AI and machine learning, and occasionally writing—like my published article in Dawn Newspaper.
          </p>


            <div className="flex flex-wrap gap-3 pt-4 justify-center lg:justify-start">
              {['C++', 'Java','HTML/CSS', 'JavaScript', 'React','TypeScript'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative w-64 h-64 lg:w-72 lg:h-72 slide-up">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl rotate-6 blur-sm"></div>
            <div className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover relative z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/20 to-transparent z-20"></div>
            </div>
          </div>
        </div>

        {/* HIGHLIGHTS SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card key={index} className="border-0 shadow-lg hover:scale-[1.02] transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-tr from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
