import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      role: 'Developer III',
      company: 'Coforge',
      period: 'May 2025 - Jul 2025',
      location: 'Oaks, Pennsylvania, United States · On-site',
      description: 'Internship focused on finding viable alternatives to replace Informatica workflows and developing enterprise data integration solutions.',
      highlights: [
        'Found viable alternatives to replace Informatica workflows using Python, DBT(for Snowflake), Azure, or combination of these tools',
        'Developed and modeled three Informatica workflows with Python, DBT Jinja, SSIS and SQL, decreasing runtime by over 40 minutes to almost 1 hour for each workflow',
        'Collaborated with both the IMS and SEI Wealth Platform teams',
        'Collaborated on UI/UX design for a Hypernova Smart Chatbot with different intents and entities using Python and MongoDB',
        'Developed foundation in Microsoft SSIS, Active Directory, Microsoft Entra, and Microsoft Business Suite'
      ]
    },
    {
      role: 'Director, Marketing',
      company: 'HackPSU',
      period: 'Feb 2023 - Aug 2023',
      location: 'State College, Pennsylvania, United States',
      description: 'Directed and managed a team to deploy various marketing methodologies for HackPSU (the largest student-run hackathon at Penn State).',
      highlights: [
        'Directed and managed a team to deploy various marketing methodologies for HackPSU',
        'Tasked with targeting and reaching over 900+ students and 100+ universities across the globe',
        'Co-Directed the Marketing Team alongside other executives from other teams to successfully organize HackPSU',
        'Utilized skills in Video Editing, Adobe Photoshop, and other creative tools'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey in cybersecurity, software development, and technology innovation.
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