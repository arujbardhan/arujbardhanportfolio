import { Card, CardContent } from '@/components/ui/card';

const Education = () => {
  const education = [
    {
      degree: 'Master of Business Administration (MBA)',
      institution: 'Penn State University, Smeal College of Business, University Park, PA',
      period: 'Expected May 2027',
      description: 'Certificate: AI Strategy, Leadership, and Business Impact. Awards: Smeal Masters Merit Scholar.',
      coursework: [
        'AI Strategy',
        'Leadership',
        'Business Impact Analysis',
        'Stakeholder Management',
        'Executive Communication'
      ]
    },
    {
      degree: 'Bachelor of Science - Cybersecurity Analytics and Operations (Law and Policy)',
      institution: 'Penn State University, College of IST, University Park, PA',
      period: 'Completed May 2026',
      description: 'Minor: Security and Risk Analysis (SRA). Awards: College of IST Dean\'s List; Provost\'s Award.',
      coursework: [
        'Data Structures and Algorithms',
        'Application Development',
        'Probability Theory',
        'Database Management',
        'Networking and Administration',
        'Quant Programming and Language Concepts',
        'Programming Models for Big Data',
        'Data Interchange',
        'Mathematical Statistics'
      ]
    }
  ];

  const certifications = [
    'NSA Center of Academic Excellence',
    'CompTIA Network+ (N10-007, In Progress)'
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text leading-normal pb-1">
            Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic foundation in cybersecurity, AI, and business strategy.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <Card 
              key={index}
              className="bg-background-secondary border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-[1.02] group"
            >
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-accent group-hover:text-accent/80 transition-colors mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-lg font-semibold text-foreground/80 mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                  <div className="text-right mt-4 lg:mt-0">
                    <p className="text-accent font-medium">{edu.period}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-accent mb-4">Relevant Coursework:</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {edu.coursework.map((course, courseIndex) => (
                      <div key={courseIndex} className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-accent rounded-full" />
                        <span className="text-sm">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          <Card className="bg-background border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-[1.02] group">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-accent group-hover:text-accent/80 transition-colors mb-6">
                Certifications & Additional Learning
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 py-3 px-4 rounded-lg bg-accent/10 border border-accent/20 hover:border-accent/40 transition-colors"
                  >
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;