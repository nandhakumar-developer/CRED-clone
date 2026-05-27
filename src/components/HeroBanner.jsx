import { motion } from 'framer-motion';

export default function HeroBanner() {
  return (
    <section className="w-full bg-black text-white px-6 py-10 md:py-14">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-denton text-[38px] sm:text-[48px] md:text-[64px] leading-tight font-semibold uppercase tracking-[-0.03em]"
        >
          all that you deserve.
          <span className="block">and some more.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-gilroy text-cred-desc text-[15px] sm:text-[18px] md:text-[20px] leading-relaxed max-w-2xl mx-auto mt-6"
        >
          if you're a CRED member, you're already a step ahead. every experience you unlock takes you higher up the pedestal.
        </motion.p>
      </div>
    </section>
  );
}
