import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send,
  MessageSquare
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mwangiedwin131@gmail.com",
    href: "mailto:mwangiedwin131@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+254 706 672 014",
    href: "tel:+254706672014",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Maseno University, Kisumu, Kenya",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/EduGoon",
    username: "@EduGoon",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/edwin-mwangi-263481270/",
    username: "Edwin Mwangi",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm mb-4 block">
              // Get In Touch
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Have a project idea, question, or just want to say hello? 
              I'd love to hear from you. Let's build something amazing together.
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
          </div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                Contact Information
              </h3>
              
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Send className="w-5 h-5 text-primary" />
                Find Me Online
              </h3>

              <div className="space-y-4 mb-8">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-gradient-card border border-border hover:border-primary/30 hover:shadow-card-hover transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <social.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium group-hover:text-primary transition-colors">
                        {social.label}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {social.username}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* CTA */}
              <div className="p-6 rounded-xl bg-gradient-card border border-border text-center">
                <p className="text-muted-foreground mb-4">
                  Ready to start a conversation?
                </p>
                <Button variant="hero" size="lg" asChild>
                  <a href="mailto:mwangiedwin131@gmail.com">
                    <Mail className="w-4 h-4" />
                    Send an Email
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
