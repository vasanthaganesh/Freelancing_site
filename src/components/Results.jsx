import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

const results = [
  {
    challenge: 'A precision tools manufacturer needed to digitize their quality control process.',
    solution: 'Built a full QC & report management app with real-time inspection logs, defect tracking, and automated PDF report generation.',
    impact: 'Now used daily on the shop floor by quality inspectors.',
    tech: ['React Native', 'Mobile', 'SaaS'],
    extra: {
      timeline: '~6 weeks',
      stack: 'React Native, Node.js, PDF generation, SQLite',
      detail: 'Replaced a paper-based process. Inspectors now log defects in real-time with photo attachments.',
    },
  },
  {
    challenge: 'A B2B company needed a professional web presence to attract enterprise clients.',
    solution: 'Delivered a high-performance company website optimized for SEO, speed, and mobile responsiveness.',
    impact: 'Live and actively used for B2B client acquisition.',
    tech: ['React', 'Web', 'SEO'],
    extra: {
      timeline: '~3 weeks',
      stack: 'React, Tailwind CSS, Vercel, Google Analytics',
      detail: 'Lighthouse scores of 95+ across all metrics. Optimised for lead generation with clear CTAs.',
    },
  },
  {
    challenge: 'Local community members needed easy access to daily vegetable market prices.',
    solution: 'Launched a community Android app serving live market price data updated daily.',
    impact: 'Serving daily price updates to local users.',
    tech: ['Android', 'Java', 'Community'],
    extra: {
      timeline: '~4 weeks',
      stack: 'Android (Java), Firebase, REST API',
      detail: 'Daily data refresh with push notifications for price changes. Simple, accessible UI for all ages.',
    },
  },
];

const ResultCard = ({ item, index, expanded, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      onClick={onToggle}
      className={`relative h-full rounded-2xl bg-card/80 backdrop-blur-2xl border border-border/60 flex flex-col cursor-pointer transition-colors duration-300 hover:border-brand-blue/30 ${expanded ? 'z-30' : 'z-10'}`}
    >
      <div className="p-6 pb-4">
        <p className="text-xs uppercase tracking-widest text-brand-blue mb-2">The Challenge</p>
        <p className="text-sm text-muted-foreground leading-relaxed">{item.challenge}</p>
      </div>

      <div className="mx-6 border-t border-border/40" />

      <div className="p-6 pb-4">
        <p className="text-xs uppercase tracking-widest text-brand-blue mb-2">What I Built</p>
        <p className="text-sm text-foreground font-medium leading-relaxed">{item.solution}</p>
      </div>

      <div className="mx-6 border-t border-border/40" />

      <div className="p-6 pb-4">
        <p className="text-xs uppercase tracking-widest text-brand-blue mb-2">The Impact</p>
        <p className="text-sm text-brand-blue-light leading-relaxed">{item.impact}</p>
      </div>

      {/* Expand indicator */}
      <div className="px-6 pb-4 flex items-center justify-between mt-auto pt-4">
        <div className="flex flex-wrap gap-2">
          {item.tech.map((t) => (
            <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{t}</span>
          ))}
        </div>
        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={16} className="text-muted-foreground" />
        </motion.div>
      </div>

      {/* Expandable detail */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <div className="border-t border-border/40 pt-4 mt-2">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Timeline</p>
                    <p className="text-sm text-foreground font-medium">{item.extra.timeline}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Stack</p>
                    <p className="text-sm text-foreground font-medium">{item.extra.stack}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.extra.detail}</p>
                <a
                  href="#contact"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:text-brand-blue-light transition-colors"
                >
                  Similar project? Let's talk <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const Results = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <section id="results" className="relative z-20 py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground">
          What I've <span className="text-brand-blue">Shipped</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
          Real products built for real businesses. Click to see more.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {results.map((item, i) => (
          <ResultCard 
            key={i} 
            item={item} 
            index={i} 
            expanded={expandedIndex === i}
            onToggle={() => setExpandedIndex(expandedIndex === i ? null : i)}
          />
        ))}
      </div>
    </section>
  );
};
