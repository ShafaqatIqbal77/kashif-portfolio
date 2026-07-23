import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = "923001234567"; // Customizable business WhatsApp

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Quick Chat Popup */}
      {isOpen && (
        <div className="mb-4 w-72 p-4 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/10 shadow-2xl animate-float">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-white/10 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-xs">
                MK
              </div>
              <div>
                <h4 className="text-xs font-bold text-navy-900 dark:text-white">
                  MK Global Support
                </h4>
                <p className="text-[10px] text-emerald-500 font-semibold">● Online Now</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close Chat"
              className="text-slate-400 hover:text-slate-600 dark:hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
            Hello! Looking for Pakistani manpower or overseas job opportunities in GCC & Europe? Chat directly on WhatsApp with our recruitment desk.
          </p>

          <a
            href={`https://wa.me/${whatsappNumber}?text=Hello%20MK%20Global%20Recruitment%20Team,%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs shadow-md flex items-center justify-center gap-2 transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Open WhatsApp Chat</span>
          </a>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Contact on WhatsApp"
        className="relative group p-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-75 animate-ping pointer-events-none" />
        <MessageSquare className="w-7 h-7 relative z-10" />
      </button>

    </div>
  );
}
