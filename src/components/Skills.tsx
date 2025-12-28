import { 
  Smartphone, 
  Server, 
  Database, 
  Cloud, 
  TestTube, 
  Layers,
  Code2,
  Zap
} from "lucide-react";

const skillCategories = [
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: [
      { name: "Kotlin", level: 95 },
      { name: "Jetpack Compose", level: 90 },
      { name: "Multi-Module Architecture", level: 85 },
      { name: "Material Design 3", level: 90 },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      { name: "Node.js", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "JavaScript/TypeScript", level: 85 },
      { name: "Web Crawling", level: 80 },
    ],
  },
  {
    title: "Firebase Ecosystem",
    icon: Cloud,
    skills: [
      { name: "Authentication", level: 90 },
      { name: "Firestore", level: 90 },
      { name: "Cloud Storage", level: 85 },
      { name: "FCM (Push Notifications)", level: 85 },
    ],
  },
  {
    title: "Architecture & Patterns",
    icon: Layers,
    skills: [
      { name: "MVVM/MVI", level: 90 },
      { name: "Clean Architecture", level: 85 },
      { name: "Dependency Injection", level: 85 },
      { name: "Repository Pattern", level: 90 },
    ],
  },
];

const techStack = [
  { name: "Kotlin", category: "Language" },
  { name: "JavaScript", category: "Language" },
  { name: "Jetpack Compose", category: "UI Framework" },
  { name: "Node.js", category: "Runtime" },
  { name: "Firebase", category: "BaaS" },
  { name: "Firestore", category: "Database" },
  { name: "REST APIs", category: "Integration" },
  { name: "FCM", category: "Messaging" },
  { name: "Git", category: "Version Control" },
  { name: "Material Design", category: "Design System" },
  { name: "Hilt/Dagger", category: "DI" },
  { name: "Coroutines", category: "Async" },
  { name: "Flow", category: "Reactive" },
  { name: "Unit Testing", category: "Testing" },
  { name: "UI Testing", category: "Testing" },
  { name: "Responsive Design", category: "UI/UX" },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm mb-4 block">// Skills & Expertise</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              My <span className="text-gradient">Tech Arsenal</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit built through hands-on experience developing 
              production-ready applications that scale.
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground font-mono">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${categoryIndex * 0.1 + skillIndex * 0.05}s`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Cloud */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-8">
              <Code2 className="w-5 h-5 inline-block mr-2 text-primary" />
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="px-4 py-2 rounded-lg bg-secondary/50 border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 group cursor-default"
                >
                  <span className="font-medium text-sm group-hover:text-primary transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
