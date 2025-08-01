import {Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, url: "https://github.com/mariakamboh", label: "GitHub" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/maria-kamboh-94ab7224b/", label: "LinkedIn" },
    { icon: Mail, url: "mailto:mariakamboh55@email.com", label: "Email" }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Maria Kamboh</h3>
            <p className="text-muted-foreground max-w-md">
              Frontend Developer passionate about building sleek, responsive, and user-friendly web applications. Crafting meaningful digital experiences with modern technologies like React and TypeScript.
              Always learning. Always building. Always improving.


            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-card rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
            <div className="text-sm text-muted-foreground space-y-1">
                <p>📍 <strong>Location:</strong> Karachi, Pakistan</p>
                <p>📧 <strong>Email:</strong> <a href="mailto:maria.kamboh@example.com">maria.kamboh@example.com</a></p>
                <p>📞 <strong>Phone:</strong> <a href="tel:03073467377">+92 307 3467377</a></p>
            </div>


          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {currentYear} Maria Kamboh. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
