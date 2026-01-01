import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner@2.0.3";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { Spinner } from "@/components/ui/spinner"



export function ContactSection() {
  const maform= useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);


  const handleSubmit = (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    if (!maform.current) return;
        emailjs
      .sendForm('service_ud11v0b', 'template_lvjwqnj', maform.current, {
        publicKey: 'DFObkKTgoYPSP_WSv',
      })
      .then(
        () => {
          toast.success("Message envoyé ✅");
          maform.current?.reset();
          setLoading(false);
        },
        (error) => {
          toast.error("Échec de l’envoi ❌");
        },
      );
  
  };

 
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "slihiachraf@gmail.com",
      link: "mailto:slihiachraf@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "06 90 7056 89",
      link: "tel:+212690705689"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Fes , Morocco",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Contactez-moi</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
           Je suis toujours ouvert à la discussion concernant de nouvelles opportunités, des projets intéressants ou simplement pour échanger sur la technologie.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-medium mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{info.title}</p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-4">Prenons contact !</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
              n'hésitez pas à me contacter. Je réponds généralement sous 24 heures.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader>
                <CardTitle>envoyer un message</CardTitle>
              </CardHeader>
              <CardContent>
                <form ref={maform} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        
                       
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                     
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="title"
                
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                   
                      placeholder="dis moi ..."
                      rows={6}
                      required
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    {!loading ? <Send className="h-4 w-4 mr-2" /> : <Spinner className="h-4 w-4 mr-2" />}
                    {!loading ? 'Envoyer le message' :' Envoi en cours...' }
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}