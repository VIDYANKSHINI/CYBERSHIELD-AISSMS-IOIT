import { Trophy, Users, Calendar, Target, Award, TrendingUp, Shield, Zap, Medal, Star } from "lucide-react";
import { motion } from "motion/react";

export function JourneyPage() {
  const stats = [
    {
      icon: Users,
      label: "Active Members",
      value: "120+",
      color: "#00ff88",
      description: "Growing community"
    },
    {
      icon: Calendar,
      label: "Events Hosted",
      value: "24",
      color: "#06b6d4",
      description: "This year"
    },
    {
      icon: Trophy,
      label: "Competitions Won",
      value: "8",
      color: "#0ea5e9",
      description: "National & regional"
    },
    {
      icon: Target,
      label: "Projects Completed",
      value: "15",
      color: "#8b5cf6",
      description: "Open-source tools"
    }
  ];

  const achievements = [
    {
      icon: Trophy,
      title: "1st Place - National Cyber Defense Competition",
      date: "November 2024",
      description: "Our team secured first place among 50+ universities in the annual National Cyber Defense Competition, demonstrating exceptional skills in network defense and incident response.",
      color: "#00ff88",
      category: "Competition"
    },
    {
      icon: Award,
      title: "Best Student Organization Award",
      date: "October 2024",
      description: "Recognized by the university for outstanding contribution to student development and community building in technology education.",
      color: "#06b6d4",
      category: "Recognition"
    },
    {
      icon: Zap,
      title: "Published Open-Source Security Tool",
      date: "September 2024",
      description: "Released 'ShieldScan' - an automated vulnerability scanner that has gained 500+ stars on GitHub and is used by security professionals worldwide.",
      color: "#0ea5e9",
      category: "Project"
    },
    {
      icon: Medal,
      title: "CTF Top 10 Global Ranking",
      date: "August 2024",
      description: "Achieved top 10 ranking in the International Summer CTF Championship, competing against 200+ teams from around the world.",
      color: "#8b5cf6",
      category: "Competition"
    },
    {
      icon: Star,
      title: "Partnership with Industry Leaders",
      date: "July 2024",
      description: "Established partnerships with leading cybersecurity firms for mentorship, internships, and guest speaker sessions.",
      color: "#ec4899",
      category: "Partnership"
    },
    {
      icon: Target,
      title: "100 Members Milestone",
      date: "June 2024",
      description: "Reached 100 active members, marking a significant growth milestone and expanding our impact on campus.",
      color: "#00ff88",
      category: "Milestone"
    },
    {
      icon: Trophy,
      title: "Regional Hackathon Victory",
      date: "May 2024",
      description: "Won first place at the Regional Security Hackathon with an innovative intrusion detection system using machine learning.",
      color: "#06b6d4",
      category: "Competition"
    },
    {
      icon: Shield,
      title: "Campus-Wide Security Awareness Campaign",
      date: "April 2024",
      description: "Successfully organized a month-long security awareness campaign reaching 1000+ students with workshops and interactive sessions.",
      color: "#0ea5e9",
      category: "Outreach"
    }
  ];

  const milestones = [
    { year: "2024", event: "Expanded to 120+ members and won 8 major competitions" },
    { year: "2024", event: "Launched open-source security tools gaining international recognition" },
    { year: "2024", event: "Established industry partnerships for mentorship and internships" },
    { year: "2024", event: "Founded CyberShield with a mission to build a strong security community" }
  ];

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
            <TrendingUp className="h-4 w-4 text-[#00ff88]" />
            <span className="text-sm text-[#00ff88]">Progress & Achievements</span>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Our Journey & Achievements
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Building credibility through consistent growth, impactful projects, and competitive excellence.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[#00ff88]/50 transition-all group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                  
                  <div className="relative">
                    <div className="mb-4 inline-flex p-3 rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/20 group-hover:border-[#00ff88]/50 transition-all">
                      <Icon className="h-6 w-6" style={{ color: stat.color }} />
                    </div>
                    <div className="text-4xl font-bold mb-2" style={{ color: stat.color }}>
                      {stat.value}
                    </div>
                    <div className="text-white font-medium mb-1">{stat.label}</div>
                    <div className="text-sm text-gray-400">{stat.description}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Achievements Timeline */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="text-3xl font-bold mb-2">Key Achievements</h2>
            <p className="text-gray-400">Milestones that define our journey of excellence</p>
          </motion.div>

          <div className="space-y-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="group relative p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[#00ff88]/50 transition-all"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                  
                  <div className="relative flex gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="p-4 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 group-hover:border-[#00ff88]/50 transition-all">
                        <Icon className="h-8 w-8" style={{ color: achievement.color }} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-white group-hover:text-[#00ff88] transition-colors">
                          {achievement.title}
                        </h3>
                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">
                          {achievement.category}
                        </span>
                      </div>
                      <p className="text-sm text-[#06b6d4] mb-3">{achievement.date}</p>
                      <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Growth Timeline */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="text-3xl font-bold mb-2">Growth Milestones</h2>
            <p className="text-gray-400">Our evolution from inception to becoming a leading campus organization</p>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00ff88] via-[#06b6d4] to-[#0ea5e9]" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex gap-6 items-start"
                >
                  {/* Year marker */}
                  <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#00ff88] to-[#06b6d4] border-4 border-[#0a0a0f] glow-green z-10">
                    <span className="text-sm font-bold text-black">{milestone.year}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-3 p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[#00ff88]/50 transition-all">
                    <p className="text-white leading-relaxed">{milestone.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden p-12 rounded-2xl bg-gradient-to-br from-[#00ff88]/10 to-[#06b6d4]/10 border border-[#00ff88]/30"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00ff88]/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#06b6d4]/20 rounded-full blur-[100px]" />
          
          <div className="relative text-center max-w-3xl mx-auto">
            <TrendingUp className="h-12 w-12 text-[#00ff88] mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Building a Legacy</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              From our humble beginnings to becoming one of the most active and recognized student organizations on campus, 
              CyberShield has consistently demonstrated excellence in cybersecurity education and competition. Our journey is 
              marked by passionate members, dedicated mentors, and a commitment to pushing the boundaries of what's possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="px-6 py-4 rounded-lg bg-white/5 border border-white/10">
                <div className="text-2xl font-bold text-[#00ff88]">500+</div>
                <div className="text-sm text-gray-400">Community Impact</div>
              </div>
              <div className="px-6 py-4 rounded-lg bg-white/5 border border-white/10">
                <div className="text-2xl font-bold text-[#06b6d4]">20+</div>
                <div className="text-sm text-gray-400">Industry Partners</div>
              </div>
              <div className="px-6 py-4 rounded-lg bg-white/5 border border-white/10">
                <div className="text-2xl font-bold text-[#0ea5e9]">95%</div>
                <div className="text-sm text-gray-400">Member Satisfaction</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
