import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "منصة تجارة إلكترونية",
      description: "متجر إلكتروني متكامل فيه تسجيل دخول المستخدمين، معالجة الدفع، إدارة المخزون، ولوحة تحكم للأدمن. مبني بـ React في الواجهة الأمامية و node.js في الخلفية.",
      technologies: ["React", "node.js", "PostgreSQL", "Stripe", "Redis", "Docker"],
      features: ["تسجيل دخول المستخدمين", "معالجة الدفع", "إدارة المخزون", "لوحة تحكم الأدمن", "تتبع الطلبات"],
      github: "https://github.com/Ahmed122223-g/E-commerce-Platform",
      demo: "https://github.com/Ahmed122223-g/E-commerce-Platform",
      status: "شغال"
    },
    {
      title: "تطبيق إدارة المهام",
      description: "أداة لإدارة المشاريع بشكل تعاوني مع تحديثات لحظية، مساحات عمل للفرق، مشاركة ملفات، وتتبع التقدم. يتميز بواجهة سحب وإفلات وإشعارات.",
      technologies: ["React", "Node.js", "PostgreSQL", "Express", "JWT"],
      features: ["تعاون لحظي", "واجهة سحب وإفلات", "مشاركة ملفات", "مساحات عمل للفرق", "إشعارات فورية"],
      github: "https://ahmed-mohamed-portfolio.vercel.app",
      demo: "https://ahmed-mohamed-portfolio.vercel.app",
      status: "قيد التطوير"
    },
    {
      title: "تطبيق تواصل اجتماعي (نسخة إنستجرام)",
      description: "منصة اجتماعية مستوحاة من إنستجرام فيها مشاركة صور، محادثات فورية، خاصية القصص، والتفاعلات. تشمل خوارزميات توصية وإدارة محتوى.",
      technologies: ["React", "FastAPI", "PostgreSQL", "AWS S3"],
      features: ["مشاركة الصور", "محادثات فورية", "خاصية القصص", "نظام إعجاب وتعليقات", "إدارة محتوى"],
      github: "https://ahmed-mohamed-portfolio.vercel.appg",
      demo: "https://ahmed-mohamed-portfolio.vercel.app",
      status: "قيد التطوير"
    },
    {
      title: "موقع بورتفوليو شخصي",
      description: "موقع شخصي متجاوب لعرض المشاريع والمهارات والخبرات. فيه حركات سلسة، وضع ليلي، وأداء محسن مع نتائج ممتازة في Lighthouse.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      features: ["تصميم متجاوب", "حركات سلسة", "محسن للسيو", "أداء عالي", "نموذج تواصل"],
      github: "https://github.com/Ahmed122223-g/byte-brigade-portfolio",
      demo: "https://ahmed-mohamed-portfolio.vercel.app",
      status: "شغال"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-accent-gradient bg-clip-text text-transparent">
            المشاريع المميزة
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            عرض حلول مبتكرة وخبرات تقنية متنوعة في مجالات مختلفة
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-card-gradient border-border hover:shadow-glow-accent transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <Badge 
                    variant={project.status === "شغال" ? "default" : "secondary"}
                    className={project.status === "شغال" ? "bg-green-500/20 text-green-400 border-green-500/30" : ""}
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* التقنيات */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">التقنيات المستخدمة:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs border-accent/30 text-accent">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* الخصائص */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">الخصائص الرئيسية:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* الأزرار */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    size="sm" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      عرض الموقع
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      الكود
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
