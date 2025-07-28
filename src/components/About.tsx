import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about cybersecurity and software development with hands-on experience 
            in ETL optimization, AI/ML development, and real-world security challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Hey! I'm Aruj, a Pennsylvania State College student studying cybersecurity 
              and software development. I have a passion for building secure, innovative 
              solutions that tackle real-world challenges.
            </p>
            
            <p className="text-lg leading-relaxed">
              I currently work on optimizing ETL processes and developing AI/ML applications 
              with strategic coordination in collaborative environments. I'm especially 
              passionate about cybersecurity research, data analysis, and creating systems 
              that enhance security and efficiency.
            </p>

            <p className="text-lg leading-relaxed">
              My experience spans from Python automation and database management to 
              cybersecurity research and UI/UX design. I'm driven by the idea that 
              technology and security together can solve complex problems and create 
              meaningful impact.
            </p>
          </div>

          <Card className="bg-background-secondary border-accent/20 shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-accent">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  <span>🎓 Pennsylvania State College Student</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  <span>🔒 Cybersecurity & Software Development Focus</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  <span>🤖 AI/ML Development Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  <span>📊 ETL Optimization Specialist</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  <span>🌍 Collegeville, PA</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;