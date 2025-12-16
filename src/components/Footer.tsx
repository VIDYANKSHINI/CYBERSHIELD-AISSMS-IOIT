import { Mail, Github, Twitter, Linkedin, Shield } from "lucide-react";
import logoImage from "figma:asset/1f11105cbf3a95b3c21291bc2315f7189be7c6bd.png";

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#0a0a0f] mt-32">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src={logoImage} 
                alt="CYBERSHIELD AISSMS IOIT Logo" 
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm">
              Empowering Cybersecurity Excellence at AISSMS IOIT
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">Contact</h4>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Mail className="h-4 w-4 text-[#3b82f6]" />
              <a href="mailto:contact@cybershield.edu" className="hover:text-[#3b82f6] transition-colors">
                contact@cybershield.edu
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-3">
              AISSMS Institute of Information Technology<br />
              Kennedy Road, Pune
            </p>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#3b82f6] hover:bg-[#3b82f6]/10 transition-all group"
                  >
                    <Icon className="h-5 w-5 text-gray-400 group-hover:text-[#3b82f6] transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} CYBERSHIELD AISSMS IOIT. All rights reserved.
        </div>
      </div>
    </footer>
  );
}