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
        <div className="text-center mb-16 space-y-6">
          <div className="inline-block px-4 py-2 glass-effect border border-accent/30 rounded-full">
            <span className="text-accent text-sm font-medium">Let's Collaborate</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text-alt">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on cybersecurity research, software development, or AI/ML projects? 
            I'm always excited to discuss innovative solutions and new opportunities.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <Card className="group glass-effect border-border-soft hover:border-accent/40 transition-all duration-500 hover-lift">
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg pointer-events-none" />
                
                <CardContent className="p-8 relative z-10">
                  <h3 className="text-2xl font-bold text-accent mb-6 group-hover:text-accent/90 transition-colors flex items-center gap-3">
                    <span className="w-8 h-0.5 bg-accent rounded-full group-hover:w-12 transition-all duration-300"></span>
                    Let's Connect
                  </h3>
                  <div className="space-y-6">
                    {contactInfo.map((contact, index) => (
                      <div key={index} className="group/contact flex items-center gap-4 p-3 rounded-lg hover:bg-accent/5 transition-all duration-300">
                        <div className="text-3xl group-hover/contact:scale-110 transition-transform duration-300">
                          {contact.icon}
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-foreground/80 group-hover/contact:text-foreground transition-colors">
                            {contact.label}
                          </p>
                          {contact.href ? (
                            <a 
                              href={contact.href}
                              className="text-accent hover:text-accent/80 transition-colors magnetic-button inline-block"
                              target={contact.href.startsWith('http') ? '_blank' : undefined}
                              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                              {contact.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground group-hover/contact:text-muted-foreground/80 transition-colors">
                              {contact.value}
                            </p>
                          )}
                        </div>
                        {contact.href && (
                          <span className="text-accent/50 group-hover/contact:text-accent group-hover/contact:translate-x-1 transition-all duration-300">
                            →
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect border-border-soft hover:border-accent/30 transition-all duration-300 hover-lift">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-accent mb-4 flex items-center gap-2">
                    <span className="w-6 h-0.5 bg-accent rounded-full"></span>
                    What I'm Looking For
                  </h3>
                  <ul className="space-y-4">
                    {[
                      { icon: '🔒', text: 'Cybersecurity research collaborations' },
                      { icon: '💻', text: 'Software development opportunities' },
                      { icon: '🤖', text: 'AI/ML project partnerships' },
                      { icon: '🎯', text: 'Internship and full-time positions' }
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 group/item hover:bg-accent/5 p-2 rounded-lg transition-all duration-300">
                        <span className="text-lg group-hover/item:scale-110 transition-transform duration-200">{item.icon}</span>
                        <span className="text-sm text-foreground/80 group-hover/item:text-foreground transition-colors">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="group magnetic-button glass-effect bg-gradient-to-br from-accent/10 to-primary/10 border-accent/30 hover:border-accent/50 transition-all duration-500 hover-lift">
                <CardContent className="p-8 text-center relative z-10">
                  <h3 className="text-2xl font-bold text-accent mb-4 group-hover:text-accent/90 transition-colors">
                    Ready to Collaborate?
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Whether you have a project idea, want to discuss cybersecurity challenges, 
                    or explore AI/ML applications, I'd love to hear from you.
                  </p>
                  <Button 
                    size="lg" 
                    className="magnetic-button hover-glow bg-gradient-to-r from-accent to-primary hover:from-accent-soft hover:to-primary-soft text-accent-foreground shadow-xl hover:shadow-2xl transition-all duration-300"
                    asChild
                  >
                    <a href="mailto:a.bardhan2004@gmail.com" className="flex items-center gap-2">
                      <span>Send Me an Email</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">✉️</span>
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-effect border-border-soft hover:border-accent/30 transition-all duration-300 hover-lift">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-accent mb-4 flex items-center gap-2">
                    <span className="w-6 h-0.5 bg-accent rounded-full"></span>
                    Current Focus
                  </h3>
                  <div className="space-y-4">
                    {[
                      { icon: '🔒', title: 'Cybersecurity Research', desc: 'Developing advanced threat detection algorithms and security analytics' },
                      { icon: '🤖', title: 'AI/ML Development', desc: 'Building intelligent systems for data analysis and automation' },
                      { icon: '📊', title: 'ETL Optimization', desc: 'Enhancing data processing workflows and system efficiency' }
                    ].map((focus, index) => (
                      <div key={index} className="group/focus p-4 rounded-lg glass-effect border border-accent/20 hover:border-accent/40 transition-all duration-300 hover-lift">
                        <h4 className="font-semibold text-accent mb-2 flex items-center gap-2 group-hover/focus:text-accent/90 transition-colors">
                          <span className="text-lg group-hover/focus:scale-110 transition-transform duration-200">{focus.icon}</span>
                          {focus.title}
                        </h4>
                        <p className="text-sm text-muted-foreground group-hover/focus:text-foreground/80 transition-colors leading-relaxed">
                          {focus.desc}
                        </p>
                      </div>
                    ))}
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