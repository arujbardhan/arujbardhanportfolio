import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      setIsScrolled(scrollY > 50);
      
      // Calculate scroll progress
      const progress = (scrollY / (documentHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(progress, 100));

      // Update active section based on scroll position
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      } else if (scrollY < windowHeight / 2) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About', id: 'about' },
    { href: '#skills', label: 'Skills', id: 'skills' },
    { href: '#experience', label: 'Experience', id: 'experience' },
    { href: '#projects', label: 'Projects', id: 'projects' },
    { href: '#education', label: 'Education', id: 'education' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80; // Account for fixed nav height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'glass-effect shadow-2xl'
            : 'bg-transparent'
        )}
      >
        {/* Scroll progress bar */}
        <div 
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent via-primary to-accent transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
        
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a
              href="#"
              onClick={(e) => handleSmoothScroll(e, '#hero')}
              className="text-2xl font-bold gradient-text hover:scale-110 transition-all duration-300 magnetic-button"
            >
              AB
            </a>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className={cn(
                      "relative py-2 px-3 rounded-lg transition-all duration-300 group",
                      isActive 
                        ? "text-accent bg-accent/10 border border-accent/20" 
                        : "text-foreground/70 hover:text-accent hover:bg-accent/5"
                    )}
                  >
                    {link.label}
                    <span 
                      className={cn(
                        "absolute bottom-0 left-1/2 h-0.5 bg-accent transition-all duration-300 transform -translate-x-1/2",
                        isActive ? "w-8" : "w-0 group-hover:w-6"
                      )} 
                    />
                  </a>
                );
              })}
            </div>

            {/* Enhanced mobile menu button */}
            <button className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center hover:scale-110 transition-transform">
              <span className="block w-6 h-0.5 bg-foreground/80 transition-all"></span>
              <span className="block w-6 h-0.5 bg-foreground/80 mt-1 transition-all"></span>
              <span className="block w-6 h-0.5 bg-foreground/80 mt-1 transition-all"></span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;