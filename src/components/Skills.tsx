import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Wrench, Palette, Monitor, Award, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: Code,
      skills: [
        'Python',
        'Java', 
        'JSON',
        'DBT',
        'SQL',
        'RStudio',
        'HTML',
        'TypeScript'
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      skills: [
        'Wireshark',
        'Splunk',
        'Ghidra',
        'PowerShell',
        'Bash Shell',
        'IDA Pro',
        'MongoDB',
        'VS Code',
        'Tailwind CSS'
      ]
    },
    {
      title: 'Design Software',
      icon: Palette,
      skills: [
        'Autodesk CAD/Revit',
        'FL Studio',
        'VEGAS Pro',
        'Adobe Premier Pro'
      ]
    },
    {
      title: 'Productivity Suite',
      icon: Monitor,
      skills: [
        'Microsoft Word',
        'Microsoft Excel',
        'Microsoft PowerPoint',
        'Google Workspace'
      ]
    },
    {
      title: 'Certifications',
      icon: Award,
      skills: [
        'Visio 2021 Essential Training Office',
        'NSA Center of Academic Excellence Certificate (In-Progress)',
        'Preparing for the CompTIA Network N10007 Exam'
      ]
    },
    {
      title: 'Languages',
      icon: Globe,
      skills: [
        'Hindi (Conversational, Reading, Writing)',
        'French (Intermediate)',
        'Malayalam (Limited Proficiency)',
        'Bengali (Limited Proficiency)'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-background-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-6">
          <div className="inline-block px-4 py-2 glass-effect border border-primary/30 rounded-full">
            <span className="text-primary text-sm font-medium">Technical Expertise</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Skills & Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit spanning cybersecurity analytics, software development, 
            AI/ML engineering, and creative design solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="group glass-effect border-border-soft hover:border-accent/40 transition-all duration-500 hover-lift h-full"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg pointer-events-none" />
              
              <CardHeader className="relative z-10">
                <CardTitle className="text-xl text-accent group-hover:text-accent/90 transition-colors duration-300 flex items-center gap-3">
                  <category.icon className="w-5 h-5" />
                  <span>{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="group/skill flex items-center gap-3 py-2.5 px-3 rounded-lg glass-effect border border-transparent hover:border-accent/20 transition-all duration-300 hover:scale-[1.02]"
                    >
                      <span className="w-2 h-2 bg-accent rounded-full group-hover/skill:scale-125 group-hover/skill:shadow-md group-hover/skill:shadow-accent/50 transition-all duration-200" />
                      <span className="text-sm text-foreground/80 group-hover/skill:text-foreground transition-colors font-medium">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;