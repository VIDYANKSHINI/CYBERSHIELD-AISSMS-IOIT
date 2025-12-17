import { Shield, Eye, Target, Heart, Lightbulb, Users2, Code2, TrendingUp, Award, Zap } from "lucide-react";
import { motion } from "motion/react";

export function AboutPage() {
  const objectives = [
    {
      icon: Zap,
      title: "Enhance Cybersecurity Skills",
      description: "Provide hands-on training and workshops to develop practical skills in ethical hacking, network security, and threat mitigation."
    },
    {
      icon: Eye,
      title: "Promote Awareness",
      description: "Raise awareness of the latest cybersecurity threats, best practices, and ethical guidelines to foster a security-first mindset in the digital community."
    },
    {
      icon: Users2,
      title: "Foster Collaboration",
      description: "Build a supportive community where members collaborate on cybersecurity projects, share knowledge, and connect with industry experts to tackle real-world challenges."
    }
  ];

  const values = [
    {
      icon: Eye,
      title: "Awareness",
      description: "Educating the community about cybersecurity threats and best practices to create a safer digital environment."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Striving for the highest standards in technical skills, competitions, and project development."
    },
    {
      icon: Heart,
      title: "Community",
      description: "Building a supportive, inclusive environment where members learn and grow together."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Encouraging creative problem-solving and development of cutting-edge security solutions."
    }
  ];

  const mission = [
    {
      icon: Shield,
      title: "Our Mission",
      description: "To empower students with the knowledge, skills, and mindset needed to become the next generation of cybersecurity professionals and leaders."
    },
    {
      icon: Users2,
      title: "Our Vision",
      description: "To be the premier student-led cybersecurity organization that bridges the gap between academic learning and real-world security challenges."
    },
    {
      icon: Code2,
      title: "Our Approach",
      description: "Hands-on learning through workshops, CTF competitions, security projects, and collaboration with industry experts."
    }
  ];

  const whoWeAre = [
    "CyberShield was founded in January 2024 by a group of passionate students who recognized the growing importance of cybersecurity in our digital world.",
    "We are a diverse community of learners, from beginners taking their first steps in security to advanced practitioners competing at national levels.",
    "Our members come from various backgrounds—computer science, information systems, engineering, and beyond—united by a common interest in protecting digital systems.",
    "We believe that cybersecurity is not just about technical skills, but also about ethics, collaboration, and continuous learning."
  ];

  const whatWeDo = [
    {
      title: "Weekly Workshops",
      description: "Hands-on technical sessions covering topics from web security to cryptography, led by experienced members and industry professionals."
    },
    {
      title: "CTF Competitions",
      description: "Regular capture-the-flag events where members practice real-world hacking techniques in a safe, legal environment."
    },
    {
      title: "Open-Source Projects",
      description: "Collaborative development of security tools and resources that benefit the broader cybersecurity community."
    },
    {
      title: "Guest Speaker Series",
      description: "Insights from industry leaders, security researchers, and alumni working in top tech companies."
    },
    {
      title: "Mentorship Program",
      description: "Connecting experienced members with newcomers to provide guidance and support throughout their journey."
    }
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
            <Shield className="h-4 w-4 text-[#00ff88]" />
            <span className="text-sm text-[#00ff88]">About CyberShield</span>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Empowering Cybersecurity Excellence
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            The CyberShield Club is dedicated to fostering a community of passionate individuals committed to advancing knowledge and skills in cybersecurity. Our purpose is to educate, empower, and equip members with the tools and expertise needed to protect digital assets, defend against cyber threats, and promote a safer online world.
          </p>
        </motion.div>

        {/* Objectives Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <h2 className="text-3xl font-bold mb-2">Our Objectives</h2>
            <p className="text-gray-400">Guiding principles that drive our mission forward</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {objectives.map((objective, index) => {
              const Icon = objective.icon;
              return (
                <motion.div
                  key={objective.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative p-8 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[#00ff88]/50 transition-all"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                  
                  <div className="relative text-center">
                    <div className="mb-4 inline-flex p-4 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 group-hover:border-[#00ff88]/50 transition-all glow-green">
                      <Icon className="h-8 w-8 text-[#00ff88]" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-[#00ff88] transition-colors">{objective.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{objective.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Mission, Vision, Approach */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mission.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative p-8 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[#00ff88]/50 transition-all"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                  
                  <div className="relative text-center">
                    <div className="mb-4 inline-flex p-4 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 group-hover:border-[#00ff88]/50 transition-all">
                      <Icon className="h-8 w-8 text-[#00ff88]" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-white">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Who We Are Story */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="text-3xl font-bold mb-2">Our Story</h2>
            <p className="text-gray-400">From humble beginnings to a thriving community</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whoWeAre.map((paragraph, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10"
              >
                <p className="text-gray-300 leading-relaxed">{paragraph}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="text-3xl font-bold mb-2">Our Values</h2>
            <p className="text-gray-400">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[#06b6d4]/50 transition-all"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#06b6d4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                  
                  <div className="relative">
                    <div className="mb-4 inline-flex p-3 rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/20 group-hover:border-[#06b6d4]/50 transition-all">
                      <Icon className="h-6 w-6 text-[#06b6d4]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* What We Do */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="text-3xl font-bold mb-2">What We Do</h2>
            <p className="text-gray-400">Activities and programs that drive our community forward</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeDo.map((activity, index) => (
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
                  <div className="w-2 h-2 rounded-full bg-[#00ff88] mb-4 glow-green" />
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[#00ff88] transition-colors">
                    {activity.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{activity.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Join Us CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden p-12 rounded-2xl bg-gradient-to-br from-[#00ff88]/10 to-[#06b6d4]/10 border border-[#00ff88]/30 text-center"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00ff88]/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#06b6d4]/20 rounded-full blur-[100px]" />
          
          <div className="relative">
            <TrendingUp className="h-12 w-12 text-[#00ff88] mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Become Part of CyberShield</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you're passionate about security, curious about hacking, or just getting started, 
              we welcome all skill levels. Join us and start your cybersecurity journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#00ff88] to-[#06b6d4] text-black font-medium hover:shadow-lg hover:shadow-[#00ff88]/50 transition-all">
                Join Now
              </button>
              <button className="px-8 py-4 rounded-lg border border-[#00ff88] text-[#00ff88] font-medium hover:bg-[#00ff88]/10 transition-all">
                Contact Us
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}