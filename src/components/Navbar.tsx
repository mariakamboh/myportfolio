import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Maria_Kamboh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-md ${
      isScrolled 
        ? 'bg-background/95 border-b border-border/50 shadow-lg' 
        : 'bg-background/80'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center space-x-3 hover:scale-105 transition-all duration-300"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <img 
                  src="/lovable-uploads/2c44de83-9203-4c76-b133-feb2c3cf01f1.png" 
                  alt="Maria Kamboh Logo" 
                  className="relative w-14 h-14 object-contain rounded-full border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-300" 
                />
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-1 bg-background/50 rounded-full px-2 py-1 border border-border/30">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="relative px-4 py-2.5 text-sm font-medium text-foreground/80 hover:text-foreground transition-all duration-300 rounded-full hover:bg-primary/10 group"
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 rounded-full transition-all duration-300"></div>
                </button>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              onClick={downloadResume}
              variant="outline"
              className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 rounded-full px-5"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
            <Button 
              onClick={() => scrollToSection('#contact')}
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground rounded-full px-6 py-2.5 font-medium shadow-lg hover:shadow-primary/25 hover:scale-105 transition-all duration-300"
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary hover:bg-primary/10 rounded-full p-2 transition-all duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-4 pt-4 pb-6 space-y-3 bg-background/95 backdrop-blur-md rounded-2xl mt-4 border border-border/50 shadow-xl">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-primary/10 rounded-xl transition-all duration-300 font-medium"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 border-t border-border/30 space-y-3">
                <Button 
                  onClick={downloadResume}
                  variant="outline"
                  className="w-full border-primary/30 text-primary hover:bg-primary/10 rounded-xl py-3"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
                <Button 
                  onClick={() => scrollToSection('#contact')}
                  className="w-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-xl py-3 font-medium"
                >
                  Let's Talk
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
