import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'State College Airport GUI Interface',
      period: 'November 2024 - December 2024',
      role: 'Lead Developer',
      problem: 'Airport needed an intuitive system for flight booking and tracking with AI assistance',
      description: 'Designed and developed a comprehensive Java-based GUI integrating OpenAI API to assist users with booking and tracking flights.',
      technologies: ['Java', 'OpenAI API', 'GUI Development', 'Swing'],
      highlights: [
        'Enabled search filtering by seat preferences and flight criteria',
        'Real-time flight data integration with live updates',
        'User-friendly booking interface with intuitive design',
        'AI-powered flight assistance and recommendations'
      ],
      impact: 'Streamlined flight booking process and improved user experience',
      type: 'Software Development',
      github: 'https://github.com/arujbardhan',
      demo: null
    },
    {
      title: 'Cybersecurity Analytics Research',
      period: 'September 2024 - Present',
      role: 'Research Assistant',
      problem: 'Need for advanced threat detection and network security monitoring systems',
      description: 'Conducted comprehensive research on cybersecurity analytics and threat detection methodologies, focusing on network security, anomaly detection, and security operations.',
      technologies: ['Python', 'Wireshark', 'Splunk', 'IDA Pro', 'PowerShell', 'SIEM'],
      highlights: [
        'Analyzed network traffic patterns for anomaly detection',
        'Developed machine learning threat detection models',
        'Researched advanced security vulnerabilities and exploits',
        'Implemented automated monitoring and alerting solutions'
      ],
      impact: 'Enhanced threat detection capabilities and security posture',
      type: 'Research',
      github: 'https://github.com/arujbardhan',
      demo: null
    },
    {
      title: 'ETL Pipeline Optimization',
      period: 'May 2025 - July 2025',
      role: 'Data Engineering Intern - Coforge',
      problem: 'Business-critical ETL processes taking 90+ minutes, causing operational delays',
      description: 'Architected and optimized enterprise ETL pipelines, reducing processing time by 60% for business-critical workflows using modern data engineering tools.',
      technologies: ['Python', 'DBT', 'SQL', 'Microsoft SSIS', 'Azure', 'MongoDB'],
      highlights: [
        'Reduced processing time from 90 to 30 minutes (60% improvement)',
        'Optimized 3+ business-critical ETL workflows',
        'Built intelligent chatbot UI with MongoDB integration',
        'Improved user query resolution efficiency by 14%'
      ],
      impact: 'Saved 2+ hours daily in processing time, improving operational efficiency',
      type: 'Data Engineering',
      github: null,
      demo: null
    }
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      'Software Development': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'Research': 'bg-red-500/20 text-red-400 border-red-500/30',
      'Data Engineering': 'bg-green-500/20 text-green-400 border-green-500/30',
      'AI/ML': 'bg-purple-500/20 text-purple-400 border-purple-500/30'
    };
    return colors[type as keyof typeof colors] || 'bg-accent/20 text-accent border-accent/30';
  };

  return (
    <section id="projects" className="py-20 px-6 bg-background-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title leading-tight">
            Projects
          </h2>
          <p className="section-subtitle">
            A showcase of technical projects spanning cybersecurity, software development, and data optimization.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="project-card"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-2xl group-hover:text-accent transition-colors">
                        {project.title}
                      </CardTitle>
                      <span className={`px-3 py-1 rounded-full text-xs border ${getTypeColor(project.type)}`}>
                        {project.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="font-medium">{project.period}</span>
                      <span>•</span>
                      <span className="font-medium text-accent">{project.role}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="bg-accent/5 p-4 rounded-lg border border-accent/10">
                  <h4 className="font-semibold text-accent mb-2">Problem Statement:</h4>
                  <p className="text-sm text-muted-foreground italic">{project.problem}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-accent mb-3">Solution & Approach:</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-accent mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                  <h4 className="font-semibold text-primary mb-2">Impact & Results:</h4>
                  <p className="text-sm text-muted-foreground">{project.impact}</p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-semibold text-accent mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs border border-accent/20 hover:bg-accent/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {(project.github || project.demo) && (
                    <div className="flex gap-3">
                      {project.github && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          asChild
                          className="border-accent/30 hover:border-accent/50"
                        >
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <span>🐙</span>
                            GitHub
                          </a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button 
                          size="sm"
                          asChild
                          className="bg-accent hover:bg-accent/80"
                        >
                          <a 
                            href={project.demo} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <span>🚀</span>
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
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