import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8 sm:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4 group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-primary-foreground group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                HB
              </div>
              <span className="font-bold text-xl group-hover:text-primary transition-colors">Hack Beyond 1.0</span>
            </div>
            <p className="text-sm text-secondary-foreground/70 leading-relaxed">
              Innovation Beyond Limits
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
            <div className="flex gap-3 mb-4 flex-wrap justify-center sm:justify-start">
              <a href="#" className="w-9 h-9 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 hover:rotate-12 duration-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 hover:rotate-12 duration-300">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 hover:rotate-12 duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 hover:rotate-12 duration-300">
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-sm text-secondary-foreground/70">
              hello@hackbeyond.com
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/70 text-center">
          <p>© 2025 Hack Beyond 1.0. All rights reserved.</p>
          <div className="flex gap-4 sm:gap-6 flex-wrap justify-center">
            <a href="#" className="hover:text-primary transition-colors hover:underline">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
