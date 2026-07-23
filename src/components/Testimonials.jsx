import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote, Building2, UserCheck } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      type: 'Employer',
      quote: "Working with CEO Muhammad Kashif and MK Global was a game changer for our infrastructure project in Riyadh. They sourced and trade-tested 80 certified welders and technicians within 30 days. Zero visa delays and 100% contract compliance.",
      author: "Eng. Tariq Al-Mansoor",
      role: "VP of Procurement & HR",
      company: "Al-Riyadh Infra Group (KSA)",
      location: "Riyadh, Saudi Arabia",
      rating: 5,
    },
    {
      id: 2,
      type: 'Candidate',
      quote: "I was looking for a legitimate overseas nursing opportunity in Europe. MK Global guided me through document attestation, language orientation, and visa stamping. Today I am working as a registered nurse in Germany. Eternally grateful to Mr. Kashif!",
      author: "Hassan Ali, RN",
      role: "Medical Staff Placement",
      company: "St. Elisabeth Hospital Corridor",
      location: "Frankfurt, Germany",
      rating: 5,
    },
    {
      id: 3,
      type: 'Employer',
      quote: "MK Global Recruitment Agency provided executive headhunting for our telecom expansion in Dubai. Their candidate screening and pre-departure orientation are top tier in Pakistan.",
      author: "David Hemsworth",
      role: "Director of Global Talent",
      company: "Apex Telecom LLC",
      location: "Dubai, UAE",
      rating: 5,
    },
    {
      id: 4,
      type: 'Candidate',
      quote: "From trade testing in Pakistan to airport pickup in Qatar, MK Global took care of everything without any hidden charges or confusion. CEO Muhammad Kashif personally ensures every candidate's safety.",
      author: "Usman Raza",
      role: "Senior Civil Site Supervisor",
      company: "Gulf Construction Co.",
      location: "Doha, Qatar",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 bg-slate-50 dark:bg-navy-950 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-gold-600 dark:text-gold-400 bg-gold-500/10 px-4 py-1.5 rounded-full border border-gold-500/20">
            Trust & Client Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 dark:text-white mt-4 tracking-tight">
            What Employers & Candidates <span className="gold-gradient-text">Say About Us</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-3">
            Real experiences from international corporate partners and successfully deployed professionals.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200/80 dark:border-white/10 shadow-2xl relative"
            >
              <Quote className="w-16 h-16 text-gold-500/15 absolute top-8 right-8 pointer-events-none" />

              <div className="flex items-center gap-3 mb-6">
                <span className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 ${
                  current.type === 'Employer'
                    ? 'bg-gold-500/10 text-gold-600 dark:text-gold-400 border border-gold-500/20'
                    : 'bg-tealAccent-500/10 text-tealAccent-600 dark:text-tealAccent-400 border border-tealAccent-500/20'
                }`}>
                  {current.type === 'Employer' ? <Building2 className="w-3.5 h-3.5" /> : <UserCheck className="w-3.5 h-3.5" />}
                  {current.type} Endorsement
                </span>

                <div className="flex items-center gap-1 ml-auto">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold-400 fill-gold-400" />
                  ))}
                </div>
              </div>

              <blockquote className="text-lg sm:text-xl text-slate-800 dark:text-slate-100 font-medium leading-relaxed mb-8 italic">
                "{current.quote}"
              </blockquote>

              <div className="pt-6 border-t border-slate-100 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-navy-900 dark:text-white">
                    {current.author}
                  </h3>
                  <p className="text-sm text-gold-600 dark:text-gold-400 font-semibold">
                    {current.role} — <span className="text-slate-600 dark:text-slate-300 font-normal">{current.company}</span>
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    📍 {current.location}
                  </p>
                </div>

                {/* Carousel Controls */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={prevSlide}
                    aria-label="Previous Testimonial"
                    className="p-3 rounded-full bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-200 hover:bg-gold-500 hover:text-navy-950 transition-colors shadow-sm"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    aria-label="Next Testimonial"
                    className="p-3 rounded-full bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-200 hover:bg-gold-500 hover:text-navy-950 transition-colors shadow-sm"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-8 bg-gold-500' : 'w-2.5 bg-slate-300 dark:bg-navy-700'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
