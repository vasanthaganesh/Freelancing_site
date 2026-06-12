import { motion } from 'framer-motion';

const credentials = [
  { emoji: '\ud83c\udfe6', text: '2+ years building for Citi via Virtusa' },
  { emoji: '\u2615', text: 'Oracle Certified Java SE 8' },
  { emoji: '\ud83c\udf93', text: 'B.Tech IT \u2014 CGPA 8.34' },
  { emoji: '\ud83c\udfc6', text: '1st Prize \u2014 Blind Coding, PTU' },
];

const MagneticBadge = ({ emoji, text }) => {
  return (
    <motion.div
      whileHover={{ 
        rotateX: 8, 
        rotateY: 8, 
        scale: 1.08,
        boxShadow: '0 0 20px rgba(92, 77, 255, 0.2)',
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card/80 border border-border/50 backdrop-blur-2xl text-sm text-foreground/85 cursor-default select-none"
      style={{ perspective: '600px' }}
    >
      <span aria-hidden="true" className="text-base">{emoji}</span>
      <span>{text}</span>
    </motion.div>
  );
};

export const TrustSignals = () => {
  return (
    <section id="trust" className="relative z-10 py-16 px-6 max-w-5xl mx-auto">
      <p className="text-xs uppercase tracking-widest text-muted-foreground text-center mb-8">
        Why Clients Trust Me
      </p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap justify-center gap-4 md:gap-5"
        style={{ perspective: '800px' }}
      >
        {credentials.map((cred) => (
          <MagneticBadge key={cred.text} {...cred} />
        ))}
      </motion.div>
    </section>
  );
};
