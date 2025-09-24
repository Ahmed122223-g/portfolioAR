import { Card } from "@/components/ui/card";
import { Code2, Database, Globe, Server } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* العنوان */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-accent-gradient bg-clip-text text-transparent leading-tight tracking-wide">
           About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            مطوّر ويب متحمس يتمتع بخبرة في تقنيات الويب الحديثة
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* النص */}
          <div className="space-y-8">
            <p className="text-lg text-foreground leading-8">
              أنا مطوّر برمجيات شغوف بعالم التقنية والتطوير، بخبرة عملية في بناء تطبيقات ويب متكاملة
              (Full-Stack). شغفي بدأ من حبّي للتجربة وحل المشكلات، واتطوّر مع الوقت من كتابة أكواد بسيطة
              لحد تنفيذ مشاريع حقيقية تجمع بين الواجهة الأمامية (Frontend) والواجهة الخلفية (Backend).
            </p>

            <p className="text-lg text-foreground leading-8">
              أتقن استخدام <span className="font-semibold text-accent">React</span> لتطوير واجهات مستخدم
              حديثة وسريعة، مع خبرة في <span className="font-semibold text-accent">Node.js</span> و{" "}
              <span className="font-semibold text-accent">Python (Flask/FastAPI)</span> لتصميم APIs قوية
              وآمنة. عندي خبرة عملية مع قواعد البيانات زي{" "}
              <span className="font-semibold text-accent">PostgreSQL</span>، وكمان في التعامل مع أدوات
              النسخ الاحتياطي، Git/GitHub، وطرق النشر المختلفة. بخلاف المهارات التقنية، عندي قدرة على
              فهم متطلبات العميل وتحويلها لحلول عملية ومنظمة.
            </p>

            <p className="text-lg text-foreground leading-8">
              هدفي إني أقدّم حلول برمجية مبتكرة تساعد على تطوير الأعمال وتحسين تجربة المستخدم. بشوف نفسي
              دايمًا في رحلة تعلّم مستمرة، أتابع أحدث التقنيات وأدمجها في شغلي. شغفي الأكبر هو إني أشارك
              في مشاريع حقيقية تضيف قيمة وتترك بصمة ملموسة في حياة المستخدمين.
            </p>
          </div>

          {/* الصورة */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/profile-image.png"
              alt="صورة شخصية للمطور"
              width={320}
              height={320}
              className="rounded-full object-cover border-4 border-accent shadow-lg hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
