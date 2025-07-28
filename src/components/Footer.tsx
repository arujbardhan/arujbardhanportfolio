const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-accent/20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold gradient-text mb-2">Aruj Bardhan</h3>
            <p className="text-muted-foreground">
              Cybersecurity & Software Development Enthusiast
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center gap-6">
              <a 
                href="mailto:a.bardhan@psu.edu"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Email"
              >
                📧
              </a>
              <a 
                href="https://linkedin.com/in/aruj-bardhan"
                className="text-muted-foreground hover:text-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                💼
              </a>
              <a 
                href="https://github.com/aruj-bardhan"
                className="text-muted-foreground hover:text-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                🐙
              </a>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground">
                © 2024 Aruj Bardhan. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Built with React, TypeScript, and Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;