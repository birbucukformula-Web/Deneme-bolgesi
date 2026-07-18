import './FormulaStudent.css'

const staticStages = [
  { title: 'Mühendislik Tasarımı', en: 'Engineering Design', score: '150', desc: 'Bileşenlerin tasarım süreçleri, sonlu elemanlar analizi (FEA), hesaplamalı akışkanlar dinamiği (CFD) ve veri toplama sistemleri (DAQ) çıktılarının akademik bir savunmasıdır.' },
  { title: 'Maliyet ve Üretim Analizi', en: 'Cost & Manufacturing', score: '100', desc: 'Üretim süreçlerinin optimizasyonu, malzeme yönetimi ve endüstriyel ölçeklenebilirlik üzerine kurulu detaylı bir maliyet raporlamasıdır.' },
  { title: 'İş Planı Sunumu', en: 'Business Plan', score: '75', desc: 'Teknik projenin bir iş modeline dönüştürülerek, pazar analizi ve yatırım geri dönüşü (ROI) projeksiyonları ile jüriye sunulmasıdır.' },
]

const dynamicStages = [
  { title: 'Hızlanma', en: 'Acceleration', score: '75', desc: 'Güç-ağırlık oranı ve çekiş kontrolü (traction control) algoritmalarının 75 metrelik parkur üzerindeki verimliliğinin ölçülmesi.' },
  { title: 'Yanal İvmelenme', en: 'Skid Pad', score: '75', desc: 'Süspansiyon kinematiği ve lastik karakterizasyonunun, dairesel yörüngede (Steady-state cornering) test edilmesi.' },
  { title: 'Otokros', en: 'Autocross', score: '100', desc: 'Aracın dinamik tepkilerinin, manevra kabiliyetinin ve geçici rejim (transient) stabilitesinin teknik bir parkurda zamana karşı validasyonu.' },
  { title: 'Dayanıklılık ve Verimlilik', en: 'Endurance & Efficiency', score: '350', desc: 'Sistem güvenilirliğinin 22 kilometrelik yüksek stres altındaki testi ile birim performans başına düşen enerji tüketiminin rasyonalize edilmesi.' },
]

export default function FormulaStudent() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="page-hero fs-page-hero">
        <div className="container">
          <p className="section-label reveal">// YARIŞMAMIZ</p>
          <div className="red-line reveal" />
          <h1 className="reveal reveal-delay-1">
            FORMULA<br /><span className="text-red">STUDENT</span>
          </h1>
          <p className="page-hero-sub reveal reveal-delay-2" style={{ maxWidth: '600px' }}>
            Dünyanın en prestijli mühendislik yarışmasında üniversitemizi ve ülkemizi temsil ediyoruz.
          </p>
        </div>
      </section>

      {/* NEDİR BU FORMULA STUDENT? (FOTOĞRAF VE YAZI YAN YANA) */}
      <section className="fs-info-section">
        <div className="container">
          <div className="fs-info-split">
            {/* SOL: YAZI */}
            <div className="fs-info-text reveal">
              <h2>Formula Student <span className="text-red">Nedir?</span></h2>
              <h4 className="mt-16">Kavramsal Çerçeve ve Tarihsel Gelişim</h4>
              <p className="text-secondary mt-16" style={{ lineHeight: '1.9' }}>
                Formula Student (FS), 1981 yılında Society of Automotive Engineers (SAE) tarafından temelleri atılan, günümüzde ise mühendislik eğitiminin en üst seviye uygulama sahası olarak kabul edilen uluslararası bir tasarım yarışmasıdır. Dünyada her sene 26 farklı ülkede düzenlenmektedir. Organizasyonun temel paradigması; öğrencilerin kuramsal mühendislik nosyonlarını, gerçek zamanlı bir endüstriyel proje döngüsü içerisinde (tasarım, validasyon, üretim ve işletme) test etmelerine olanak tanımaktır.
              </p>
              <p className="text-secondary mt-16" style={{ lineHeight: '1.9' }}>
                Bu ekosistem, sadece bir otomobil inşası değil; karmaşık sistemlerin entegrasyonu, veri odaklı karar verme mekanizmaları ve proje yönetimi disiplinlerinin birleştiği bütüncül bir akademik meydan okumadır.
              </p>
            </div>
            
            {/* SAĞ: GÖRSEL */}
            <div className="fs-info-img-box reveal reveal-delay-1">
              <img 
                src={`${import.meta.env.BASE_URL}images/formula_students.jpg`} 
                alt="Formula Student Takımı" 
                className="fs-info-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* YARIŞMA ETAPLARI */}
      <section className="fs-stages-section">
        <div className="container">
          <p className="section-label reveal">// DEĞERLENDİRME KRİTERLERİ</p>
          <div className="red-line reveal" />
          <h2 className="mb-48 reveal">Yarışmanın <span className="text-red">Etapları</span></h2>

          {/* STATİK ETAPLAR */}
          <div className="stage-category reveal">
            <h3 className="category-title">Statik Etaplar <span className="text-secondary" style={{fontSize: '18px'}}>(~325 Puan)</span></h3>
            <div class="stages-grid mt-24">
              {staticStages.map((stage, i) => (
                <div key={i} className="stage-card card">
                  <div className="stage-score">{stage.score} <span>PT</span></div>
                  <h4>{stage.title}</h4>
                  <span className="stage-en">{stage.en}</span>
                  <p className="text-secondary mt-16">{stage.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* DİNAMİK ETAPLAR */}
          <div className="stage-category mt-64 reveal">
            <h3 className="category-title">Dinamik Etaplar <span className="text-secondary" style={{fontSize: '18px'}}>(~675 Puan)</span></h3>
            <div class="stages-grid mt-24">
              {dynamicStages.map((stage, i) => (
                <div key={i} className="stage-card card">
                  <div className="stage-score">{stage.score} <span>PT</span></div>
                  <h4>{stage.title}</h4>
                  <span className="stage-en">{stage.en}</span>
                  <p className="text-secondary mt-16">{stage.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DİĞER DETAYLAR (REGÜLASYON & ÇIKTILAR) */}
      <section className="fs-details-section">
        <div className="container">
          <div className="details-grid">
            
            <div className="detail-card card reveal">
              <div className="detail-icon">📖</div>
              <h3>Teknik Regülasyonlar ve Scrutineering Süreci</h3>
              <p className="text-secondary mt-16" style={{ lineHeight: '1.8' }}>
                Tüm araçlar, mühendislik etiği ve operasyonel güvenlik standartlarını belirleyen kapsamlı bir regülasyon setine (Rulebook) tabi tutulmaktadır. Teknik denetim (Scrutineering) süreci; şasi rijitliği, batarya yönetim sistemleri (BMS), fren kapasitesi ve sürücü ergonomisi gibi kritik alanlarda hata payı bırakmayan bir kontrol mekanizmasıdır. Bu süreç, projenin güvenlik mühendisliği standartlarına uygunluğunu tescil eder.
              </p>
            </div>

            <div className="detail-card card reveal reveal-delay-1">
              <div className="detail-icon">🎓</div>
              <h3>Akademik ve Endüstriyel Çıktılar</h3>
              <p className="text-secondary mt-16" style={{ lineHeight: '1.8' }}>
                Formula Student, katılımcılarına ileri düzey üretim teknolojileri, yüksek voltajlı sistemler ve otonom sürüş algoritmaları gibi geleceğin teknolojilerinde doğrudan tecrübe edinme imkanı sunar. Bu proje; mühendislik adaylarının problem çözme yetisini, disiplinlerarası çalışma becerisini ve endüstri 4.0 standartlarına uyumunu pekiştiren bir yüksek lisans niteliğindedir.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}