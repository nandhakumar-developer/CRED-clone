import { motion } from 'framer-motion';
import cardRollVideo from '../assets/credit card rolls.mp4';
import ScrollReveal from './ScrollReveal';

export default function DoMoreSection() {
  return (
    <section className="relative w-full py-24 md:py-36 bg-black text-white px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text & Features */}
        <div className="flex flex-col justify-center items-start text-left">
          <h2 className="font-denton text-4xl sm:text-5xl md:text-6xl font-normal leading-tight text-white mb-8">
            <ScrollReveal>do more with your credit cards</ScrollReveal>
          </h2>
          <p className="font-gilroy text-cred-desc text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed mb-10 max-w-xl">
            <ScrollReveal delay={0.2}>
              CRED helps you pay your bills on time, keep track of your statements, and avoid hidden fees. Get access to premium credit rewards, check details of multiple cards, and optimize your payments in one smooth loop.
            </ScrollReveal>
          </p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white text-black px-10 py-4.5 rounded-full font-gilroy font-bold text-[14px] uppercase tracking-widest hover:bg-black hover:text-white border border-white transition-all duration-300"
          >
            explore features
          </motion.button>
        </div>

        {/* Right: Looping Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotate: 8 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 6 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-white/5 bg-[#090909] shadow-2xl flex items-center justify-center rotate-[-6deg]"
        >
          {/* Ambient glow behind card video */}
          <div className="absolute w-[200px] h-[200px] bg-white/5 rounded-full blur-[80px]" />
          
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-fill z-10"
          >
            <source src={cardRollVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </section>
  );
}
