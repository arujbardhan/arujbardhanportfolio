import { Button } from '@/components/ui/button';
import TypingAnimation from '@/components/ui/typing-animation';
import { ArrowRight, Mail } from 'lucide-react';
const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden bg-gradient-to-br from-background via-background-secondary to-background-tertiary">
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
              <div className="inline-block px-4 py-2 glass-effect border border-primary/30 rounded-full animate-fade-in-delay hover:scale-105 transition-all duration-300">
                <span className="text-primary text-sm font-medium flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Available for Opportunities
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block">Hi, I'm</span>
                <span className="gradient-text-alt relative block hover:scale-105 transition-transform duration-300">
                  Aruj Bardhan
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 via-accent/10 to-purple-500/10 rounded-2xl blur-2xl animate-glow-pulse" />
                </span>
              </h1>
              
              <div className="text-xl lg:text-2xl text-muted-foreground min-h-[3rem] flex items-center">
                <span className="mr-3 text-foreground/60">Specializing in</span>
                <TypingAnimation
                  texts={[
                    "Threat Detection & Analysis",
                    "Full-Stack Development", 
                    "ETL Pipeline Architecture",
                    "Machine Learning Systems",
                    "Vulnerability Assessment"
                  ]}
                  speed={80}
                  deleteSpeed={40}
                  pauseDuration={1500}
                  className="text-accent font-semibold"
                />
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/15 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative glass-effect rounded-2xl p-6 hover-lift">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Architecting robust solutions at the intersection of{' '}
                  <span className="text-primary font-semibold hover:text-primary-soft transition-colors">information security</span>,{' '}
                  <span className="text-accent font-semibold hover:text-accent-soft transition-colors">neural network implementations</span>, and{' '}
                  <span className="text-secondary font-semibold hover:text-secondary/80 transition-colors">distributed systems engineering</span>. 
                  Focused on developing scalable, secure architectures with measurable performance optimization.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="magnetic-button hover-glow group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-primary-soft hover:to-accent-soft text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300"
                asChild
              >
                <a href="#projects" className="relative z-10 flex items-center gap-2">
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="magnetic-button group glass-effect border-2 border-accent/50 text-accent hover:bg-accent/10 hover:border-accent hover:text-accent transition-all duration-300 hover:shadow-xl hover:shadow-accent/20"
                asChild
              >
                <a href="#contact" className="flex items-center gap-2">
                  <span>Get in Touch</span>
                  <Mail className="w-4 h-4 group-hover:translate-x-1 transition-all duration-300" />
                </a>
              </Button>
            </div>

            {/* Enhanced Tech Stack Preview */}
            <div className="space-y-4 pt-4">
              <h3 className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <span className="w-4 h-0.5 bg-accent rounded-full"></span>
                Core Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: 'Python', color: 'from-blue-500 to-yellow-500' },
                  { name: 'Java', color: 'from-orange-500 to-red-500' },
                  { name: 'SQL', color: 'from-blue-600 to-purple-600' },
                  { name: 'React', color: 'from-cyan-500 to-blue-500' },
                  { name: 'TensorFlow', color: 'from-orange-600 to-yellow-500' }
                ].map((tech) => (
                  <div 
                    key={tech.name}
                    className="group relative px-4 py-2 glass-effect border border-primary/20 rounded-full text-sm font-medium hover:border-accent/40 transition-all duration-300 cursor-default hover-lift"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-10 rounded-full transition-all duration-300`} />
                    <span className="relative text-foreground/80 group-hover:text-foreground transition-colors">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
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