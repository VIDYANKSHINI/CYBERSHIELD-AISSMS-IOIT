import { Image as ImageIcon, Calendar, Users, Trophy, Code } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All", icon: ImageIcon },
    { id: "events", label: "Events", icon: Calendar },
    { id: "competitions", label: "Competitions", icon: Trophy },
    { id: "workshops", label: "Workshops", icon: Code },
    { id: "team", label: "Team", icon: Users }
  ];

  const galleryItems = [
    {
      id: 1,
      category: "competitions",
      title: "National Cyber Defense Competition - 1st Place",
      date: "November 2024",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      description: "Our team celebrating first place victory"
    },
    {
      id: 2,
      category: "workshops",
      title: "Web Security Workshop",
      date: "October 2024",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
      description: "Hands-on session on OWASP Top 10"
    },
    {
      id: 3,
      category: "events",
      title: "Fall Hackathon 2024",
      date: "November 2024",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
      description: "24-hour security-focused hackathon"
    },
    {
      id: 4,
      category: "team",
      title: "Core Team Meeting",
      date: "September 2024",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
      description: "Planning for the new semester"
    },
    {
      id: 5,
      category: "competitions",
      title: "CTF Championship",
      date: "August 2024",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop",
      description: "Top 10 global ranking achievement"
    },
    {
      id: 6,
      category: "workshops",
      title: "Network Security Lab",
      date: "October 2024",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      description: "Packet analysis and firewall configuration"
    },
    {
      id: 7,
      category: "events",
      title: "CyberShield Orientation 2024",
      date: "September 2024",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop",
      description: "Welcome event for new members"
    },
    {
      id: 8,
      category: "team",
      title: "Team Building Activity",
      date: "July 2024",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop",
      description: "Strengthening team bonds"
    },
    {
      id: 9,
      category: "workshops",
      title: "Cryptography Fundamentals",
      date: "October 2024",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop",
      description: "Introduction to encryption and hashing"
    },
    {
      id: 10,
      category: "competitions",
      title: "Regional Hackathon Victory",
      date: "May 2024",
      image: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&h=600&fit=crop",
      description: "Building innovative security solutions"
    },
    {
      id: 11,
      category: "events",
      title: "Guest Speaker Series",
      date: "September 2024",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop",
      description: "Industry professionals sharing insights"
    },
    {
      id: 12,
      category: "workshops",
      title: "Penetration Testing Boot Camp",
      date: "September 2024",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
      description: "Intensive 3-day training program"
    }
  ];

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#00ff88]/10 to-[#06b6d4]/10 border border-[#00ff88]/30 mb-6">
            <ImageIcon className="h-4 w-4 text-[#00ff88]" />
            <span className="text-sm text-[#00ff88]">Photo Gallery</span>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            CyberShield Gallery
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Capturing moments from our events, workshops, competitions, and community activities.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg border transition-all ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-[#00ff88]/20 to-[#06b6d4]/20 border-[#00ff88] text-[#00ff88]"
                      : "bg-white/5 border-white/10 text-gray-400 hover:border-[#00ff88]/50 hover:text-white"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{category.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group relative rounded-xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[#00ff88]/50 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
              
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content Overlay */}
              <div className="relative p-6 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/95 to-transparent">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs text-gray-300 mb-3">
                  <Calendar className="h-3 w-3" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-[#00ff88] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <ImageIcon className="h-16 w-16 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400">No photos found in this category</p>
          </motion.div>
        )}

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Total Photos", value: galleryItems.length },
            { label: "Events", value: galleryItems.filter(i => i.category === "events").length },
            { label: "Workshops", value: galleryItems.filter(i => i.category === "workshops").length },
            { label: "Competitions", value: galleryItems.filter(i => i.category === "competitions").length }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 text-center"
            >
              <div className="text-3xl font-bold text-[#00ff88] mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 relative overflow-hidden p-10 rounded-2xl bg-gradient-to-br from-[#00ff88]/10 to-[#06b6d4]/10 border border-[#00ff88]/30 text-center"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00ff88]/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#06b6d4]/20 rounded-full blur-[100px]" />
          
        </motion.div>
      </div>
    </div>
  );
}