import { useState } from "react";
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
      "An intelligent events discovery platform that aggregates local events using web crawling. Designed to help users explore what's happening around them through a clean and intuitive mobile experience.",
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

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="py-24 md:py-32 relative bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-purple-950/20 to-slate-950 opacity-50" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-blue-400 text-sm mb-4 block">
            // Featured Projects
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            What I've <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Built</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Android applications backed by scalable backend systems, built with
            production-grade architecture and clean code principles.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6" />
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
              <div 
                className="relative p-6 md:p-8 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 group-hover:border-blue-500/30 transition-all duration-300 cursor-pointer"
                onClick={() => setActiveProject(project)}
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Icon + Status */}
                  <div className="flex lg:flex-col items-center lg:items-start gap-4">
                    <div
                      className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg shrink-0`}
                    >
                      <project.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </div>

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                      <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                      <span className="text-xs font-mono text-blue-400">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-1 text-white">
                      {project.title}
                    </h3>
                    <p className="text-blue-400 font-medium mb-3">
                      {project.tagline}
                    </p>
                    <p className="text-slate-400 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
                      {project.features.map((feature) => (
                        <div
                          key={feature.text}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50"
                        >
                          <feature.icon className="w-4 h-4 text-blue-400 shrink-0" />
                          <span className="text-xs md:text-sm text-slate-300">
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-mono rounded-md bg-slate-800 border border-slate-700 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Click indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs text-slate-500 font-mono">
                    Click to view links →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-400 mb-4">
            More projects coming as I continue building and shipping.
          </p>
          <a
            href="https://github.com/EduGoon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-700 hover:border-blue-500 text-slate-300 hover:text-white transition-all"
          >
            <Github className="w-4 h-4" />
            View GitHub Profile
          </a>
        </div>
      </div>

      {/* Modal Overlay */}
      {activeProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-200"
          style={{ animation: 'fadeIn 0.2s ease-out' }}
          onClick={() => setActiveProject(null)}
        >
          {/* Backdrop blur */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
          
          {/* Modal Content */}
          <div 
            className="relative z-10 w-full max-w-md"
            style={{ animation: 'zoomIn 0.2s ease-out' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`relative p-8 rounded-3xl bg-gradient-to-br ${activeProject.gradient} shadow-2xl`}>
              {/* Close button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <activeProject.icon className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold text-white text-center mb-2">
                {activeProject.title}
              </h3>
              <p className="text-white/90 text-center mb-8">
                {activeProject.tagline}
              </p>

              {/* Action Buttons */}
              <div className="space-y-3">
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-xl bg-white text-gray-900 font-semibold hover:bg-white/90 transition-all transform hover:scale-105 shadow-lg"
                >
                  <Github className="w-5 h-5" />
                  View on GitHub
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  disabled
                  className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-xl bg-white/10 text-white/50 font-semibold cursor-not-allowed backdrop-blur-sm"
                >
                  <Store className="w-5 h-5" />
                  Play Store (Coming Soon)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes zoomIn {
          from { 
            opacity: 0;
            transform: scale(0.95);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}
      </div>
    </section>
  );
};
