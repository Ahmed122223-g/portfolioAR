import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false); // حالة للتحكم في زر الإرسال

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const SERVICE_ID = 'service_2f48dph'; 
    const TEMPLATE_ID = 'template_c0dava2'; 
    const PUBLIC_KEY = 'lf9808sp2x09zierj';

    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: "ahmedmohamed1442006m@gmail.com"
    }, PUBLIC_KEY)
    .then((result) => {
      console.log('SUCCESS!', result.status, result.text);
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    }, (error) => {
      console.log('FAILED...', error.text);
      toast.error("Failed to send message. Please try again later.");
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-accent-gradient bg-clip-text text-transparent">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can create 
            innovative solutions together and bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-card-gradient border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-card-foreground">
                  Get In Touch
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  I'm always excited to discuss new opportunities and innovative projects. 
                  Whether you're looking to build a new application or enhance an existing one, 
                  let's explore how we can work together.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Contact Details */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent/20 rounded-lg">
                      <Mail className="text-accent" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-card-foreground">Email</p>
                      <p className="text-muted-foreground">ahmedmohamed1442006m@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent/20 rounded-lg">
                      <Phone className="text-accent" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-card-foreground">Phone</p>
                      <p className="text-muted-foreground">+201141887123</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent/20 rounded-lg">
                      <MapPin className="text-accent" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-card-foreground">Location</p>
                      <p className="text-muted-foreground">Available for Remote Work</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t border-border">
                  <p className="font-medium text-card-foreground mb-4">Connect on Social</p>
                  <div className="flex gap-4">
                    <a 
                      href="https://github.com/Ahmed122223-g" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-secondary rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/ahmed-mohamed-8ab118369?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-secondary rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Professional Statement */}
            <Card className="bg-card-gradient border-border">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                    <Send className="text-accent" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground">
                    Ready to Collaborate
                  </h3>
                  <p className="text-muted-foreground">
                    I bring passion, technical expertise, and a commitment to excellence 
                    to every project. Let's create something impactful together and push 
                    the boundaries of what's possible in web development.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-card-gradient border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-card-foreground">
                Send a Message
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Fill out the form below and I'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-card-foreground">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="bg-input border-border text-foreground focus:border-accent"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-card-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-input border-border text-foreground focus:border-accent"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-card-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or how we can work together..."
                    rows={6}
                    required
                    className="bg-input border-border text-foreground focus:border-accent resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-primary transition-all duration-300 hover:shadow-glow-primary hover:scale-105"
                  disabled={isSubmitting}
                >
                  <Send size={16} className="mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
