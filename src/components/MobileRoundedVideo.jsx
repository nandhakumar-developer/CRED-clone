import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import mobileVideo from '../assets/mobile rounded animation.mp4';

export default function MobileRoundedVideo() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  // Trigger when 30% of the section is visible
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView && videoRef.current) {
      // Play video once, do not loop
      videoRef.current.play().catch((error) => {
        console.log("Autoplay was prevented by browser security. User interaction required:", error);
      });
    }
  }, [isInView]);
  return (
    <section 
      ref={containerRef}
      className="relative w-full py-16 md:py-20 bg-black flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Video Container - stylized like a floating premium device frame */}
      <motion.div 
        initial={{ opacity: 0, y: 100, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Video Player */}
        <video
          ref={videoRef}
          muted
          playsInline
          className="w-140 h-full object-fill rounded-[28px] sm:rounded-[40px] bg-black"
        >
          <source src={mobileVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </section>
  );
}
