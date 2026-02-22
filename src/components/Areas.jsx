import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../i18n/translations';

const Areas = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const areas = [
    {
      titleKey: 'area1-title',
      items: ['area1-item1', 'area1-item2', 'area1-item3', 'area1-item4'],
    },
    {
      titleKey: 'area2-title',
      items: ['area2-item1', 'area2-item2', 'area2-item3', 'area2-item4'],
    },
    {
      titleKey: 'area3-title',
      items: ['area3-item1', 'area3-item2', 'area3-item3', 'area3-item4'],
    },
    {
      titleKey: 'area4-title',
      items: ['area4-item1', 'area4-item2', 'area4-item3', 'area4-item4'],
    },
    {
      titleKey: 'area5-title',
      items: ['area5-item1', 'area5-item2', 'area5-item3', 'area5-item4'],
    },
    {
      titleKey: 'area6-title',
      items: ['area6-item1', 'area6-item2', 'area6-item3', 'area6-item4'],
    },
  ];

  return (
    <section id="areas" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t['areas-title']}</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t['areas-subtitle']}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area) => (
            <div key={area.titleKey} className="bg-white p-6 rounded-lg shadow hover-lift">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-secondary rounded-full mr-3"></div>
                <h3 className="text-xl font-bold">{t[area.titleKey]}</h3>
              </div>
              <ul className="text-gray-600 space-y-2">
                {area.items.map((itemKey) => (
                  <li key={itemKey}>{t[itemKey]}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Areas;
