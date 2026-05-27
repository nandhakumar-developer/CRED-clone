import { motion } from 'framer-motion';
import desktopDoorway from '../assets/not everyone get it destop image.webp';
import mobileDoorway from '../assets/not every one get it mobile view.png';
import ScrollReveal from './ScrollReveal';

export default function NotEveryoneGetsIt() {
  return (
    <section className="relative w-full py-24 md:py-36 bg-black text-white px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Doorway visual as background image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative w-full rounded-2xl overflow-hidden bg-center bg-fit border border-white/5 shadow-2xl aspect-[4/5] md:aspect-[3/4]"
          style={{ backgroundImage: `url(${desktopDoorway})` }}
        />

        {/* Right Side: Copywriting */}
        <div className="flex flex-col items-start text-left md:pl-8">
          <h2 className="font-denton text-4xl sm:text-5xl md:text-7xl font-normal leading-tight text-white mb-6 uppercase tracking-wide select-none">
            <ScrollReveal>not everyone gets it</ScrollReveal>
          </h2>
          <p className="font-gilroy text-cred-desc text-[15px] sm:text-[18px] md:text-[20px] leading-relaxed mb-8 max-w-lg lowercase">
            <ScrollReveal delay={0.2}>
              CRED is a members-only club. it requires a credit score of 750 or above to apply. if you qualify, you get in. if you don't, you can join the waitlist and optimize your credit behavior to upgrade.
            </ScrollReveal>
          </p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white text-black px-10 py-4.5 rounded-full font-gilroy font-bold text-[14px] uppercase tracking-widest hover:bg-black hover:text-white border border-white transition-all duration-300"
          >
            check eligibility
          </motion.button>
        </div>
      </div>
    </section>
  );
}
