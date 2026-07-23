import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

export default function Map() {
  return (
    <div className="relative w-full h-[380px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10 group">
      {/* Interactive Google Map iFrame targeting Faisal Hills, Bhadana Arcade */}
      <iframe
        title="MK Global Recruitment Agency Office Location - Bhadana Arcade Faisal Hills"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13264.47197368686!2d72.779774!3d33.722668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfa666579c3cf7%3A0xbbf1f3a2c53a78bf!2sFaisal%20Hills%2C%20Taxila%2C%20Rawalpindi%2C%20Punjab!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk"
        width="100%"
        height="100%"
        style={{ border: 0, filter: 'contrast(1.05) opacity(0.92)' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      />

      {/* Floating Address Badge Overlay */}
      <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto max-w-sm p-4 rounded-2xl bg-white/95 dark:bg-navy-900/95 backdrop-blur-md border border-slate-200/80 dark:border-white/15 shadow-xl flex items-start gap-3">
        <div className="p-2.5 rounded-xl bg-gold-500 text-navy-950 shrink-0">
          <MapPin className="w-5 h-5" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-navy-900 dark:text-white">
            Head Office Location
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-snug mt-0.5">
            Office 308, 3rd Floor, Bhadana Arcade, Executive Block, Faisal Hills
          </p>
          <a
            href="https://maps.google.com/?q=Bhadana+Arcade+Executive+Block+Faisal+Hills"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] font-bold text-gold-600 dark:text-gold-400 hover:underline mt-1.5"
          >
            <Navigation className="w-3 h-3" /> Get Directions
          </a>
        </div>
      </div>
    </div>
  );
}
