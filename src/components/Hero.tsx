import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold">
                Hi, I'm{' '}
                <span className="gradient-text">Aruj Bardhan</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground">
                Cybersecurity & Software Development Enthusiast
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Building innovative solutions at the intersection of cybersecurity, 
              AI/ML development, and software engineering. Passionate about creating 
              secure, efficient systems that make a real-world impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="glow-pulse hover:scale-105 transition-transform"
                asChild
              >
                <a href="#projects">View Projects</a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all"
                asChild
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary rounded-full blur-2xl opacity-20 animate-float" />
              <img
                src="/lovable-uploads/a8ea17dc-5b68-461e-b24c-417d65274126.png"
                alt="Aruj Bardhan"
                className="relative w-80 h-80 rounded-full object-cover border-4 border-accent/20 shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;