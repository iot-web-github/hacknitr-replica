import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-primary-foreground">
                TH
              </div>
              <span className="font-bold text-xl">TechHack</span>
            </div>
            <p className="text-sm text-secondary-foreground/70 leading-relaxed">
              Building the future, one hack at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#timeline" className="hover:text-primary transition-colors">Timeline</a></li>
              <li><a href="#tracks" className="hover:text-primary transition-colors">Tracks</a></li>
              <li><a href="#sponsors" className="hover:text-primary transition-colors">Sponsors</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Code of Conduct</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Judging Criteria</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Brand Kit</a></li>
              <li><a href="#faqs" className="hover:text-primary transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Stay Connected</h3>
            <div className="flex gap-3 mb-4">
              <a href="#" className="w-9 h-9 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-sm text-secondary-foreground/70">
              hello@techhack.com
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/70">
          <p>© 2025 TechHack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
