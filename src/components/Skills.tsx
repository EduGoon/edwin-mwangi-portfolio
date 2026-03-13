import { 
  Smartphone, 
  Server, 
  Cloud, 
  Layers,
  Globe
} from "lucide-react";
 
const skillCategories = [
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: [
      "Kotlin",
      "Jetpack Compose",
      "XML",
      "Material Design 3",
      "MVVM/MVI",
      "Responsive Design",
      "Android Studio",
      "Gradle",
      "Google Play Services",
    ],
  },
  {
    title: "Backend & Web",
    icon: Server,
    skills: [
      "Node.js",
      "TypeScript",
      "RESTful APIs",
      "React",
      "PostgreSQL",
      "Prisma ORM",
      "Web Crawling",
      "Cloud Functions",
      "Cloud Run",
      "Server-side Architecture",
    ],
  },
  {
    title: "Firebase & Cloud",
    icon: Cloud,
    skills: [
      "Firebase Auth",
      "Firestore",
      "Cloud Storage",
      "FCM (Push Notifications)",
      "Google Cloud Platform",
      "Vercel",
      "Analytics",
      "Google OAuth",
    ],
  },
  {
    title: "Architecture & Patterns",
    icon: Layers,
    skills: [
      "Multi-Module Architecture",
      "Dependency Injection (Hilt)",
      "Repository Pattern",
      "Coroutines & Flow",
      "Unit Testing",
      "UI Testing",
    ],
  },
  {
    title: "AI & Emerging Tech",
    icon: Globe,
    skills: [
      "AI-assisted Development",
      "LLM Integration",
      "Prompt Engineering",
      "AI Code Review",
    ],
  },
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
              Core skills and technologies I work with, from mobile to full-stack web, cloud infrastructure, and AI-assisted development.
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
          </div>
 
          {/* Skills Grid — 2 cols, last card centered if odd */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => {
              const isLastOdd = index === skillCategories.length - 1 && skillCategories.length % 2 !== 0;
              return (
                <div
                  key={category.title}
                  className={`p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 ${isLastOdd ? "md:col-span-2 md:max-w-lg md:mx-auto md:w-full" : ""}`}
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
