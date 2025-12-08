import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      role: 'Developer III',
      company: 'Coforge',
      period: 'May 2025 - Jul 2025',
      location: 'Oaks, Pennsylvania, United States · On-site',
      description: 'Enterprise data integration engineering focused on Informatica workflow migration and ETL pipeline optimization within Global Delivery Model infrastructure.',
      highlights: [
        'Architected Informatica replacement solutions leveraging Python/DBT transformation scripts and Microsoft SSIS package development within distributed team environment',
        'Achieved 60% ETL throughput improvement (90→30 min processing), optimizing 3+ mission-critical data pipelines with documented cost reduction metrics',
        'Engineered conversational AI interface using Python, JSON schema validation, and MongoDB persistence layer — 14% improvement in NLU resolution accuracy',
        'Cross-functional collaboration with IMS and SEI Wealth Platform engineering teams',
        'Acquired proficiency in SSIS, Active Directory administration, Microsoft Entra ID, and M365 Business Suite integration'
      ]
    },
    {
      role: 'Director, Marketing Operations',
      company: 'HackPSU',
      period: 'Feb 2023 - Aug 2023',
      location: 'State College, Pennsylvania, United States',
      description: 'Technical operations leadership for Penn State\'s flagship hackathon — managed cross-functional team and multi-channel marketing automation systems.',
      highlights: [
        'Orchestrated data-driven marketing campaigns utilizing analytics dashboards and A/B testing methodologies',
        'Scaled outreach infrastructure to 900+ participants across 100+ institutions globally',
        'Co-led cross-departmental coordination implementing agile project management workflows',
        'Deployed creative assets using Adobe Creative Suite and video post-production pipelines'
      ]
    },
    {
      role: 'Content Systems Developer',
      company: 'Intema Solutions - Team BH Inc',
      period: 'May 2018 - Dec 2018',
      location: 'Remote (Toronto, ON)',
      description: 'YouTube content pipeline management and algorithm optimization for gaming vertical — analytics-driven content strategy development.',
      highlights: [
        'Developed and maintained content delivery pipeline for gaming media vertical',
        'Implemented SEO and algorithm optimization strategies based on platform analytics',
        'Utilized non-linear editing systems and motion graphics workflows',
        'Managed audience engagement metrics and community growth KPIs'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">
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