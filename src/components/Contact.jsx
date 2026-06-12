import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-8 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter font-display">
          Ready to build?{' '}
          <span className="text-brand-blue">Let's talk.</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-12 font-light max-w-2xl mx-auto">
          Tell me what you need. I'll get back to you within 24 hours with a plan.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="mailto:vasanthaganeshraja@gmail.com"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 backdrop-blur-2xl border border-white/20 text-white text-lg font-bold transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] hover:bg-white/10 hover:scale-105"
          >
            <Mail size={20} />
            Email Me
          </a>
          <a 
            href="https://wa.me/918122435956"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-border bg-card/30 hover:bg-muted text-foreground text-lg font-semibold transition-all duration-300 backdrop-blur-sm hover:border-green-500/40"
          >
            <MessageCircle size={20} className="text-green-400" />
            WhatsApp
          </a>
          <a 
            href="https://t.me/VasanthaganeshRaja"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-border bg-card/30 hover:bg-muted text-foreground text-lg font-semibold transition-all duration-300 backdrop-blur-sm hover:border-blue-400/40"
          >
            <Send size={20} className="text-blue-400" />
            Telegram
          </a>
        </div>
        
        <p className="mt-8 text-sm text-muted-foreground">
          or email directly at{' '}
          <a href="mailto:vasanthaganeshraja@gmail.com" className="text-brand-blue hover:underline">
            vasanthaganeshraja@gmail.com
          </a>
        </p>
      </motion.div>
    </section>
  );
};
