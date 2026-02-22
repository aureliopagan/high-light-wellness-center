import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../i18n/translations';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="inicio" className="relative py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-primary"></div>
      
      {/* Concentric Circles Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="circles" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
              <circle cx="75" cy="75" r="10" fill="none" stroke="white" strokeWidth="1.5"/>
              <circle cx="75" cy="75" r="25" fill="none" stroke="white" strokeWidth="1"/>
              <circle cx="75" cy="75" r="40" fill="none" stroke="white" strokeWidth="0.8"/>
              <circle cx="75" cy="75" r="55" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#circles)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          High Light Healing and Wellness Center
        </h1>
        <p className="text-xl md:text-2xl mb-4">{t['hero-subtitle']}</p>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          {t['hero-description']}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#areas"
            className="bg-secondary text-black px-8 py-3 rounded-full font-semibold hover:opacity-90 transition duration-300 shadow-lg"
          >
            {t['hero-btn1']}
          </a>
          <a
            href="#contacto"
            className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300 shadow-lg"
          >
            {t['hero-btn2']}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;