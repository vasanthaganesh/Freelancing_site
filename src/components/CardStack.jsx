import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { LayoutDashboard, Smartphone, Video, Activity, Users, PlayCircle, CheckCircle2 } from 'lucide-react';

const FlutterLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5">
    <path d="M14.314 0L2.3 12 6.9 16.6l12.014-12.014L14.314 0z" fill="#42A5F5"/>
    <path d="M10.82 15.485l-3.92 3.92L14.314 24h4.586L10.82 15.485z" fill="#0D47A1"/>
    <path d="M14.314 14.828L18.9 19.414 23.485 14.828 18.9 10.242l-4.586 4.586z" fill="#29B6F6"/>
  </svg>
);

const AppleLogo = () => (
  <svg viewBox="0 0 384 512" className="w-4 h-4 fill-foreground">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
  </svg>
);

const PlayStoreLogo = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4">
    <path d="M3.5 2.5C3.2 2.8 3 3.3 3 4v16c0 .7.2 1.2.5 1.5l.1.1 9-9v-.2l-9-9-.1.1z" fill="#00C0FF"/>
    <path d="M12.6 12.4l-3.1-3.1v-.2l3.1-3.1.1.1 3.5 2c1 .6 1 1.5 0 2.1l-3.5 2-.1.1z" fill="#FFC000"/>
    <path d="M12.6 12.6l3.1-3.1-9-5.2c-.5-.3-1-.2-1.3.1l7.2 8.2z" fill="#FF3366"/>
    <path d="M12.6 12.4l3.1 3.1-9 5.2c-.3.2-.8.3-1.3.1l7.2-8.4z" fill="#00E676"/>
  </svg>
);

const ReactLogo = () => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-5 h-5" fill="#61DAFB">
    <circle cx="0" cy="0" r="2.05" />
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const NextjsLogo = () => (
  <svg viewBox="0 0 180 180" className="w-5 h-5 fill-foreground">
    <path d="M90 0C40.294 0 0 40.294 0 90s40.294 90 90 90 90-40.294 90-90S139.706 0 90 0zm43.344 126.963l-45.717-64.636v64.636H72.181V52.884h15.446l45.717 64.636V52.884h15.446v74.079h-15.446z"/>
  </svg>
);

const NanoBananaLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 overflow-visible">
    <text x="50%" y="50%" textAnchor="middle" dy=".35em" fontSize="20" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}>🍌</text>
  </svg>
);

const HiggsfieldLogo = () => (
  <svg viewBox="0 0 100 100" className="w-5 h-5 rounded-[4px] bg-[#D4FF00]">
    <path d="M 5 32 C 30 32, 15 70, 35 70 C 55 70, 40 20, 60 20 C 80 20, 60 85, 80 85 C 95 85, 85 50, 105 50" fill="none" stroke="#111" strokeWidth="16" strokeLinecap="butt"/>
  </svg>
);

export const CardStack = () => {
  const containerRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const rotateX = useTransform(smoothMouseY, [-250, 250], [8, -8]);
  const rotateY = useTransform(smoothMouseX, [-250, 250], [-8, 8]);

  const c1X = useTransform(smoothMouseX, [-250, 250], [-10, 10]);
  const c1Y = useTransform(smoothMouseY, [-250, 250], [-10, 10]);

  const c2X = useTransform(smoothMouseX, [-250, 250], [-25, 25]);
  const c2Y = useTransform(smoothMouseY, [-250, 250], [-25, 25]);

  const c3X = useTransform(smoothMouseX, [-250, 250], [-45, 45]);
  const c3Y = useTransform(smoothMouseY, [-250, 250], [-45, 45]);

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[450px] lg:h-[550px] flex items-center justify-center"
      style={{ perspective: 1200 }}
    >
      <motion.div 
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full max-w-[460px] h-full flex items-center justify-center"
      >
        
        {/* Card 1: SaaS Dashboard */}
        <motion.div
          style={{ x: c1X, y: c1Y, z: -80 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[0%] w-64 p-5 rounded-3xl bg-card/80 border border-border/50 backdrop-blur-2xl shadow-2xl hover:z-30 transition-all duration-300 group hover:border-brand-blue/50 flex flex-col"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-transparent opacity-50 rounded-3xl" />
          
          <div className="relative z-10 flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-brand-blue/20 text-brand-blue shadow-inner">
                  <LayoutDashboard size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-foreground group-hover:text-brand-blue transition-colors">SaaS Dashboard</h3>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Admin Panel</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="p-3.5 rounded-2xl bg-background/60 border border-border/40 shadow-sm">
                <Activity size={14} className="text-green-400 mb-1.5" />
                <div className="text-xl font-black text-foreground tracking-tight">+124%</div>
                <div className="text-[10px] text-muted-foreground mt-0.5">Revenue</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-background/60 border border-border/40 shadow-sm">
                <Users size={14} className="text-brand-blue mb-1.5" />
                <div className="text-xl font-black text-foreground tracking-tight">12.5k</div>
                <div className="text-[10px] text-muted-foreground mt-0.5">Active Users</div>
              </div>
            </div>
            
            <div className="pt-4 mt-auto border-t border-border/40 flex items-center justify-between">
              <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">Built With</span>
              <div className="flex items-center gap-3">
                <ReactLogo />
                <NextjsLogo />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 2: AI Video Gen */}
        <motion.div
          style={{ x: c2X, y: c2Y, z: 0 }}
          animate={{ y: [-5, -18, -5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[20%] right-[0%] w-72 p-5 rounded-3xl bg-card/90 border border-border/50 backdrop-blur-3xl shadow-[0_30px_60px_rgba(0,0,0,0.4)] hover:z-30 transition-all duration-300 group hover:border-purple-500/50 flex flex-col"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent opacity-50 rounded-3xl" />
          
          <div className="relative z-10 flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-400 shadow-inner">
                  <Video size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-foreground group-hover:text-purple-400 transition-colors">AI Video Gen</h3>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Timeline Editor</p>
                </div>
              </div>
            </div>
            
            <div className="w-full aspect-[16/9] rounded-2xl bg-background/80 border border-border/40 flex items-center justify-center mb-5 relative overflow-hidden group-hover:border-purple-500/30 transition-colors shadow-inner">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 to-brand-blue/30 opacity-40" />
              <PlayCircle size={36} className="text-white/90 z-10 drop-shadow-xl group-hover:scale-110 transition-transform duration-500" />
            </div>
            
            <div className="pt-4 mt-auto border-t border-border/40 flex items-center justify-between">
              <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">Powered By</span>
              <div className="flex items-center gap-3">
                <NanoBananaLogo />
                <HiggsfieldLogo />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 3: Mobile App */}
        <motion.div
          style={{ x: c3X, y: c3Y, z: 80 }}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[5%] left-[15%] w-60 p-5 rounded-[2.5rem] bg-card/95 border border-border/60 backdrop-blur-3xl shadow-[0_40px_80px_rgba(0,0,0,0.6)] hover:z-30 transition-all duration-300 group hover:border-brand-blue/50 flex flex-col"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/10 to-transparent rounded-[2.5rem]" />
          
          <div className="w-20 h-5 bg-background rounded-b-2xl mx-auto absolute top-0 left-1/2 -translate-x-1/2 border-x border-b border-border/60 shadow-sm" />
          
          <div className="mt-6 relative z-10 flex-1 flex flex-col">
            <div className="flex items-center gap-3 mb-6 px-2">
              <div className="p-2.5 rounded-full bg-brand-blue/20 text-brand-blue shadow-inner">
                <Smartphone size={18} />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-foreground group-hover:text-brand-blue transition-colors">Mobile App</h3>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Cross-Platform</p>
              </div>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="p-3.5 rounded-2xl bg-background/80 border border-border/40 flex items-center gap-3 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-blue to-purple-500 shadow-md" />
                <div className="flex-1">
                  <div className="h-2 w-20 bg-foreground/30 rounded-full mb-2" />
                  <div className="h-1.5 w-12 bg-muted-foreground/40 rounded-full" />
                </div>
                <CheckCircle2 size={16} className="text-brand-blue" />
              </div>
            </div>

            <div className="pt-4 mt-auto border-t border-border/40 flex items-center justify-between">
              <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">Available On</span>
              <div className="flex items-center gap-3">
                <AppleLogo />
                <PlayStoreLogo />
                <FlutterLogo />
              </div>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
};
