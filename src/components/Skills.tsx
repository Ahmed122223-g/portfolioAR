import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skills = {
    "Frontend": [
      "React", "JavaScript", "TypeScript", "HTML5", "CSS3", 
      "Tailwind CSS", "Vite", "UI/UX"
    ],
    "Backend": [
      "Python", "FastAPI", "Node.js", "Express.js",
       "Authentication", "API Design"
    ],
    "Database": [
      "PostgreSQL", "MySQL", "Database Design",
      "Query Optimization", "Data Modeling", "SQLAlchemy"
    ],
    "DevOps & Tools": [
      "Git", "Testing", "Postman", "Linux", "AWS"
    ]
  };

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-accent-gradient bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground border-l-4 border-accent pl-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="bg-card border-border text-card-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
