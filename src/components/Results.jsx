import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Maximize2, X } from 'lucide-react';

const results = [
  {
    challenge: 'A precision tools manufacturer needed to digitize their quality control process.',
    solution: 'Built a full QC & report management app with real-time inspection logs, defect tracking, and automated PDF report generation.',
    impact: 'Now used daily on the shop floor by quality inspectors.',
    tech: ['React Native', 'Mobile', 'SaaS'],
    image: '/assets/qc-dashboard.png',
    gallery: [],
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
    image: '/assets/project2.png',
    gallery: [],
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
    image: '/assets/koyamrate-home.png',
    gallery: ['/assets/koyamrate-alerts.png', '/assets/koyamrate-trends.png', '/assets/koyamrate-favorites.png'],
    extra: {
      timeline: '~4 weeks',
      stack: 'Android (Java), Firebase, REST API',
      detail: 'Daily data refresh with push notifications for price changes. Simple, accessible UI for all ages.',
    },
  },
];

const ResultCard = ({ item, index, expanded, onToggle, onImageClick }) => {
  const hasGallery = item.gallery && item.gallery.length > 0;
  const allImages = hasGallery ? [item.image, ...item.gallery] : [item.image];
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const activeImage = allImages[activeImgIdx];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      onClick={onToggle}
      className={`group relative h-full rounded-2xl bg-card/80 backdrop-blur-2xl border border-border/60 flex flex-col cursor-pointer transition-colors duration-300 hover:border-brand-blue/30 overflow-hidden ${expanded ? 'z-30' : 'z-10'}`}
    >
      {/* Hero image */}
      {activeImage && (
        <div 
          className="relative w-full h-56 bg-black/40 p-4 flex items-center justify-center overflow-hidden group/image shrink-0"
          onClick={(e) => { e.stopPropagation(); onImageClick(activeImage); }}
        >
          <img
            src={activeImage}
            alt=""
            className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-500 group-hover/image:scale-105"
            onError={(e) => { e.target.parentElement.style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Maximize2 className="text-white w-8 h-8 opacity-80 drop-shadow-md" />
          </div>
        </div>
      )}

      {/* Always-visible thumbnails if there's a gallery */}
      {hasGallery && (
        <div className="flex gap-2 px-6 pt-4 pb-3 overflow-x-auto scrollbar-hide border-b border-border/40 shrink-0 bg-black/20">
          {allImages.map((img, idx) => (
            <div 
              key={idx}
              onClick={(e) => { e.stopPropagation(); setActiveImgIdx(idx); }}
              className={`relative h-14 w-14 rounded-md border ${activeImgIdx === idx ? 'border-brand-blue ring-1 ring-brand-blue/50' : 'border-border/40 hover:border-brand-blue/50'} bg-black/40 p-1 shrink-0 cursor-pointer transition-all`}
            >
              <img src={img} alt="" className="w-full h-full object-contain rounded-sm" />
            </div>
          ))}
        </div>
      )}

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
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
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
              onImageClick={setSelectedImage}
            />
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10 cursor-zoom-out"
          >
            <button 
              className="absolute top-4 right-4 md:top-8 md:right-8 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              src={selectedImage}
              alt="Fullscreen view"
              className="max-w-full max-h-full object-contain rounded-xl drop-shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
