import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      role: 'ETL Developer & Process Optimizer',
      company: 'Current Role',
      period: 'August 2023 - Present',
      location: 'Collegeville, PA',
      description: 'Optimizing ETL processes and developing AI/ML applications with strategic coordination in collaborative environments.',
      highlights: [
        'Led optimization of ETL systems and algorithms',
        'Developed AI/ML applications for data processing',
        'Collaborated with cross-functional teams on strategic initiatives',
        'Improved data processing efficiency through automation'
      ]
    },
    {
      role: 'Software Development Intern',
      company: 'Technology Company',
      period: 'May 2023 - July 2023',
      location: 'Remote',
      description: 'Gained hands-on experience in software development, focusing on cybersecurity applications and database management.',
      highlights: [
        'Developed secure applications using Python and Java',
        'Implemented database optimization strategies',
        'Contributed to cybersecurity research projects',
        'Enhanced technical expertise in multiple programming languages'
      ]
    },
    {
      role: 'Research Assistant',
      company: 'Pennsylvania State College',
      period: 'January 2023 - May 2023',
      location: 'University Park, PA',
      description: 'Conducted cybersecurity research with focus on data analysis and algorithmic development.',
      highlights: [
        'Performed in-depth cybersecurity research',
        'Applied mathematical statistics to security analysis',
        'Developed algorithms for threat detection',
        'Collaborated on academic research publications'
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