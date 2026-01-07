import { Button } from "@/components/ui/button";
import { Download, ArrowLeft, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const skillCategories = [
  {
    title: "Mobile Development",
    skills: [
      "Kotlin",
      "Jetpack Compose",
      "XML",
      "Material Design 3",
      "MVVM/MVI",
      "Responsive Design",
      "Android Studio",
      "Gradle",
      "Google Play Services"
    ],
  },
  {
    title: "Backend Development",
    skills: [
      "Node.js",
      "RESTful APIs",
      "JavaScript/TypeScript",
      "Web Crawling",
      "Cloud Functions",
      "Cloud Run",
      "Server-side Architecture"
    ],
  },
  {
    title: "Firebase & Cloud",
    skills: [
      "Authentication",
      "Firestore",
      "Cloud Storage",
      "FCM (Push Notifications)",
      "Analytics",
      "Google OAuth"
    ],
  },
  {
    title: "Architecture & Patterns",
    skills: [
      "Multi-Module Architecture",
      "Dependency Injection (Hilt/Dagger)",
      "Repository Pattern",
      "Coroutines & Flow",
      "Unit Testing",
      "UI Testing"
    ],
  },
];

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
                Android & Backend Developer
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
                Passionate Android Developer and Backend Developer with hands-on experience building scalable mobile applications 
                using Kotlin and Jetpack Compose. Proficient in designing multi-modular codebases, implementing RESTful APIs, 
                and integrating Firebase services for authentication, real-time databases, and cloud storage. Committed to 
                crafting elegant user experiences backed by robust, maintainable backend systems.
              </p>
            </section>

            {/* Technical Skills */}
            <section className="mb-6">
              <h2 className="text-lg font-bold text-foreground print:text-black uppercase tracking-wide border-b border-border print:border-gray-300 pb-2 mb-3">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                {skillCategories.map((category) => (
                  <div key={category.title}>
                    <h3 className="font-semibold text-foreground print:text-black mb-1">{category.title}</h3>
                    <p className="text-muted-foreground print:text-gray-700">
                      {category.skills.join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects */}
            {/* ... Projects section unchanged ... */}

            {/* Education */}
            {/* ... Education section unchanged ... */}

            {/* Community & Leadership */}
            {/* ... Community section unchanged ... */}

            {/* Interests */}
            {/* ... Interests section unchanged ... */}

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
