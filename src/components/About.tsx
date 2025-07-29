<div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
  {/* Image */}
  <div className="slide-up flex justify-center lg:justify-start">
    <div className="relative w-72 h-72">
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

  {/* Text */}
  <div className="slide-up flex flex-col gap-4">
    <h3 className="text-3xl font-bold">Hi, I'm Maria Kamboh</h3>
    <p className="text-muted-foreground leading-relaxed">
      I'm a passionate frontend developer focused on building modern, user-centric web applications. I specialize in React.js, and I'm expanding my skills in Node.js and cloud technologies. My work emphasizes performance, clean design, and responsive interfaces.
    </p>
    <p className="text-muted-foreground leading-relaxed">
      When I’m not coding, I’m usually diving into AI and machine learning concepts, building personal projects, or writing to express ideas—like my published article in Dawn Newspaper. I also enjoy learning new development tools and refining my skills through hands-on experimentation.
    </p>

    <div className="flex flex-wrap gap-3 pt-2">
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
