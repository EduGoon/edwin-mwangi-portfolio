import { Button } from "@/components/ui/button";
import { Download, ArrowLeft, Mail, MapPin, Github, Linkedin } from "lucide-react";

const Resume = () => {
  const handleDownload = () => {
    window.print();
  };

  return (
    <>
      {/* Screen-only header */}
      <div className="print:hidden bg-background border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </button>
          <Button onClick={handleDownload} variant="default" size="default">
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </div>
      </div>

      {/* Resume Content */}
      <div className="min-h-screen bg-background print:bg-white print:min-h-0">
        <div className="container mx-auto px-6 py-12 print:px-0 print:py-0">
          <div className="max-w-[850px] mx-auto bg-card print:bg-white rounded-xl print:rounded-none shadow-xl print:shadow-none p-8 md:p-12 print:p-8">

            {/* Header */}
            <header className="border-b border-border print:border-gray-400 pb-6 mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground print:text-black mb-2">
                Edwin Mwangi
              </h1>
              <p className="text-xl text-primary print:text-gray-700 font-medium mb-1">
                Junior Backend Engineer — Go
              </p>
              <p className="text-md text-muted-foreground print:text-gray-600 mb-4">
                Backend-first engineer focused on scalable APIs and distributed systems
              </p>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground print:text-gray-600">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  Kisumu, Kenya (Remote)
                </span>
                <a
                  href="mailto:mwangiedwin131@gmail.com"
                  className="flex items-center gap-1 hover:text-primary print:text-gray-600"
                >
                  <Mail className="w-4 h-4" />
                  mwangiedwin131@gmail.com
                </a>
              </div>

              <div className="flex gap-4 mt-3 text-sm text-muted-foreground print:text-gray-600">
                <a
                  href="https://github.com/EduGoon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-primary print:text-gray-600"
                >
                  <Github className="w-4 h-4" />
                  github.com/EduGoon
                </a>
                <a
                  href="https://www.linkedin.com/in/edwin-mwangi-263481270/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-primary print:text-gray-600"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </header>

            {/* Profile */}
            <section className="mb-6">
              <h2 className="text-lg font-bold uppercase tracking-wide text-foreground print:text-black border-b border-border print:border-gray-400 pb-2 mb-3">
                Profile
              </h2>
              <p className="text-muted-foreground print:text-gray-700 leading-relaxed">
                Junior backend engineer specializing in Go, with hands-on experience building RESTful APIs, concurrent data-processing services, and production-ready backend systems. Strong understanding of Go idioms, goroutines, channels, and clean architecture. Comfortable working in distributed systems, debugging production issues, and collaborating across product and DevOps teams.
              </p>
            </section>

            {/* Technical Skills */}
            <section className="mb-6">
              <h2 className="text-lg font-bold uppercase tracking-wide text-foreground print:text-black border-b border-border print:border-gray-400 pb-2 mb-3">
                Technical Skills
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h3 className="font-semibold text-foreground print:text-black mb-1">Backend (Go)</h3>
                  <ul className="list-disc list-inside text-muted-foreground print:text-gray-700 space-y-1">
                    <li>Go (goroutines, channels, context, standard library)</li>
                    <li>Gin / Echo frameworks</li>
                    <li>REST API design & microservices</li>
                    <li>Concurrency, performance tuning</li>
                    <li>Unit & integration testing</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground print:text-black mb-1">Data & Infrastructure</h3>
                  <ul className="list-disc list-inside text-muted-foreground print:text-gray-700 space-y-1">
                    <li>PostgreSQL, MongoDB</li>
                    <li>Redis (caching, rate limiting)</li>
                    <li>Docker & containerized services</li>
                    <li>AWS basics (EC2, S3, IAM)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground print:text-black mb-1">Architecture & Practices</h3>
                  <ul className="list-disc list-inside text-muted-foreground print:text-gray-700 space-y-1">
                    <li>Clean Architecture</li>
                    <li>Service-oriented design</li>
                    <li>Error handling & observability</li>
                    <li>CI/CD pipelines</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground print:text-black mb-1">Supporting Skills</h3>
                  <ul className="list-disc list-inside text-muted-foreground print:text-gray-700 space-y-1">
                    <li>Git & GitHub</li>
                    <li>Linux & debugging tools</li>
                    <li>Android (secondary): Kotlin, Coroutines</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Project Experience */}
            <section className="mb-6">
              <h2 className="text-lg font-bold uppercase tracking-wide text-foreground print:text-black border-b border-border print:border-gray-400 pb-2 mb-3">
                Project Experience
              </h2>

              <div className="mb-4">
                <h3 className="font-semibold text-foreground print:text-black">Eventify — Event Aggregation Platform</h3>
                <p className="text-sm text-muted-foreground print:text-gray-700 mb-2">
                  Go Backend Services
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground print:text-gray-700 space-y-1">
                  <li>Built concurrent Go services to crawl, normalize, and ingest event data from multiple sources</li>
                  <li>Designed and implemented RESTful APIs using Gin for high-throughput data access</li>
                  <li>Used goroutines and worker pools to process large volumes of external data efficiently</li>
                  <li>Integrated PostgreSQL for persistence and Redis for caching hot paths</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground print:text-black">Xplay — Competitive Gaming Platform</h3>
                <p className="text-sm text-muted-foreground print:text-gray-700 mb-2">
                  Backend APIs + Android Client
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground print:text-gray-700 space-y-1">
                  <li>Developed Go-based backend endpoints for real-time rankings and match synchronization</li>
                  <li>Designed stateless services suitable for horizontal scaling</li>
                  <li>Collaborated with frontend/mobile components to ensure end-to-end reliability</li>
                </ul>
              </div>
            </section>

            {/* Education */}
            <section className="mb-6">
              <h2 className="text-lg font-bold uppercase tracking-wide text-foreground print:text-black border-b border-border print:border-gray-400 pb-2 mb-3">
                Education
              </h2>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-foreground print:text-black">BSc Computer Technology</h3>
                  <p className="text-muted-foreground print:text-gray-700">Maseno University</p>
                </div>
                <span className="text-sm text-muted-foreground print:text-gray-600">2022 – Present</span>
              </div>
            </section>

            {/* Availability */}
            <section>
              <h2 className="text-lg font-bold uppercase tracking-wide text-foreground print:text-black border-b border-border print:border-gray-400 pb-2 mb-3">
                Availability
              </h2>
              <p className="text-sm text-muted-foreground print:text-gray-700">
                Open to full-time junior backend roles and remote-first teams.
              </p>
            </section>

          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
