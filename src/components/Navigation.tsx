import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Moon, Sun, Menu, X, Download, ArrowDownToLine } from "lucide-react";
import { useContext } from "react";
import { Mycontext } from "./Themcontext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";


export function Navigation() {
const { isDark, setIsDark } = useContext(Mycontext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activId, setActiveId] = useState<string>('home');

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
    
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    // { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-medium flex gap-5">
            <HoverCard>
              <HoverCardTrigger >
                   <Avatar>
                    <AvatarImage src="myportfolio1.jpg" />
           
                   </Avatar>
              </HoverCardTrigger>
             <HoverCardContent className="w-80 ">
                  <div className="flex justify-between gap-4 ">
                    <Avatar>
                       <AvatarImage src="myportfolio1.jpg" />
                      <AvatarFallback>AS</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                       <h4 className="text-sm font-semibold">SELiHI</h4>
                       <p className="text-sm">
                           
                            Je transforme des idées en projets concrets.  
                      

                               </p>
                          <div className="text-muted-foreground text-xs">
                             Toujours motivé
                          </div>
                    </div>
                  </div>
             </HoverCardContent>
            </HoverCard>

         
          <div>
            <span className="text-primary">Achraf </span>
            <span className="text-muted-foreground">Selihi</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id)
                  setActiveId(item.id);

                }}
                className={`transition-colors  ${activId === item.id ? "  text-foreground "  : "text-muted-foreground hover:text-foreground"}`}
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="p-2"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
                <a 
             href="AF_cv25.pdf" download className="px-4 py-2  text-muted-foreground hover:text-foreground rounded ">

             <ArrowDownToLine className="w-4 h-5"/>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="p-2"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
        

          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}