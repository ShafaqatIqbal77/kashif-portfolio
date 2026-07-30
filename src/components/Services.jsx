import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, UserCheck, Search, ShieldCheck, FileCheck, Plane, ArrowRight, Wrench, Briefcase, GraduationCap, Clock } from 'lucide-react';

export default function Services() {
  const [activeTab, setActiveTab] = useState('employers');

  const employerServices = [
    {
      icon: <Search className="w-6 h-6 text-gold-600 dark:text-gold-400" />,
      title: 'Executive & Technical Headhunting',
      desc: 'Sourcing highly skilled engineers, IT specialists, project managers, and healthcare professionals tailored to international project demands.',
    },
    {
      icon: <Wrench className="w-6 h-6 text-tealAccent-600 dark:text-tealAccent-400" />,
      title: 'Trade Testing & Skill Assessment',
      desc: 'Rigorous physical and technical trade testing in certified Pakistani institutes for welders, electricians, plumbers, and technicians.',
    },
    {
      icon: <FileCheck className="w-6 h-6 text-gold-600 dark:text-gold-400" />,
      title: 'Visa, Attestation & Legal Clearance',
      desc: 'Full handling of degree attestations, medical clearances (GAMCA), protector of emigrants stamping, and embassy visa processing.',
    },
    {
      icon: <Clock className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      title: 'Bulk & Turnkey Deployment',
      desc: 'Rapid deployment of large-scale workforces (100+ workers) for major infrastructure, oil & gas, or construction projects within 30-45 days.',
    },
  ];

  const candidateServices = [
    {
      icon: <Briefcase className="w-6 h-6 text-gold-600 dark:text-gold-400" />,
      title: 'Overseas Job Placement',
      desc: 'Direct access to verified job openings in Saudi Arabia, UAE, Qatar, Oman, Germany, and EU nations with zero hidden fees.',
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-tealAccent-600 dark:text-tealAccent-400" />,
      title: 'CV Formatting & Interview Prep',
      desc: 'Professional assistance in polishing your resume to meet international corporate standards and conducting mock interview coaching.',
    },
    {
      icon: <Plane className="w-6 h-6 text-gold-600 dark:text-gold-400" />,
      title: 'Relocation & Onboarding Support',
      desc: 'Comprehensive guidance on flight ticketing, airport clearance, accommodation orientation, and local labor law awareness.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      title: 'Contract Transparency & Rights',
      desc: 'Ensuring your employment contract strictly matches promised salaries, benefits, working hours, and medical coverage before departure.',
    },
  ];

  const recruitmentSteps = [
    { num: '01', title: 'Requirement Analysis', desc: 'Employer submits headcount & skill matrix specs.' },
    { num: '02', title: 'Talent Sourcing', desc: 'Shortlisting from our 50,000+ verified Pakistani talent pool.' },
    { num: '03', title: 'Trade Testing & Interview', desc: 'Rigorous practical testing & online/onsite employer interviews.' },
    { num: '04', title: 'Medical & Visa Clearance', desc: 'GAMCA medicals, degree attestation & protector stamping.' },
    { num: '05', title: 'Flight & Deployment', desc: 'Flight booking and seamless reception at destination airport.' },
  ];

  return (
    <section id="services" className="py-24 bg-white dark:bg-navy-900 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-gold-700 dark:text-gold-400 bg-gold-500/15 px-4 py-1.5 rounded-full border border-gold-500/30">
            Tailored Recruitment Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 dark:text-white mt-4 tracking-tight">
            Our Services & <span className="gold-gradient-text">Deployment Process</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-800 dark:text-slate-200 mt-3 font-medium">
            Designed to serve both corporate international employers seeking manpower and Pakistani candidates pursuing global careers.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex justify-center mb-12">
          <div className="p-2 rounded-2xl bg-slate-200 dark:bg-navy-800 border-2 border-slate-300 dark:border-white/10 flex items-center gap-2 shadow-inner">
            <button
              onClick={() => setActiveTab('employers')}
              className={`px-6 py-3 rounded-xl font-black text-sm sm:text-base transition-all duration-300 flex items-center gap-2.5 ${
                activeTab === 'employers'
                  ? 'bg-gold-500 text-navy-950 shadow-md scale-[1.02]'
                  : 'text-slate-800 dark:text-slate-200 hover:text-navy-950 dark:hover:text-white font-bold'
              }`}
            >
              <Building2 className="w-5 h-5" />
              <span>For Employers</span>
            </button>

            <button
              onClick={() => setActiveTab('candidates')}
              className={`px-6 py-3 rounded-xl font-black text-sm sm:text-base transition-all duration-300 flex items-center gap-2.5 ${
                activeTab === 'candidates'
                  ? 'bg-tealAccent-500 text-white shadow-md scale-[1.02]'
                  : 'text-slate-800 dark:text-slate-200 hover:text-navy-950 dark:hover:text-white font-bold'
              }`}
            >
              <UserCheck className="w-5 h-5" />
              <span>For Candidates</span>
            </button>
          </div>
        </div>

        {/* Active Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'employers' ? (
            <motion.div
              key="employers"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-12"
            >
              {/* Employers Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {employerServices.map((srv, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="p-6 rounded-2xl bg-slate-50 dark:bg-navy-800 border-2 border-slate-200 dark:border-white/10 hover:border-gold-500 hover:-translate-y-1 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/10 shadow-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        {srv.icon}
                      </div>
                      <h3 className="text-lg font-black text-navy-950 dark:text-white mb-2">
                        {srv.title}
                      </h3>
                      <p className="text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                        {srv.desc}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 flex items-center text-xs font-black text-gold-700 dark:text-gold-400">
                      <span>Enterprise Service</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-auto" />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Employer CTA Box */}
              <div className="p-8 rounded-3xl bg-navy-900 text-white shadow-2xl border-2 border-white/15 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-black mb-2">Need Custom Technical Manpower for Your Project?</h3>
                  <p className="text-slate-200 text-sm max-w-2xl font-medium">
                    Whether you need 10 engineers or 500 construction technicians, CEO Muhammad Kashif personally oversees foreign hiring mandates.
                  </p>
                </div>
                <a
                  href="#contact"
                  className="px-6 py-3.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 font-black text-sm shadow-md whitespace-nowrap flex items-center gap-2 hover:scale-105 transition-all"
                >
                  <span>Submit Hiring Requirement</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="candidates"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-12"
            >
              {/* Candidates Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {candidateServices.map((srv, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="p-6 rounded-2xl bg-slate-50 dark:bg-navy-800 border-2 border-slate-200 dark:border-white/10 hover:border-tealAccent-500 hover:-translate-y-1 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/10 shadow-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        {srv.icon}
                      </div>
                      <h3 className="text-lg font-black text-navy-950 dark:text-white mb-2">
                        {srv.title}
                      </h3>
                      <p className="text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                        {srv.desc}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 flex items-center text-xs font-black text-tealAccent-700 dark:text-tealAccent-400">
                      <span>Candidate Guidance</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-auto" />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Candidate CTA Box */}
              <div className="p-8 rounded-3xl bg-slate-900 text-white shadow-2xl border-2 border-white/15 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-black mb-2">Ready to Start Your Overseas Career?</h3>
                  <p className="text-slate-200 text-sm max-w-2xl font-medium">
                    Submit your CV directly to MK Global Recruitment Agency. Our recruitment counselors will match your profile with current openings in GCC & Europe.
                  </p>
                </div>
                <a
                  href="#contact"
                  className="px-6 py-3.5 rounded-xl bg-tealAccent-500 hover:bg-tealAccent-400 text-slate-950 font-black text-sm shadow-md whitespace-nowrap flex items-center gap-2 hover:scale-105 transition-all"
                >
                  <span>Apply Now as Candidate</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 5-Step Recruitment Lifecycle */}
        <div className="mt-20 pt-16 border-t-2 border-slate-200 dark:border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl font-black text-navy-950 dark:text-white">
              5-Step End-to-End Recruitment Process
            </h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 font-medium mt-2">
              Our standardized workflow ensures fast turnaround times and 100% legal compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {recruitmentSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative p-5 rounded-2xl bg-slate-50 dark:bg-navy-800 border-2 border-slate-200 dark:border-white/10 text-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-3xl font-black text-gold-600 dark:text-gold-400 block mb-2">
                  {step.num}
                </span>
                <h4 className="text-sm font-black text-navy-950 dark:text-white mb-1">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
