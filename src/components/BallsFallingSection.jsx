import { motion } from 'framer-motion';
import ballsVideo from '../assets/balls falling vedio.mp4';
import privacyLogo from '../assets/imgi_10_datasafe.png';

export default function BallsFallingSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-between py-24 bg-black text-white px-6 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={ballsVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark blending overlays */}
     

      {/* Content Top Spacer */}
      <div className="h-10 z-20" />

      {/* Center content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-20 text-center max-w-4xl mx-auto flex flex-col items-center justify-center flex-1 py-12"
      >
        <h2 className="font-denton text-4xl sm:text-5xl md:text-8xl font-normal leading-tight tracking-tight text-white mb-6 drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] select-none">
          feel the odds fall<br />in your favor
        </h2>
        <p className="font-gilroy text-cred-desc text-[15px] sm:text-[18px] md:text-[20px] max-w-xl mx-auto leading-relaxed mb-10 drop-shadow">
          spin the wheel, unlock exclusive jackpots, win premium merchandise, and get custom discounts. because a member deserves the finest.
        </p>
        <button className="bg-white text-black px-10 py-4.5 rounded-full font-gilroy font-bold text-[14px] uppercase tracking-widest hover:bg-black hover:text-white border border-white transition-all duration-300 shadow-2xl">
          explore rewards
        </button>
      </motion.div>

      {/* Bottom: Transition Shield/Privacy Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-20 flex flex-col items-center gap-4 mt-8"
      >
       
      </motion.div>
    </section>
  );
}
