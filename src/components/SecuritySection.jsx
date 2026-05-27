import { motion } from 'framer-motion';
import shieldLogo from '../assets/imgi_10_datasafe.png';
import ScrollReveal from './ScrollReveal';

export default function SecuritySection() {
  return (
    <section className="relative w-full py-24 md:py-36 bg-black text-white px-6 overflow-hidden flex flex-col justify-center items-center text-center">
      
      {/* Background soft green glowing radial light */}
      <div className="absolute w-[450px] h-[450px] bg-emerald-950/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-8 select-none">
        
        {/* Shield logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="w-16 h-16 sm:w-20 sm:h-20 mb-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center p-3 sm:p-4 shadow-xl"
        >
          <img src={shieldLogo} alt="Data Safe Shield" className="w-full h-full object-contain filter brightness-110" />
        </motion.div>

        {/* Small label */}
        <h4 className="text-[12px] sm:text-[13px] font-gilroy font-bold uppercase tracking-[0.3em] text-emerald-500/80">
          <ScrollReveal>security first. and always.</ScrollReveal>
        </h4>

        {/* Big Bold Headline */}
        <h2 className="font-denton text-4xl sm:text-6xl md:text-7xl font-normal leading-tight text-white max-w-2xl lowercase">
          <ScrollReveal delay={0.2}>
            trust is the foundation of every relationship.
          </ScrollReveal>
        </h2>

        {/* Subhead / Tagline */}
        <h3 className="font-gilroy font-extrabold text-[16px] sm:text-[20px] md:text-[22px] tracking-[0.15em] text-white/90 uppercase mt-2">
          <ScrollReveal delay={0.4}>
            what is yours remains yours.
          </ScrollReveal>
        </h3>

        {/* Description body copy */}
        <p className="font-gilroy text-cred-desc text-[15px] sm:text-[17px] leading-relaxed max-w-xl mx-auto mt-2 lowercase">
          <ScrollReveal delay={0.6}>
            CRED ensures your data and transactions are encrypted, private, and secured. no compromises, no shortcuts. just complete peace of mind.
          </ScrollReveal>
        </p>

      </div>
    </section>
  );
}
