import { useState } from 'react';
import './Galeri.css';

const base = import.meta.env.BASE_URL;

// Galeri Verileri (Klasör yapısı veya API olmadığı için statik örnekler)
const galleryData = {
  2025: [
    {
      id: "2025-bahar",
      title: "Bahar Şenliği",
      cover: "hakkimizda_section.jpeg",
      images: ["hakkimizda_section.jpeg", "takim1.jpeg", "formula_students.jpg"]
    },
    {
      id: "2025-atolye",
      title: "Atölye Çalışmaları",
      cover: "takim1.jpeg",
      images: ["takim1.jpeg", "team_leader.jpg", "atolyemiz.jpg"]
    }
  ],
  2026: [
    {
      id: "2026-lansman",
      title: "2026 Araç Lansmanı (Konsept)",
      cover: "formula_students.jpg",
      images: ["formula_students.jpg", "takim1.jpeg"]
    }
  ]
};

export default function Galeri() {
  const [activeYear, setActiveYear] = useState('2025');
  const [activeAlbum, setActiveAlbum] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openAlbum = (album) => {
    setActiveAlbum(album);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden'; // Arka plan kaymasını engelle
  };

  const closeAlbum = () => {
    setActiveAlbum(null);
    document.body.style.overflow = '';
  };

  const nextImage = (e) => {
    e.stopPropagation(); // Resmin dışına tıklamayı tetiklemesini engelle
    if (activeAlbum) {
      setCurrentImageIndex((prev) => (prev + 1) % activeAlbum.images.length);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (activeAlbum) {
      setCurrentImageIndex((prev) => (prev - 1 + activeAlbum.images.length) % activeAlbum.images.length);
    }
  };

  return (
    <div className="galeri-page">
      {/* ── HERO BÖLÜMÜ ── */}
      <section className="galeri-hero reveal">
        <div className="container">
          <p className="section-label">// ANILARIMIZ</p>
          <h1>Galeri</h1>
          <p className="hero-subtext">Geçmişten günümüze takımımızın en unutulmaz anları, etkinlikleri ve atölye günleri.</p>
        </div>
      </section>

      {/* ── İÇERİK BÖLÜMÜ ── */}
      <section className="galeri-content container">
        {/* Yıl Sekmeleri */}
        <div className="year-tabs reveal">
          <button 
            className={`year-tab ${activeYear === '2025' ? 'active' : ''}`}
            onClick={() => setActiveYear('2025')}
          >
            2025
          </button>
          <button 
            className={`year-tab ${activeYear === '2026' ? 'active' : ''}`}
            onClick={() => setActiveYear('2026')}
          >
            2026
          </button>
        </div>

        {/* Albüm Kartları */}
        <div className="albums-grid">
          {galleryData[activeYear].map((album, idx) => (
            <div 
              key={album.id} 
              className={`album-card reveal reveal-delay-${(idx % 4) + 1}`}
              onClick={() => openAlbum(album)}
            >
              <div className="album-cover">
                <img src={`${base}images/${album.cover}`} alt={album.title} />
                <div className="album-overlay">
                  <h3>{album.title}</h3>
                  <span>{album.images.length} Fotoğraf</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── LIGHTBOX (TAM EKRAN SLIDER) ── */}
      {activeAlbum && (
        <div className="lightbox-overlay" onClick={closeAlbum}>
          <button className="lightbox-close" onClick={closeAlbum}>&#10005;</button>
          
          <button className="lightbox-nav prev" onClick={prevImage}>&#10094;</button>
          
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={`${base}images/${activeAlbum.images[currentImageIndex]}`} 
              alt={`${activeAlbum.title} - ${currentImageIndex + 1}`} 
              className="lightbox-image"
            />
            <div className="lightbox-caption">
              {activeAlbum.title} ({currentImageIndex + 1} / {activeAlbum.images.length})
            </div>
          </div>

          <button className="lightbox-nav next" onClick={nextImage}>&#10095;</button>
        </div>
      )}
    </div>
  );
}
