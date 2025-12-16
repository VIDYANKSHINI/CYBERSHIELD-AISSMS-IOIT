import { Shield } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoImage from "figma:asset/1f11105cbf3a95b3c21291bc2315f7189be7c6bd.png";

export function Navbar() {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/events", label: "Events" },
    { path: "/gallery", label: "Gallery" },
    { path: "/team", label: "Team" },
    { path: "/about", label: "About" },
    { path: "/journey", label: "Journey" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0a0a0f]/80 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logoImage} 
              alt="CYBERSHIELD AISSMS IOIT Logo" 
              className="h-12 w-auto object-contain group-hover:scale-105 transition-transform"
            />
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative transition-colors ${
                  isActive(link.path)
                    ? "text-[#3b82f6]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#3b82f6] to-[#06b6d4]" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}