import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Technical Profile
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specializing in security operations, data pipeline architecture, and machine learning integration 
            with demonstrated expertise in ETL optimization, threat analysis, and enterprise system development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Fourth-year undergraduate at Penn State University pursuing Cybersecurity Analytics and Operations 
              with a Law and Policy concentration. Concurrent double minor in Information Sciences & Technology 
              and Security Risk Analysis provides comprehensive coverage of both technical implementation and governance frameworks.
            </p>
            
            <p className="text-lg leading-relaxed">
              Core competencies include algorithmic design, relational database architecture, and distributed computing paradigms. 
              Proficient in SQL query optimization, object-oriented development (Java/Python), statistical computing (R), 
              and neural network frameworks including TensorFlow and OpenAI API integration.
            </p>

            <p className="text-lg leading-relaxed">
              Applied these competencies across multiple production environments, including developing an LLM-powered 
              conversational interface using Java Swing and RESTful API architecture. Technical leadership roles include 
              directing HackPSU operations and managing Aviation Society systems infrastructure.
            </p>
          </div>

          <Card className="bg-background-secondary border-accent/20 shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-accent">Technical Summary</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  <span>🎓 B.S. Cybersecurity Analytics & Operations — Penn State (Senior)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  <span>🔒 Concentration: Security Policy & Regulatory Compliance</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  <span>📚 Minors: IST Systems Architecture | Security Risk Analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  <span>🤖 ML/DL: TensorFlow, PyTorch, OpenAI GPT Integration</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  <span>📊 Data Engineering: ETL Pipelines, DBT, SSIS, Azure Data Factory</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  <span>🏆 Recognition: Dean's List, Provost Award, Entrepreneurship Scholar</span>
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