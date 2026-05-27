import { motion } from 'framer-motion';
import starRatingImg from '../assets/star rating.png';
import ScrollReveal from './ScrollReveal';

export default function RatingsSection() {
  return (
    <section className="relative w-full py-20 md:py-28 bg-[#0a0a0a] text-white px-6 border-y border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left: Heading */}
        <div className="text-center md:text-left md:max-w-md">
          <h2 className="font-denton text-4xl sm:text-5xl font-normal leading-tight text-white mb-4">
            <ScrollReveal>the proof writes itself</ScrollReveal>
          </h2>
          <p className="font-gilroy text-cred-desc text-[15px] sm:text-[16px] leading-relaxed">
            <ScrollReveal delay={0.2}>
              millions of members love managing their credits and statements with CRED.
            </ScrollReveal>
          </p>
        </div>

        {/* Right: Ratings Metrics */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-12 sm:gap-20"
        >
          {/* App Store Rating */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2">
            <span className="text-[12px] font-gilroy font-bold uppercase tracking-widest text-white/50">
              app store rating
            </span>
            <div className="flex items-center gap-3">
              <span className="text-5xl font-gilroy font-black tracking-tight text-white">4.8</span>
              <span className="text-xl font-gilroy font-medium text-white/40">/5</span>
            </div>
            <img src={starRatingImg} alt="4.8 Stars App Store" className="h-4 object-contain brightness-95 mt-1" />
          </div>

          {/* Play Store Rating */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2">
            <span className="text-[12px] font-gilroy font-bold uppercase tracking-widest text-white/50">
              play store rating
            </span>
            <div className="flex items-center gap-3">
              <span className="text-5xl font-gilroy font-black tracking-tight text-white">4.8</span>
              <span className="text-xl font-gilroy font-medium text-white/40">/5</span>
            </div>
            <img src={starRatingImg} alt="4.8 Stars Play Store" className="h-4 object-contain brightness-95 mt-1" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
