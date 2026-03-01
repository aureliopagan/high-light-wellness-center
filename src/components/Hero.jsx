import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../i18n/translations';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="inicio" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-background.jpg" 
          alt="High Light Wellness Center" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-2xl">
          High Light Healing and Wellness Center
        </h1>
        <p className="text-xl md:text-2xl mb-4 drop-shadow-lg">{t['hero-subtitle']}</p>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto drop-shadow-lg">{t['hero-description']}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#areas" className="bg-secondary text-black px-8 py-3 rounded-full font-semibold hover:opacity-90 transition duration-300 shadow-lg transform hover:scale-105">
            {t['hero-btn1']}
          </a>
          <a href="#contacto" className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300 shadow-lg transform hover:scale-105">
            {t['hero-btn2']}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
