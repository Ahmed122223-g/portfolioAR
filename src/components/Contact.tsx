import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

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

    const SERVICE_ID = "service_2f48dph";
    const TEMPLATE_ID = "template_c0dava2";
    const PUBLIC_KEY = "lf9808sp2x09zierj";

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "ahmedmohamed1442006m@gmail.com"
        },
        PUBLIC_KEY
      )
      .then(() => {
        toast.success("تم إرسال الرسالة بنجاح! هتواصل معاك قريب.");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        toast.error("فشل إرسال الرسالة. حاول تاني بعد شوية.");
      })
      .finally(() => setIsSubmitting(false));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 bg-accent-gradient bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            يلا نعمل حاجة مدهشة مع بعض
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            هل أنت مستعد للتعاون في مشروعك القادم؟ خلينا نتكلم إزاي نبتكر حلول
            مبتكرة ونحوّل أفكارك لواقع.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="border-border bg-card-gradient">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-card-foreground">
                  تواصل معايا
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  متحمس دايمًا أتكلم عن أفكار جديدة أو مشاريع مميزة. سواء عايز
                  تعمل تطبيق جديد أو تطور حاجة موجودة، خلينا نستكشف سوا إزاي نشتغل
                  مع بعض.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Details */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-accent/20 p-3">
                      <Mail className="text-accent" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-card-foreground">Email</p>
                      <p className="text-muted-foreground">
                        ahmedmohamed1442006m@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-accent/20 p-3">
                      <Phone className="text-accent" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-card-foreground">Phone</p>
                      <p className="text-muted-foreground">+201141887123</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-accent/20 p-3">
                      <MapPin className="text-accent" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-card-foreground">Location</p>
                      <p className="text-muted-foreground">متاح للعمل عن بعد</p>
                    </div>
                  </div>
                </div>

                {/* Socials */}
                <div className="border-border border-t pt-6">
                  <p className="mb-4 font-medium text-card-foreground">
                    مواقع التواصل
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/Ahmed122223-g"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-secondary p-3 transition-all duration-300 hover:scale-110 hover:bg-accent hover:text-accent-foreground"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/ahmed-mohamed-8ab118369"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-secondary p-3 transition-all duration-300 hover:scale-110 hover:bg-accent hover:text-accent-foreground"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Small Statement */}
            <Card className="border-border bg-card-gradient">
              <CardContent className="pt-6">
                <div className="space-y-4 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                    <Send className="text-accent" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground">
                    مستعد للتعاون
                  </h3>
                  <p className="text-muted-foreground">
                    بحط شغف + خبرة تقنية + التزام بالتميز في أي مشروع. خلينا
                    نعمل حاجة تفرق وتحقق أقصى إمكانيات الويب.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Form */}
          <Card className="border-border bg-card-gradient">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-card-foreground">
                ابعت رسالة
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                اكتب بياناتك في الفورم ده، وهرد عليك في خلال 24 ساعة.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-card-foreground"
                  >
                    الاسم
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="ادخل اسمك"
                    required
                    className="bg-input text-foreground focus:border-accent"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-card-foreground"
                  >
                    البريد الإلكتروني
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ادخل بريدك الإلكتروني"
                    required
                    className="bg-input text-foreground focus:border-accent"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-card-foreground"
                  >
                    الرسالة
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="احكيلي عن مشروعك أو إزاي نشتغل مع بعض..."
                    rows={6}
                    required
                    className="resize-none bg-input text-foreground focus:border-accent"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground shadow-glow-primary transition-all duration-300 hover:scale-105 hover:bg-primary/90 hover:shadow-glow-primary"
                >
                  <Send size={16} className="mr-2" />
                  {isSubmitting ? "يتم الإرسال..." : "إرسال الرسالة"}
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
