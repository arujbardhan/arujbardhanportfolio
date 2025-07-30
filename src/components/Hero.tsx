import { Button } from '@/components/ui/button';
import TypingAnimation from '@/components/ui/typing-animation';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 60 }).map((_, i) => (
            <div key={i} className="border border-primary/20 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
          ))}
        </div>
      </div>

      {/* Floating Code Elements */}
      <div className="absolute top-20 left-10 text-primary/20 font-mono text-sm animate-float">
        {"</>"}
      </div>
      <div className="absolute top-40 right-20 text-accent/20 font-mono text-xs animate-float" style={{ animationDelay: '1s' }}>
        {"function()"}
      </div>
      <div className="absolute bottom-40 left-20 text-secondary/20 font-mono text-xs animate-float" style={{ animationDelay: '2s' }}>
        {"[security]"}
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 animate-slide-up">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <span className="text-primary text-sm font-medium">● Available for Opportunities</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text relative">
                  Aruj Bardhan
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent opacity-20 blur-xl rounded-lg" />
                </span>
              </h1>
              
              <div className="text-xl lg:text-2xl text-muted-foreground min-h-[2rem] flex items-center">
                <TypingAnimation
                  texts={[
                    "Cybersecurity Analyst",
                    "Software Developer", 
                    "Data Engineer",
                    "AI/ML Enthusiast",
                    "Security Researcher"
                  ]}
                  speed={80}
                  deleteSpeed={40}
                  pauseDuration={1500}
                  className="text-accent font-medium"
                />
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-xl" />
              <div className="relative bg-background-secondary/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Building innovative solutions at the intersection of{' '}
                  <span className="text-primary font-semibold">cybersecurity</span>,{' '}
                  <span className="text-accent font-semibold">AI/ML development</span>, and{' '}
                  <span className="text-secondary font-semibold">software engineering</span>. 
                  Passionate about creating secure, efficient systems that make a real-world impact.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground shadow-lg hover:shadow-primary/25 hover:scale-105 transition-all duration-300"
                asChild
              >
                <a href="#projects" className="relative z-10">
                  <span>View Projects</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="group border-2 border-accent/50 text-accent hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
                asChild
              >
                <a href="#contact" className="flex items-center gap-2">
                  <span>Contact Me</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </Button>
            </div>

            {/* Tech Stack Preview */}
            <div className="flex flex-wrap gap-3 pt-4">
              {['Python', 'Java', 'SQL', 'React', 'TensorFlow'].map((tech) => (
                <div 
                  key={tech}
                  className="px-3 py-1 bg-background-secondary border border-primary/20 rounded-full text-sm text-muted-foreground hover:border-primary/40 hover:text-primary transition-all duration-300 cursor-default"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Animated Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse" />
              <div className="absolute inset-4 rounded-full border border-accent/30 animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="absolute inset-8 rounded-full border border-secondary/20 animate-pulse" style={{ animationDelay: '1s' }} />
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-full blur-3xl opacity-60 animate-glow-pulse" />
              
              {/* Profile Image */}
              <div className="relative">
                <img
                  src="/lovable-uploads/a8ea17dc-5b68-461e-b24c-417d65274126.png"
                  alt="Aruj Bardhan"
                  className="relative w-80 h-80 rounded-full object-cover border-4 border-primary/30 shadow-2xl hover:scale-110 transition-transform duration-300 ease-in-out"
                />
                
                
                {/* Floating Tech Icons */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full flex items-center justify-center animate-float">
                  <span className="text-primary font-mono text-xs">AI</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                  <span className="text-accent font-mono text-xs">SEC</span>
                </div>
                <div className="absolute top-1/2 -right-8 w-10 h-10 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                  <span className="text-secondary font-mono text-xs">DB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;