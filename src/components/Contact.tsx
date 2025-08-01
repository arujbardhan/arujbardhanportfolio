import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'a.bardhan2004@gmail.com',
      href: 'mailto:a.bardhan2004@gmail.com'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://www.linkedin.com/in/arujbardhan/'
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'View my code',
      href: 'https://github.com/arujbardhan'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Collegeville, PA (19426)',
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-background-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's collaborate on cybersecurity, software development, or AI/ML projects. 
            I'm always excited to discuss new opportunities and innovative solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <Card className="bg-background border-accent/20 hover:border-accent/40 transition-all duration-300 group">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-accent mb-6 group-hover:text-accent/80 transition-colors">
                    Let's Connect
                  </h3>
                  <div className="space-y-6">
                    {contactInfo.map((contact, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <span className="text-2xl">{contact.icon}</span>
                        <div className="flex-1">
                          <p className="font-medium text-foreground/80">{contact.label}</p>
                          {contact.href ? (
                            <a 
                              href={contact.href}
                              className="text-accent hover:text-accent/80 transition-colors"
                              target={contact.href.startsWith('http') ? '_blank' : undefined}
                              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                              {contact.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{contact.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background border-accent/20">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-accent mb-4">
                    What I'm Looking For
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2" />
                      <span className="text-sm">Cybersecurity research collaborations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2" />
                      <span className="text-sm">Software development opportunities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2" />
                      <span className="text-sm">AI/ML project partnerships</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2" />
                      <span className="text-sm">Internship and full-time positions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-accent/30 hover:border-accent/50 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-accent mb-4 group-hover:text-accent/80 transition-colors">
                    Ready to Collaborate?
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Whether you have a project idea, want to discuss cybersecurity challenges, 
                    or explore AI/ML applications, I'd love to hear from you.
                  </p>
                  <Button 
                    size="lg" 
                    className="glow-pulse hover:scale-105 transition-transform"
                    asChild
                  >
                    <a href="mailto:a.bardhan2004@gmail.com">
                      Send Me an Email
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-background border-accent/20">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-accent mb-4">
                    Current Focus
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
                      <h4 className="font-semibold text-accent mb-2">🔒 Cybersecurity Research</h4>
                      <p className="text-sm text-muted-foreground">
                        Developing advanced threat detection algorithms and security analytics
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
                      <h4 className="font-semibold text-accent mb-2">🤖 AI/ML Development</h4>
                      <p className="text-sm text-muted-foreground">
                        Building intelligent systems for data analysis and automation
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
                      <h4 className="font-semibold text-accent mb-2">📊 ETL Optimization</h4>
                      <p className="text-sm text-muted-foreground">
                        Enhancing data processing workflows and system efficiency
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;