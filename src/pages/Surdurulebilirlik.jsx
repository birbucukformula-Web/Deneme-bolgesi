import { useState } from 'react'
import './Surdurulebilirlik.css'

/* 4 Temel Yaklaşım */
const pillars = [
  {
    icon: '📊',
    title: 'CCBOM Analizi',
    desc: 'Her bir parçanın ham maddeden lojistiğe kadar olan karbon salınımını analiz ediyoruz.',
  },
  {
    icon: '♻️',
    title: 'Atıktan Değere',
    desc: 'Atölyemizde alüminyum geri kazanımı yaparak %95 enerji tasarrufu sağlıyoruz.',
  },
  {
    icon: '🧠',
    title: 'Kurumsal Hafıza',
    desc: 'Geliştirdiğimiz dokümantasyon kültürü ile tecrübelerimizi gelecek nesillere aktarıyoruz.',
  },
  {
    icon: '🔋',
    title: 'LCA Odaklılık',
    desc: 'Aracın sadece pist performansına değil, tüm yaşam döngüsü etkisine (LCA) odaklanıyoruz.',
  },
]

const goals = [
  { year: '2024', text: 'Sürdürülebilirlik raporlaması ve CCBOM analizleri başlatıldı.' },
  { year: '2025', text: 'Alüminyum geri dönüşüm ünitesi ve döngüsel ekonomi modeli kuruldu.' },
  { year: '2026', text: 'Tam elektrikli şasi ve minimize edilmiş operasyonel karbon ayak izi.' },
]

/* Üst Kısımdaki 4'lü Fotoğraf Gridi İçin */
const headerPhotos = [
  { src: '/src/assets/images/gallery/formula_student0.jpg', alt: 'Atölye Çalışmaları' },
  { src: '/src/assets/images/gallery/formula_student1.jpg', alt: 'Ekip Toplantısı' },
  { src: '/src/assets/images/gallery/formula_student2.jpg', alt: 'Geri Dönüşüm Süreci' },
  { src: '/src/assets/images/hakkimizda-images/hakkimizda1.jpg', alt: 'Teknik Analiz' },
]

export default function Surdurulebilirlik() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="page-hero surd-hero">
        <div className="container">
          <p className="section-label reveal">// SÜRDÜRÜLEBİLİRLİK</p>
          <div className="red-line reveal" />
          <h1 className="reveal reveal-delay-1">
            GELECEĞE<br /><span className="text-red">SORUMLU</span><br />YAKLAŞIM
          </h1>
          <p className="page-hero-sub reveal reveal-delay-2">
            1.5 Adana Formula Student takımı olarak sürdürülebilirliği sadece bir hedef değil, bir mühendislik disiplini olarak görüyoruz. Elektrikli araç teknolojilerine odaklanırken, çevresel etkiyi minimize etmeyi ve kaynakları en verimli şekilde kullanmayı temel prensibimiz kabul ediyoruz.
          </p>
        </div>
      </section>

      {/* 4'LÜ FOTOĞRAF GRİDİ (YENİ EKLEDİĞİMİZ YER) */}
      <section className="surd-photos-section">
        <div className="container">
          <div className="surd-photo-grid">
            {headerPhotos.map((p, i) => (
              <div key={i} className="surd-photo-item reveal" style={{transitionDelay: `${i * 0.1}s`}}>
                <img src={p.src} alt={p.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEMEL YAKLAŞIMLAR */}
      <section className="pillars-section">
        <div className="container">
          <p className="section-label reveal">// TEMEL YAKLAŞIMLARIMIZ</p>
          <div className="red-line reveal" />
          <div className="pillars-grid">
            {pillars.map((p, i) => (
              <div key={p.title} className={`pillar-card card reveal reveal-delay-${Math.min(i + 1, 4)}`}>
                <span className="pillar-icon">{p.icon}</span>
                <h3>{p.title}</h3>
                <p className="text-secondary mt-16">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAYLI İÇERİK (ESKİ SİTEDEN AKTARILAN) */}
      <section className="surd-detailed-content">
        <div className="container">
          <div className="surd-report-box reveal">
            <div className="report-section">
              <h3 className="text-red">1. Çevresel Sürdürülebilirlik (CCBOM)</h3>
              <p>Formula Student "Cost and Manufacturing" disiplini kapsamında yer alan Carbon Cycle Bill of Materials analizlerini aracımızın tasarım aşamasından itibaren uyguluyoruz. Malzeme seçiminden lojistiğe kadar her adımda karbon salınımını minimize ediyoruz.</p>
            </div>

            <div className="report-section mt-32">
              <h3 className="text-red">2. Atölye Kültürü: Sıfır Atık</h3>
              <p>Atölyemizde uyguladığımız Sıfır Atık prensipleriyle operasyonel karbon ayak izimizi yönetiyoruz. Özellikle alüminyum geri kazanımı sayesinde, birincil üretime göre %95 daha az enerji harcayarak döngüsel ekonomiye katkı sağlıyoruz.</p>
            </div>

            <div className="fun-fact-card mt-32">
              <h4>💡 Biliyor muydunuz?</h4>
              <p>Bir alüminyum içecek kutusunun geri dönüştürülmesiyle tasarruf edilen enerji, bir televizyonu 3 saat çalıştırmaya yeter. Biz her yıl binlerce saatlik 'mühendislik enerjisini' doğaya geri kazandırıyoruz!</p>
            </div>
          </div>
        </div>
      </section>

      {/* YOL HARİTASI */}
      <section className="goals-section">
        <div className="container">
          <p className="section-label reveal">// YOL HARİTAMIZ</p>
          <div className="red-line reveal" />
          <div className="timeline">
            {goals.map((g, i) => (
              <div key={g.year} className={`timeline-item reveal reveal-delay-${Math.min(i + 1, 4)}`}>
                <div className="timeline-year">{g.year}</div>
                <div className="timeline-dot" />
                <div className="timeline-text">{g.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}