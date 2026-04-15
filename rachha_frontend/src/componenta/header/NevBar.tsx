import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    setActiveMobileDropdown(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-pureWhite/55 backdrop-blur-xl shadow-lg shadow-black/10'
            : ''
        }`}
      >
        <div className={`relative px-5 md:px-8 xl:px-14 max-w-7xl mx-auto transition-all duration-300 ${
          isScrolled ? 'py-4' : 'py-5'
        }`}>
          <div className={`hidden xl:grid w-full grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto_minmax(0,1fr)_minmax(0,1fr)] items-center justify-items-center transition-all duration-300 ${isScrolled ? 'gap-10' : 'gap-12'}`}>
            <Link
              to="/"
              className={`font-sans font-light tracking-[0.13em] hover:text-royalGold transition-all ${isScrolled ? 'text-charcoal' : 'text-pureWhite'} ${isScrolled ? 'text-[16px]' : 'text-[17px]'}`}
            >
              HOME
            </Link>
            <div className="relative">
              <button
                onMouseEnter={() => setActiveDropdown(true)}
                onMouseLeave={() => setActiveDropdown(false)}
                className={`flex items-center gap-2 font-sans font-light tracking-[0.13em] hover:text-royalGold transition-all ${isScrolled ? 'text-charcoal' : 'text-pureWhite'} ${isScrolled ? 'text-[16px]' : 'text-[17px]'}`}
              >
                SERVICES
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown && (
                <div className="absolute left-0 top-full mt-3 w-[280px] bg-pureWhite rounded-[24px] shadow-2xl border border-roseMist p-4">
                  <Link
                    to="/services"
                    className="block rounded-2xl border border-roseMist px-4 py-3 hover:bg-roseMist transition"
                  >
                    <div className="text-sm font-semibold text-charcoal">Birthday Event</div>
                    <p className="text-xs text-gray-500 mt-1">Premium celebration planning.</p>
                  </Link>
                  <Link
                    to="/services"
                    className="block rounded-2xl border border-roseMist px-4 py-3 mt-2 hover:bg-roseMist transition"
                  >
                    <div className="text-sm font-semibold text-charcoal">Wedding Event</div>
                    <p className="text-xs text-gray-500 mt-1">Elegant ceremonies with seamless support.</p>
                  </Link>
                  <Link
                    to="/services"
                    className="block rounded-2xl border border-roseMist px-4 py-3 mt-2 hover:bg-roseMist transition"
                  >
                    <div className="text-sm font-semibold text-charcoal">Different Events</div>
                    <p className="text-xs text-gray-500 mt-1">Custom experiences for every occasion.</p>
                  </Link>
                </div>
              )}
            </div>
            <Link to="/" className="flex items-center justify-center">
              <span className={`font-serif font-bold tracking-[0.2em] transition-all duration-300 ${
                isScrolled ? 'text-[2.5rem] text-deepGold' : 'text-[3rem] text-pureWhite'
              }`}
              >
                Rachha
              </span>
            </Link>
            <Link
              to="/gallery"
              className={`font-sans font-light tracking-[0.13em] hover:text-royalGold transition-all ${isScrolled ? 'text-charcoal' : 'text-pureWhite'} ${isScrolled ? 'text-[16px]' : 'text-[17px]'}`}
            >
              GALLERY
            </Link>
            <Link
              to="/contact"
              className={`font-sans font-light tracking-[0.13em] hover:text-royalGold transition-all ${isScrolled ? 'text-charcoal' : 'text-pureWhite'} ${isScrolled ? 'text-[16px]' : 'text-[17px]'}`}
            >
              CONTACT
            </Link>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="absolute right-5 top-1/2 -translate-y-1/2 xl:hidden z-20 p-2 rounded-lg hover:bg-roseMist/60 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7 text-charcoal" /> : <Menu className="w-7 h-7 text-charcoal" />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 xl:hidden">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={toggleMobileMenu}></div>
          <div className="fixed top-[76px] left-0 right-0 bottom-0 bg-pureWhite overflow-y-auto">
            <div className="px-5 py-6 space-y-3">
              <Link
                to="/"
                onClick={toggleMobileMenu}
                className="block px-4 py-3 text-[15px] font-sans font-light tracking-[0.13em] text-charcoal hover:bg-roseMist rounded-xl transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={toggleMobileMenu}
                className="block px-4 py-3 text-[15px] font-sans font-light tracking-[0.13em] text-charcoal hover:bg-roseMist rounded-xl transition-colors"
              >
                About
              </Link>
              <div>
                <button
                  onClick={() => setActiveMobileDropdown((prev) => !prev)}
                  className="w-full flex items-center justify-between px-4 py-3 text-[15px] font-sans font-light tracking-[0.13em] text-charcoal hover:bg-roseMist rounded-xl transition-colors"
                >
                  Services
                  <ChevronDown className={`w-5 h-5 transition-transform ${activeMobileDropdown ? 'rotate-180' : ''}`} />
                </button>
                {activeMobileDropdown && (
                  <div className="mt-2 ml-4 space-y-2">
                    <Link
                      to="/services"
                      onClick={toggleMobileMenu}
                      className="block px-4 py-3 text-[14px] font-sans text-charcoal rounded-lg hover:bg-roseMist transition-colors"
                    >
                      Birthday Event
                    </Link>
                    <Link
                      to="/services"
                      onClick={toggleMobileMenu}
                      className="block px-4 py-3 text-[14px] font-sans text-charcoal rounded-lg hover:bg-roseMist transition-colors"
                    >
                      Wedding Event
                    </Link>
                    <Link
                      to="/services"
                      onClick={toggleMobileMenu}
                      className="block px-4 py-3 text-[14px] font-sans text-charcoal rounded-lg hover:bg-roseMist transition-colors"
                    >
                      Different Events
                    </Link>
                  </div>
                )}
              </div>
              <Link
                to="/gallery"
                onClick={toggleMobileMenu}
                className="block px-4 py-3 text-[15px] font-sans font-light tracking-[0.13em] text-charcoal hover:bg-roseMist rounded-xl transition-colors"
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                onClick={toggleMobileMenu}
                className="block px-4 py-3 text-[15px] font-sans font-light tracking-[0.13em] text-charcoal hover:bg-roseMist rounded-xl transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
