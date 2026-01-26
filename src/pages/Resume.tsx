import { Button } from "@/components/ui/button";
import { Download, ArrowLeft, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

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
                Backend Developer (Contract / Remote)
              </p>
              <p className="text-md text-muted-foreground print:text-gray-600 mb-4">
                Secondary: Android (Mobile) Development
              </p>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground print:text-gray-600">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  Kisumu, Kenya
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
                Backend-focused software developer with experience building and maintaining API-driven systems, data ingestion pipelines, and mobile-integrated backends. I specialize in designing REST APIs, implementing backend services, and supporting production Android applications. Comfortable working on existing codebases, implementing features, fixing bugs, and delivering task-based work in fast-moving environments.
                <br />
                <br />
                I am also actively learning Go and building scalable backend services using Go, Gin, and PostgreSQL. I’m focused on writing clean, testable, and maintainable code with strong architecture principles.
              </p>
            </section>

            {/* Technical Skills */}
            <section className="mb-6">
              <h2 className="text-lg font-bold uppercase tracking-wide text-foreground print:text-black border-b border-border print:border-gray-400 pb-2 mb-3">
                Technical Skills
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h3 className="font-semibold text-foreground print:text-black mb-1">Backend Development</h3>
                  <ul className="list-disc list-inside text-muted-foreground print:text-gray-700 space-y-1">
                    <li>Node.js, JavaScript</li>
                    <li>REST API design & implementation</li>
                    <li>Firebase Cloud Functions</li>
                    <li>Firestore, Authentication, Cloud Storage</li>
                    <li>Web crawling & data ingestion pipelines</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground print:text-black mb-1">Go Backend (In Progress)</h3>
                  <ul className="list-disc list-inside text-muted-foreground print:text-gray-700 space-y-1">
                    <li>Go language fundamentals, idioms, and concurrency</li>
                    <li>Gin framework for REST APIs</li>
                    <li>PostgreSQL integration using sqlx</li>
                    <li>Clean architecture & service layer patterns</li>
                    <li>Unit testing and error handling best practices</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground print:text-black mb-1">Mobile (Android – Secondary)</h3>
                  <ul className="list-disc list-inside text-muted-foreground print:text-gray-700 space-y-1">
                    <li>Kotlin, Jetpack Compose</li>
                    <li>Android SDK, Material Design 3</li>
                    <li>MVVM / MVI, Multi-Module Architecture</li>
                    <li>Coroutines & Flow</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground print:text-black mb-1">Architecture & Practices</h3>
                  <ul className="list-disc list-inside text-muted-foreground print:text-gray-700 space-y-1">
                    <li>Clean Architecture</li>
                    <li>Repository Pattern</li>
                    <li>Dependency Injection</li>
                    <li>Error handling & modularization</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground print:text-black mb-1">Tools & Workflow</h3>
                  <ul className="list-disc list-inside text-muted-foreground print:text-gray-700 space-y-1">
                    <li>Git & GitHub</li>
                    <li>Android Studio, Gradle</li>
                    <li>Unit & UI testing</li>
                    <li>Agile / task-based development</li>
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
                <h3 className="font-semibold text-foreground print:text-black">Eventify — Events Aggregation & Discovery Platform</h3>
                <p className="text-sm text-muted-foreground print:text-gray-700 mb-2">
                  Backend + Android Client
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground print:text-gray-700 space-y-1">
                  <li>Designed and implemented backend services using Node.js to aggregate event data from multiple sources via custom web crawling logic</li>
                  <li>Built REST APIs to deliver normalized event data to a client-facing Android application</li>
                  <li>Implemented authentication, storage, and push notifications using Firebase services</li>
                  <li>Supported end-to-end integration between backend services and mobile client</li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-foreground print:text-black">Xplay — Competitive Gaming Platform</h3>
                <p className="text-sm text-muted-foreground print:text-gray-700 mb-2">
                  Android Client + Backend Support
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground print:text-gray-700 space-y-1">
                  <li>Developed a scalable Android application using Kotlin and Jetpack Compose</li>
                  <li>Implemented real-time features including rankings and synchronized competition data</li>
                  <li>Designed backend endpoints to support game state synchronization</li>
                  <li>Applied multi-module architecture to improve maintainability and separation of concerns</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground print:text-black">Event Aggregation REST API (Go)</h3>
                <p className="text-sm text-muted-foreground print:text-gray-700 mb-2">
                  Backend Service (Go + Gin + PostgreSQL)
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground print:text-gray-700 space-y-1">
                  <li>Built a REST API in Go using the Gin framework</li>
                  <li>Implemented CRUD operations with PostgreSQL using sqlx</li>
                  <li>Designed clean service + repository layers for maintainability</li>
                  <li>Demonstrates learning and application of Go idioms and backend architecture</li>
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
                  <p className="text-muted-foreground print:text-gray-700">
                    Maseno University
                  </p>
                </div>
                <span className="text-sm text-muted-foreground print:text-gray-600">
                  2022 – Present
                </span>
              </div>
            </section>

            {/* Availability */}
            <section>
              <h2 className="text-lg font-bold uppercase tracking-wide text-foreground print:text-black border-b border-border print:border-gray-400 pb-2 mb-3">
                Availability
              </h2>
              <p className="text-sm text-muted-foreground print:text-gray-700">
                Available for remote, part-time contract work (task-based or hourly).
              </p>
            </section>

          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          @page {
            margin: 0.5in;
            size: A4;
          }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      `}</style>
    </>
  );
};

export default Resume;
