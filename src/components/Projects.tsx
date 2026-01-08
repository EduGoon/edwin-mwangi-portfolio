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
  Github,
  Store,
} from "lucide-react";

const projects = [
  {
    id: "xplay",
    title: "Xplay",
    tagline: "Competitive Gaming Community Platform",
    description:
      "A dynamic gaming community where players can test their skills against each other, track rankings, and compete on leaderboards across multiple games. Built with a focus on real-time updates and scalability.",
    icon: Gamepad2,
    gradient: "from-orange-500 to-pink-500",
    features: [
      { icon: Trophy, text: "Real-time leaderboards" },
      { icon: Users, text: "Player matchmaking" },
      { icon: Smartphone, text: "Native Android app" },
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
    githubUrl: "https://github.com/EduGoon/Xplay",
    playStoreUrl: "",
    status: "In Development",
  },
  {
    id: "eventify",
    title: "Eventify",
    tagline: "Discover Events Near You",
    description:
      "An intelligent events discovery platform that aggregates local events using web crawling. Designed to help users explore what’s happening around them through a clean and intuitive mobile experience.",
    icon: CalendarDays,
    gradient: "from-cyan-500 to-blue-500",
    features: [
      { icon: MapPin, text: "Location-based discovery" },
      { icon: Globe, text: "Web crawling engine" },
      { icon: Smartphone, text: "Modern mobile UI" },
      { icon: Server, text: "Backend API" },
    ],
    techStack: [
      "Kotlin",
      "Jetpack Compose",
      "Firebase Auth",
      "Cloud Storage",
      "Node.js",
      "Web Crawling",
    ],
    githubUrl: "https://github.com/EduGoon/Eventify",
    playStoreUrl: "",
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
              Android applications backed by scalable backend systems, built with
              production-grade architecture and clean code principles.
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
          </div>

          {/* Projects */}
          <div className="space-y-12">
            {projects.map((project) => (
              <div key={project.id} className="relative group">
                {/* Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-500`}
                />

                {/* Card */}
                <div className="relative p-6 md:p-8 rounded-2xl bg-gradient-card border border-border group-hover:border-primary/30 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Icon + Status */}
                    <div className="flex lg:flex-col items-center lg:items-start gap-4">
                      <div
                        className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg shrink-0`}
                      >
                        <project.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                      </div>

                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-xs font-mono text-primary">
                          {project.status}
                        </span>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold mb-1">
                        {project.title}
                      </h3>
                      <p className="text-primary font-medium mb-3">
                        {project.tagline}
                      </p>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Features */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
                        {project.features.map((feature) => (
                          <div
                            key={feature.text}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/30 border border-border/50"
                          >
                            <feature.icon className="w-4 h-4 text-primary shrink-0" />
                            <span className="text-xs md:text-sm">
                              {feature.text}
                            </span>
                          </div>
                        ))}
                      </div>

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

                      {/* Actions (Reveal on hover / tap) */}
                      <div className="flex gap-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                        <Button variant="heroOutline" size="sm" asChild>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <Github className="w-4 h-4" />
                            GitHub
                          </a>
                        </Button>

                        <Button variant="outline" size="sm" disabled>
                          <Store className="w-4 h-4" />
                          Play Store
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">
              More projects coming as I continue building and shipping.
            </p>
            <Button variant="outline" asChild>
              <a
                href="https://github.com/EduGoon"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
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
