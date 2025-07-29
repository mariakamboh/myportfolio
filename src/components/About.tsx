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
    <section id="about" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a love for creating exceptional digital experiences
          </p>
        </div>

        {/* IMAGE + TEXT */}
        <div className="grid lg:grid-cols-[220px_1fr] gap-12 items-start mb-24">
          <div className="slide-up flex justify-center lg:justify-start">
            <div className="relative w-[220px] h-[220px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl rotate-6 blur-sm"></div>
              <div className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
                <img 
                  src={profileImage} 
                  alt="Profile" 
                  className="w-full h-full object-cover relative z-10 mix-blend-normal"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/20 to-transparent z-20"></div>
              </div>
            </div>
          </div>

          <div className="slide-up space-y-6">
            <h3 className="text-3xl font-bold mb-6">Hi, I'm Maria Kamboh</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate frontend developer focused on building modern, user-centric web applications. I specialize in React.js, and I'm expanding my skills in Node.js and cloud technologies. My work emphasizes performance, clean design, and responsive interfaces.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I’m not coding, I’m usually diving into AI and machine learning concepts, building personal projects, or writing to express ideas—like my published article in Dawn Newspaper. I also enjoy learning new development tools and refining my skills through hands-on experimentation.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-4">
              {['C++', 'Java', 'JavaScript', 'React'].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* HIGHLIGHTS SECTION */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card key={index} className="card-hover border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-tr from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
