import React from 'react';
import { motion } from 'framer-motion';
import { Globe, MapPin, Building, Flame, Stethoscope, Laptop, HardHat, Hotel, Cpu, ShieldCheck } from 'lucide-react';

export default function Regions() {
  const regions = [
    {
      name: 'GCC & Middle East Corridor',
      flag: '🇸🇦 🇦🇪 🇶🇦',
      countries: ['Saudi Arabia (KSA)', 'United Arab Emirates (UAE)', 'Qatar', 'Oman', 'Kuwait', 'Bahrain'],
      highlight: 'Primary Manpower Hub',
      desc: 'Supplying mega infrastructure, healthcare, oil & gas, and hospitality workforces across Riyadh, Dubai, Abu Dhabi, Doha & Jeddah.',
      color: 'border-gold-500/50 bg-gradient-to-br from-gold-500/10 to-transparent',
    },
    {
      name: 'European Union & UK Corridor',
      flag: '🇩🇪 🇬🇧 🇷🇴',
      countries: ['Germany', 'United Kingdom', 'Romania', 'Poland', 'Hungary'],
      highlight: 'High-Skill & Technical Corridor',
      desc: 'Placing IT specialists, certified software developers, healthcare nurses, logistics managers, and skilled factory technicians.',
      color: 'border-tealAccent-500/50 bg-gradient-to-br from-tealAccent-500/10 to-transparent',
    },
  ];

  const industries = [
    {
      icon: <HardHat className="w-6 h-6 text-gold-500" />,
      name: 'Civil Construction & Infrastructure',
      placements: '450+ Placements',
      roles: 'Site Engineers, Project Managers, Masons, Electricians, Plumbers',
    },
    {
      icon: <Stethoscope className="w-6 h-6 text-emerald-500" />,
      name: 'Healthcare & Medical Sector',
      placements: '200+ Placements',
      roles: 'Registered Nurses, Medical Technicians, Doctors, Pharmacists',
    },
    {
      icon: <Flame className="w-6 h-6 text-amber-500" />,
      name: 'Oil & Gas / Heavy Industry',
      placements: '180+ Placements',
      roles: '6G Welders, Pipefitters, Rig Operators, Safety Officers',
    },
    {
      icon: <Laptop className="w-6 h-6 text-indigo-500" />,
      name: 'Information Technology & Telecom',
      placements: '120+ Placements',
      roles: 'Software Engineers, DevOps Specialists, Fiber Technicians',
    },
    {
      icon: <Hotel className="w-6 h-6 text-rose-500" />,
      name: 'Hospitality & Luxury Services',
      placements: '150+ Placements',
      roles: 'Chefs, Hotel Staff, Catering Supervisors, Event Managers',
    },
    {
      icon: <Cpu className="w-6 h-6 text-cyan-500" />,
      name: 'Manufacturing & Heavy Logistics',
      placements: '110+ Placements',
      roles: 'CNC Operators, Heavy Equipment Drivers, Warehouse Managers',
    },
  ];

  return (
    <section id="regions" className="py-24 bg-slate-50 dark:bg-navy-950 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-gold-600 dark:text-gold-400 bg-gold-500/10 px-4 py-1.5 rounded-full border border-gold-500/20">
            Global Horizons & Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 dark:text-white mt-4 tracking-tight">
            Regions We Serve & <span className="gold-gradient-text">Core Industry Focus</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-3">
            Deploying verified talent across GCC economic hubs and European industrial zones.
          </p>
        </div>

        {/* Global Regions Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {regions.map((reg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-8 rounded-3xl bg-white dark:bg-navy-900 border shadow-xl ${reg.color} relative flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{reg.flag}</span>
                  <span className="text-xs font-bold text-navy-900 dark:text-gold-400 bg-slate-100 dark:bg-navy-800 px-3 py-1 rounded-full border border-slate-200 dark:border-white/10">
                    {reg.highlight}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-3">
                  {reg.name}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {reg.desc}
                </p>

                <div className="space-y-2 mb-6">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                    Destinations & Corridors
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {reg.countries.map((c, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-navy-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10"
                      >
                        <MapPin className="w-3 h-3 text-gold-500" />
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" /> Government Embassy Approved
                </span>
                <span>Full Relocation Support</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Industry Grid */}
        <div>
          <h3 className="text-2xl font-bold text-center text-navy-900 dark:text-white mb-10">
            Industries We Supply Manpower To
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200/80 dark:border-white/10 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-navy-800">
                    {ind.icon}
                  </div>
                  <span className="text-xs font-bold text-gold-600 dark:text-gold-400 bg-gold-500/10 px-2.5 py-1 rounded-full">
                    {ind.placements}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-navy-900 dark:text-white mb-2">
                  {ind.name}
                </h4>

                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  <strong className="text-slate-700 dark:text-slate-300 font-semibold">Key Roles:</strong> {ind.roles}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
