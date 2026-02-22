import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../i18n/translations';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="gradient-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">High Light Wellness Center</h3>
            <p className="text-gray-200 mb-4">{t['footer-description']}</p>
            <p className="text-gray-200 text-sm">
              Maleza Alta, Carretera 110, Km. 32.0
              <br />
              Aguadilla, Puerto Rico
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">{t['footer-links-title']}</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#inicio"
                  className="text-gray-200 hover:text-secondary transition duration-300"
                >
                  {t['nav-home']}
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="text-gray-200 hover:text-secondary transition duration-300"
                >
                  {t['nav-about']}
                </a>
              </li>
              <li>
                <a
                  href="#herencia"
                  className="text-gray-200 hover:text-secondary transition duration-300"
                >
                  {t['nav-heritage']}
                </a>
              </li>
              <li>
                <a
                  href="#areas"
                  className="text-gray-200 hover:text-secondary transition duration-300"
                >
                  {t['nav-areas']}
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="text-gray-200 hover:text-secondary transition duration-300"
                >
                  {t['nav-services']}
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-gray-200 hover:text-secondary transition duration-300"
                >
                  {t['nav-contact-link']}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">{t['footer-social-title']}</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-secondary hover:text-black transition duration-300"
              >
                <span className="text-xl">f</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-secondary hover:text-black transition duration-300"
              >
                <span className="text-xl">𝕏</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-secondary hover:text-black transition duration-300"
              >
                <span className="text-xl">in</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white border-opacity-20 pt-8 text-center">
          <p className="text-gray-200">{t['footer-copyright']}</p>
          <p className="text-gray-200 mt-2 text-sm">
            Centro de Estudios Indígenas de las Américas, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
