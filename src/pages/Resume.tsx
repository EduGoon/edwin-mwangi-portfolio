import { Button } from "@/components/ui/button";
import { Download, ArrowLeft, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Resume = () => {
  const handleDownload = () => {
    window.print();
  };

  return (
    <>
      {/* Screen-only header */}
      <div className="print:hidden bg-background border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>
          <Button onClick={handleDownload} variant="hero" size="default">
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
              <p className="text-xl text-primary print:text-gray-700 font-medium mb-4">
                Mobile Developer • Backend Developer (Attachment / Internship Candidate)
              </p>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground print:text-gray-600">
                <a
                  href="mailto:mwangiedwin131@gmail.com"
                  className="flex items-center gap-1 hover:text-primary print:text-gray-600"
                >
                  <Mail className="w-4 h-4" />
                  mwangiedwin131@gmail.com
                </a>
                <a
                  href="tel:+254706672014"
                  className="flex items-center gap-1 hover:text-primary print:text-gray-600"
                >
                  <Phone className="w-4 h-4" />
                  +254 706 672 014
                </a>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  Kisumu, Kenya
                </span>
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

            {/* Profile / Objective */}
            <section className="mb-6">
              <h2 className="text-lg font-bold uppercase tracking-wide text-foreground print:text-black border-b border-border print:border-gray-400 pb-2 mb-3">
                Profile
              </h2>
              <p className="text-muted-foreground print:text-gray-700 leading-relaxed">
                Motivated Computer Science & Technology student and Android-focused software engineer seeking an attachment or internship opportunity.
                I aim to gain hands-on experience building production-grade applications, working within collaborative engineering teams,
                and learning industry-standard best practices including clean architecture, testing, documentation, and code reviews.
                I am particularly interested in environments where scalability, maintainability, and real-world impact matter.
              </p>
            </section>

            {/* Technical Skills */}
            <section className="mb-6">
              <h2 className="text-lg font-bold uppercase tracking-wide text-foreground print:text-black border-b border-border print:border-gray-400 pb-2 mb-3">
                Technical Skills
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h3 className="font-semibold text-foreground print:text-black mb-1">Mobile (Android)</h3>
                  <p className="text-muted-foreground print:text-gray-700">
                    Kotlin, Jetpack Compose, Android SDK, Material Design 3, MVVM/MVI,
                    Multi-Module Architecture, Coroutines & Flow
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground print:text-black mb-1">Backend & Cloud</h3>
                  <p className="text-muted-foreground print:text-gray-700">
                    Node.js, JavaScript, REST APIs, Firebase Cloud Functions,
                    Firestore, Authentication, Cloud Storage
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground print:text-black mb-1">Architecture & Engineering Practices</h3>
                  <p className="text-muted-foreground print:text-gray-700">
                    Clean Architecture, Repository Pattern, Dependency Injection,
                    Modularization, Error Handling
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground print:text-black mb-1">Tools & Workflow</h3>
                  <p className="text-muted-foreground print:text-gray-700">
                    Git & GitHub, Android Studio, Gradle, Unit & UI Testing,
                    Agile Development, Technical Documentation
                  </p>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section className="mb-6">
              <h2 className="text-lg font-bold uppercase tracking-wide text-foreground print:text-black border-b border-border print:border-gray-400 pb-2 mb-3">
                Selected Projects
              </h2>

              <div className="mb-4">
                <h3 className="font-semibold text-foreground print:text-black">Xplay — Competitive Gaming Platform</h3>
                <p className="text-sm text-muted-foreground print:text-gray-700 mb-2">
                  Android application with real-time competition and ranking features.
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground print:text-gray-700 space-y-1">
                  <li>Developed a scalable Android app using Kotlin and Jetpack Compose</li>
                  <li>Applied multi-module architecture for separation of concerns</li>
                  <li>Integrated Firebase Authentication, Firestore, and FCM</li>
                  <li>Designed a Node.js backend to support synchronized game data</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground print:text-black">Eventify — Local Events Discovery App</h3>
                <p className="text-sm text-muted-foreground print:text-gray-700 mb-2">
                  Mobile application for discovering nearby events using aggregated data sources.
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground print:text-gray-700 space-y-1">
                  <li>Built modern Android UI with Jetpack Compose and Material Design 3</li>
                  <li>Implemented backend services with Node.js and web crawling logic</li>
                  <li>Used Firebase for authentication, storage, and push notifications</li>
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
                    Maseno University — Department of Computer Science
                  </p>
                </div>
                <span className="text-sm text-muted-foreground print:text-gray-600">
                  2022 — Present
                </span>
              </div>
            </section>

            {/* Interests */}
            <section>
              <h2 className="text-lg font-bold uppercase tracking-wide text-foreground print:text-black border-b border-border print:border-gray-400 pb-2 mb-3">
                Professional Interests
              </h2>
              <p className="text-sm text-muted-foreground print:text-gray-700">
                Production-grade mobile systems • Software architecture • Backend scalability •
                Collaborative engineering • Learning industry best practices
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
