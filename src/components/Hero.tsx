import { ArrowRight, Download, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedBackground from './AnimatedBackground';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <div className="fade-in space-y-8">
         

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight heading-primary">
            <span className="gradient-text">Maria Kamboh</span>
            <br />
            <span className="text-foreground">Frontend Developer</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-professional mb-8 max-w-3xl mx-auto leading-relaxed">
            As a passionate Frontend Developer with expertise in React, I specialize in building dynamic, user-friendly interfaces that deliver exceptional user experiences. With a keen eye for design and a deep understanding of modern web technologies, I am committed to creating responsive and visually appealing applications that are both performant and scalable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="group btn-enhanced bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <a 
              href="/resume.pdf"
              download
            >
              <Button 
                variant="outline" 
                size="lg"
                className="btn-enhanced px-8 py-6 text-lg rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </a>
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator cursor-pointer"
           onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
        <div className="w-8 h-12 border-2 border-primary rounded-full flex justify-center items-end pb-2">
          <ChevronDown className="h-5 w-5 text-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
