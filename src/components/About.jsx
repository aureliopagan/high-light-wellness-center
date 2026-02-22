import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../i18n/translations';

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const features = [
    {
      titleKey: 'about-feature1-title',
      descKey: 'about-feature1-desc',
    },
    {
      titleKey: 'about-feature2-title',
      descKey: 'about-feature2-desc',
    },
    {
      titleKey: 'about-feature3-title',
      descKey: 'about-feature3-desc',
    },
  ];

  return (
    <section id="sobre" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">{t['about-title']}</h2>
            <div className="w-24 h-1 bg-secondary mb-6"></div>
            <p
              className="text-gray-700 text-lg mb-4"
              dangerouslySetInnerHTML={{ __html: t['about-p1'] }}
            />
            <p
              className="text-gray-700 text-lg mb-6"
              dangerouslySetInnerHTML={{ __html: t['about-p2'] }}
            />
            <div className="space-y-4">
              {features.map((feature) => (
                <div key={feature.titleKey} className="flex items-start">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{t[feature.titleKey]}</h4>
                    <p className="text-gray-600">{t[feature.descKey]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg hover-lift">
            <img 
              src="/images/heritage-facilities.jpg" 
              alt="High Light Wellness Center - Instalaciones modernas con diseño de cúpulas geodésicas" 
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;