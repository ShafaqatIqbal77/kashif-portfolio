import React from 'react';
import { motion } from 'framer-motion';
import { Users, Globe2, Building2, Calendar, Award, ShieldCheck } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      id: 1,
      value: '1,000+',
      label: 'Successful Placements',
      description: 'Skilled professionals deployed globally',
      icon: <Users className="w-7 h-7 text-gold-400" />,
      color: 'from-gold-500/20 to-amber-500/10',
    },
    {
      id: 2,
      value: '10+',
      label: 'Years Experience',
      description: 'Under Muhammad Kashif\'s leadership',
      icon: <Calendar className="w-7 h-7 text-tealAccent-400" />,
      color: 'from-tealAccent-500/20 to-emerald-500/10',
    },
    {
      id: 3,
      value: '12+',
      label: 'Target Countries',
      description: 'Saudi Arabia, UAE, Qatar, EU & beyond',
      icon: <Globe2 className="w-7 h-7 text-blue-400" />,
      color: 'from-blue-500/20 to-indigo-500/10',
    },
    {
      id: 4,
      value: '150+',
      label: 'Partner Companies',
      description: 'Top tier international employers',
      icon: <Building2 className="w-7 h-7 text-purple-400" />,
      color: 'from-purple-500/20 to-violet-500/10',
    },
  ];

  return (
    <section className="relative py-16 bg-navy-900 border-y border-white/10 overflow-hidden text-white">
      {/* Subtle Background Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-gold-500/40 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} border border-white/10`}>
                  {stat.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-gold-400 transition-colors">
                  Verified Metric
                </span>
              </div>

              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-1 group-hover:scale-105 transition-transform duration-300 origin-left">
                <span className="gold-gradient-text">{stat.value}</span>
              </div>

              <h3 className="text-base font-bold text-slate-200 mb-1">
                {stat.label}
              </h3>

              <p className="text-xs text-slate-400 leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
