import { Calendar, MapPin, Users, Clock, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

export function EventsPage() {
  const upcomingEvents = [
    {
      title: "Team Meeting & Planning Session",
      date: "January 12, 2025",
      time: "5:00 PM - 6:30 PM",
      mode: "Hybrid",
      location: "CS Building Room 301 / Discord",
      description: "Monthly team meeting to discuss upcoming activities, plan events, and coordinate our initiatives for the semester.",
      attendees: 25,
      color: "#00ff88"
    },
    {
      title: "Web Security Workshop",
      date: "January 20, 2025",
      time: "6:00 PM - 8:00 PM",
      mode: "Offline",
      location: "CS Lab 2",
      description: "Hands-on introduction to web security basics, covering common vulnerabilities and secure coding practices.",
      attendees: 30,
      color: "#06b6d4"
    },
    {
      title: "Introduction to CTF Challenges",
      date: "February 3, 2025",
      time: "4:00 PM - 6:00 PM",
      mode: "Hybrid",
      location: "CS Building Room 301 / Online",
      description: "Beginner-friendly session on capture-the-flag competitions and how to get started with cybersecurity challenges.",
      attendees: 35,
      color: "#0ea5e9"
    }
  ];

  const pastEvents = [
    {
      title: "Club Orientation 2024",
      date: "September 5, 2024",
      mode: "Offline",
      description: "Welcome event for new members featuring club overview, team introductions, and networking activities.",
      attendees: 45
    },
    {
      title: "Introduction to Cybersecurity Workshop",
      date: "October 15, 2024",
      mode: "Hybrid",
      description: "Beginner-friendly workshop covering cybersecurity fundamentals and basic security practices.",
      attendees: 35
    },
    {
      title: "First Team CTF Practice",
      date: "November 10, 2024",
      mode: "Online",
      description: "Our first practice CTF event where members learned and solved beginner-level challenges together.",
      attendees: 28
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
            <Calendar className="h-4 w-4 text-[#00ff88]" />
            <span className="text-sm text-[#00ff88]">Events & Workshops</span>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            CyberShield Events
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Join us for hands-on workshops, competitions, and networking opportunities to level up your cybersecurity skills.
          </p>
        </motion.div>

        {/* Upcoming Events */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="text-3xl font-bold mb-2">Upcoming Events</h2>
            <p className="text-gray-400">Don't miss out on these exciting upcoming sessions</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="group relative p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[#00ff88]/50 transition-all cursor-pointer"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"
                  initial={false}
                />
                
                <div className="relative">
                  {/* Mode badge */}
                  <motion.div
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#00ff88]/20 to-[#06b6d4]/20 border border-[#00ff88]/30 mb-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: event.color }}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-xs font-medium text-[#00ff88]">{event.mode}</span>
                  </motion.div>

                  <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-[#00ff88] transition-colors">
                    {event.title}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar className="h-4 w-4 text-[#06b6d4]" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Clock className="h-4 w-4 text-[#06b6d4]" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <MapPin className="h-4 w-4 text-[#06b6d4]" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Users className="h-4 w-4 text-[#06b6d4]" />
                      <span>{event.attendees} expected attendees</span>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {event.description}
                  </p>

                  <motion.button
                    className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-[#00ff88]/10 to-[#06b6d4]/10 border border-[#00ff88]/30 text-[#00ff88] font-medium hover:from-[#00ff88]/20 hover:to-[#06b6d4]/20 hover:border-[#00ff88] transition-all flex items-center justify-center gap-2 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Register Now
                    <ExternalLink className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Past Events */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="text-3xl font-bold mb-2">Past Events</h2>
            <p className="text-gray-400">A look back at our recent activities and achievements</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group relative p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[#06b6d4]/50 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#06b6d4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                
                <div className="relative">
                  {/* Mode badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
                    <span className="text-xs text-gray-400">{event.mode}</span>
                  </div>

                  <h3 className="text-lg font-semibold mb-2 text-white">
                    {event.title}
                  </h3>

                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                    <Calendar className="h-3.5 w-3.5 text-[#06b6d4]" />
                    <span>{event.date}</span>
                  </div>

                  <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="flex items-center gap-2 text-gray-500 text-xs">
                    <Users className="h-3.5 w-3.5" />
                    <span>{event.attendees} attendees</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 relative overflow-hidden p-10 rounded-2xl bg-gradient-to-br from-[#00ff88]/10 to-[#06b6d4]/10 border border-[#00ff88]/30 text-center"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#00ff88]/20 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#06b6d4]/20 rounded-full blur-[80px]" />
          
          <div className="relative">
            <h3 className="text-2xl font-bold mb-3">Want to Organize an Event?</h3>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Have an idea for a workshop or event? We're always looking for passionate members to lead sessions and share knowledge.
            </p>
            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#00ff88] to-[#06b6d4] text-black font-medium hover:shadow-lg hover:shadow-[#00ff88]/50 transition-all">
              Submit Event Proposal
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}