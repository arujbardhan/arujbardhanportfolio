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
      'Desktop Application': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'Research': 'bg-red-500/20 text-red-400 border-red-500/30',
      'Data Engineering': 'bg-green-500/20 text-green-400 border-green-500/30',
      'AI/ML': 'bg-purple-500/20 text-purple-400 border-purple-500/30'
    };
    return colors[type as keyof typeof colors] || 'bg-accent/20 text-accent border-accent/30';
  };

  return (
    <section id="projects" className="py-20 px-6 bg-background-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-6">
          <div className="inline-block px-4 py-2 glass-effect border border-accent/30 rounded-full">
            <span className="text-accent text-sm font-medium">Featured Work</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text-alt leading-tight">
            Projects & Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of technical projects spanning cybersecurity research, software development, 
            and enterprise data optimization solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group relative glass-effect border-border-soft hover:border-accent/40 transition-all duration-500 hover-lift h-full overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
              
              <CardHeader className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-3 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                      {project.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground font-medium flex items-center gap-2">
                      <span className="w-1 h-1 bg-accent rounded-full animate-pulse"></span>
                      {project.period}
                    </p>
                  </div>
                  <span className={`px-3 py-1.5 rounded-xl text-xs font-medium border backdrop-blur-sm ${getTypeColor(project.type)} group-hover:scale-105 transition-transform duration-300`}>
                    {project.type}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6 relative z-10">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {project.description}
                </p>

                <div>
                  <h4 className="font-semibold text-accent mb-3 flex items-center gap-2">
                    <span className="w-4 h-0.5 bg-accent rounded-full"></span>
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.slice(0, 3).map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start gap-3 group/item">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200" />
                        <span className="text-sm leading-relaxed text-foreground/80 group-hover/item:text-foreground transition-colors">
                          {highlight}
                        </span>
                      </li>
                    ))}
                    {project.highlights.length > 3 && (
                      <li className="text-xs text-muted-foreground ml-5">
                        +{project.highlights.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-accent mb-3 flex items-center gap-2">
                    <span className="w-4 h-0.5 bg-accent rounded-full"></span>
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2.5 py-1 glass-effect text-accent rounded-lg text-xs font-medium border border-accent/20 hover:border-accent/40 hover:scale-105 transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover reveal: Learn more button */}
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full magnetic-button border-accent/30 text-accent hover:bg-accent/10"
                  >
                    Learn More
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