import React from 'react';
import { motion } from 'framer-motion';
import { Target, HeartHandshake, ShieldCheck, Quote, Compass, Users } from 'lucide-react';
import ceoPhoto from '../assets/ceo-kashif.png';

export default function About() {
  const coreValues = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-gold-600 dark:text-gold-400" />,
      title: 'Ethical & Transparent Hiring',
      description: 'Zero tolerance for exploitative practices. We ensure full legal compliance, contract transparency, and zero candidate extortion.',
    },
    {
      icon: <Target className="w-6 h-6 text-tealAccent-600 dark:text-tealAccent-400" />,
      title: 'Precision Skill Matching',
      description: 'Every candidate undergoes strict trade testing and background validation to guarantee seamless employer integration.',
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-gold-600 dark:text-gold-400" />,
      title: 'Long-term Partnership',
      description: 'We build enduring relationships with top international conglomerates and candidates, supporting relocation from start to finish.',
    },
    {
      icon: <Compass className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      title: 'Global Opportunity Expansion',
      description: 'Pioneering new recruitment corridors across the GCC (Saudi Arabia, UAE, Qatar) and European emerging markets.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-100 dark:bg-navy-950 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-gold-700 dark:text-gold-400 bg-gold-500/15 px-4 py-1.5 rounded-full border border-gold-500/30">
            Leadership & Vision
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 dark:text-white mt-4 tracking-tight">
            About <span className="gold-gradient-text">Muhammad Kashif</span> & MK Global
          </h2>
          <p className="text-base sm:text-lg text-slate-800 dark:text-slate-200 mt-4 leading-relaxed font-medium">
            Empowering Pakistani manpower with life-changing global career pathways while supplying world-class manpower to leading international corporations.
          </p>
        </div>

        {/* CEO Bio & Company Founding Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Leadership Statement & Quote */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="p-8 rounded-3xl bg-white dark:bg-navy-900 border-2 border-slate-200 dark:border-white/10 shadow-xl relative">
              <Quote className="w-12 h-12 text-gold-500/20 absolute top-6 right-6" />
              
              <h3 className="text-2xl font-extrabold text-navy-950 dark:text-white mb-4">
                CEO Leadership Philosophy
              </h3>
              
              <p className="text-slate-800 dark:text-slate-200 leading-relaxed text-base font-medium">
                "At <strong className="text-navy-950 dark:text-white font-black">MK Global Recruitment Agency</strong>, our mission goes far beyond filling vacancies. We believe that Pakistan possesses one of the world’s most resilient, hard-working, and talented workforces."
              </p>

              <p className="text-slate-800 dark:text-slate-200 leading-relaxed text-base mt-4 font-medium">
                "Under my leadership, MK Global was established to bridge the gap between skilled Pakistani professionals—ranging from certified engineers and healthcare specialists to trade technicians—and international enterprises in the GCC and Europe seeking reliable, high-caliber manpower."
              </p>

              <div className="pt-6 mt-6 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={ceoPhoto}
                    alt="Muhammad Kashif - CEO"
                    className="w-12 h-12 rounded-full object-cover object-top border-2 border-gold-500 shadow-md"
                  />
                  <div>
                    <h4 className="text-lg font-black text-navy-950 dark:text-white">Muhammad Kashif</h4>
                    <p className="text-xs text-gold-700 dark:text-gold-400 font-extrabold">Chief Executive Officer & Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Why Founded & Key Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="p-8 rounded-3xl bg-navy-900 text-white shadow-2xl border-2 border-white/15 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                <Users className="w-6 h-6 text-gold-400" />
                Why MK Global Was Founded
              </h3>

              <div className="space-y-4 text-slate-200 text-base leading-relaxed font-medium">
                <p>
                  Cross-border recruitment often suffers from lack of verification, delayed processing, and unvetted candidates. Muhammad Kashif founded MK Global to establish an unbeatable standard of <strong className="text-gold-300 font-bold">speed, legal compliance, and candidate support</strong>.
                </p>
                <p>
                  With specialized testing facilities, legal emigration clearance, and direct ties with foreign ministries of labor, MK Global handles the complete lifecycle—from sourcing to deployment.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/15">
                <div className="p-4 rounded-2xl bg-white/10 border border-white/15">
                  <div className="text-2xl font-black text-gold-400">100%</div>
                  <div className="text-xs text-slate-200 font-semibold mt-1">Legal Clearance Rate</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/10 border border-white/15">
                  <div className="text-2xl font-black text-tealAccent-400">30-45 Days</div>
                  <div className="text-xs text-slate-200 font-semibold mt-1">Avg Deployment Time</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Core Pillars / Values Grid */}
        <div className="mt-12">
          <h3 className="text-2xl sm:text-3xl font-black text-center text-navy-950 dark:text-white mb-10">
            Our Core Corporate Values
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white dark:bg-navy-900 border-2 border-slate-200 dark:border-white/10 shadow-lg hover:shadow-2xl hover:border-gold-500/50 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-navy-800 border border-slate-200 dark:border-white/10 flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h4 className="text-lg font-black text-navy-950 dark:text-white mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
