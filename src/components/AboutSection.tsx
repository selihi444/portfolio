import { Card, CardContent } from "./ui/card";
import { Code2, Palette, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";
import { useState } from "react"; 

  import { Mycontext } from "./Themcontext";
import { useContext } from "react";

export function AboutSection() {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Écrire du code maintenable, évolutif et bien documenté, respectant les meilleures pratiques."
    },
    {
      icon: Palette,
      title: "UI/UX Focus",
      description: "Création d'interfaces utilisateur intuitives et esthétiques, avec un souci du détail et de l'expérience utilisateur."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Création d'applications rapides et optimisées, offrant d'excellentes performances et des vitesses de chargement exceptionnelles."
    }
  ];
  const { isDark, setIsDark } = useContext(Mycontext);
  
  useEffect(() => {
  const iddrk=document.documentElement.classList.contains('dark');
  setIsDark(iddrk);
  },[]);

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 "
        >
          <h2 className="text-3xl md:text-4xl font-medium mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
          Je suis un développeur Fullstack débutant, motivé à apprendre et progresser dans le développement web.  
          Passionné par la création de projets, je cherche à transformer mes idées en solutions utiles et modernes.  

          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16 ">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            
          >
            <h3 className="text-xl font-medium mb-4">My Journey</h3>
            <p className="text-muted-foreground mb-4">
            🌱 J’ai commencé mon parcours en découvrant le développement web par curiosité et passion.  
            💻 Petit à petit, j’ai appris les bases du front-end et du back-end en créant mes premiers projets.  
            📚 Chaque étape m’a permis de renforcer mes compétences et de comprendre les bonnes pratiques.  
            Aujourd’hui, je continue à progresser en explorant de nouvelles technologies et frameworks modernes.  
            ✨ Mon objectif est de transformer cette passion en une carrière solide et créative dans le développement.  

            </p>
            <p className="text-muted-foreground mb-4">
             Je crois en la formation continue et en la nécessité de se tenir au courant des dernières technologies et tendances du secteur.
              Quand je ne code pas, vous me trouverez probablement en train de contribuer à des projets open source, 
              de lire des blogs techniques ou d'explorer de nouveaux frameworks et outils.
            </p>
            <p className="text-muted-foreground">
             Je suis toujours enthousiaste à l'idée de relever de nouveaux défis 
             et de collaborer avec des équipes pour créer des produits exceptionnels qui font la différence.
            </p>
          </motion.div>

          <motion.div
            initial={{opacity:0 ,x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className={`rounded-[18px] p-8 text-center w-[80%] ${isDark? "bg-[url('/gbdack.jpg')]": "bg-[url('/bgwhit.jpg')]"} bg-cover bg-center border-1 border-primary`}
            
          >
            <div className="w-42 h-42 rounded-full mx-auto  flex items-center justify-center  border-1 border-primary hover:border-none   ">
            
              <img
              
                src="myportfolio1.jpg"
                alt="Profile Picture"
                className=" rounded-full object-cover  border-2 border-primary  "
              />
            </div>
            <h3 className="text-xl font-medium mb-2">Selihi Achraf</h3>
            <p className="text-muted-foreground mb-4">Full Stack Developer</p>
            <p className="text-muted-foreground">
              Basée à  FES<br />
             Disponible pour des projets en freelance
            </p>
           
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index*index) * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6 text-center">
                  <highlight.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-medium mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}