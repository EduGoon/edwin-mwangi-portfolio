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
} from "lucide-react";

const projects = [
  {
    id: "xplay",
    title: "Xplay",
    tagline: "Competitive Gaming Community Platform",
    description:
      "A competitive gaming platform where players test skills, compete in challenges, and climb real-time leaderboards.",
    icon: Gamepad2,
    gradient: "from-orange-500 to-pink-500",
    repo: "https://github.com/EduGoon/Xplay",
    playstore: null,
    features: [
      { icon: Trophy, text: "Real-time leaderboards" },
      { icon: Users, text: "Player matchmaking" },
      { icon: Smartphone, text: "Native Android app" },
      { icon: Server, text: "Scalable backend" },
    ],
  },
  {
    id: "eventify",
    title: "Eventify",
    tagline: "Discover Events Near You",
    description:
      "An intelligent events discovery app that aggregates and recommends nearby events using web crawling.",
    icon: CalendarDays,
    gradient: "from-cyan-500 to-blue-500",
    repo: "https://github.com/EduGoon/Eventify",
    playstore: null,
    features: [
      { icon: MapPin, text: "Location-based discovery" },
      { icon: Globe, text: "Web crawling engine" },
      { icon: Smartphone, text: "Modern mobile UI" },
      { icon: Server, text: "Backend API" },
    ],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm mb-4 block">
              // Featured Projects
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              What I’ve <span className="text-gradient">Built</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Mobile applications and backend systems built with real-world scalability
              and maintainability in mind.
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-card"
              >
                {/* Gradient glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative p-8 z-10">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6`}
                  >
                    <project.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {project.tagline}
                  </p>
                  <p className="text-muted-foreground mb-6">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {project.features.map((feature) => (
                      <div
                        key={feature.text}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <feature.icon className="w-4 h-4 text-primary" />
                        {feature.text}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover / Tap Overlay */}
                <div
                  className="
                    absolute inset-0 z-20
                    flex items-center justify-center gap-4
                    bg-background/70 backdrop-blur-md
                    opacity-0 pointer-events-none
                    group-hover:opacity-100 group-hover:pointer-events-auto
                    transition-all duration-300
                  "
                >
                  <Button asChild variant="hero" size="lg">
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="w-5 h-5" />
                      View Code
                    </a>
                  </Button>

                  <Button variant="heroOutline" size="lg" disabled>
                    <ExternalLink className="w-5 h-5 mr-1" />
                    Play Store
                  </Button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

      </div>
    </section>
  );
};
