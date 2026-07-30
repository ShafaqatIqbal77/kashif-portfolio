import React from 'react';
import { motion } from 'framer-motion';
import { Award, Building2, Globe, TrendingUp, ShieldCheck, Milestone } from 'lucide-react';

export default function Timeline() {
  const milestones = [
    {
      year: '2025',
      title: 'Founding of MK Global Recruitment',
      description: 'Muhammad Kashif establishes MK Global Recruitment Agency in Islamabad/Faisal Hills region, driven by the vision to organize and elevate overseas manpower recruitment from Pakistan.',
      icon: <Building2 className="w-5 h-5 text-gold-400" />,
    },

    {
      year: '2025 - Present',
      title: '1,000+ Placements Milestone & Corporate Headquarters',
      description: 'Celebrated over 1,000 successful placements worldwide, operating from modern executive headquarters in Faisal Hills (Bhadana Arcade).',
      icon: <Award className="w-5 h-5 text-gold-400" />,
    },
  ];

  return (
    <section id="timeline" className="py-24 bg-white dark:bg-navy-900 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-gold-600 dark:text-gold-400 bg-gold-500/10 px-4 py-1.5 rounded-full border border-gold-500/20">
            Journey & Growth
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 dark:text-white mt-4 tracking-tight">
            Company Career Journey & <span className="gold-gradient-text">Milestones</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-3">
            A decade of relentless dedication to ethical hiring, quality recruitment, and global expansion.
          </p>
        </div>

        {/* Timeline Line & Items */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-navy-700 -translate-x-1/2" />

          <div className="space-y-12">
            {milestones.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Badge/Dot */}
                  <div className="absolute left-4 md:left-1/2 top-0 md:top-6 -translate-x-1/2 w-10 h-10 rounded-full bg-navy-900 border-2 border-gold-500 flex items-center justify-center z-10 shadow-lg">
                    {item.icon}
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                    <div className="p-6 rounded-2xl bg-slate-50 dark:bg-navy-800/90 border border-slate-200/80 dark:border-white/10 shadow-md hover:shadow-xl transition-all duration-300 group">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-black bg-gold-500/10 text-gold-600 dark:text-gold-400 border border-gold-500/20 mb-2">
                        {item.year}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-navy-900 dark:text-white mb-2 group-hover:text-gold-500 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
