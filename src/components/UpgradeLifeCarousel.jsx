import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import ScrollReveal from './ScrollReveal';

// Import Logos
import scanPayLogo from '../assets/scan & pay logo.png';
import upiCreditLogo from '../assets/upi payment on credit logo.png';
import tapPayLogo from '../assets/tap your phone logo.png';
import garageLogo from '../assets/cred garage logo.png';

// Import Images
import sendMoneyImg from '../assets/send money to any.png';
import upiCreditImg from '../assets/upi payment on credit.png';
import tapPayImg from '../assets/tap your phone pay.png';
import garageImg from '../assets/imgi_28_garage.png';

export default function UpgradeLifeCarousel() {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const cards = [
    {
      id: 'scan-pay',
      title: 'scan & pay to any UPI',
      logo: scanPayLogo,
      image: sendMoneyImg,
      description: 'pay any merchant, scanner, or UPI ID directly using CRED for instant cashback and premium rewards.',
      bgColor: 'from-fuchsia-950/20 via-pink-900/10 to-transparent',
      borderColor: 'group-hover:border-pink-500/30'
    },
    {
      id: 'upi-credit',
      title: 'UPI payment on credit',
      logo: upiCreditLogo,
      image: upiCreditImg,
      description: 'link your RuPay credit card to UPI and scan away, earning maximum rewards on every single transaction.',
      bgColor: 'from-violet-950/20 via-indigo-900/10 to-transparent',
      borderColor: 'group-hover:border-indigo-500/30'
    },
    {
      id: 'tap-pay',
      title: 'tap your phone pay',
      logo: tapPayLogo,
      image: tapPayImg,
      description: 'tap and pay seamlessly with your credit cards stored securely on your phone. zero contact, maximum speed.',
      bgColor: 'from-teal-950/20 via-emerald-900/10 to-transparent',
      borderColor: 'group-hover:border-emerald-500/30'
    },
    {
      id: 'garage',
      title: 'CRED Garage',
      logo: garageLogo,
      image: garageImg,
      description: 'manage all your cars in one dashboard, pay fastag, check insurance renewals, and monitor vehicle health.',
      bgColor: 'from-orange-950/20 via-amber-900/10 to-transparent',
      borderColor: 'group-hover:border-amber-500/30'
    }
  ];

  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener('scroll', updateScrollButtons);
      window.addEventListener('resize', updateScrollButtons);
      updateScrollButtons();
    }
    return () => {
      if (el) {
        el.removeEventListener('scroll', updateScrollButtons);
      }
      window.removeEventListener('resize', updateScrollButtons);
    };
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative w-full py-20 md:py-28 bg-black text-white px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="flex-1">
            <h2 className="font-denton text-4xl sm:text-5xl md:text-6xl font-normal leading-tight text-white mb-4">
              <ScrollReveal>upgrade your life. bit by bit.</ScrollReveal>
            </h2>
            <p className="font-gilroy text-cred-desc text-[15px] sm:text-[18px] max-w-xl">
              <ScrollReveal delay={0.2}>
                unlocked rewards, smoother bills payment, premium lifestyle, and smart garage management.
              </ScrollReveal>
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`p-4 rounded-full border border-white/10 transition-all duration-300 ${
                canScrollLeft 
                  ? 'bg-neutral-900 text-white cursor-pointer hover:bg-neutral-800 border-white/20' 
                  : 'bg-transparent text-white/20 cursor-not-allowed'
              }`}
              aria-label="Previous Slide"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`p-4 rounded-full border border-white/10 transition-all duration-300 ${
                canScrollRight 
                  ? 'bg-neutral-900 text-white cursor-pointer hover:bg-neutral-800 border-white/20' 
                  : 'bg-transparent text-white/20 cursor-not-allowed'
              }`}
              aria-label="Next Slide"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Slider Viewport */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-4 -mx-6 px-6"
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="w-[290px] sm:w-[360px] md:w-[400px] shrink-0 snap-start snap-always group"
            >
              <div className={`relative h-[550px] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 ${card.borderColor}`}>
                <div
                  className="absolute inset-0 bg-center bg-cover"
                  style={{ backgroundImage: `url(${card.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="relative z-10 flex h-full flex-col justify-between p-8">
                  <div>
                    <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-xl bg-white/10 border border-white/10 p-2.5">
                      <img src={card.logo} alt="" className="w-full h-full object-contain" />
                    </div>
                    <h3 className="font-gilroy text-[20px] sm:text-[24px] font-bold text-white mb-4 uppercase tracking-wider">
                      {card.title}
                    </h3>
                    <p className="font-gilroy text-cred-desc text-[13px] sm:text-[14px] leading-relaxed max-w-[85%]">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
