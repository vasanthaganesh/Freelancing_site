import { motion } from 'framer-motion';
import { MapPin, Briefcase, GraduationCap, Zap } from 'lucide-react';

const STAGGER = 0.035;

const TextRoll = ({ children, className, center = false }) => {
  return (
    <div
      className={`relative block overflow-hidden ${className || ""}`}
      style={{ lineHeight: 1 }}
    >
      <div>
        {children.split("").map((l, i) => {
          const delay = center
            ? STAGGER * Math.abs(i - (children.length - 1) / 2)
            : STAGGER * i;

          return (
            <motion.span
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" },
              }}
              transition={{ ease: "easeInOut", delay }}
              className="inline-block whitespace-pre"
              key={i}
            >
              {l}
            </motion.span>
          );
        })}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => {
          const delay = center
            ? STAGGER * Math.abs(i - (children.length - 1) / 2)
            : STAGGER * i;

          return (
            <motion.span
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0 },
              }}
              transition={{ ease: "easeInOut", delay }}
              className="inline-block whitespace-pre"
              key={i}
            >
              {l}
            </motion.span>
          );
        })}
      </div>
    </div>
  );
};

const stats = [
  {
    icon: MapPin,
    label: 'Based in',
    value: 'Puducherry',
    sub: 'India — available globally',
  },
  {
    icon: Briefcase,
    label: 'Experience',
    value: '2+ Years',
    sub: 'Virtusa — Full-Stack Java Dev (CITI)',
  },
  {
    icon: GraduationCap,
    label: 'Education',
    value: 'B.Tech IT',
    sub: 'MVIT — CGPA 8.34',
  },
  {
    icon: Zap,
    label: 'Currently obsessed with',
    value: 'AI × Craft',
    sub: 'Using AI tools to build things that feel handmade',
  },
];

const terminalLines = [
  { text: '> build beautiful things', active: false },
  { text: '> make the code feel like a game', active: false },
  { text: '> every product is a world', active: false },
  { text: '> art through function', active: false },
  { text: '> ship or it didn\'t happen_', active: true },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      {/* ── Section heading ───────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground">
          The Person Behind{' '}
          <motion.span initial="initial" whileHover="hovered" className="inline-block text-brand-blue cursor-default">
            <TextRoll>the Build</TextRoll>
          </motion.span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
          Not just a developer — a craftsman who treats every product like a world worth inhabiting.
        </p>
      </motion.div>

      {/* ── Main two-column layout ───────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        {/* ── Left: Bio + Terminal ─────────────────────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Headline */}
          <motion.h3
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold font-display text-foreground leading-tight"
          >
            I make things that feel{' '}
            <span className="text-brand-blue italic">alive.</span>
          </motion.h3>

          {/* Bio paragraphs */}
          <motion.div variants={itemVariants} className="space-y-5 text-muted-foreground text-base leading-relaxed">
            <p>
              Code is my canvas. Every app I ship is a small world — with its own logic, rhythm, and feel.
              I don't just deliver features; I craft experiences that make users pause and go{' '}
              <span className="text-foreground font-medium">"wait, this is actually beautiful."</span>
            </p>
            <p>
              Hideo Kojima taught me that the highest form of art is interactive and emotional. That's how
              I think about software too — not deliverables, but experiences with meaning.
            </p>
            <p>
              I leverage AI tools not as shortcuts, but as force multipliers — letting me do the work of a
              small studio solo, with taste intact. Modern tech stack, always. But{' '}
              <span className="text-foreground font-medium">soul first.</span>
            </p>
          </motion.div>

          {/* Terminal block */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl bg-card/80 backdrop-blur-2xl border border-border/60 p-6 font-mono text-sm group overflow-hidden relative"
          >
            {/* Glow accent on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
              style={{ boxShadow: 'inset 0 0 40px rgba(92,77,255,0.06)' }}
            />
            {/* Dots */}
            <div className="flex gap-1.5 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-border/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-border/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-border/60" />
            </div>
            <div className="space-y-2">
              {terminalLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                  className={line.active ? 'text-brand-blue' : 'text-muted-foreground'}
                >
                  {line.active ? (
                    <>
                      {line.text.replace('_', '')}
                      <span className="animate-pulse">_</span>
                    </>
                  ) : (
                    line.text
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ── Right: Vital Statistics ──────────────────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          <motion.p
            variants={itemVariants}
            className="text-xs uppercase tracking-widest text-muted-foreground mb-6"
          >
            Vital Statistics
          </motion.p>

          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.25, ease: 'easeOut' } }}
                className="group flex items-start gap-5 p-6 rounded-2xl bg-card/20 backdrop-blur-md border border-border/20 hover:bg-card/40 hover:border-border/60 hover:shadow-2xl transition-colors duration-300 cursor-default"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/10 shrink-0 mt-0.5">
                  <Icon size={20} className="text-brand-blue" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground group-hover:text-muted-foreground/80 transition-colors">
                    {stat.label}
                  </span>
                  <span className="text-2xl font-bold font-display text-foreground mt-1 leading-none">
                    {stat.value}
                  </span>
                  <span className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                    {stat.sub}
                  </span>
                </div>
              </motion.div>
            );
          })}

          {/* Divider + Skill badges */}
          <motion.div variants={itemVariants} className="pt-4">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Stack</p>
            <div className="flex flex-wrap gap-2">
              {[
                'React', 'React Native', 'Java', 'Spring Boot',
                'Node.js', 'TypeScript', 'Python', 'Flutter',
                'Blender', 'Figma', 'UE', 'IoT',
              ].map((skill) => (
                <motion.div
                  key={skill}
                  initial="initial"
                  whileHover="hovered"
                  className="text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground border border-border/40 hover:border-brand-blue/40 hover:text-foreground transition-colors cursor-default flex items-center justify-center"
                >
                  <TextRoll>{skill}</TextRoll>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
