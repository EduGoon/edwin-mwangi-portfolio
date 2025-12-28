import { Button } from "@/components/ui/button";
import { 
  Gamepad2, 
  CalendarDays, 
  Trophy, 
  Users, 
  MapPin, 
  Globe,
  Smartphone,
  Server,
  ExternalLink,
  Github
} from "lucide-react";

const projects = [
  {
    id: "xplay",
    title: "Xplay",
    tagline: "Competitive Gaming Community Platform",
    description:
      "A dynamic gaming community where players can test their skills against each other, track their rankings, and compete on leaderboards across multiple games. Built with a focus on real-time updates and seamless multiplayer experiences.",
    icon: Gamepad2,
    gradient: "from-orange-500 to-pink-500",
    features: [
      { icon: Trophy, text: "Real-time leaderboards" },
      { icon: Users, text: "Player matchmaking" },
      { icon: Smartphone, text: "Native Android experience" },
      { icon: Server, text: "Scalable backend" },
    ],
    techStack: [
      "Kotlin",
      "Jetpack Compose",
      "Firebase Auth",
      "Firestore",
      "FCM",
      "Node.js",
    ],
    status: "In Development",
  },
  {
    id: "eventify",
    title: "Eventify",
    tagline: "Discover Events Near You",
    description:
      "An intelligent events discovery platform that helps users find exciting events happening in their vicinity. Powered by web crawling technology, Eventify aggregates events from multiple sources to provide a comprehensive local events guide.",
    icon: CalendarDays,
    gradient: "from-cyan-500 to-blue-500",
    features: [
      { icon: MapPin, text: "Location-based discovery" },
      { icon: Globe, text: "Web crawling engine" },
      { icon: Smartphone, text: "Intuitive mobile UI" },
      { icon: Server, text: "REST API backend" },
    ],
    techStack: [
      "Kotlin",
      "Jetpack Compose",
      "Firebase Auth",
      "Cloud Storage",
      "Node.js",
      "Web Crawling",
    ],
    status: "In Development",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-hero opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm mb-4 block">
              // Featured Projects
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              What I've <span className="text-gradient">Built</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Full-stack mobile applications designed with scalability in mind,
              from concept to production-ready code.
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
          </div>

          {/* Projects */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Project Visual */}
                <div
                  className={`relative group ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-500`}
                  />
                  <div className="relative p-8 md:p-12 rounded-2xl bg-gradient-card border border-border group-hover:border-primary/30 transition-all duration-300">
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <project.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {project.features.map((feature) => (
                        <div
                          key={feature.text}
                          className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30"
                        >
                          <feature.icon className="w-4 h-4 text-primary shrink-0" />
                          <span className="text-sm">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs font-mono text-primary">
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-primary font-medium mb-4">
                    {project.tagline}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono rounded-md bg-secondary border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button variant="heroOutline" size="sm" disabled>
                      <ExternalLink className="w-4 h-4" />
                      Coming Soon
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More Projects CTA */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">
              More exciting projects in the pipeline!
            </p>
            <Button variant="outline" asChild>
              <a
                href="https://github.com/EduGoon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4" />
                View GitHub Profile
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
