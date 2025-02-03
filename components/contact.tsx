"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";
import emailjs from "emailjs-com";

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<"success" | "error" | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const btn = form.querySelector("button") as HTMLButtonElement;
    btn.innerText = "Sending...";

    const serviceID = "service_yo4mwfr"; // Replace with your actual service ID
    const templateID = "template_fhorl0g"; // Replace with your actual template ID
    const publicKey = "YCcwHorjZfMyDmxAY"; // Replace with your actual EmailJS Public Key

    // Get user email from the form
    const userEmail = form.email.value;

    emailjs.sendForm(serviceID, templateID, form, publicKey).then(
      () => {
        btn.innerText = "Send Message";
        setMessage("Message sent successfully!");
        setMessageType("success");
        setIsSubmitted(true);
        form.reset();

        setTimeout(() => {
          setIsSubmitted(false);
          setMessage(null);
          setMessageType(null);
        }, 3000);
      },
      (error) => {
        btn.innerText = "Send Message";
        setMessage("Failed to send message. Please try again.");
        setMessageType("error");
        console.error("EmailJS Error:", error);
      }
    );

    // Include user's email in the message body
    const emailBody = `User Email: ${userEmail}\n\nMessage: ${form.message.value}`;
    emailjs.send(serviceID, templateID, { message: emailBody, reply_to: userEmail }, publicKey);
  };

  return (
    <section id="contact" className="py-20 px-4 section-scroll bg-space">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 glow font-orbitron"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Transmission
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <Card className="bg-card/50 backdrop-blur-sm border-primary/30 cosmic-border">
              <CardHeader>
                <CardTitle className="text-text-primary">Contact Information</CardTitle>
                <CardDescription className="text-text-muted">Feel free to reach out through any of these channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-text-primary">
                  <Mail className="w-6 h-6 mr-4 text-text-secondary" />
                  <span>d.mohamed1504@gmail.com</span>
                </div>
                <div className="flex items-center text-text-primary">
                  <Phone className="w-6 h-6 mr-4 text-text-secondary" />
                  <span>+1 (123) 456-7890</span>
                </div>
                <div className="flex items-center text-text-primary">
                  <MapPin className="w-6 h-6 mr-4 text-text-secondary" />
                  <span>Norfolk, VA</span>
                </div>
                <div className="flex space-x-4 mt-6">
                  <Button size="icon" variant="outline" asChild className="border-text-secondary text-text-secondary hover:bg-text-secondary/20">
                    <a href="https://github.com/MeeksonJr" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      <span className="sr-only">GitHub</span>
                    </a>
                  </Button>
                  <Button size="icon" variant="outline" asChild className="border-text-secondary text-text-secondary hover:bg-text-secondary/20">
                    <a href="https://www.linkedin.com/in/mohamed-datt-b60907296/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </Button>
                  <Button size="icon" variant="outline" asChild className="border-text-secondary text-text-secondary hover:bg-text-secondary/20">
                    <a href="https://Instagram.com/md_mekkson_jr" target="_blank" rel="noopener noreferrer">
                      <Instagram className="w-4 h-4" />
                      <span className="sr-only">Instagram</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <Card className="bg-card/50 backdrop-blur-sm border-primary/30 cosmic-border">
              <CardHeader>
                <CardTitle className="text-text-primary">Send Me a Message</CardTitle>
                <CardDescription className="text-text-muted">I&apos;ll get back to you as soon as possible</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4" ref={formRef}>
                  <div>
                    <Label htmlFor="name" className="text-text-primary">Name</Label>
                    <Input id="name" name="name" placeholder="Your Name" required className="bg-background/30 text-text-primary border-primary/50 focus:border-primary" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-text-primary">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="Your Email" required className="bg-background/30 text-text-primary border-primary/50 focus:border-primary" />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-text-primary">Message</Label>
                    <Textarea id="message" name="message" placeholder="Your Message" required className="bg-background/30 text-text-primary border-primary/50 focus:border-primary" />
                  </div>
                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/80">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Success/Error Message */}
      <AnimatePresence>
        {isSubmitted && message && (
          <motion.div
            className={`fixed bottom-4 right-4 p-4 rounded-md flex items-center ${
              messageType === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
            }`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            {messageType === "success" ? <CheckCircle className="mr-2" /> : <span className="mr-2">⚠️</span>}
            {message}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
