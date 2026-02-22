import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../i18n/translations';

const Navigation = () => {
  const { language, changeLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-white py-2">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">{t.topbar}</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold">
                <span className="text-primary">High Light</span>
                <span className="text-black"> Wellness Center</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-black hover:text-primary transition duration-300">
                {t['nav-home']}
              </a>
              <a href="#sobre" className="text-black hover:text-primary transition duration-300">
                {t['nav-about']}
              </a>
              <a href="#herencia" className="text-black hover:text-primary transition duration-300">
                {t['nav-heritage']}
              </a>
              <a href="#areas" className="text-black hover:text-primary transition duration-300">
                {t['nav-areas']}
              </a>
              <a href="#servicios" className="text-black hover:text-primary transition duration-300">
                {t['nav-services']}
              </a>
              <a href="#contacto" className="text-black hover:text-primary transition duration-300">
                {t['nav-contact-link']}
              </a>
            </div>

            {/* Language Selector & Contact Button */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => changeLanguage('es')}
                  className={`px-3 py-1 rounded-full border border-primary transition-all ${
                    language === 'es' 
                      ? 'bg-primary text-white' 
                      : 'text-primary hover:bg-primary hover:text-white'
                  }`}
                >
                  ES
                </button>
                <button
                  onClick={() => changeLanguage('en')}
                  className={`px-3 py-1 rounded-full border border-primary transition-all ${
                    language === 'en' 
                      ? 'bg-primary text-white' 
                      : 'text-primary hover:bg-primary hover:text-white'
                  }`}
                >
                  EN
                </button>
              </div>
              <a
                href="#contacto"
                className="bg-primary text-white px-6 py-2 rounded-full hover:bg-accent transition duration-300"
              >
                {t['nav-contact']}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-black"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#inicio"
                onClick={handleNavClick}
                className="block px-3 py-2 text-black hover:bg-primary hover:text-white transition"
              >
                {t['nav-home']}
              </a>
              <a
                href="#sobre"
                onClick={handleNavClick}
                className="block px-3 py-2 text-black hover:bg-primary hover:text-white transition"
              >
                {t['nav-about']}
              </a>
              <a
                href="#herencia"
                onClick={handleNavClick}
                className="block px-3 py-2 text-black hover:bg-primary hover:text-white transition"
              >
                {t['nav-heritage']}
              </a>
              <a
                href="#areas"
                onClick={handleNavClick}
                className="block px-3 py-2 text-black hover:bg-primary hover:text-white transition"
              >
                {t['nav-areas']}
              </a>
              <a
                href="#servicios"
                onClick={handleNavClick}
                className="block px-3 py-2 text-black hover:bg-primary hover:text-white transition"
              >
                {t['nav-services']}
              </a>
              <a
                href="#contacto"
                onClick={handleNavClick}
                className="block px-3 py-2 text-black hover:bg-primary hover:text-white transition"
              >
                {t['nav-contact-link']}
              </a>
              <div className="flex items-center space-x-2 px-3 py-2">
                <button
                  onClick={() => changeLanguage('es')}
                  className={`px-3 py-1 rounded-full border border-primary ${
                    language === 'es' ? 'bg-primary text-white' : 'text-primary'
                  }`}
                >
                  ES
                </button>
                <button
                  onClick={() => changeLanguage('en')}
                  className={`px-3 py-1 rounded-full border border-primary ${
                    language === 'en' ? 'bg-primary text-white' : 'text-primary'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
