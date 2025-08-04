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
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-surface">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Passionate developer with a love for creating exceptional digital experiences
          </p>
        </div>

        {/* IMAGE + TEXT */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-20 mb-16 md:mb-20 text-center lg:text-left">
          {/* Image */}
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-80 xl:h-80 max-w-[320px] slide-up flex-shrink-0 mx-auto lg:mx-0 mb-8 lg:mb-0">
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

          {/* Text */}
          <div className="max-w-xl space-y-4 md:space-y-6 slide-up px-4 sm:px-6 lg:px-0">
            <h3 className="text-2xl sm:text-3xl font-bold">Hi, I'm Maria Kamboh</h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              I'm a frontend developer passionate about crafting modern, user-focused web applications. I specialize in React.js and TypeScript, and have experience with JavaScript, Java, and C++.
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              I'm focused on clean design, performance, and responsive interfaces. I'm also exploring Node.js and cloud technologies to expand my full-stack capabilities.
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Outside of coding, I enjoy working on personal projects, exploring AI and machine learning, and occasionally writing—like my published article in Dawn Newspaper.
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3 pt-4 justify-center lg:justify-start">
              {['C++', 'Java','HTML/CSS', 'JavaScript', 'React','TypeScript'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-2 sm:px-4 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* HIGHLIGHTS SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-4 sm:px-0">
          {highlights.map((item, index) => (
            <Card key={index} className="border-0 shadow-lg hover:scale-[1.02] transition-transform duration-300">
              <CardContent className="p-4 md:p-6 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-tr from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <item.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <h4 className="text-base md:text-lg font-semibold mb-2">{item.title}</h4>
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