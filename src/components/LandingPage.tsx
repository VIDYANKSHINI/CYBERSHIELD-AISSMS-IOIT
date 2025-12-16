import { Shield, Eye, Wrench, Code, Trophy, Users, Mail, Github, Linkedin, ArrowRight, Calendar, BookOpen, Lightbulb, Target, Zap, TrendingUp, Award } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export function LandingPage() {
  const features = [
    {
      icon: Eye,
      title: "Cyber Awareness",
      description: "Educating students on cybersecurity best practices and emerging threats.",
      color: "#00ff88"
    },
    {
      icon: Wrench,
      title: "Workshops & CTFs",
      description: "Hands-on learning through interactive workshops and capture-the-flag competitions.",
      color: "#06b6d4"
    },
    {
      icon: Code,
      title: "Security Projects",
      description: "Building real-world security tools and contributing to open-source projects.",
      color: "#0ea5e9"
    },
    {
      icon: Trophy,
      title: "Hackathons & Competitions",
      description: "Competing in national and international cybersecurity challenges.",
      color: "#8b5cf6"
    }
  ];

  const activities = [
    {
      icon: BookOpen,
      title: "Technical Workshops",
      description: "Regular hands-on sessions covering ethical hacking, network security, web security, cryptography, and more. Learn from experienced members and industry professionals.",
      highlights: ["Weekly workshops", "Beginner to advanced", "Practical skills"]
    },
    {
      icon: Trophy,
      title: "CTF Competitions",
      description: "Participate in capture-the-flag events and cybersecurity competitions. Build problem-solving skills while competing against teams worldwide.",
      highlights: ["Team-based challenges", "Global rankings", "Real-world scenarios"]
    },
    {
      icon: Code,
      title: "Project Development",
      description: "Collaborate on open-source security tools, research projects, and innovative solutions. Contribute to the cybersecurity community.",
      highlights: ["Open-source contributions", "Research papers", "Tool development"]
    },
    {
      icon: Users,
      title: "Community & Networking",
      description: "Connect with like-minded individuals, attend guest lectures from industry experts, and build lasting professional relationships.",
      highlights: ["Industry connections", "Peer learning", "Career opportunities"]
    },
    {
      icon: Target,
      title: "Skill Development",
      description: "From penetration testing to incident response, develop comprehensive cybersecurity skills through structured learning paths and mentorship.",
      highlights: ["Certification prep", "Hands-on labs", "Mentorship programs"]
    },
    {
      icon: Lightbulb,
      title: "Security Awareness",
      description: "Promote cybersecurity awareness on campus and in the community through campaigns, talks, and educational initiatives.",
      highlights: ["Campus outreach", "Awareness campaigns", "Public talks"]
    }
  ];

  const whatsNew = [
    {
      icon: Calendar,
      title: "Winter Workshop Series",
      date: "January 2025",
      description: "Launching our workshop series covering essential cybersecurity topics and hands-on labs.",
      badge: "Upcoming"
    },
    {
      icon: TrendingUp,
      title: "Growing Community",
      date: "December 2024",
      description: "CYBERSHIELD AISSMS IOIT has grown to a vibrant community of passionate students learning together.",
      badge: "Milestone"
    }
  ];

  const timeline = [
    { date: "January 2024", event: "CYBERSHIELD AISSMS IOIT Founded", icon: Shield },
    { date: "March 2024", event: "First CTF Competition", icon: Trophy },
    { date: "June 2024", event: "Security Workshop Series", icon: Wrench },
    { date: "September 2024", event: "100+ Members Milestone", icon: Users },
    { date: "November 2024", event: "Hackathon Victory", icon: Trophy },
    { date: "December 2024", event: "Year-End Showcase", icon: Calendar }
  ];

  const team = [
    {
      name: "Alex Rivera",
      role: "President & Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      socials: [
        { icon: Github, href: "#" },
        { icon: Linkedin, href: "#" }
      ]
    },
    {
      name: "Sarah Chen",
      role: "Vice President",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      socials: [
        { icon: Github, href: "#" },
        { icon: Linkedin, href: "#" }
      ]
    },
    {
      name: "Marcus Johnson",
      role: "Technical Lead",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      socials: [
        { icon: Github, href: "#" },
        { icon: Linkedin, href: "#" }
      ]
    },
    {
      name: "Emily Zhang",
      role: "Events Coordinator",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      socials: [
        { icon: Github, href: "#" },
        { icon: Linkedin, href: "#" }
      ]
    },
    {
      name: "David Park",
      role: "Workshop Lead",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      socials: [
        { icon: Github, href: "#" },
        { icon: Linkedin, href: "#" }
      ]
    },
    {
      name: "Priya Sharma",
      role: "Community Manager",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      socials: [
        { icon: Github, href: "#" },
        { icon: Linkedin, href: "#" }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 px-6">
        {/* Animated background grid - removed duplicate, using App.tsx grid */}
        
        {/* Scanning line effect */}
        <motion.div
          className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-[#00ff88] to-transparent opacity-50"
          animate={{
            y: [0, window.innerHeight, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Glowing orbs - removed duplicate, using App.tsx orbs */}

        <div className="relative mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#00ff88]/10 to-[#06b6d4]/10 border border-[#00ff88]/30 mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Shield className="h-4 w-4 text-[#00ff88]" />
              <span className="text-sm text-[#00ff88]">Student-Led Cybersecurity Community</span>
            </motion.div>

            <motion.h1
              className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[#00ff88] to-[#06b6d4] bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              CYBERSHIELD AISSMS IOIT
            </motion.h1>

            <motion.p
              className="text-2xl md:text-3xl text-[#06b6d4] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Empowering Cybersecurity Excellence: Where Experts Connect, Learn, and Lead
            </motion.p>

            <motion.p
              className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              The CYBERSHIELD AISSMS IOIT is dedicated to fostering a community of passionate individuals committed to advancing knowledge and skills in cybersecurity. Whether you are a beginner or an expert, CYBERSHIELD is your gateway to becoming a guardian of the digital realm.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/events"
                  className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#00ff88] to-[#06b6d4] text-black font-medium hover:shadow-lg hover:shadow-[#00ff88]/50 transition-all flex items-center justify-center gap-2 group"
                >
                  <Calendar className="h-5 w-5" />
                  Explore Events
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Cyber graphics - shield with animation */}
        <motion.div
          className="absolute bottom-10 left-10 opacity-10"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Shield className="h-32 w-32 text-[#00ff88]" strokeWidth={1} />
        </motion.div>
        <motion.div
          className="absolute top-20 right-10 opacity-10"
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Shield className="h-24 w-24 text-[#06b6d4]" strokeWidth={1} />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              About CYBERSHIELD AISSMS IOIT
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              CYBERSHIELD AISSMS IOIT is more than just a club—it's a movement to empower the next generation of cybersecurity professionals. 
              We believe in learning by doing, building a strong community, and staying ahead of emerging threats. Through workshops, 
              competitions, and real-world projects, we equip our members with the skills and mindset needed to protect our digital future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-gray-400">Building skills, fostering community, and defending digital systems</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[#00ff88]/50 transition-all cursor-pointer"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"
                    initial={false}
                  />
                  <div className="relative">
                    <motion.div
                      className="mb-4 inline-flex p-3 rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/20 group-hover:border-[#00ff88]/50 transition-all"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="h-6 w-6" style={{ color: feature.color }} />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Activities</h2>
            <p className="text-gray-400">Diverse programs to enhance your cybersecurity skills</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <motion.div
                  key={activity.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[#00ff88]/50 transition-all"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                  <div className="relative">
                    <div className="mb-4 inline-flex p-3 rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/20 group-hover:border-[#00ff88]/50 transition-all">
                      <Icon className="h-6 w-6" style={{ color: '#00ff88' }} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{activity.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{activity.description}</p>
                    <ul className="list-disc list-inside mt-2">
                      {activity.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-gray-400 text-sm leading-relaxed">{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's New Section */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">What's New</h2>
            <p className="text-gray-400">Latest achievements and upcoming events</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whatsNew.map((item, index) => {
              const Icon = item.icon;
              const badgeColors = {
                Achievement: '#8b5cf6',
                Upcoming: '#06b6d4',
                Milestone: '#00ff88'
              };
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[#00ff88]/50 transition-all"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                  <div className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/20 group-hover:border-[#00ff88]/50 transition-all">
                        <Icon className="h-6 w-6 text-[#00ff88]" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs text-black" style={{ backgroundColor: badgeColors[item.badge] }}>
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-sm text-[#06b6d4] mb-2">{item.date}</p>
                    <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-gray-400">Check our Events page for the latest schedule</p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section - REMOVED */}
      {/* Team Section - REMOVED */}

      {/* CTA Section - REMOVED */}
    </div>
  );
}