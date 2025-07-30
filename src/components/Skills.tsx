import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: '💻 Programming',
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
      title: '🔧 Tools',
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
      title: '🎨 Design',
      skills: [
        'Autodesk CAD/Revit',
        'FL Studio',
        'VEGAS Pro',
        'Adobe Premier Pro'
      ]
    },
    {
      title: '💼 Computer Applications',
      skills: [
        'Microsoft Word',
        'Microsoft Excel',
        'Microsoft PowerPoint',
        'Google Workspace'
      ]
    },
    {
      title: '📜 Certifications',
      skills: [
        'Visio 2021 Essential Training Office',
        'NSA Center of Academic Excellence Certificate (In-Progress)',
        'Preparing for the CompTIA Network N10007 Exam'
      ]
    },
    {
      title: '🌐 Languages',
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
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            My Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning cybersecurity, software development, 
            AI/ML, and design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-background border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader>
                <CardTitle className="text-xl text-accent group-hover:text-accent/80 transition-colors">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="flex items-center gap-3 py-2 px-3 rounded-lg bg-muted/50 hover:bg-accent/10 transition-colors"
                    >
                      <span className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-sm">{skill}</span>
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