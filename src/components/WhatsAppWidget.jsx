import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function WhatsAppWidget() {
  const whatsappNumber = "923130919597"; // Customizable business WhatsApp
  const message = "Hello MK Global Recruitment Team, I would like to inquire about your services.";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Floating Action Button linking directly to WhatsApp */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact on WhatsApp"
        className="relative group p-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-75 animate-ping pointer-events-none" />
        <MessageSquare className="w-7 h-7 relative z-10" />
      </a>
    </div>
  );
}
