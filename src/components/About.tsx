import { Card } from "@/components/ui/card";
import { Code2, Database, Globe, Server } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-accent-gradient bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate Full-Stack Developer with expertise in modern web technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              I'm a dedicated Full-Stack Developer with a passion for building innovative
              web applications that solve real-world problems. With expertise spanning
              both frontend and backend technologies, I create seamless user experiences
              backed by robust, scalable architectures.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed">
              My journey in software development is driven by curiosity and a commitment
              to continuous learning. I believe in writing clean, maintainable code and
              staying current with the latest industry trends and best practices.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing
              to open-source projects, or sharing knowledge with the developer community.
              I'm always excited to take on new challenges and collaborate on impactful projects.
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
