import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Stethoscope, HardHat, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export default function CaseStudies() {
  const cases = [
    {
      title: "Saudi Arabia Metro & Civil Mega-Project",
      client: "Leading Saudi Contracting Conglomerate",
      industry: "Infrastructure & Heavy Civil",
      placedCount: "250+ Personnel",
      timeframe: "35 Days Deployment",
      icon: <HardHat className="w-6 h-6 text-gold-400" />,
      details: "Sourced, trade-tested, and deployed civil engineers, heavy equipment drivers, and structural welders for a major metro infrastructure initiative in Riyadh with zero visa rejections.",
      tags: ["Riyadh, KSA", "Trade Testing", "Protected Emigration"],
    },
    {
      title: "European Healthcare Nursing Deployment",
      client: "German Regional Hospital Network",
      industry: "Healthcare & Clinical Care",
      placedCount: "45 Registered Nurses",
      timeframe: "60 Days Processing",
      icon: <Stethoscope className="w-6 h-6 text-tealAccent-400" />,
      details: "Managed degree equivalency, German language B2 orientation, and embassy visa appointments for qualified Pakistani BSC Nursing graduates.",
      tags: ["Germany, EU", "Degree Attestation", "Visa Stamping"],
    },
    {
      title: "UAE Luxury Resort & Hotel Turnkey Staffing",
      client: "5-Star Luxury Hospitality Chain in Dubai",
      industry: "Hospitality & Food Services",
      placedCount: "120 Staff Members",
      timeframe: "25 Days Fast-Track",
      icon: <Building2 className="w-6 h-6 text-amber-400" />,
      details: "Conducting hybrid online & onsite interview drives in Islamabad and Lahore, providing complete hospitality staff including executive chefs, front desk managers, and stewards.",
      tags: ["Dubai, UAE", "Interview Drive", "Flight Ticketing"],
    },
  ];

  return (
    <section id="success-stories" className="py-24 bg-white dark:bg-navy-900 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-gold-600 dark:text-gold-400 bg-gold-500/10 px-4 py-1.5 rounded-full border border-gold-500/20">
            Proven Track Record
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 dark:text-white mt-4 tracking-tight">
            Success Stories & <span className="gold-gradient-text">Case Studies</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-3">
            Brief snapshots of major international recruitment drives executed by MK Global.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((cs, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-3xl bg-slate-50 dark:bg-navy-800/90 border border-slate-200/80 dark:border-white/10 p-8 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:border-gold-500/40 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-white dark:bg-navy-900 shadow-sm border border-slate-200 dark:border-white/10 group-hover:scale-110 transition-transform">
                    {cs.icon}
                  </div>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Deployed
                  </span>
                </div>

                <span className="text-xs font-semibold text-gold-600 dark:text-gold-400 uppercase tracking-wider block mb-1">
                  {cs.industry}
                </span>

                <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3">
                  {cs.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {cs.details}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200 dark:border-white/10 space-y-4">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-navy-900 border border-slate-200/60 dark:border-white/10">
                    <span className="text-slate-400 block text-[10px]">Volume:</span>
                    <strong className="text-navy-900 dark:text-white font-bold">{cs.placedCount}</strong>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white dark:bg-navy-900 border border-slate-200/60 dark:border-white/10">
                    <span className="text-slate-400 block text-[10px]">Timeline:</span>
                    <strong className="text-tealAccent-600 dark:text-tealAccent-400 font-bold">{cs.timeframe}</strong>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cs.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-semibold text-slate-600 dark:text-slate-300 bg-slate-200/70 dark:bg-navy-700 px-2.5 py-0.5 rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
