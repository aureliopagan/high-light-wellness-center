import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../i18n/translations';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">High Light Wellness Center</h3>
            <p className="text-gray-400">{t['footer-description']}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t['footer-links-title']}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-secondary transition duration-300">
                  {t['nav-home']}
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-gray-400 hover:text-secondary transition duration-300">
                  {t['nav-about']}
                </a>
              </li>
              <li>
                <a href="#herencia" className="text-gray-400 hover:text-secondary transition duration-300">
                  {t['nav-heritage']}
                </a>
              </li>
              <li>
                <a href="#areas" className="text-gray-400 hover:text-secondary transition duration-300">
                  {t['nav-areas']}
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-secondary transition duration-300">
                  {t['nav-services']}
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-secondary transition duration-300">
                  {t['nav-contact-link']}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>{t['footer-copyright']}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
