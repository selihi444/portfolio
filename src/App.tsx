import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";

import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import { useState } from "react"; 


import { Mycontext } from "./components/Themcontext";

export default function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Mycontext.Provider value={{ isDark, setIsDark }}>
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        
        <ContactSection />
      </main>
      <Footer />
      <Toaster />
      </Mycontext.Provider>
    </div>
  );
}