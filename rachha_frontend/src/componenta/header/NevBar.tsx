import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { EVENTS } from '../../data/eventData';
import logo from '../../assets/logo.svg';

function NavLink({ to, onClick, children }: { to: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block px-4 py-3.5 text-[15px] font-sans font-light tracking-[0.13em] text-white/70 hover:text-royalGold rounded-xl hover:bg-royalGold/10 transition-all duration-200"
    >
      {children}
    </Link>
  );
}

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
        <div className={`relative px-5 md:px-8 lg:px-14 max-w-7xl mx-auto transition-all duration-300 ${
          isScrolled ? 'py-4' : 'py-5'
        }`}>
          <div className={`hidden lg:grid w-full grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto_minmax(0,1fr)_minmax(0,1fr)] items-center justify-items-center transition-all duration-300 ${isScrolled ? 'gap-10' : 'gap-12'}`}>
            <Link
              to="/"
              className={`font-sans font-light tracking-[0.13em] hover:text-royalGold transition-all ${isScrolled ? 'text-charcoal' : 'text-pureWhite'} ${isScrolled ? 'text-[16px]' : 'text-[17px]'}`}
            >
              HOME
            </Link>
            <div className="relative group">
              <button
                onMouseEnter={() => setActiveDropdown(true)}
                onMouseLeave={() => setActiveDropdown(false)}
                className={`flex items-center gap-2 font-sans font-light tracking-[0.13em] hover:text-royalGold transition-all ${isScrolled ? 'text-charcoal' : 'text-pureWhite'} ${isScrolled ? 'text-[16px]' : 'text-[17px]'}`}
              >
                SERVICES
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown ? 'rotate-180' : ''}`} />
              </button>
              <div
                className={`absolute -left-36 top-full mt-4 w-[440px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black/10 border border-roseMist/40 p-4 transition-all duration-300 origin-top ${
                  activeDropdown
                    ? 'opacity-100 visible scale-y-100'
                    : 'opacity-0 invisible scale-y-95'
                }`}
                onMouseEnter={() => setActiveDropdown(true)}
                onMouseLeave={() => setActiveDropdown(false)}
              >
                <div className="absolute top-0 left-6 right-6 h-[3px] bg-gradient-to-r from-royalGold/30 via-royalGold to-royalGold/30 rounded-full" />
                <div className="grid grid-cols-2 gap-1.5 pt-3.5">
                  {EVENTS.map((event) => (
                    <Link
                      key={event.slug}
                      to={`/services/${event.slug}`}
                      className="relative rounded-xl px-3.5 py-2.5 hover:bg-roseMist/60 transition-all duration-200 group/item overflow-hidden"
                    >
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-0 bg-royalGold rounded-full group-hover/item:h-5 transition-all duration-200" />
                      <div className="text-sm font-serif font-semibold text-charcoal/90 group-hover/item:text-royalGold transition-colors pl-1.5">
                        {event.title}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link to="/" className="flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dfr5w7ayr/image/upload/v1776364081/gemeni-namelogo-golden-removebg-preview_1_wgryid.svg"
                alt="Rachha logo"
                className={`transition-all duration-300 ${isScrolled ? 'h-12' : 'h-16'}`}
              />
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
            className={`absolute right-5 top-1/2 -translate-y-1/2 lg:hidden z-20 p-2 rounded-lg transition-colors ${isMobileMenuOpen ? 'hidden' : ''}`}
            aria-label="Toggle menu"
          >
            <Menu className={`w-7 h-7 ${isScrolled ? 'text-charcoal' : 'text-pureWhite'}`} />
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={toggleMobileMenu}></div>
          <div className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-[360px] bg-gbrown overflow-y-auto shadow-2xl shadow-black/50 border-l border-royalGold/20 translate-x-0 transition-all duration-300">
            <div className="flex flex-col min-h-full">
              <div className="flex items-center justify-between px-5 py-5 border-b border-royalGold/10">
                <Link to="/" onClick={toggleMobileMenu} className="flex items-center gap-3">
                  <img
                    src={logo}
                    alt="Rachha"
                    className="h-8 w-8"
                  />
                  <span className="font-serif text-lg text-royalGold tracking-wider">Rachha</span>
                </Link>
                <button onClick={toggleMobileMenu} className="p-1.5 rounded-lg hover:bg-royalGold/10 transition-colors">
                  <X className="w-6 h-6 text-royalGold/70" />
                </button>
              </div>

              <div className="flex-1 px-5 py-6 space-y-1">
                <NavLink to="/" onClick={toggleMobileMenu}>Home</NavLink>

                <div>
                  <button
                    onClick={() => setActiveMobileDropdown((prev) => !prev)}
                    className="group w-full flex items-center justify-between px-4 py-3.5 text-[15px] font-sans font-light tracking-[0.13em] text-white/70 hover:text-royalGold rounded-xl hover:bg-royalGold/10 transition-all duration-200"
                  >
                    Services
                    <ChevronDown className={`w-4 h-4 ml-auto transition-transform duration-300 ${activeMobileDropdown ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${activeMobileDropdown ? 'max-h-[800px] opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
                    <div className="ml-6 mr-2 border-l border-royalGold/20 pl-3 space-y-0.5 py-1">
                      {EVENTS.map((event) => (
                        <Link
                          key={event.slug}
                          to={`/services/${event.slug}`}
                          onClick={toggleMobileMenu}
                          className="block px-4 py-2.5 text-[13px] font-serif font-medium text-white/60 hover:text-royalGold rounded-lg hover:bg-royalGold/10 transition-all duration-200 tracking-wide"
                        >
                          {event.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <NavLink to="/gallery" onClick={toggleMobileMenu}>Gallery</NavLink>
                <NavLink to="/contact" onClick={toggleMobileMenu}>Contact</NavLink>
              </div>

              <div className="px-5 py-6 border-t border-royalGold/10 space-y-4">
                <Link
                  to="/contact"
                  onClick={toggleMobileMenu}
                  className="block w-full text-center px-6 py-3.5 bg-royalGold text-gbrown font-sans font-semibold text-sm tracking-wider uppercase rounded-xl hover:bg-royalGold/90 transition-all duration-300 shadow-lg shadow-royalGold/20"
                >
                  Request a Quote
                </Link>

                <div className="flex items-center justify-center gap-4">
                  <a href="https://wa.me/9335243958" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-royalGold/30 flex items-center justify-center text-royalGold/60 hover:text-royalGold hover:border-royalGold hover:bg-royalGold/10 transition-all duration-200">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/rachha.in?igsh=dGgwbnh6eHZkNWo2&igsi=dGgwbnh6eHZkNWo2" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-royalGold/30 flex items-center justify-center text-royalGold/60 hover:text-royalGold hover:border-royalGold hover:bg-royalGold/10 transition-all duration-200">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                  <a href="https://facebook.com/rachha" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-royalGold/30 flex items-center justify-center text-royalGold/60 hover:text-royalGold hover:border-royalGold hover:bg-royalGold/10 transition-all duration-200">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="https://twitter.com/rachha" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-royalGold/30 flex items-center justify-center text-royalGold/60 hover:text-royalGold hover:border-royalGold hover:bg-royalGold/10 transition-all duration-200">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="mailto:rachha346@gmail.com" className="w-9 h-9 rounded-full border border-royalGold/30 flex items-center justify-center text-royalGold/60 hover:text-royalGold hover:border-royalGold hover:bg-royalGold/10 transition-all duration-200">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                      <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6Z"/><path d="M22 6L12 13L2 6"/>
                    </svg>
                  </a>
                  <a href="tel:+919335243958" className="w-9 h-9 rounded-full border border-royalGold/30 flex items-center justify-center text-royalGold/60 hover:text-royalGold hover:border-royalGold hover:bg-royalGold/10 transition-all duration-200">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
