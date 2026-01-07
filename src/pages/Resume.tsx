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
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
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
            <header className="border-b border-border print:border-gray-300 pb-6 mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground print:text-black mb-2">
                Edwin Mwangi
              </h1>
              <p className="text-xl text-primary print:text-gray-700 font-medium mb-4">
                Android Developer & Backend Developer
              </p>
              
              {/* Contact Info */}
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground print:text-gray-600">
                <a href="mailto:mwangiedwin131@gmail.com" className="flex items-center gap-1 hover:text-primary print:text-gray-600">
                  <Mail className="w-4 h-4" />
                  mwangiedwin131@gmail.com
                </a>
                <a href="tel:+254706672014" className="flex items-center gap-1 hover:text-primary print:text-gray-600">
                  <Phone className="w-4 h-4" />
                  +254 706 672 014
                </a>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  Maseno, Kisumu, Kenya
                </span>
              </div>
              <div className="flex gap-4 mt-3 text-sm text-muted-foreground print:text-gray-600">
                <a href="https://github.com/EduGoon" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary print:text-gray-600">
                  <Github className="w-4 h-4" />
                  github.com/EduGoon
                </a>
                <a href="https://www.linkedin.com/in/edwin-mwangi-263481270/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary print:text-gray-600">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </header>

            {/* Professional Summary */}
            <section className="mb-6">
              <h2 className="text-lg font-bold text-foreground print:text-black uppercase tracking-wide border-b border-border print:border-gray-300 pb-2 mb-3">
                Professional Summary
              </h2>
              <p className="text-muted-foreground print:text-gray-700 leading-relaxed">
                Passionate Android Developer with hands-on experience building scalable mobile applications 
                using Kotlin and Jetpack Compose. Skilled in designing modular codebases, implementing RESTful APIs, 
                and integrating Firebase services for authentication, real-time databases, and cloud storage. Committed to 
                crafting elegant user experiences supported by robust backend systems.
              </p>
            </section>

            {/* Technical Skills */}
            <section className="mb-6">
              <h2 className="text-lg font-bold text-foreground print:text-black uppercase tracking-wide border-b border-border print:border-gray-300 pb-2 mb-3">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h3 className="font-semibold text-foreground print:text-black mb-1">Mobile Development</h3>
                  <p className="text-muted-foreground print:text-gray-700">
                    Kotlin, Jetpack Compose, Android SDK, Multi-Modular Architecture, Material Design 3, MVVM/MVI, Responsive UI
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground print:text-black mb-1">Backend Development</h3>
                  <p className="text-muted-foreground print:text-gray-700">
                    Node.js, JavaScript, RESTful APIs, Web Crawling, Firebase Cloud Functions, Cloud Run, API Design
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground print:text-black mb-1">Firebase Ecosystem</h3>
                  <p className="text-muted-foreground print:text-gray-700">
                    Authentication, Firestore, Cloud Storage, FCM (Push Notifications), Analytics, Cloud Messaging
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground print:text-black mb-1">Tools & Practices</h3>
                  <p className="text-muted-foreground print:text-gray-700">
                    Git, Android Studio, Unit Testing, UI Testing, CI/CD, Agile, System Design
                  </p>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section className="mb-6">
              <h2 className="text-lg font-bold text-foreground print:text-black uppercase tracking-wide border-b border-border print:border-gray-300 pb-2 mb-3">
                Projects
              </h2>
              
              <div className="mb-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-foreground print:text-black">Xplay — Gaming Community Platform</h3>
                  <span className="text-sm text-muted-foreground print:text-gray-600">2024</span>
                </div>
                <p className="text-muted-foreground print:text-gray-700 text-sm mb-2">
                  A competitive gaming platform enabling players to test their skills, compete in challenges, and track their rankings on dynamic leaderboards.
                </p>
                <ul className="text-sm text-muted-foreground print:text-gray-700 list-disc list-inside space-y-1">
                  <li>Built with Kotlin & Jetpack Compose using multi-modular architecture for scalability</li>
                  <li>Implemented real-time leaderboards and game statistics using Firestore</li>
                  <li>Integrated Firebase Authentication for secure user management</li>
                  <li>Designed RESTful API backend with Node.js for game data synchronization</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-foreground print:text-black">Eventify — Local Events Discovery App</h3>
                  <span className="text-sm text-muted-foreground print:text-gray-600">2024</span>
                </div>
                <p className="text-muted-foreground print:text-gray-700 text-sm mb-2">
                  An intuitive application that helps users discover events happening near them through intelligent web crawling and location-based recommendations.
                </p>
                <ul className="text-sm text-muted-foreground print:text-gray-700 list-disc list-inside space-y-1">
                  <li>Developed responsive UI with Jetpack Compose and Material Design 3</li>
                  <li>Built Node.js backend with web crawling capabilities for event aggregation</li>
                  <li>Implemented push notifications via Firebase Cloud Messaging (FCM)</li>
                  <li>Utilized Firebase ecosystem for authentication, storage, and real-time updates</li>
                </ul>
              </div>
            </section>

            {/* Education */}
            <section className="mb-6">
              <h2 className="text-lg font-bold text-foreground print:text-black uppercase tracking-wide border-b border-border print:border-gray-300 pb-2 mb-3">
                Education
              </h2>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-foreground print:text-black">BSc Computer Technology</h3>
                  <p className="text-muted-foreground print:text-gray-700">Maseno University — Department of Computer Science</p>
                </div>
                <span className="text-sm text-muted-foreground print:text-gray-600">2022 — Present (3rd Year)</span>
              </div>
            </section>

            {/* Community & Leadership */}
            <section className="mb-6">
              <h2 className="text-lg font-bold text-foreground print:text-black uppercase tracking-wide border-b border-border print:border-gray-300 pb-2 mb-3">
                Community & Leadership
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-foreground print:text-black">Google Developer Student Club (GDSC)</h3>
                    <p className="text-muted-foreground print:text-gray-700 text-sm">Member — Maseno University Chapter</p>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-foreground print:text-black">Ajira Digital Club</h3>
                    <p className="text-muted-foreground print:text-gray-700 text-sm">Member — Maseno University Chapter</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Interests */}
            <section>
              <h2 className="text-lg font-bold text-foreground print:text-black uppercase tracking-wide border-b border-border print:border-gray-300 pb-2 mb-3">
                Interests
              </h2>
              <p className="text-muted-foreground print:text-gray-700 text-sm">
                Software Development • Mobile Computing • System Design • Open Source Contribution • Building Scalable Solutions
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
