import { Github, Linkedin, Mail, Users } from "lucide-react";
import { motion } from "motion/react";

export function TeamPage() {
  const coreTeam = [
    {
      name: "Sanjana Godse",
      role: "CEO",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      bio: "Leading CYBERSHIELD AISSMS IOIT's vision and strategy, driving excellence in cybersecurity education and community building.",
      socials: [
        { icon: Github, href: "#", label: "GitHub" },
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Mail, href: "mailto:sanjana@cybershield.edu", label: "Email" }
      ]
    },
    {
      name: "Shubham Jadhav",
      role: "COO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: "Managing club operations and ensuring smooth execution of all activities and initiatives.",
      socials: [
        { icon: Github, href: "#", label: "GitHub" },
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Mail, href: "mailto:shubham@cybershield.edu", label: "Email" }
      ]
    },
    {
      name: "Janhavi Indapurkar",
      role: "CHRO",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      bio: "Chief Human Resources Officer, building and nurturing our vibrant community culture and member relations.",
      socials: [
        { icon: Github, href: "#", label: "GitHub" },
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Mail, href: "mailto:janhavi@cybershield.edu", label: "Email" }
      ]
    },
    {
      name: "Tanish Jagtap",
      role: "CLDO",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      bio: "Chief Learning & Development Officer, designing educational programs and skill development initiatives.",
      socials: [
        { icon: Github, href: "#", label: "GitHub" },
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Mail, href: "mailto:tanish@cybershield.edu", label: "Email" }
      ]
    },
    {
      name: "Prachi Wankhede",
      role: "CIO",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      bio: "Chief Information Officer, overseeing information systems and digital infrastructure.",
      socials: [
        { icon: Github, href: "#", label: "GitHub" },
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Mail, href: "mailto:prachi@cybershield.edu", label: "Email" }
      ]
    },
    {
      name: "Sainath Chavan",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      bio: "Chief Technology Officer, leading technical innovation and overseeing all technology initiatives.",
      socials: [
        { icon: Github, href: "#", label: "GitHub" },
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Mail, href: "mailto:sainath@cybershield.edu", label: "Email" }
      ]
    },
    {
      name: "Netra Alle",
      role: "CMO",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop",
      bio: "Chief Marketing Officer, driving brand awareness and strategic marketing initiatives.",
      socials: [
        { icon: Github, href: "#", label: "GitHub" },
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Mail, href: "mailto:netra@cybershield.edu", label: "Email" }
      ]
    },
    {
      name: "Atharv Deo",
      role: "VP – Technology",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      bio: "Vice President of Technology, supporting the CMO and managing technical projects.",
      socials: [
        { icon: Github, href: "#", label: "GitHub" },
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Mail, href: "mailto:atharv@cybershield.edu", label: "Email" }
      ]
    },
    {
      name: "Vidyankshini Vibhute",
      role: "Technical Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      bio: "Directing technical operations and ensuring excellence in all technical aspects.",
      socials: [
        { icon: Github, href: "#", label: "GitHub" },
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Mail, href: "mailto:vidyankshini@cybershield.edu", label: "Email" }
      ]
    },
    {
      name: "Gulab Jangid",
      role: "VP – Media",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      bio: "Vice President of Media, leading media strategy and content creation initiatives.",
      socials: [
        { icon: Github, href: "#", label: "GitHub" },
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Mail, href: "mailto:gulab@cybershield.edu", label: "Email" }
      ]
    },
    {
      name: "Vaishnavi Padmawar",
      role: "Media & Marketing Director",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
      bio: "Directing media and marketing efforts, working closely with the VP of Media.",
      socials: [
        { icon: Github, href: "#", label: "GitHub" },
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Mail, href: "mailto:vaishnavi@cybershield.edu", label: "Email" }
      ]
    },
    {
      name: "Shreya Jagtap",
      role: "VP – HR",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop",
      bio: "Vice President of Human Resources, managing member engagement and team development.",
      socials: [
        { icon: Github, href: "#", label: "GitHub" },
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Mail, href: "mailto:shreya@cybershield.edu", label: "Email" }
      ]
    },
    {
      name: "Atharva Akojwar",
      role: "VP – Legal",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop",
      bio: "Vice President of Legal, ensuring compliance and managing legal affairs.",
      socials: [
        { icon: Github, href: "#", label: "GitHub" },
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Mail, href: "mailto:atharva@cybershield.edu", label: "Email" }
      ]
    },
    {
      name: "Pankaj",
      role: "VP – Information",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: "Vice President of Information, managing information systems and data governance.",
      socials: [
        { icon: Github, href: "#", label: "GitHub" },
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Mail, href: "mailto:pankaj@cybershield.edu", label: "Email" }
      ]
    }
  ];

  const subTeams = [
    {
      name: "CTF Team",
      lead: "Alex Rivera",
      members: 15,
      description: "Elite team competing in national and international capture-the-flag competitions.",
      focus: ["Web Exploitation", "Cryptography", "Forensics", "Reverse Engineering"]
    },
    {
      name: "Development Team",
      lead: "Marcus Johnson",
      members: 12,
      description: "Building open-source security tools and maintaining club infrastructure.",
      focus: ["Security Tools", "Automation", "CI/CD", "Code Review"]
    },
    {
      name: "Research Team",
      lead: "David Park",
      members: 8,
      description: "Exploring emerging threats and publishing security research papers.",
      focus: ["Threat Analysis", "Vulnerability Research", "Security Papers", "Innovation"]
    },
    {
      name: "Outreach Team",
      lead: "Priya Sharma",
      members: 10,
      description: "Promoting cybersecurity awareness across campus and community.",
      focus: ["Awareness Campaigns", "Social Media", "Partnerships", "Community Events"]
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
            <Users className="h-4 w-4 text-[#00ff88]" />
            <span className="text-sm text-[#00ff88]">Meet Our Team</span>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            The Team Behind CYBERSHIELD AISSMS IOIT
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Passionate students dedicated to building a strong cybersecurity community and pushing the boundaries of what's possible.
          </p>
        </motion.div>

        {/* Core Team */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="text-3xl font-bold mb-2">Core Team</h2>
            <p className="text-gray-400">The leaders driving CyberShield's mission and vision</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[#00ff88]/50 transition-all overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative">
                  {/* Empty Profile Placeholder */}
                  <div className="flex items-center justify-center p-8">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center group-hover:border-[#00ff88]/50 transition-all">
                      <Users className="h-16 w-16 text-gray-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 pt-0">
                    <h3 className="text-xl font-semibold mb-1 text-white text-center">{member.name}</h3>
                    <p className="text-sm text-[#06b6d4] mb-4 text-center">{member.role}</p>
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed text-center">{member.bio}</p>

                    {/* Socials */}
                    <div className="flex gap-2 justify-center">
                      {member.socials.map((social) => {
                        const Icon = social.icon;
                        return (
                          <a
                            key={social.label}
                            href={social.href}
                            aria-label={social.label}
                            className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#00ff88] hover:bg-[#00ff88]/10 transition-all group/icon"
                          >
                            <Icon className="h-4 w-4 text-gray-400 group-hover/icon:text-[#00ff88] transition-colors" />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Join Team CTA */}
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
            <Users className="h-12 w-12 text-[#00ff88] mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Want to Join the Team?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for passionate, dedicated members to join our core and specialized teams. 
              Whether you're interested in leadership, organizing events, or contributing your technical skills, there's a place for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#00ff88] to-[#06b6d4] text-black font-medium hover:shadow-lg hover:shadow-[#00ff88]/50 transition-all">
                Apply Now
              </button>
              <button className="px-8 py-4 rounded-lg border border-[#00ff88] text-[#00ff88] font-medium hover:bg-[#00ff88]/10 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}