import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/95 backdrop-blur-lg border-b border-border shadow-lg'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#"
            onClick={(e) => handleSmoothScroll(e, '#hero')}
            className="text-2xl font-bold gradient-text hover:scale-105 transition-transform"
          >
            AB
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="nav-link"
              >
                {link.label}
              </a>
            ))}
            
            <Button 
              size="sm" 
              className="resume-btn ml-4"
              asChild
            >
              <a 
                href="/resume.pdf" 
                download="Aruj_Bardhan_Resume.pdf"
                className="flex items-center gap-2"
              >
                <Download size={16} />
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile menu button - simplified for now */}
          <div className="md:hidden">
            <span className="text-foreground">☰</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;