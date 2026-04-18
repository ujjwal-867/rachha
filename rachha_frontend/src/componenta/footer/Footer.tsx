import { useEffect, useRef, useState } from 'react';

const Footer = () => {
  const footerRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!footerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="relative bg-gbrown text-pureWhite">
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-gbrown/100 to-gbrown/0 pointer-events-none" />
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 flex flex-col items-center justify-center gap-4 text-center">
          <div className="flex items-center justify-center gap-4">
            <a href="#home" className="hover:opacity-80 transition-opacity">
              <img
                src="https://res.cloudinary.com/dfr5w7ayr/image/upload/v1776364081/logo_gemeni_golden-removebg-preview_1_blfena.svg"
                alt="Rachha logo"
                className="h-12 w-auto"
              />
            </a>
            <a href="#home" className="hover:opacity-80 transition-opacity">
              <img
                src="https://res.cloudinary.com/dfr5w7ayr/image/upload/v1776364081/gemeni-namelogo-golden-removebg-preview_1_wgryid.svg"
                alt="Rachha wordmark"
                className="h-10 w-auto"
              />
            </a>
          </div>
          <p className="max-w-2xl text-sm uppercase tracking-[0.35em] text-royalGold/70">
            Elegant event curation, premium celebration experiences, and unforgettable moments.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="h-px bg-royalGold/20" />
          <div
            className={`footer-divider absolute left-0 top-0 h-px bg-royalGold ${visible ? 'visible' : ''}`}
          />
        </div>

        <div className="mt-12 grid gap-10 text-center text-sm text-white/80 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-lg font-serif uppercase tracking-[0.3em] text-royalGold">Contact</h3>
            <p><a href="mailto:hello@rachha.com" className="hover:text-royalGold transition-colors">hello@rachha.com</a></p>
            <p><a href="tel:+919876543210" className="hover:text-royalGold transition-colors">+91 98765 43210</a></p>
            <p><a href="https://maps.google.com/?q=New+Delhi,+India" target="_blank" rel="noopener noreferrer" className="hover:text-royalGold transition-colors">New Delhi, India</a></p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-serif uppercase tracking-[0.3em] text-royalGold">Explore</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-royalGold transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-royalGold transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-royalGold transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-serif uppercase tracking-[0.3em] text-royalGold">Follow</h3>
            <p><a href="https://instagram.com/rachha" target="_blank" rel="noopener noreferrer" className="hover:text-royalGold transition-colors">Instagram</a></p>
            <p><a href="https://facebook.com/rachha" target="_blank" rel="noopener noreferrer" className="hover:text-royalGold transition-colors">Facebook</a></p>
            <p><a href="https://pinterest.com/rachha" target="_blank" rel="noopener noreferrer" className="hover:text-royalGold transition-colors">Pinterest</a></p>
          </div>
        </div>

        <div className="mt-12 border-t border-royalGold/20 pt-6 text-center text-sm text-white/70">
          © 2026 Rachha. Crafted for unforgettable celebrations.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
