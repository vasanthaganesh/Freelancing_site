import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We hop on a call. I understand your business, users, and goals before writing a single line of code.',
  },
  {
    num: '02',
    title: 'Blueprint',
    desc: 'I map out the architecture, tech stack, and timeline. You approve before we start building.',
  },
  {
    num: '03',
    title: 'Build',
    desc: 'I build in focused sprints with regular check-ins, so you see progress and can give feedback early.',
  },
  {
    num: '04',
    title: 'Launch',
    desc: 'I deploy, test everything, and hand over clean code and documentation. You own it all.',
  },
];

export const Process = () => {
  return (
    <section id="process" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground">
          How I <span className="text-brand-blue">Work</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
          A clear, structured process so you always know what's happening.
        </p>
      </motion.div>

      {/* Steps grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Connector line (desktop only) */}
        <div
          className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-px border-t-2 border-dashed border-border/40 z-0"
          aria-hidden="true"
        />

        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.15 } }}
            whileHover={{ scale: 1.05, y: -8, transition: { duration: 0.3, ease: 'easeOut' } }}
            viewport={{ once: true }}
            className="relative p-6 rounded-2xl bg-card/20 backdrop-blur-md border border-border/20 hover:bg-card/40 hover:border-border/60 hover:shadow-2xl transition-colors duration-300 text-center md:text-left group z-10 cursor-default"
          >
            <span className="text-5xl font-bold text-muted-foreground/20 font-display leading-none group-hover:text-muted-foreground/40 transition-colors duration-300 inline-block">
              {step.num}
            </span>
            <h3 className="text-xl font-semibold text-foreground mt-4">
              {step.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
