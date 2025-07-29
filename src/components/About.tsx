<section id="about" className="py-20 bg-surface">
  <div className="container mx-auto px-6">
    {/* HEADING + INTRO TEXT */}
    <div className="text-center mb-16 max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        About <span className="gradient-text">Me</span>
      </h2>
      <p className="text-xl text-muted-foreground">
        Passionate developer with a love for creating exceptional digital experiences
      </p>
    </div>

    {/* IMAGE + TEXT WRAPPER */}
    <div className="max-w-4xl mx-auto mb-20">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* IMAGE (unchanged) */}
        <div className="slide-up">
          <div className="relative w-72 h-72 mx-auto lg:mx-0">
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

        {/* TEXT */}
        <div className="slide-up">
          <h3 className="text-3xl font-bold mb-6">Hi, I'm Maria Kamboh</h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            I'm a passionate frontend developer focused on building modern, user-centric web applications...
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            When I’m not coding, I’m usually diving into AI and machine learning concepts...
          </p>
          <div className="flex flex-wrap gap-3">
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
    </div>

    {/* HIGHLIGHTS (unchanged) */}
    ...
  </div>
</section>
