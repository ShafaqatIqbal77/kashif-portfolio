import React from 'react';
import { ShieldCheck, Award, FileText, CheckCircle } from 'lucide-react';

export default function MediaAccreditation() {
  const accreditations = [
    { title: 'Overseas Employment Promoter License', desc: 'Registered with Ministry of Overseas Pakistanis & Human Resource Development' },
    { title: 'ISO 9001:2015 Quality Certified', desc: 'Compliant with international recruitment quality management standards' },
    { title: 'GAMCA Medical & Consulate Authorization', desc: 'Direct embassy visa submission & GAMCA medical verification clearance' },
    { title: 'Protector of Emigrants Compliant', desc: '100% legal registration and labor contract protection for all candidates' },
  ];

  return (
    <section className="py-16 bg-slate-100 dark:bg-navy-950/80 border-y border-slate-200 dark:border-white/10 text-navy-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-gold-600 dark:text-gold-400 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/20">
              Government Licensing & Certifications
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold mt-3">
              Official Overseas Licensing & Accreditations
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm mt-2">
              MK Global Recruitment Agency operates strictly under official government authorization and global compliance standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto">
            {accreditations.map((acc, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/10 shadow-sm flex items-start gap-3"
              >
                <CheckCircle className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-navy-900 dark:text-white leading-snug">
                    {acc.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {acc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
