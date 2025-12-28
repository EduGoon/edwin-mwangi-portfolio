import { Code2, Lightbulb, Rocket, GraduationCap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Problem Solver",
    description: "I thrive on turning complex challenges into elegant, efficient code solutions.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learner",
    description: "Always exploring new technologies and best practices to stay ahead of the curve.",
  },
  {
    icon: Rocket,
    title: "Product Builder",
    description: "From concept to deployment, I build applications that scale and delight users.",
  },
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description: "Pursuing BSc Computer Technology with a passion for software engineering.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm mb-4 block">// About Me</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Passionate About <span className="text-gradient">Building Things</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm <span className="text-foreground font-medium">Edwin Mwangi</span>, a 3rd-year 
                Computer Technology student at <span className="text-primary">Maseno University</span>, 
                Kenya. My journey in software development is driven by an unwavering passion for 
                creating solutions that make a difference.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As an <span className="text-foreground font-medium">Android Engineer</span>, I specialize 
                in building native applications using <span className="text-primary">Kotlin</span> and 
                <span className="text-primary"> Jetpack Compose</span>, following modern architectural 
                patterns and multi-modular codebase management for maintainable, scalable apps.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Beyond mobile development, I'm a <span className="text-foreground font-medium">Full-Stack Developer</span> with 
                expertise in building robust backend systems using Node.js and Firebase ecosystem. 
                From authentication to real-time databases, I create end-to-end solutions that 
                deliver exceptional user experiences.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "2+", label: "Apps Built" },
              { value: "3rd", label: "Year Student" },
              { value: "Full", label: "Stack Developer" },
              { value: "∞", label: "Learning Hours" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-xl bg-secondary/30 border border-border"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
