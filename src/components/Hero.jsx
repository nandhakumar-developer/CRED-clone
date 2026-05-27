import { motion } from 'framer-motion';
import heroVideo from '../assets/hero background vedio loop.mp4';
import downArrow from '../assets/imgi_12_down-arrow.png';
import downloadCredImg from '../assets/download cred.png';
import ScrollReveal from './ScrollReveal';

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex flex-col justify-center items-center overflow-hidden bg-black text-center px-6 pt-20">
      {/* Background Video (Fully visible, no filters) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-100"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Hero Content */}
      <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center justify-center h-full pt-16">
        
        {/* Title reveal */}
        <h1 className="font-denton text-white text-5xl sm:text-7xl md:text-[90px] font-normal leading-[1.05] tracking-tight mb-8 select-none">
          <ScrollReveal delay={0.1}>
            crafted for the creditworthy
          </ScrollReveal>
        </h1>

        {/* Subtitle reveal */}
        <p className="font-gilroy text-cred-desc text-[15px] sm:text-[18px] md:text-[20px] font-medium leading-relaxed tracking-wide max-w-xl mb-12">
          <ScrollReveal delay={0.4}>
            CRED is a members-only club that enables the trustworthy to make financial progress
          </ScrollReveal>
        </p>

        {/* Explore guide */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          className="flex flex-col items-center gap-2 cursor-pointer mt-4"
          onClick={() => window.scrollTo({ top: window.innerHeight * 0.9, behavior: 'smooth' })}
        >
          <span className="text-[10px] font-gilroy font-bold tracking-[0.25em] text-white/50 uppercase">Explore</span>
          <img src={downArrow} alt="Down Arrow" className="w-5 h-5 opacity-60" />
        </motion.div>
      </div>

      {/* Bottom Right: small QR box at left + 'download CRED' text to the right */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 right-6 md:right-12 z-25 hidden sm:flex items-center select-none"
      >
        <div className="flex items-center gap-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-3 shadow-2xl">
          {/* Small QR box */}
          <div className="w-16 h-16 md:w-20 md:h-20 bg-[#0a0a0a] rounded-md p-1 flex items-center justify-center border border-white/5">
            <img
              src={downloadCredImg}
              alt="QR"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Text to the right of QR */}
          <div className="text-right flex flex-col items-end">
            <span className="font-gilroy text-[12px] text-white/80 tracking-wider uppercase">download</span>
            <span className="font-denton text-white text-[20px] md:text-[26px] leading-tight">CRED</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

