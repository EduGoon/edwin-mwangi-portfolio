import { useState } from "react";
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
  X,
  Ticket,
  BookOpen,
  Zap
} from "lucide-react";
 
const projects = [
  {
    id: "TketEnt",
    title: "TketEnt",
    tagline: "Kenya's #1 Events & Culture Platform",
    description:
      "A full-stack events ticketing and discovery platform built for the Kenyan market. Users can browse events, purchase tickets, read editorial content from local writers, and manage their bookings — all in one dark, luxury-styled web experience.",
    icon: Ticket,
    gradient: "from-yellow-500 to-amber-600",
    features: [
      { icon: Zap, text: "Events ticketing" },
      { icon: BookOpen, text: "Editorial blog (The Hub)" },
      { icon: Server, text: "REST API backend" },
      { icon: Globe, text: "Live on the web" },
    ],
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Google Cloud Run",
      "Cloud Storage",
      "Vercel",
    ],
    liveUrl: "https://tketent.space",
    githubUrl: null,
    status: "Live",
  },
  {
    id: "xplay",
    title: "Xplay",
    tagline: "Competitive Gaming Community Platform",
    description:
      "A dynamic gaming community where players can test their skills against each other, track their rankings, and compete on leaderboards across multiple games. Available as both a native Android app and a web platform.",
    icon: Gamepad2,
    gradient: "from-orange-500 to-pink-500",
    features: [
      { icon: Trophy, text: "Real-time leaderboards" },
      { icon: Users, text: "Player matchmaking" },
      { icon: Smartphone, text: "Native Android app" },
      { icon: Globe, text: "Web platform" },
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
    liveUrl: "https://xplay-82496.web.app/",
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
    liveUrl: null,
    status: "In Development",
  },
];
 
export const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
 
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
              Mobile applications, backend systems, and full-stack web platforms designed with scalability and maintainability in mind — from concept to production.
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
          </div>
 
          {/* Projects */}
          <div className="space-y-12">
            {projects.map((project) => (
              <div key={project.id} className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-500`} />
                
                <div 
                  className="relative p-6 md:p-8 rounded-2xl bg-gradient-card border border-border group-hover:border-primary/30 transition-all duration-300 cursor-pointer"
                  onClick={() => setActiveProject(project)}
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Project Icon & Status */}
                    <div className="flex lg:flex-col items-center lg:items-start gap-4">
                      <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg shrink-0`}>
                        <project.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                      </div>
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${project.status === 'Live' ? 'bg-green-500/10 border-green-500/30' : 'bg-primary/10 border-primary/20'}`}>
                        <span className={`w-2 h-2 rounded-full animate-pulse ${project.status === 'Live' ? 'bg-green-400' : 'bg-primary'}`} />
                        <span className={`text-xs font-mono ${project.status === 'Live' ? 'text-green-400' : 'text-primary'}`}>{project.status}</span>
                      </div>
                    </div>
 
                    {/* Project Info */}
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold mb-1">{project.title}</h3>
                      <p className="text-primary font-medium mb-3">{project.tagline}</p>
                      <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>
 
                      {/* Features */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
                        {project.features.map((feature) => (
                          <div key={feature.text} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/30 border border-border/50">
                            <feature.icon className="w-4 h-4 text-primary shrink-0" />
                            <span className="text-xs md:text-sm">{feature.text}</span>
                          </div>
                        ))}
                      </div>
 
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="px-3 py-1 text-xs font-mono rounded-md bg-secondary border border-border">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
 
                  {/* Click indicator */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs text-muted-foreground font-mono">Click to view links →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
 
          {/* More Projects CTA */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">More exciting projects in the pipeline!</p>
            <Button variant="outline" asChild>
              <a href="https://github.com/EduGoon" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                <Github className="w-4 h-4" />
                View GitHub Profile
              </a>
            </Button>
          </div>
        </div>
      </div>
 
      {/* Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setActiveProject(null)}>
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
          
          <div className="relative z-10 w-full max-w-md" onClick={(e) => e.stopPropagation()}>
            <div className={`relative p-8 rounded-3xl bg-gradient-to-br ${activeProject.gradient} shadow-2xl`}>
              <button onClick={() => setActiveProject(null)} className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
                <X className="w-5 h-5 text-white" />
              </button>
 
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <activeProject.icon className="w-10 h-10 text-white" />
                </div>
              </div>
 
              <h3 className="text-3xl font-bold text-white text-center mb-2">{activeProject.title}</h3>
              <p className="text-white/90 text-center mb-8">{activeProject.tagline}</p>
 
              <div className="space-y-3">
                {/* Live website link */}
                {activeProject.liveUrl ? (
                  <a href={activeProject.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-xl bg-white text-gray-900 font-semibold hover:bg-white/90 transition-all transform hover:scale-105 shadow-lg">
                    <Globe className="w-5 h-5" />
                    Visit Website
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : null}
 
                {/* GitHub link */}
                {activeProject.githubUrl ? (
                  <a href={activeProject.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-xl bg-white/20 text-white font-semibold hover:bg-white/30 transition-all transform hover:scale-105 backdrop-blur-sm">
                    <Github className="w-5 h-5" />
                    View on GitHub
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : null}
 
                {/* Play Store — always shown for mobile projects */}
                {(activeProject.id === "xplay" || activeProject.id === "eventify") && (
                  <button disabled className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-xl bg-white/10 text-white/50 font-semibold cursor-not-allowed backdrop-blur-sm">
                    <Store className="w-5 h-5" />
                    Play Store (Coming Soon)
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
