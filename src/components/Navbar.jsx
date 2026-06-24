import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Anasayfa', href: '/' },
    { name: 'Kurumsal', href: '/#kurumsal' },
    { name: 'Ekibimiz', href: '/ekibimiz' },
    { name: 'Hizmetlerimiz', href: '/#hizmetler' },
    { name: 'Hesaplamalar', href: '/hesaplamalar' },
    { name: 'Makaleler', href: '/makaleler' },
    { name: 'Dilekçeler', href: '/dilekceler' },
  ];

  const location = useLocation();
  const isHome = location.pathname === '/';
  const isScrolledOrNotHome = scrolled || !isHome;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolledOrNotHome ? 'bg-primary/95 shadow-lg backdrop-blur-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center text-gold-light">
        {/* Logo */}
        <div className="flex flex-col">
          <h1 className="text-2xl font-serif font-bold tracking-wider text-gold-light">
            YANAR HUKUK
          </h1>
          <span className="text-secondary text-sm tracking-[0.3em] font-light">DANIŞMANLIK</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-gold-light hover:text-secondary transition-colors uppercase tracking-wide relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a href="/iletisim" className="bg-secondary text-primary px-5 py-2 rounded-sm text-xs font-bold hover:bg-[#cbb66a] transition-colors tracking-wider">
            İLETİŞİM
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-[#0c0e0b] border-t border-secondary/20 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col p-8 space-y-6 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gold-light hover:text-secondary text-lg font-serif tracking-wide transition-colors py-2 border-b border-white/5"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/iletisim"
                onClick={() => setMenuOpen(false)}
                className="bg-secondary text-primary px-6 py-3 rounded-sm text-sm font-bold hover:bg-[#cbb66a] transition-colors tracking-wider mt-4 inline-block mx-auto w-full max-w-xs"
              >
                İLETİŞİM
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;