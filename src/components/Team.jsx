import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Team() {
  const teamMembers = [
    {
      id: 1,
      name: 'Muhammad Adil',
      role: 'Operations Manager',
      email: 'adil@mkglobalrecruitment.com',
      phone: '+92 300 1111111'
    },
    {
      id: 2,
      name: 'Muhammad Mushtaq',
      role: 'Senior Talent Acquisition Manager',
      email: 'mushtaq@mkglobalrecruitment.com',
      phone: '+92 300 2222222'
    },
    {
      id: 3,
      name: 'Ahsan Rasheed',
      role: 'Recruitment Specialist',
      email: 'ahsan@mkglobalrecruitment.com',
      phone: '+92 300 3333333'
    },
    {
      id: 4,
      name: 'Umer Tuseef',
      role: 'HR Executive',
      email: 'umer@mkglobalrecruitment.com',
      phone: '+92 300 4444444'
    },
    {
      id: 5,
      name: 'Jawad Maroof',
      role: 'Client Relations',
      email: 'jawad@mkglobalrecruitment.com',
      phone: '+92 300 5555555'
    },
    {
      id: 6,
      name: 'Nasir Ali',
      role: 'Trade Testing Coordinator',
      email: 'nasir@mkglobalrecruitment.com',
      phone: '+92 300 6666666'
    },
    {
      id: 7,
      name: 'Zarak Maqsood',
      role: 'Visa & Compliance Officer',
      email: 'zarak@mkglobalrecruitment.com',
      phone: '+92 300 7777777'
    },
    {
      id: 8,
      name: 'Akhtar Ullah',
      role: 'PR & Communications',
      email: 'akhtar@mkglobalrecruitment.com',
      phone: '+92 300 8888888'
    }
  ];

  return (
    <section id="team" className="py-24 bg-slate-50 dark:bg-navy-950 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-gold-600 dark:text-gold-400 bg-gold-500/10 px-4 py-1.5 rounded-full border border-gold-500/20">
            Our Professionals
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 dark:text-white mt-4 tracking-tight">
            Meet Our <span className="gold-gradient-text">Expert Team</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-3">
            The dedicated people working hard to connect talent with global opportunities.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-navy-900 rounded-3xl p-6 border border-slate-200/80 dark:border-white/10 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="text-center space-y-1 mb-4">
                <h3 className="text-lg font-bold text-navy-900 dark:text-white group-hover:text-gold-500 transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-tealAccent-500">
                  {member.role}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-white/10 space-y-3">
                <a href={`mailto:${member.email}`} className="flex items-center justify-center gap-2 text-xs text-slate-600 dark:text-slate-300 hover:text-gold-500 dark:hover:text-gold-400 transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                  <span className="truncate">{member.email}</span>
                </a>
                <a href={`tel:${member.phone.replace(/\s+/g, '')}`} className="flex items-center justify-center gap-2 text-xs text-slate-600 dark:text-slate-300 hover:text-gold-500 dark:hover:text-gold-400 transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                  <span>{member.phone}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
