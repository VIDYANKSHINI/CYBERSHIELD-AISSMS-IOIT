import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { LandingPage } from "./components/LandingPage";
import { EventsPage } from "./components/EventsPage";
import { GalleryPage } from "./components/GalleryPage";
import { TeamPage } from "./components/TeamPage";
import { AboutPage } from "./components/AboutPage";
import { JourneyPage } from "./components/JourneyPage";
import { HackingBackground } from "./components/HackingBackground";
import { FloatingParticles } from "./components/FloatingParticles";
import { EnhancedBackground } from "./components/EnhancedBackground";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0a0a0f] relative overflow-hidden">
        {/* Multi-layered Animated Background Effects */}
        <EnhancedBackground />
        <HackingBackground />
        <FloatingParticles />
        
        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/journey" element={<JourneyPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}