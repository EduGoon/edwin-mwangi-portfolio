import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">

        {/* Header */}
        <div className="mb-10 text-center print:text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2 print:text-black">
            Edu
          </h1>
          <p className="text-muted-foreground print:text-black">
            Computer Science Student · Mobile & Backend Developer
          </p>

          <div className="mt-4 flex justify-center print:justify-start">
            <Button
              variant="outline"
              className="print:hidden"
              onClick={() => window.print()}
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>

        {/* Profile */}
        <section className="mb-8">
          <h2 className="section-title">Profile</h2>
          <p className="text-sm leading-relaxed text-foreground print:text-black">
            Motivated Computer Science student seeking an attachment or internship
            role to gain hands-on experience in building production-level and
            enterprise software systems. Strong interest in clean architecture,
            team collaboration, documentation, and industry best practices.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="mb-8">
          <h2 className="section-title">Technical Skills</h2>
          <ul className="grid grid-cols-2 gap-y-1 list-disc pl-5 text-sm print:text-black">
            <li>Kotlin & Jetpack Compose</li>
            <li>Android Application Development</li>
            <li>Node.js & REST APIs</li>
            <li>Firebase (Auth, Firestore, FCM)</li>
            <li>Git & GitHub</li>
            <li>Basic Web Crawling</li>
          </ul>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h2 className="section-title">Projects</h2>

          <div className="mb-4">
            <h3 className="font-bold print:text-black">Xplay</h3>
            <p className="text-sm text-muted-foreground print:text-black mb-1">
              Competitive Gaming Community Platform
            </p>
            <ul className="list-disc pl-5 text-sm print:text-black">
              <li>Designed and developed a competitive gaming platform with player rankings</li>
              <li>Implemented authentication and real-time updates using Firebase</li>
              <li>Built with scalability and maintainability in mind</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold print:text-black">Eventify</h3>
            <p className="text-sm text-muted-foreground print:text-black mb-1">
              Location-Based Events Discovery App
            </p>
            <ul className="list-disc pl-5 text-sm print:text-black">
              <li>Aggregates local events using web crawling techniques</li>
              <li>Backend API designed for structured event delivery</li>
              <li>Focused on modular design and clean data flow</li>
            </ul>
          </div>
        </section>

        {/* Learning Goals */}
        <section className="mb-8">
          <h2 className="section-title">Learning Goals</h2>
          <ul className="list-disc pl-5 text-sm print:text-black">
            <li>Enterprise and production-grade system design</li>
            <li>Working in collaborative engineering teams</li>
            <li>Software documentation and code reviews</li>
            <li>Industry-standard development workflows</li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="text-sm text-muted-foreground print:text-black">
          <p>GitHub: github.com/EduGoon</p>
        </footer>

        {/* Print styling */}
        <style>{`
          @media print {
            .section-title {
              color: #000 !important;
              border-bottom: 2px solid #000;
            }
          }
        `}</style>

      </div>
    </section>
  );
};

export default Resume;
