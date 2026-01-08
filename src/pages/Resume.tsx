import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export const Resume = () => {
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
        <div className="mb-8">
          <h2 className="section-title">Profile</h2>
          <p className="text-sm leading-relaxed text-foreground print:text-black">
            Motivated Computer Science student seeking an attachment/internship
            role to gain hands-on experience in building production-level
            applications. Passionate about writing clean, maintainable code,
            collaborating in team environments, learning industry best
            practices, and contributing to real-world software systems.
          </p>
        </div>

        {/* Skills */}
        <div className="mb-8">
          <h2 className="section-title">Technical Skills</h2>
          <ul className="text-sm grid grid-cols-2 gap-y-1 list-disc pl-5 print:text-black">
            <li>Kotlin & Jetpack Compose</li>
            <li>Android App Development</li>
            <li>Node.js & REST APIs</li>
            <li>Firebase (Auth, Firestore, FCM)</li>
            <li>Git & GitHub</li>
            <li>Basic Web Crawling</li>
          </ul>
        </div>

        {/* Projects */}
        <div className="mb-8">
          <h2 className="section-title">Projects</h2>

          <div className="mb-4">
            <h3 className="font-bold print:text-black">Xplay</h3>
            <p className="text-sm text-muted-foreground print:text-black mb-1">
              Competitive Gaming Community Platform
            </p>
            <ul className="text-sm list-disc pl-5 print:text-black">
              <li>Developed a competitive gaming platform with player rankings and leaderboards</li>
              <li>Implemented authentication and real-time data using Firebase</li>
              <li>Focused on scalable architecture and clean UI with Jetpack Compose</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold print:text-black">Eventify</h3>
            <p className="text-sm text-muted-foreground print:text-black mb-1">
              Location-Based Events Discovery App
            </p>
            <ul className="text-sm list-disc pl-5 print:text-black">
              <li>Built an event discovery system using web crawling techniques</li>
              <li>Designed backend APIs to aggregate and serve event data</li>
              <li>Emphasized modular design and maintainability</li>
            </ul>
          </div>
        </div>

        {/* Learning & Interests */}
        <div className="mb-8">
          <h2 className="section-title">Learning & Interests</h2>
          <ul className="text-sm list-disc pl-5 print:text-black">
            <li>Enterprise-level application architecture</li>
            <li>Software documentation and best practices</li>
            <li>Team collaboration and agile workflows</li>
            <li>Backend scalability and system design</li>
          </ul>
        </div>

        {/* Footer */}
        <div className="text-sm text-muted-foreground print:text-black">
          <p>GitHub: github.com/EduGoon</p>
        </div>

        {/* Print-specific styling */}
        <style>{`
          @media print {
            body {
              background: white;
            }

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

/* Section title utility */
const sectionTitleClass =
  "text-lg font-extrabold uppercase tracking-wider text-foreground print:text-black border-b border-border print:border-black pb-2 mb-3";

const sectionTitle = sectionTitleClass;

/* Inject utility class */
const style = document.createElement("style");
style.innerHTML = `
  .section-title {
    ${sectionTitle.replace(/ /g, ";")}
  }
`;
document.head.appendChild(style);
