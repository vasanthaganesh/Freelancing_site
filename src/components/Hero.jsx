import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { CardStack } from './CardStack';

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 px-8 flex items-center overflow-hidden">
      
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-blue/30 bg-brand-blue/10 text-brand-blue text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Available for Projects
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-foreground leading-[1.1] font-display drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
          >
            I build the apps your business{' '}
            <span className="text-brand-blue">actually needs.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground font-light max-w-lg leading-relaxed"
          >
            From full-stack web apps to AI-powered content and performance marketing — I handle everything so you can focus on growing.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mt-4"
          >
            <a href="#contact" className="group inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white/5 backdrop-blur-2xl border border-white/20 text-white font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] hover:bg-white/10">
              Start a Project
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="px-8 py-3 rounded-full border border-border bg-card/30 hover:bg-muted text-foreground font-semibold transition-all duration-300 backdrop-blur-sm">
              See What I Build
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-border/50"
          >
            <div>
              <div className="text-2xl font-bold text-foreground">7+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Services</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">5+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Products Shipped</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">Enterprise</div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Grade Code</div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Card Stack */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, type: 'spring' }}
          className="relative w-full flex items-center justify-center min-h-[400px] lg:min-h-[500px]"
        >
          <CardStack />
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground z-10"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  );
};
