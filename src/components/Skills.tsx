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
    skills: ["Kotlin", "Jetpack Compose", "Multi-Module Architecture", "Material Design 3", "MVVM/MVI"],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Node.js", "REST APIs", "JavaScript/TypeScript", "Web Crawling", "Cloud Functions"],
  },
  {
    title: "Firebase Ecosystem",
    icon: Cloud,
    skills: ["Authentication", "Firestore", "Cloud Storage", "FCM (Push Notifications)", "Analytics"],
  },
  {
    title: "Architecture & Patterns",
    icon: Layers,
    skills: ["Clean Architecture", "Dependency Injection", "Repository Pattern", "Coroutines & Flow", "Unit & UI Testing"],
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
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm font-medium rounded-lg bg-secondary/50 border border-border hover:border-primary hover:text-primary transition-all duration-300"
                    >
                      {skill}
                    </span>
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
