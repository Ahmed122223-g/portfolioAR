// src/components/About.tsx
import Image from "next/image";
// شيل أي imports مش مستخدمين مثل Card أو أي أيقونات لو مش بتستخدمها فعلاً

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* العنوان */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight tracking-wide bg-accent-gradient bg-clip-text text-transparent">
            من أنا؟
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            مطور ويب متحمس يتمتع بخبرة في تقنيات الويب الحديثة
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* النص */}
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-8">
              أنا مطوّر برمجيات شغوف بعالم التقنية والتطوير، بخبرة عملية في بناء تطبيقات ويب متكاملة
              (Full-Stack). شغفي بدأ من حبّي للتجربة وحل المشكلات، واتطوّر مع الوقت من كتابة أكواد بسيطة
              لحد تنفيذ مشاريع حقيقية تجمع بين الواجهة الأمامية (Frontend) والواجهة الخلفية (Backend).
            </p>

            <p className="text-lg text-foreground leading-8">
              أتقن استخدام <span className="font-semibold text-accent">React</span> لتطوير واجهات سريعة،
              ومع خبرة في <span className="font-semibold text-accent">Node.js</span> و{" "}
              <span className="font-semibold text-accent">Python (Flask/FastAPI)</span> لبناء APIs متينة.
            </p>

            <p className="text-lg text-foreground leading-8">
              هدفي إني أقدّم حلول برمجية مبتكرة تساعد على تطوير الأعمال وتحسين تجربة المستخدم.
            </p>
          </div>

          {/* الصورة */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/profile-image.png"
              alt="صورة شخصية للمطور"
              width={320}
              height={320}
              className="rounded-full object-cover border-4 border-accent shadow-lg transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
