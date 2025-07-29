import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'State College Airport GUI Interface',
      period: 'November 2024 - December 2024',
      description: 'Designed a Java-based GUI integrating OpenAI API to assist users with booking and tracking flights.',
      technologies: ['Java', 'OpenAI API', 'GUI Development'],
      highlights: [
        'Enabled search filtering by seat preferences',
        'Real-time flight data integration',
        'User-friendly booking interface',
        'AI-powered flight assistance'
      ],
      type: 'Desktop Application'
    },
    {
      title: 'Cybersecurity Research',
      period: 'September 2024 - Present',
      description: 'Conducted research on cybersecurity analytics and threat detection methodologies, focusing on network security and anomaly detection.',
      technologies: ['Python', 'Wireshark', 'Splunk', 'IDA Pro', 'PowerShell'],
      highlights: [
        'Analyzed network traffic patterns',
        'Developed threat detection models',
        'Researched security vulnerabilities',
        'Implemented monitoring solutions'
      ],
      type: 'Research'
    },
    {
      title: 'ETL Optimization - Coforge',
      period: 'May 2025 - July 2025',
      description: 'Improved ETL efficiency by 60%, reducing processing time from 90 to 30 minutes for business-critical workflows using Python, DBT, and Microsoft SSIS.',
      technologies: ['Python', 'DBT', 'SQL', 'Microsoft SSIS', 'Azure'],
      highlights: [
        'Reduced processing time by 60%',
        'Optimized 3+ business-critical workflows',
        'Built chatbot UI with MongoDB',
        'Improved user query resolution by 14%'
      ],
      type: 'Data Engineering'
    }
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      'Software Development': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'Cybersecurity': 'bg-red-500/20 text-red-400 border-red-500/30',
      'Data Engineering': 'bg-green-500/20 text-green-400 border-green-500/30',
      'AI/ML': 'bg-purple-500/20 text-purple-400 border-purple-500/30'
    };
    return colors[type as keyof typeof colors] || 'bg-accent/20 text-accent border-accent/30';
  };

  return (
    <section id="projects" className="py-20 px-6 bg-background-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work in cybersecurity, software development, and AI/ML applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-background border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-[1.02] group h-full"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground font-medium">
                      {project.period}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs border ${getTypeColor(project.type)}`}>
                    {project.type}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h4 className="font-semibold text-accent mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-accent mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs border border-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Button 
                    variant="outline" 
                    className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all"
                  >
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;