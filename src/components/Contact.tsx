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
  
  const [isSubmitting, setIsSubmitting] = useState(false); 

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
            يلا نعمل حاجة مدهشة مع بعض
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            هل أنت مستعد للتعاون في مشروعك القادم؟ دعنا نناقش كيف يمكننا معًا ابتكار حلول مبتكرة وتجسيد أفكارك.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-card-gradient border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-card-foreground">
                  تواصل معنا
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  أنا متحمس دائمًا لمناقشة الفرص الجديدة والمشاريع المبتكرة. سواءً كنت ترغب في بناء تطبيق جديد أو تحسين تطبيق موجود، فلنستكشف معًا كيف يمكننا العمل معًا.
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
                      <p className="text-muted-foreground">متاح للعمل عن بعد</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t border-border">
                  <p className="font-medium text-card-foreground mb-4">مواقع التواصل الاجتماعي</p>
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
                    مستعد للتعاون
                  </h3>
                  <p className="text-muted-foreground">
                  أُضيف شغفًا وخبرةً تقنيةً والتزامًا بالتميز إلى كل مشروع. لنُبدع معًا شيئًا مؤثرًا ونُحقق أقصى إمكانات تطوير الويب.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-card-gradient border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-card-foreground">
                ارسال رساله
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                قم بملء النموذج أدناه وسأقوم بالرد عليك خلال 24 ساعة.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-card-foreground">
                    الاسم
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="ادحل اسمك"
                    required
                    className="bg-input border-border text-foreground focus:border-accent"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-card-foreground">
                    البريد الالكتروني
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ادخل بريدك الالكتروني"
                    required
                    className="bg-input border-border text-foreground focus:border-accent"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-card-foreground">
                    الرساله
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="أخبرني عن مشروعك أو كيف يمكننا العمل معًا..."
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
                  {isSubmitting ? "يتم الارسال..." : "ارسل الرساله"}
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
