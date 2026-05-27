import securityBadge from '../assets/footer complete security no astrike .png';
import downloadCred from '../assets/download cred.png';
import newLaunchImg from '../assets/footer right side new launch.png';
import credLogo from '../assets/imgi_13_footer-logo.png';

export default function Footer() {
  const footerLinks = [
    {
      title: 'products',
      links: [
        { label: 'credit card bill payment', href: '#' },
        { label: 'CRED pay', href: '#' },
        { label: 'CRED cash', href: '#' },
        { label: 'CRED garage', href: '#' },
        { label: 'CRED escape', href: '#' },
        { label: 'CRED store', href: '#' }
      ]
    },
    {
      title: 'resources',
      links: [
        { label: 'credit score check', href: '#' },
        { label: 'credit card calculators', href: '#' },
        { label: 'blogs & articles', href: '#' },
        { label: 'financial tools', href: '#' },
        { label: 'CRED guidelines', href: '#' }
      ]
    },
    {
      title: 'company',
      links: [
        { label: 'about us', href: '#' },
        { label: 'careers', href: '#' },
        { label: 'press & media', href: '#' },
        { label: 'contact us', href: '#' },
        { label: 'partner with us', href: '#' }
      ]
    },
    {
      title: 'policy',
      links: [
        { label: 'privacy policy', href: '#' },
        { label: 'terms & conditions', href: '#' },
        { label: 'security standard', href: '#' },
        { label: 'transaction policy', href: '#' },
        { label: 'google API disclosure', href: '#' }
      ]
    }
  ];

  return (
    <footer className="w-full bg-[#030303] text-white pt-24 pb-12 px-6 border-t border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col gap-20">
        
        {/* Top: Brand & Navigation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Brand Info (Left Columns) */}
          <div className="lg:col-span-5 flex flex-col items-start gap-8">
            <a href="#" className="flex items-center h-10 cursor-pointer select-none">
              <img src={credLogo} alt="CRED Logo" className="h-6 sm:h-8 object-contain brightness-200" />
            </a>
            <p className="font-gilroy text-cred-desc text-[14px] leading-relaxed max-w-sm lowercase">
              CRED is a members-only club that rewards individuals for their upright financial behavior. build trust, earn exclusive coins, and simplify your cards management.
            </p>
            
            {/* Download and Security Badges */}
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <a href="#" className="hover:opacity-85 transition-opacity">
                <img src={downloadCred} alt="Download CRED App" className="h-10 object-contain" />
              </a>
              <img src={securityBadge} alt="Complete Security Badge" className="h-12 object-contain filter opacity-80" />
            </div>
          </div>

          {/* Links Grid (Middle Columns) */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            {footerLinks.slice(0, 2).map((col) => (
              <div key={col.title} className="flex flex-col gap-5">
                <h4 className="font-gilroy font-bold text-[11px] uppercase tracking-[0.2em] text-white/40">
                  {col.title}
                </h4>
                <ul className="flex flex-col gap-3.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="font-gilroy text-cred-desc hover:text-white text-[13px] transition-colors duration-200 lowercase"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Links Grid & New Launch (Right Columns) */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            <div className="grid grid-cols-2 gap-8">
              {footerLinks.slice(2, 4).map((col) => (
                <div key={col.title} className="flex flex-col gap-5">
                  <h4 className="font-gilroy font-bold text-[11px] uppercase tracking-[0.2em] text-white/40">
                    {col.title}
                  </h4>
                  <ul className="flex flex-col gap-3.5">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="font-gilroy text-cred-desc hover:text-white text-[13px] transition-colors duration-200 lowercase"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Launch Image */}
            <div className="mt-4 border border-white/5 rounded-xl p-3 bg-[#080808] flex items-center gap-4">
              <img src={newLaunchImg} alt="New Launch Banner" className="w-16 h-16 object-cover rounded-lg" />
              <div className="flex flex-col">
                <span className="font-gilroy font-bold text-[12px] text-white uppercase tracking-wider">CRED Garage 2.0</span>
                <span className="font-gilroy text-cred-desc text-[11px] lowercase">live vehicle diagnostics now ready.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom: Legal & Credits */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left select-none">
          <p className="font-gilroy text-white/30 text-[12px] lowercase">
            &copy; {new Date().getFullYear()} CRED. all rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-gilroy text-white/30 hover:text-white/60 text-[12px] lowercase">privacy policy</a>
            <span className="text-white/10">|</span>
            <a href="#" className="font-gilroy text-white/30 hover:text-white/60 text-[12px] lowercase">terms of service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
