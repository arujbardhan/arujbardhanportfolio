import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      role: 'Founder and AI Engineer',
      company: 'Securvio (Security Consulting Startup)',
      period: 'Nov 2025 - Present',
      location: 'University Park, Pennsylvania, United States',
      description: 'Open-source AI security analytics and learning platform built on Google Gemini and LLMs for consulting engagements.',
      highlights: [
        'Architected an open-source AI security analytics and learning platform with Google Gemini and Large Language Models (LLMs), automating risk scoring, threat modeling, and control maturity assessments across 12+ consulting engagements for 6+ clients',
        'Built a DevSecOps CI/CD pipeline for consulting clients and the learning platform, integrating SAST, dependency scanning, and LLM security validation aligned to OWASP Top 10, alongside integrated SQL reporting across 10+ security control dashboards',
        'Developed a deployable consulting application prototype with IAM access control, encrypted data pipelines, and REST API-driven LLM workflows, cutting security assessment turnaround from 10 to 3 days using SIEM-aligned monitoring and client reporting principles'
      ]
    },
    {
      role: 'Cybersecurity Engineer (Contract)',
      company: 'Ainsemble',
      period: 'May 2026 - Jul 2026',
      location: 'Remote',
      description: 'Security engineering for AI-powered applications across cloud and AI workflows.',
      highlights: [
        'Strengthened enterprise security posture for AI-powered applications through secure architecture reviews, threat modeling, application hardening, vulnerability remediation, and application security (AppSec) assessments across cloud and AI workflows',
        'Supported DevSecOps and secure SDLC for AI tools including Pulse, Aincore, Key, and The Platform through security assessments, vulnerability management, cloud security reviews, and AI governance using custom Retrieval-Augmented Generation (RAG) models'
      ]
    },
    {
      role: 'Software Developer III Intern',
      company: 'Coforge (SEI Investments)',
      period: 'May 2025 - Jul 2025',
      location: 'Oaks, Pennsylvania, United States',
      description: 'Enterprise data integration engineering focused on Informatica ETL modernization and pipeline optimization within a Global Delivery Model.',
      highlights: [
        'Modernized legacy Informatica ETL workflows into scalable Python and dbt scripts with 8+ stakeholders, reducing manual touchpoints by 35% and documenting data quality assurance, data lineage, and transformation logic for a Global Delivery Model',
        'Developed ETL data pipelines using Python, dbt, SQL, and Microsoft SQL Server Integration Services (SSIS), delivering scalable data integration, automated validation, ETL optimization, and data quality assurance across 4 live ETL demos',
        'Optimized ETL pipeline performance by 60%, cutting processing time from 90 to 30 minutes, and built a Python, JSON, and MongoDB chatbot with dynamic intent recognition, NLP query handling, and REST-ready data access that improved query resolution by 14%'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text leading-normal pb-1">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technical roles spanning enterprise data engineering, security operations, and systems architecture.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30 hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-accent rounded-full border-4 border-background z-10 hidden md:block" />
                  
                  <Card className="ml-0 md:ml-20 bg-background-secondary border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-[1.02] group">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-accent group-hover:text-accent/80 transition-colors">
                            {exp.role}
                          </h3>
                          <p className="text-lg font-semibold text-foreground/80">
                            {exp.company}
                          </p>
                        </div>
                        <div className="text-right text-muted-foreground mt-2 md:mt-0">
                          <p className="font-medium">{exp.period}</p>
                          <p className="text-sm">{exp.location}</p>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-accent">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, highlightIndex) => (
                            <li key={highlightIndex} className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm leading-relaxed">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;