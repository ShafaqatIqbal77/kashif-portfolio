import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send, CheckCircle2, AlertCircle, MessageSquare, Clock, Globe } from 'lucide-react';
import Map from './Map';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'Employer', // 'Employer' or 'Candidate'
    service: 'Overseas Recruitment',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) errs.phone = 'Phone/WhatsApp number is required';
    if (!formData.message.trim()) errs.message = 'Message content is required';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
      }, 1000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-navy-950 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-gold-600 dark:text-gold-400 bg-gold-500/10 px-4 py-1.5 rounded-full border border-gold-500/20">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 dark:text-white mt-4 tracking-tight">
            Connect with <span className="gold-gradient-text">Muhammad Kashif</span> & MK Global
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-3">
            Have a foreign recruitment mandate or looking for an overseas job? Reach out to our executive team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Cards & Office Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Office Address Card */}
            <div className="p-6 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200/80 dark:border-white/10 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-gold-500/10 text-gold-500 border border-gold-500/30 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy-900 dark:text-white">
                    Executive Office Address
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 font-medium leading-relaxed">
                    Office 308, 3rd Floor, Bhadana Arcade, Executive Block, Faisal Hills, Pakistan
                  </p>
                </div>
              </div>
            </div>

            {/* Email & Direct Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200/80 dark:border-white/10 shadow-md">
                <div className="p-2.5 rounded-xl bg-tealAccent-500/10 text-tealAccent-500 w-fit mb-3">
                  <Mail className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-extrabold uppercase text-slate-400">Direct Email</h4>
                <p className="text-sm font-bold text-navy-900 dark:text-white mt-1 break-all">
                  ceo@mkglobalrecruitment.com
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200/80 dark:border-white/10 shadow-md">
                <div className="p-2.5 rounded-xl bg-gold-500/10 text-gold-500 w-fit mb-3">
                  <Phone className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-extrabold uppercase text-slate-400">Call / WhatsApp</h4>
                <p className="text-sm font-bold text-navy-900 dark:text-white mt-1">
                  +92 300 1234567
                </p>
              </div>
            </div>

            {/* Hours & Business Social Links */}
            <div className="p-6 rounded-3xl bg-navy-900 text-white border border-white/10 shadow-xl space-y-4">
              <h4 className="text-base font-bold flex items-center gap-2 text-gold-400">
                <Clock className="w-4 h-4" /> Business Hours & Connect
              </h4>
              <p className="text-xs text-slate-300">
                Monday – Saturday: 09:00 AM – 06:00 PM (PKT)<br />
                Sunday: Closed (Emergency recruitment line available)
              </p>

              <div className="pt-3 border-t border-white/10 flex items-center gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-3 rounded-xl bg-white/10 hover:bg-gold-500 hover:text-navy-950 transition-colors flex items-center justify-center"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </a>
                <a
                  href="https://wa.me/923001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Business"
                  className="p-3 rounded-xl bg-white/10 hover:bg-emerald-500 hover:text-white transition-colors"
                >
                  <MessageSquare className="w-5 h-5" />
                </a>
                <a
                  href="#home"
                  aria-label="Website"
                  className="p-3 rounded-xl bg-white/10 hover:bg-tealAccent-500 hover:text-navy-950 transition-colors"
                >
                  <Globe className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <Map />

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200/80 dark:border-white/10 shadow-2xl relative">
              
              <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-2">
                Send a Message to CEO & Recruitment Team
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-8">
                Fill out the form below. We typically respond within 12 business hours.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-navy-900 dark:text-white">
                    Thank You, {formData.name}!
                  </h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 max-w-md mx-auto">
                    Your inquiry has been sent directly to MK Global Recruitment Agency. A senior representative will review your request shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        role: 'Employer',
                        service: 'Overseas Recruitment',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-gold-500 text-navy-950 font-bold text-xs shadow-md hover:bg-gold-400 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Role Selector */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                      I am contacting as an:
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setFormData((prev) => ({ ...prev, role: 'Employer' }))}
                        className={`py-3 px-4 rounded-xl text-sm font-bold border transition-all ${
                          formData.role === 'Employer'
                            ? 'bg-gold-500 text-navy-950 border-gold-500 shadow-md'
                            : 'bg-slate-50 dark:bg-navy-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10'
                        }`}
                      >
                        🏢 Employer / Recruiter
                      </button>

                      <button
                        type="button"
                        onClick={() => setFormData((prev) => ({ ...prev, role: 'Candidate' }))}
                        className={`py-3 px-4 rounded-xl text-sm font-bold border transition-all ${
                          formData.role === 'Candidate'
                            ? 'bg-tealAccent-500 text-white border-tealAccent-500 shadow-md'
                            : 'bg-slate-50 dark:bg-navy-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10'
                        }`}
                      >
                        👷 Candidate / Job Seeker
                      </button>
                    </div>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Eng. Ahmed Al-Rashid"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-navy-800 border text-sm text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all ${
                          errors.name ? 'border-rose-500' : 'border-slate-200 dark:border-white/10'
                        }`}
                      />
                      {errors.name && <p className="text-xs text-rose-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-navy-800 border text-sm text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all ${
                          errors.email ? 'border-rose-500' : 'border-slate-200 dark:border-white/10'
                        }`}
                      />
                      {errors.email && <p className="text-xs text-rose-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email}</p>}
                    </div>
                  </div>

                  {/* Phone & Service Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        id="contact-phone"
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+92 300 1234567"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-navy-800 border text-sm text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all ${
                          errors.phone ? 'border-rose-500' : 'border-slate-200 dark:border-white/10'
                        }`}
                      />
                      {errors.phone && <p className="text-xs text-rose-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.phone}</p>}
                    </div>

                    <div>
                      <label htmlFor="contact-service" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                        Primary Requirement
                      </label>
                      <select
                        id="contact-service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-navy-800 border border-slate-200 dark:border-white/10 text-sm text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all"
                      >
                        <option value="Overseas Bulk Recruitment">Overseas Bulk Recruitment (GCC)</option>
                        <option value="Executive & High-Skill Search">Executive & High-Skill Search (Europe)</option>
                        <option value="Trade Testing & Certification">Trade Testing & Certification</option>
                        <option value="Candidate Job Application">Candidate Job Application</option>
                        <option value="General Inquiry">General Business Inquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                      Message / Requirement Summary *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please specify candidate numbers, required trade skills, project location, or your career background..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-navy-800 border text-sm text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all ${
                        errors.message ? 'border-rose-500' : 'border-slate-200 dark:border-white/10'
                      }`}
                    />
                    {errors.message && <p className="text-xs text-rose-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-amber-500 text-navy-950 font-extrabold text-base shadow-xl hover:shadow-glow-gold hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Sending Inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Submit Inquiry to CEO & Team</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
