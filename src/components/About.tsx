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
              Hey! I'm Aruj, a fourth-year student at Penn State University in State College, PA, 
              pursuing a degree in Cybersecurity Analytics and Operations with a focus in Law and Policy. 
              I'm also pursuing a double minor in Information Sciences and Technology & Security and Risk Analysis.
            </p>
            
            <p className="text-lg leading-relaxed">
              My academic background in data structures and algorithms, database management, and big data programming models 
              has given me a solid foundation in handling complex data systems. I have proficiency in SQL, Java, Python, 
              and RStudio, and experience working with AI models like OpenAI and TensorFlow.
            </p>

            <p className="text-lg leading-relaxed">
              I've applied these competencies to diverse technology projects, including an OpenAI Chatbot GUI in Java. 
              I also have leadership experience at many organizations at Penn State, including directing HackPSU and 
              the Aviation Society of Penn State. I strive to bring these characteristics to my next opportunity 
              and cannot wait to improve my skills.
            </p>
          </div>

          <Card className="bg-background-secondary border-accent/20 shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-accent">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  <span>🎓 Penn State University - Fourth Year</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  <span>🔒 Cybersecurity Analytics & Operations (Law & Policy Focus)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  <span>📚 Double Minor: IST & Security Risk Analysis</span>
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