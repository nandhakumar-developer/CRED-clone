import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiPlus, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import credLogo from '../assets/imgi_13_footer-logo.png';

// Import assets for the dropdown grid
import indusindImg from '../assets/footer right side new launch.png';
import moneyImg from '../assets/send money to any.png';
import garageImg from '../assets/imgi_28_garage.png';
import payAnyoneImg from '../assets/tap your phone pay.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('whats-new'); // 'whats-new', 'payments', 'upgrades'

  // Toggle collapsible categories in dropdown
  const toggleTab = (tab) => {
    setActiveTab(activeTab === tab ? '' : tab);
  };

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-50 bg-transparent px-6 py-6 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-start justify-between">
          
          {/* Logo on the Left - imgi_13_footer-logo.png */}
          <a href="#" className="flex items-center h-20 cursor-pointer select-none">
            <img src={credLogo} alt="CRED Logo" className="h-12 sm:h-16 md:h-20 object-contain brightness-200" />
          </a>

          {/* Right Boxed Buttons */}
          <div className="flex items-center gap-0">
            {/* Box 1: RuPay Credit Card Text Link */}
            <div className="border border-white/10 border-r-0 h-14 px-6 flex items-center bg-black/40 backdrop-blur-md cursor-pointer hover:bg-white/5 transition-colors select-none">
              <span className="font-gilroy font-bold text-[9px] sm:text-[11px] text-white/80 tracking-[0.18em] uppercase text-center leading-tight">
                CRED INDUSIND BANK<br />RUPAY CREDIT CARD
              </span>
            </div>

            {/* Box 2: Hamburger Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="border border-white/10 w-14 h-14 flex items-center justify-center bg-black/40 backdrop-blur-md cursor-pointer hover:bg-white/5 transition-colors text-white focus:outline-none"
              aria-label="Open Menu"
            >
              <HiMenuAlt3 className="w-6 h-6" />
            </button>
          </div>

        </div>
      </nav>

      {/* Fullscreen Overlay Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black overflow-y-auto no-scrollbar px-6 py-6"
          >
            <div className="max-w-7xl mx-auto flex flex-col gap-10">
              
              {/* Header inside overlay */}
              <div className="flex items-center justify-between">
                
                {/* Left Boxed brand search/logo */}
                <div className="border border-white/10 h-14 px-6 flex items-center justify-between bg-black flex-1 max-w-[400px]">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 flex items-center justify-center border border-white rounded-md p-0.5">
                      <svg viewBox="0 0 24 24" className="w-full h-full text-white fill-current">
                        <path d="M12 2L2 7l10 5 10-5-10-5zm0 10.5L3.5 8v6.5l8.5 4.5 8.5-4.5V8L12 12.5z" />
                      </svg>
                    </div>
                    <span className="font-gilroy font-black text-[12px] text-white tracking-[0.2em] uppercase">CRED</span>
                  </div>
                  <FiPlus className="w-5 h-5 text-white/50 cursor-pointer hover:text-white" />
                </div>

                {/* Right Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="border border-white/10 border-l-0 w-14 h-14 flex items-center justify-center bg-black text-white hover:bg-white/5 transition-colors focus:outline-none ml-auto"
                  aria-label="Close Menu"
                >
                  <HiX className="w-6 h-6" />
                </button>
              </div>

              {/* Collapsible Tabs Area */}
              <div className="flex flex-col gap-6 mt-6">
                
                {/* 1. WHAT'S NEW SECTION */}
                <div className="border-b border-white/5 pb-6">
                  <button
                    onClick={() => toggleTab('whats-new')}
                    className="w-full flex items-center justify-between py-4 text-left focus:outline-none"
                  >
                    <span className="font-gilroy font-black text-[14px] sm:text-[16px] text-white tracking-[0.25em] uppercase">
                      what's new
                    </span>
                    {activeTab === 'whats-new' ? (
                      <FiChevronUp className="w-5 h-5 text-white" />
                    ) : (
                      <FiChevronDown className="w-5 h-5 text-white" />
                    )}
                  </button>

                  <AnimatePresence>
                    {activeTab === 'whats-new' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mt-6"
                      >
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                          
                          {/* Card 1: IndusInd Card */}
                          <div className="flex flex-col items-center text-center gap-4 group cursor-pointer">
                            <div className="relative w-full aspect-square rounded-2xl border border-white/5 bg-[#090909] p-4 flex items-center justify-center overflow-hidden">
                              <span className="absolute top-2 left-2 bg-white/10 text-white font-gilroy font-bold text-[7px] tracking-wider uppercase px-2 py-0.5 rounded-full z-10 border border-white/10">
                                new launch
                              </span>
                              <img
                                src={indusindImg}
                                alt="CRED IndusInd RuPay Card"
                                className="w-[85%] h-[85%] object-contain object-bottom transform group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div className="flex flex-col items-center">
                              <span className="font-gilroy font-extrabold text-[11px] text-white tracking-widest uppercase leading-tight">
                                cred indusind rupay
                              </span>
                              <span className="font-gilroy font-bold text-[11px] text-white tracking-widest uppercase leading-tight">
                                credit card
                              </span>
                            </div>
                          </div>

                          {/* Card 2: Money */}
                          <div className="flex flex-col items-center text-center gap-4 group cursor-pointer">
                            <div className="w-full aspect-square rounded-2xl border border-white/5 bg-[#090909] p-4 flex items-center justify-center overflow-hidden">
                              <img
                                src={moneyImg}
                                alt="Money"
                                className="w-[75%] h-[75%] object-contain object-bottom transform group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div className="flex flex-col items-center">
                              <span className="font-gilroy font-extrabold text-[11px] text-white tracking-widest uppercase">
                                money
                              </span>
                              <span className="font-gilroy text-cred-desc text-[9px] lowercase max-w-[120px] leading-tight mt-1 hidden md:block">
                                track, analyze, and reflect on financial behavior
                              </span>
                            </div>
                          </div>

                          {/* Card 3: Garage */}
                          <div className="flex flex-col items-center text-center gap-4 group cursor-pointer">
                            <div className="w-full aspect-square rounded-2xl border border-white/5 bg-[#090909] p-4 flex items-center justify-center overflow-hidden">
                              <img
                                src={garageImg}
                                alt="Garage"
                                className="w-[80%] h-[80%] object-contain object-bottom transform group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div className="flex flex-col items-center">
                              <span className="font-gilroy font-extrabold text-[11px] text-white tracking-widest uppercase">
                                garage
                              </span>
                              <span className="font-gilroy text-cred-desc text-[9px] lowercase max-w-[120px] leading-tight mt-1 hidden md:block">
                                manage, maintain, and obsess over cars
                              </span>
                            </div>
                          </div>

                          {/* Card 4: Pay Anyone */}
                          <div className="flex flex-col items-center text-center gap-4 group cursor-pointer">
                            <div className="w-full aspect-square rounded-2xl border border-white/5 bg-[#090909] p-4 flex items-center justify-center overflow-hidden">
                              <img
                                src={payAnyoneImg}
                                alt="Pay Anyone"
                                className="w-[75%] h-[75%] object-contain object-bottom transform group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div className="flex flex-col items-center">
                              <span className="font-gilroy font-extrabold text-[11px] text-white tracking-widest uppercase">
                                pay anyone
                              </span>
                              <span className="font-gilroy text-cred-desc text-[9px] lowercase max-w-[120px] leading-tight mt-1 hidden md:block">
                                pay anyone no matter what UPI app they're on
                              </span>
                            </div>
                          </div>

                          {/* Card 5: Work for CRED */}
                          <div className="flex flex-col items-center text-center gap-4 group cursor-pointer">
                            <div className="w-full aspect-square rounded-2xl border border-white/5 bg-[#090909] p-6 flex flex-col justify-center items-center overflow-hidden relative">
                              {/* Vector wireframe hand geometry mockup */}
                              <svg viewBox="0 0 24 24" className="w-16 h-16 text-white/20 fill-none stroke-current stroke-1 transform group-hover:scale-105 transition-transform duration-300">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                              </svg>
                            </div>
                            <div className="flex flex-col items-center">
                              <span className="font-gilroy font-extrabold text-[11px] text-white tracking-widest uppercase">
                                work for cred
                              </span>
                              <span className="font-gilroy text-cred-desc text-[9px] lowercase max-w-[120px] leading-tight mt-1 hidden md:block">
                                apply to build the most trustworthy community
                              </span>
                            </div>
                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* 2. PAYMENTS SECTION */}
                <div className="border-b border-white/5 pb-6">
                  <button
                    onClick={() => toggleTab('payments')}
                    className="w-full flex items-center justify-between py-4 text-left focus:outline-none"
                  >
                    <span className="font-gilroy font-black text-[14px] sm:text-[16px] text-white tracking-[0.25em] uppercase">
                      payments
                    </span>
                    {activeTab === 'payments' ? (
                      <FiChevronUp className="w-5 h-5 text-white" />
                    ) : (
                      <FiChevronDown className="w-5 h-5 text-white" />
                    )}
                  </button>
                  <AnimatePresence>
                    {activeTab === 'payments' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden mt-4 text-cred-desc text-sm px-2 font-gilroy lowercase flex flex-col gap-3"
                      >
                        <a href="#" className="hover:text-white transition-colors">credit card bills</a>
                        <a href="#" className="hover:text-white transition-colors">house rent pay</a>
                        <a href="#" className="hover:text-white transition-colors">education fees</a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* 3. UPGRADES SECTION */}
                <div className="border-b border-white/5 pb-6">
                  <button
                    onClick={() => toggleTab('upgrades')}
                    className="w-full flex items-center justify-between py-4 text-left focus:outline-none"
                  >
                    <span className="font-gilroy font-black text-[14px] sm:text-[16px] text-white tracking-[0.25em] uppercase">
                      upgrades
                    </span>
                    {activeTab === 'upgrades' ? (
                      <FiChevronUp className="w-5 h-5 text-white" />
                    ) : (
                      <FiChevronDown className="w-5 h-5 text-white" />
                    )}
                  </button>
                  <AnimatePresence>
                    {activeTab === 'upgrades' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden mt-4 text-cred-desc text-sm px-2 font-gilroy lowercase flex flex-col gap-3"
                      >
                        <a href="#" className="hover:text-white transition-colors">CRED cash limits</a>
                        <a href="#" className="hover:text-white transition-colors">travel privilege cards</a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
