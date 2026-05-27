import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

import sendMoneyImg from '../assets/send money to any.png';
import upiCreditImg from '../assets/upi payment on credit.png';
import tapPayImg from '../assets/tap your phone pay.png';
import garageImg from '../assets/imgi_28_garage.png';

export default function StorySection() {
  return (
    <section className="relative w-full py-24 md:py-36 bg-black text-white px-6 overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-neutral-900 to-transparent opacity-20 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Story Text Block */}
        <div className="max-w-4xl text-center flex flex-col gap-8 mb-32">
          <h4 className="text-[12px] md:text-[14px] font-gilroy font-bold uppercase tracking-[0.3em] text-white/40">
            <ScrollReveal>never settle for less</ScrollReveal>
          </h4>

          {/* Staggered block-level reveal for paragraph with inline styled spans */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-gilroy text-[22px] sm:text-[32px] md:text-[42px] font-medium leading-[1.4] text-cred-desc select-none"
          >
            the story of CRED <span className="text-white font-bold">begins with trust</span>. <span className="text-white font-bold">we believe</span> individuals who've proven their <span className="text-white font-bold">trustworthiness</span> <span className="text-white font-bold">deserve better</span>: better <span className="text-white font-bold">experiences</span>, better <span className="text-white font-bold">rewards</span>, better <span className="text-white font-bold">rules</span>. that's the <span className="text-white font-bold">status quo</span> we're building. <span className="text-white font-bold">make it to the club</span>, and experience the <span className="text-white font-bold">ascension yourself</span>.
          </motion.p>
        </div>

        {/* Mockup Showcase Header */}
        <div className="w-full text-center max-w-3xl mb-16">
          <h2 className="font-denton text-4xl sm:text-5xl md:text-6xl font-normal leading-tight text-white mb-6">
            <ScrollReveal>all that you deserve. and some more.</ScrollReveal>
          </h2>
          <p className="font-gilroy text-cred-desc text-[15px] sm:text-[18px] md:text-[20px] leading-relaxed max-w-xl mx-auto">
            <ScrollReveal delay={0.2}>
              experience the power of CRED paying your bills, managing your credit card statement, and tracking your credit score in one place.
            </ScrollReveal>
          </p>
        </div>

        {/* Overlapping Mockup Stack */}
        <div className="relative w-full max-w-4xl h-[420px] sm:h-[600px] md:h-[750px] flex items-center justify-center mt-8 select-none">
          {/* Card 1: Left Rotated (UPI Credit) */}
          <motion.div
            initial={{ opacity: 0, x: -100, y: 50, rotate: -20 }}
            whileInView={{ opacity: 1, x: -150, y: 20, rotate: -12 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute z-10 w-[180px] sm:w-[280px] md:w-[320px] aspect-[9/19] drop-shadow-2xl brightness-75 hover:brightness-100 transition-all duration-300 hidden sm:block"
          >
            <img src={upiCreditImg} alt="UPI payment on credit" className="w-full h-full object-contain" />
          </motion.div>

          {/* Card 2: Right Rotated (Tap Pay) */}
          <motion.div
            initial={{ opacity: 0, x: 100, y: 50, rotate: 20 }}
            whileInView={{ opacity: 1, x: 150, y: 20, rotate: 12 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute z-10 w-[180px] sm:w-[280px] md:w-[320px] aspect-[9/19] drop-shadow-2xl brightness-75 hover:brightness-100 transition-all duration-300 hidden sm:block"
          >
            <img src={tapPayImg} alt="Tap your phone pay" className="w-full h-full object-contain" />
          </motion.div>

          {/* Card 3: Center Back (Garage) */}
          <motion.div
            initial={{ opacity: 0, y: 150, scale: 0.8 }}
            whileInView={{ opacity: 0.8, y: -40, scale: 0.9 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute z-0 w-[160px] sm:w-[250px] md:w-[300px] aspect-[9/19] drop-shadow-xl"
          >
            <img src={garageImg} alt="CRED Garage" className="w-full h-full object-contain" />
          </motion.div>

          {/* Card 4: Center Front (Send Money - Main display card) */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1.05 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute z-20 w-[200px] sm:w-[290px] md:w-[340px] aspect-[9/19] drop-shadow-[0_35px_60px_rgba(0,0,0,0.8)]"
          >
            <img src={sendMoneyImg} alt="Send money to anyone" className="w-full h-full object-contain" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
