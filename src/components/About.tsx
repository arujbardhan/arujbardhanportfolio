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
            AI and cybersecurity engineer specializing in LLM application development, application security, 
            and data engineering, paired with an MBA focus on AI strategy and business impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              MBA candidate at Penn State's Smeal College of Business (expected May 2027) earning a certificate in 
              AI Strategy, Leadership, and Business Impact, following a B.S. in Cybersecurity Analytics and Operations 
              (Law and Policy) from the College of IST with a minor in Security and Risk Analysis.
            </p>
            
            <p className="text-lg leading-relaxed">
              Founder and AI Engineer at Securvio, where I architected an open-source AI security analytics and learning 
              platform on Google Gemini and LLMs, automating risk scoring, threat modeling, and control maturity assessments 
              across 12+ consulting engagements for 6+ clients, backed by a DevSecOps CI/CD pipeline aligned to OWASP Top 10.
            </p>

            <p className="text-lg leading-relaxed">
              Previously hardened AI-powered applications as a Cybersecurity Engineer at Ainsemble and modernized legacy 
              Informatica ETL workflows into Python and dbt pipelines at Coforge (SEI Investments), cutting processing time 
              by 60%. I pair this engineering work with stakeholder management, PRDs, and executive communication.
            </p>
          </div>

          <Card className="bg-background-secondary border-accent/20 shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-accent">Technical Summary</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  <span>MBA Candidate — Smeal College of Business, Penn State (2027)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  <span>Certificate: AI Strategy, Leadership, and Business Impact</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  <span>B.S. Cybersecurity Analytics & Operations | Minor: SRA</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  <span>AI/ML: Google Gemini, OpenAI API, RAG, AI Agents</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  <span>Data Engineering: ETL Pipelines, dbt, SSIS, Informatica</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  <span>Recognition: Dean's List, Provost's Award, Smeal Masters Merit Scholar</span>
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