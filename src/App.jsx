import { useMemo, useState } from 'react';

const langs = [
  { code: 'tr', label: 'TR' },
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'ru', label: 'RU' },
  { code: 'fa', label: 'FA' },
];

const content = {
  tr: {
    eyebrow: "KKTC'nin İlk Sigorta Platformu",
    title: ['Tüm sigortaları', 'tek yerden karşılaştır'],
    subtitle: '34 şirket · Anlık fiyatlar · 3 dakikada en iyi seçim',
    categoryLabel: 'Sigorta türü seçin',
    categories: [
      { key: 'trafik', icon: '🚗', name: 'Trafik', sub: 'Zorunlu', enabled: true },
      { key: 'kasko', icon: '🛡️', name: 'Kasko', sub: 'Araç', enabled: true },
      { key: 'konut', icon: '🏠', name: 'Konut', sub: 'Ev & Daire', enabled: true },
      { key: 'seyahat', icon: '✈️', name: 'Seyahat', sub: 'Seyahat', enabled: false },
      { key: 'saglik', icon: '💊', name: 'Sağlık', sub: 'Bireysel', enabled: false },
      { key: 'telefon', icon: '📱', name: 'Telefon', sub: 'Cihaz', enabled: false },
      { key: 'is', icon: '🏢', name: 'İşyeri', sub: 'Ticari', enabled: false },
      { key: 'tekne', icon: '⛵', name: 'Tekne', sub: 'Deniz', enabled: false },
    ],
  },
  en: {
    eyebrow: "North Cyprus's First Insurance Platform",
    title: ['Compare all insurances', 'in one place'],
    subtitle: '34 companies · Live prices · Best choice in 3 minutes',
    categoryLabel: 'Select insurance type',
    categories: [
      { key: 'traffic', icon: '🚗', name: 'Traffic', sub: 'Mandatory', enabled: true },
      { key: 'casco', icon: '🛡️', name: 'Casco', sub: 'Vehicle', enabled: true },
      { key: 'home', icon: '🏠', name: 'Home', sub: 'Property', enabled: true },
      { key: 'travel', icon: '✈️', name: 'Travel', sub: "Int'l", enabled: false },
      { key: 'health', icon: '💊', name: 'Health', sub: 'Individual', enabled: false },
      { key: 'phone', icon: '📱', name: 'Phone', sub: 'Device', enabled: false },
      { key: 'business', icon: '🏢', name: 'Business', sub: 'Commercial', enabled: false },
      { key: 'marine', icon: '⛵', name: 'Marine', sub: 'Boat', enabled: false },
    ],
  },
  ru: {
    eyebrow: 'Первая страховая платформа Северного Кипра',
    title: ['Сравни все страховки', 'в одном месте'],
    subtitle: '34 компании · Актуальные цены · Лучший выбор за 3 минуты',
    categoryLabel: 'Выберите тип страховки',
    categories: [
      { key: 'traffic', icon: '🚗', name: 'Авто (ТО)', sub: 'Обязательная', enabled: true },
      { key: 'casco', icon: '🛡️', name: 'Каско', sub: 'Транспорт', enabled: true },
      { key: 'home', icon: '🏠', name: 'Жильё', sub: 'Недвижимость', enabled: true },
      { key: 'travel', icon: '✈️', name: 'Туристическая', sub: 'Путешествия', enabled: false },
      { key: 'health', icon: '💊', name: 'Медицинская', sub: 'Здоровье', enabled: false },
      { key: 'phone', icon: '📱', name: 'Телефон', sub: 'Устройства', enabled: false },
      { key: 'business', icon: '🏢', name: 'Бизнес', sub: 'Коммерция', enabled: false },
      { key: 'marine', icon: '⛵', name: 'Морская', sub: 'Яхты', enabled: false },
    ],
  },
  fa: {
    eyebrow: 'اولین پلتفرم بیمه قبرس شمالی',
    title: ['مقایسه همه بیمه‌ها', 'در یک‌جا'],
    subtitle: '۳۴ شرکت · قیمت‌های لحظه‌ای · بهترین انتخاب در ۳ دقیقه',
    categoryLabel: 'نوع بیمه را انتخاب کنید',
    categories: [
      { key: 'traffic', icon: '🚗', name: 'ترافیک', sub: 'اجباری', enabled: true },
      { key: 'casco', icon: '🛡️', name: 'کاسکو', sub: 'خودرو', enabled: true },
      { key: 'home', icon: '🏠', name: 'مسکن', sub: 'خانه و آپارتمان', enabled: true },
      { key: 'travel', icon: '✈️', name: 'سفر', sub: 'داخلی و خارجی', enabled: false },
      { key: 'health', icon: '💊', name: 'سلامت', sub: 'انفرادی', enabled: false },
      { key: 'phone', icon: '📱', name: 'موبایل', sub: 'دستگاه', enabled: false },
      { key: 'business', icon: '🏢', name: 'کسب‌وکار', sub: 'تجاری', enabled: false },
      { key: 'marine', icon: '⛵', name: 'دریایی', sub: 'قایق', enabled: false },
    ],
  },
  fr: {
    eyebrow: "La première plateforme d'assurances de Chypre du Nord",
    title: ['Comparez toutes les assurances', 'au même endroit'],
    subtitle: "34 compagnies · Tarifs en direct · Meilleur choix en 3 minutes",
    categoryLabel: "Sélectionnez le type d'assurance",
    categories: [
      { key: 'traffic', icon: '🚗', name: 'Auto', sub: 'Obligatoire', enabled: true },
      { key: 'casco', icon: '🛡️', name: 'Casco', sub: 'Véhicule', enabled: true },
      { key: 'home', icon: '🏠', name: 'Habitation', sub: 'Propriété', enabled: true },
      { key: 'travel', icon: '✈️', name: 'Voyage', sub: 'International', enabled: false },
      { key: 'health', icon: '💊', name: 'Santé', sub: 'Individuelle', enabled: false },
      { key: 'phone', icon: '📱', name: 'Téléphone', sub: 'Appareil', enabled: false },
      { key: 'business', icon: '🏢', name: 'Entreprise', sub: 'Commercial', enabled: false },
      { key: 'marine', icon: '⛵', name: 'Maritime', sub: 'Bateau', enabled: false },
    ],
  },
};

function App() {
  const [lang, setLang] = useState('tr');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [view, setView] = useState('catalog');
  const [openDetailIndex, setOpenDetailIndex] = useState(null);

  const current = useMemo(() => content[lang], [lang]);
  const isRtl = lang === 'fa';

  const compareRows = [
    { name: 'Güven Sigorta', grade: 'a', score: '9.6', tags: ['Fast Claims', '450+ Garages', '24/7 Assist'], top: true },
    { name: 'KKTC Sigorta', grade: 'b', score: '8.4', tags: ['Online Policy', '280+ Garages'], top: false },
    { name: 'Akdeniz Sigorta', grade: 'c', score: '7.8', tags: ['Wide Coverage', '200+ Garages'], top: false },
  ];

  const onSelectCategory = (category) => {
    if (!category.enabled) return;
    setSelectedCategory(category.key);
    setView('form');
  };

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'}>
      <h2 className="sr-only">SigortaKKTC — Insurance Comparison</h2>

      <nav>
        <a className="logo" href="#" onClick={(e) => e.preventDefault()}>
          <div className="logo-mark">🛡️</div>
          <span className="logo-name">Sigorta<b>KKTC</b></span>
        </a>
        <div className="lang-row">
          {langs.map((item) => (
            <button key={item.code} className={`lb ${lang === item.code ? 'on' : ''}`} onClick={() => { setLang(item.code); setView('catalog'); setSelectedCategory(''); }}>
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      <section className="hero">
        <div className="hero-eyebrow"><div className="pulse" />{current.eyebrow}</div>
        <h1>{current.title[0]}<br /><i>{current.title[1]}</i></h1>
        <p>{current.subtitle}</p>
      </section>

      <section className="cat-section">
        <div className="cat-label">{current.categoryLabel}</div>
        <div className="cat-grid">
          {current.categories.map((cat) => (
            <button key={cat.key} className={`cat-card ${selectedCategory === cat.key ? 'sel' : ''} ${!cat.enabled ? 'dim' : ''}`} onClick={() => onSelectCategory(cat)}>
              {!cat.enabled && <span className="soon-pill">Soon</span>}
              <div className="cat-icon-wrap">{cat.icon}</div>
              <div className="cat-name">{cat.name}</div>
              <div className="cat-sub">{cat.sub}</div>
            </button>
          ))}
        </div>
      </section>

      {view === 'form' && (
        <section className="form-panel">
          <div className="panel">
            <div className="panel-head"><div><div className="panel-title">🚗 Insurance Form</div><div className="panel-sub">Simple prototype form section</div></div></div>
            <div className="panel-body">
              <div className="frow c2">
                <div className="fg"><label className="flabel">Name</label><input className="finput" defaultValue="REZA" /></div>
                <div className="fg"><label className="flabel">Phone</label><input className="finput" defaultValue="+90 533 862 2765" /></div>
              </div>
              <div className="frow c2">
                <div className="fg"><label className="flabel">Vehicle</label><input className="finput" defaultValue="Mercedes CLS" /></div>
                <div className="fg"><label className="flabel">Year</label><input className="finput" defaultValue="2015" /></div>
              </div>
            </div>
            <div className="panel-foot">
              <button className="btn-sec" onClick={() => setView('catalog')}>Back</button>
              <button className="btn-main" onClick={() => setView('compare')}>Compare</button>
            </div>
          </div>
        </section>
      )}

      {view === 'compare' && (
        <section className="compare-list">
          {compareRows.map((row, index) => (
            <article key={row.name} className={`ins-row grade-${row.grade} ${row.top ? 'top-pick' : ''}`} onClick={() => setOpenDetailIndex(openDetailIndex === index ? null : index)}>
              <div className={`ins-logo logo-${row.grade}`}>{row.name.split(' ')[0].toUpperCase()}</div>
              <div className="ins-info">
                <div className="ins-name">{row.name}</div>
                <div className="tag-row">{row.tags.map((tag) => <span key={tag} className="tag tag-gray">{tag}</span>)}</div>
              </div>
              <div className="ins-score"><div className={`score-ring ring-${row.grade}`}><span className="score-num">{row.score}</span></div></div>
              <div className="ins-price"><div className="price-num">9.622 ₺</div><div className="price-unit">/ year</div></div>
              <button className="btn-pick" onClick={(e) => e.stopPropagation()}>Select</button>
              <div className={`detail-row ${openDetailIndex === index ? 'open' : ''}`}>
                <div className="detail-item"><div className="detail-key">Claim Speed</div><div className="detail-val">3-5 business days</div></div>
                <div className="detail-item"><div className="detail-key">Garage Network</div><div className="detail-val">200+ garages</div></div>
                <div className="detail-item"><div className="detail-key">Policy Activation</div><div className="detail-val">Instant</div></div>
              </div>
            </article>
          ))}
        </section>
      )}
    </div>
  );
}

export default App;
