import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../i18n/translations';

const Location = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{t['location-title']}</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-4"></div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6 text-center">
          <p className="text-gray-800 text-2xl font-bold mb-2">Maleza Alta</p>
          <p className="text-gray-700 text-lg mb-1">{t['location-address']}</p>
          <p className="text-gray-700 text-lg">Aguadilla, Puerto Rico</p>
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.5!2d-67.15!3d18.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDI3JzAwLjAiTiA2N8KwMDknMDAuMCJX!5e0!3m2!1sen!2spr!4v1234567890"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen={true}
            loading="lazy"
            title="High Light Wellness Center Location"
          >
          </iframe>
        </div>

        <div className="text-center mt-6">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Maleza+Alta,+Carretera+110+Km+32.0,+Aguadilla,+Puerto+Rico"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-accent transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            {language === 'es' ? 'Obtener Direcciones' : 'Get Directions'}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Location;