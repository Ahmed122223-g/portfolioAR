import { Card } from "@/components/ui/card";
import { Code2, Database, Globe, Server } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-accent-gradient bg-clip-text text-transparent">
            من انا؟
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            مطور ويب متحمس يتمتع بخبرة في تقنيات الويب الحديثة
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              أنا مطوّر برمجيات شغوف بعالم التقنية والتطوير، بخبرة عملية في بناء تطبيقات ويب متكاملة (Full-Stack). شغفي بدأ من حبّي للتجربة وحل المشكلات، واتطوّر مع الوقت من كتابة أكواد بسيطة لحد تنفيذ مشاريع حقيقية تجمع بين الواجهة الأمامية (Frontend) والواجهة الخلفية (Backend).
            </p>
            
            <p className="text-lg text-foreground leading-relaxed">
              أتقن استخدام React لتطوير واجهات مستخدم حديثة وسريعة، مع خبرة في Node.js و Python (Flask/FastAPI) لتصميم APIs قوية وآمنة. عندي خبرة عملية مع قواعد البيانات زي PostgreSQL، وكمان في التعامل مع أدوات النسخ الاحتياطي، Git/GitHub، وطرق النشر المختلفة. بخلاف المهارات التقنية، عندي قدرة على فهم متطلبات العميل وتحويلها لحلول عملية ومنظمة.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              هدفي إني أقدّم حلول برمجية مبتكرة تساعد على تطوير الأعمال وتحسين تجربة المستخدم. بشوف نفسي دايمًا في رحلة تعلّم مستمرة، أتابع أحدث التقنيات وأدمجها في شغلي. شغفي الأكبر هو إني أشارك في مشاريع حقيقية تضيف قيمة وتترك بصمة ملموسة في حياة المستخدمين.
            </p>
          </div>

          {/* الصورة الشخصية */}
          <div className="flex justify-center md:justify-end">
            <img 
              src="/profile-image.png" 
              alt="صورة شخصية للمطور" 
              className="rounded-full w-full max-w-xs md:max-w-sm object-cover aspect-square border-4 border-accent shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
