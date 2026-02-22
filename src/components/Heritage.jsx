import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../i18n/translations';

const Heritage = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="herencia" className="py-20 bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t['heritage-title']}</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t['heritage-subtitle']}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">{t['heritage-connection-title']}</h3>
            <p
              className="text-gray-700 mb-4"
              dangerouslySetInnerHTML={{ __html: t['heritage-p1'] }}
            />
            <p className="text-gray-700 mb-4">{t['heritage-p2']}</p>
            <p className="text-gray-700">{t['heritage-p3']}</p>
          </div>

          {/* Image 1: Community/Group Photo (Hero) */}
          <div className="rounded-lg overflow-hidden shadow-lg hover-lift">
            <img 
              src="/images/heritage-hero.jpg" 
              alt="Comunidad reunida en ceremonia cultural - Centro de Estudios Indígenas" 
              className="w-full h-96 object-cover"
            />
          </div>
        </div>

        {/* Three Column Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1: Natural Medicine */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover-lift">
            <img 
              src="/images/heritage-medicine.jpg" 
              alt="Ceremonia con plantas - Medicina natural ancestral" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">{t['heritage-card1-title']}</h4>
              <p className="text-gray-600">{t['heritage-card1-desc']}</p>
            </div>
          </div>

          {/* Card 2: Community Healing */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover-lift">
            <img 
              src="/images/heritage-community.jpg" 
              alt="Procesión ceremonial - Tradición de sanación comunitaria" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">{t['heritage-card2-title']}</h4>
              <p className="text-gray-600">{t['heritage-card2-desc']}</p>
            </div>
          </div>

          {/* Card 3: Ancestral Wisdom */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover-lift">
            <img 
              src="/images/heritage-wisdom.jpg" 
              alt="Detalle ceremonial - Sabiduría ancestral preservada" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">{t['heritage-card3-title']}</h4>
              <p className="text-gray-600">{t['heritage-card3-desc']}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heritage;