import { motion } from 'framer-motion';
import { Globe, Smartphone, Settings, Server, Video, Wand2, TrendingUp, ArrowRight } from 'lucide-react';

const iconMap = { Globe, Smartphone, Settings, Server, Video, Wand2, TrendingUp };

const devServices = [
  {
    icon: 'Globe', title: 'Full-Stack Web Apps',
    desc: 'Custom web applications built for performance, SEO, and scale. From landing pages to complex dashboards.',
    tools: ['React', 'Spring Boot', 'Node.js'],
    gets: ['Custom design system & responsive UI', 'SEO-optimised & deployed to production', 'Full documentation & handover'],
  },
  {
    icon: 'Smartphone', title: 'Mobile Apps',
    desc: 'Android and cross-platform apps your users will love. From concept to Play Store.',
    tools: ['React Native', 'Flutter', 'Java'],
    gets: ['iOS + Android build from one codebase', 'Play Store / App Store ready', 'Push notifications & offline support'],
  },
  {
    icon: 'Settings', title: 'SaaS & Internal Tools',
    desc: 'Custom business tools — QC systems, dashboards, admin panels — that automate your workflow.',
    tools: ['Full-Stack', 'Cloud', 'APIs'],
    gets: ['Auth, roles & permission system', 'Admin dashboard & analytics', 'Database design & cloud deployment'],
  },
  {
    icon: 'Server', title: 'APIs & Backend Systems',
    desc: 'Secure, scalable REST APIs built with enterprise standards from banking-grade systems.',
    tools: ['Java', 'Spring Boot', 'PostgreSQL'],
    gets: ['REST API with full CRUD operations', 'Security middleware & validation', 'API documentation (Swagger/OpenAPI)'],
  },
];

const creativeServices = [
  {
    icon: 'Video', title: 'AI Video Generation',
    desc: 'Professional AI-generated video content for marketing, social media, and brand storytelling.',
    tools: ['AI Tools', 'Video Production'],
    gets: ['30-60 sec promotional video', 'Script, captions & soundtrack', 'Up to 3 revision rounds'],
  },
  {
    icon: 'Wand2', title: 'AI Character Creation',
    desc: 'Custom AI characters and avatars for branding, games, content creation, and marketing campaigns.',
    tools: ['AI Art', 'Blender', 'Design'],
    gets: ['Character sheet with 3 poses', 'Transparent PNGs for all uses', 'Commercial licence included'],
  },
  {
    icon: 'TrendingUp', title: 'Meta & Google Ads',
    desc: 'Data-driven ad campaigns on Meta and Google that bring real leads and conversions.',
    tools: ['Meta Ads', 'Google Ads', 'Analytics'],
    gets: ['Full campaign setup & targeting', 'Ad copy + A/B creative variants', '2-week optimisation & reporting'],
  },
];

const FlipCard = ({ icon, title, desc, tools, gets, index }) => {
  const Icon = iconMap[icon];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group h-[280px]" 
      style={{ perspective: '1000px' }}
    >
      <div
        className="relative w-full h-full transition-transform duration-500 ease-in-out"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* ===== FRONT FACE ===== */}
        <div
          className="absolute inset-0 rounded-2xl bg-card/80 backdrop-blur-2xl border border-border/60 p-6 flex flex-col group-hover:[transform:rotateY(180deg)] transition-transform duration-500 ease-in-out"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/10">
            <Icon size={24} className="text-brand-blue" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mt-4">{title}</h3>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed flex-1">{desc}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {tools.map((tool) => (
              <span key={tool} className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{tool}</span>
            ))}
          </div>
        </div>

        {/* ===== BACK FACE ===== */}
        <div
          className="absolute inset-0 rounded-2xl bg-card/90 backdrop-blur-2xl border border-brand-blue/30 p-6 flex flex-col justify-between [transform:rotateY(180deg)] group-hover:[transform:rotateY(0deg)] transition-transform duration-500 ease-in-out"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div>
            <p className="text-xs uppercase tracking-widest text-brand-blue mb-4">What You Get</p>
            <ul className="space-y-3">
              {gets.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground/85 leading-relaxed">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-blue-light transition-colors mt-4"
          >
            Start a Project <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export const Services = () => {
  return (
    <section id="services" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground">
          What I Can Build{' '}
          <span className="text-brand-blue">For You</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
          From full-stack applications to AI-powered content and performance marketing.
        </p>
      </motion.div>

      <div className="mb-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-widest text-muted-foreground mb-6"
        >
          Development
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {devServices.map((svc, i) => (
            <FlipCard key={svc.title} {...svc} index={i} />
          ))}
        </div>
      </div>

      <div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-widest text-muted-foreground mb-6"
        >
          Creative &amp; Marketing
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {creativeServices.map((svc, i) => (
            <FlipCard key={svc.title} {...svc} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
