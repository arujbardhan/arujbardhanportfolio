import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: '🔒 Cybersecurity',
      skills: [
        'Cybersecurity Research',
        'Data Analysis & Algorithmic Thinking',
        'Application Development',
        'Probability Theory & Database Management',
        'Security Assessment',
        'Vulnerability Analysis'
      ]
    },
    {
      title: '💻 Programming & Development',
      skills: [
        'Python',
        'Java',
        'SQL',
        'RStudio',
        'DBT (Data Build Tool)',
        'Microsoft SSIS',
        'JSON',
        'PHI/XML',
        'ETL Processes',
        'API Development',
        'MongoDB',
        'Data Structures & Algorithms',
        'Big Data Programming Models'
      ]
    },
    {
      title: '🤖 AI/ML & Data Science',
      skills: [
        'OpenAI',
        'TensorFlow',
        'Machine Learning',
        'Data Analysis',
        'Mathematical Statistics',
        'Big Data Processing',
        'Predictive Modeling',
        'Azure',
        'Snowflake',
        'AutoCAD/Revit'
      ]
    },
    {
      title: '🎨 Design & Tools',
      skills: [
        'UI/UX Design',
        'FT Studio',
        'Adobe Creative Suite',
        'Video Editing (VEGAS Pro)',
        'Figma',
        'Wireframing',
        'Prototyping',
        'Visual Design'
      ]
    },
    {
      title: '🔧 Technical Skills',
      skills: [
        'Database Management',
        'Microsoft Active Directory',
        'Microsoft Entra',
        'Microsoft Business Suite',
        'System Optimization',
        'Technical Writing',
        'Project Management',
        'Version Control (Git)',
        'Agile Methodologies',
        'Problem Solving',
        'Team Collaboration'
      ]
    },
    {
      title: '🌐 Languages',
      skills: [
        'English (Conversational)',
        'French (Intermediate)',
        'Technical Documentation',
        'Cross-cultural Communication'
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