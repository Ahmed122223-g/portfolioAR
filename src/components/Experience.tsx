import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "مطور ويب في العمل الحر",
      company: "نوظيف شخصي",
      location: "العمل عن بعد",
      period: "2024 - الان",
      type: "العمل الحر",
      description: "قدّمنا خدمات تطوير الويب للشركات الصغيرة والناشئة. أدرنا دورة حياة المشروع كاملةً، من جمع المتطلبات إلى النشر.",
      achievements: [
        "تم إكمال أكثر من 5 مشاريع للعملاء الراضين",
        "تم تسليم جميع المشاريع في الوقت المحدد وضمن الميزانية",
        "بناء علاقات طويلة الأمد مع العملاء المتكررين",
        "اكتسبت خبرة في متطلبات الأعمال المتنوعة"
      ],
      technologies: ["JavaScript", "React", "python", "pgstoreSQL", "vercel"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-accent-gradient bg-clip-text text-transparent">
           Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground">
              رحلة من النمو والتعلم والمساهمات المؤثرة
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="bg-card-gradient border-border hover:shadow-glow-accent transition-all duration-300 hover:scale-[1.02]"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl font-bold text-card-foreground mb-2">
                      {exp.title}
                    </CardTitle>
                    <CardDescription className="text-lg font-semibold text-accent">
                      {exp.company}
                    </CardDescription>
                  </div>
                  
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CalendarDays size={16} />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin size={16} />
                      {exp.location}
                    </div>
                    <Badge 
                      variant="outline" 
                      className="w-fit border-accent/30 text-accent"
                    >
                      {exp.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">الإنجازات الاساسيه:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">الادوات و اللغات المستخدمه:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary"
                        className="bg-muted text-muted-foreground border-border hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
