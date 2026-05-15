import { useRef, useState, useEffect, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, OrbitControls, Environment, ContactShadows, Bounds, Html } from "@react-three/drei";
import * as THREE from "three";

import { BoxLogger } from "./BoxLogger";

// ─── CONFIG ───────────────────────────────────────────────────────────────────

const COLORS = [
  { id: "white",  label: "Beyaz",  hex: "#F0F0F0" },
  { id: "black",  label: "Siyah",  hex: "#111111" },
  { id: "red",    label: "Kırmızı", hex: "#CC1020" },
];

const WING_OPTIONS = [
  {
    id: "full",
    label: "Full Downforce",
    desc: "Maksimum yükleme — yavaş pistler için",
    meshes: ["RW upper flap", "RW Secondary Flap", "RW Bottom flap", "RW Tertiary Flap", "RW Main Flap", "RW Endplates"],
    show: ["RW upper flap","RW Secondary Flap","RW Bottom flap","RW Tertiary Flap","RW Main Flap","RW Endplates"],
  },
  {
    id: "medium",
    label: "Medium",
    desc: "Dengeli yükleme — karma pistler için",
    meshes: ["RW upper flap", "RW Secondary Flap", "RW Bottom flap", "RW Tertiary Flap", "RW Main Flap", "RW Endplates"],
    show: ["RW Main Flap", "RW Endplates", "RW Bottom flap"],
  },
  {
    id: "low",
    label: "Low Drag",
    desc: "Minimum sürükleme — hız pistleri için",
    meshes: ["RW upper flap", "RW Secondary Flap", "RW Bottom flap", "RW Tertiary Flap", "RW Main Flap", "RW Endplates"],
    show: ["RW Main Flap", "RW Endplates"],
  },
];

const JANT_OPTIONS = [
  { id: "braid", label: "Braid", desc: "Karbon fiber dokuma jant", color: "#1a1a2e" },
  { id: "oz",    label: "OZ Racing", desc: "Alüminyum döküm jant",  color: "#c0c0c0" },
];

const SEAT_OPTIONS = [
  { id: "carbon",    label: "Karbon",   desc: "Ultra hafif karbon fiber koltuk" },
  { id: "standard",  label: "Standart", desc: "Standart kompozit koltuk" },
];

const STEERING_OPTIONS = [
  { id: "basic",   label: "Temel",   desc: "Sade karbon fiber direksiyon" },
  { id: "display", label: "Ekranlı", desc: "Dashboard entegre direksiyon" },
];

// Hangi mesh'ler gövde rengini alacak (Skin materyali)
const BODY_MESH_NAMES = [
  "Nosecone", "Sidepod", "Engine cover",
  "FWMainFlap", "FWSecondary", "FW Tertiary",
  "RW Main Flap", "RW upper flap", "RW Secondary Flap",
  "RW Bottom flap", "RW Tertiary Flap", "RW Endplates",
  "Monocoque", "Headrest",
];

const RIM_MESH_NAMES = ["RIM_LF_002","RIM_RF_002","RIM_LR_002","RIM_RR_002",
                         "RIM_BLUR_LF_002","RIM_BLUR_RF_002","RIM_BLUR_LR_002","RIM_BLUR_RR_002"];

// ─── 3D CAR ───────────────────────────────────────────────────────────────────

function Car({ modelUrl, bodyColor, wingOption, jantOption }) {
  const { scene } = useGLTF(modelUrl);
  const clonedScene = useMemo(() => scene.clone(true), [scene]);
  const groupRef = useRef();

  // Body color
  useEffect(() => {
    const color = new THREE.Color(bodyColor);
    clonedScene.traverse((obj) => {
      if (obj.isMesh && obj.material) {
        const name = obj.name.replace(/_Material.*$/, "").trim();
        if (BODY_MESH_NAMES.some(n => obj.name.includes(n) || name.includes(n))) {
          const mat = obj.material.clone();
          mat.color = color;
          obj.material = mat;
        }
      }
    });
  }, [bodyColor, clonedScene]);

  // Rim color
  useEffect(() => {
    const jant = JANT_OPTIONS.find(j => j.id === jantOption);
    if (!jant) return;
    const color = new THREE.Color(jant.color);
    clonedScene.traverse((obj) => {
      if (obj.isMesh && RIM_MESH_NAMES.some(n => obj.name.includes(n))) {
        const mat = obj.material.clone();
        mat.color = color;
        mat.metalness = jantOption === "oz" ? 0.9 : 0.2;
        mat.roughness = jantOption === "oz" ? 0.1 : 0.6;
        obj.material = mat;
      }
    });
  }, [jantOption, clonedScene]);

  // Wing visibility
  useEffect(() => {
    const wing = WING_OPTIONS.find(w => w.id === wingOption);
    if (!wing) return;
    clonedScene.traverse((obj) => {
      if (!obj.isMesh) return;
      const baseName = obj.name.replace(/_Material.*$/, "").trim();
      const isWingMesh = wing.meshes.some(n => baseName === n || obj.name.includes(n));
      if (isWingMesh) {
        obj.visible = wing.show.some(n => baseName === n || obj.name.includes(n));
      }
    });
  }, [wingOption, clonedScene]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.4, 0]} scale={2.0}>
      <BoxLogger scene={clonedScene} />
      <primitive object={clonedScene} />
    </group>
  );
}

// ─── LOADING ──────────────────────────────────────────────────────────────────

function Loader() {
  return (
    <div style={{
      position: "absolute", inset: 0, display: "flex",
      flexDirection: "column", alignItems: "center", justifyContent: "center",
      background: "#0a0a0f", color: "#fff", gap: 16,
    }}>
      <div style={{
        width: 48, height: 48, border: "3px solid #333",
        borderTop: "3px solid #e8002d", borderRadius: "50%",
        animation: "spin 1s linear infinite",
      }} />
      <span style={{ fontFamily: "monospace", letterSpacing: 4, fontSize: 12, color: "#666" }}>
        MODEL YÜKLENİYOR
      </span>
    </div>
  );
}

// ─── OPTION CARD ─────────────────────────────────────────────────────────────

function OptionCard({ label, desc, selected, onClick }) {
  return (
    <button onClick={onClick} style={{
      background: selected ? "rgba(232,0,45,0.12)" : "rgba(255,255,255,0.03)",
      border: selected ? "1px solid #e8002d" : "1px solid rgba(255,255,255,0.08)",
      borderRadius: 8, padding: "10px 14px", cursor: "pointer",
      textAlign: "left", transition: "all 0.2s", width: "100%",
    }}>
      <div style={{ color: selected ? "#e8002d" : "#fff", fontWeight: 600, fontSize: 13, fontFamily: "'Barlow', sans-serif" }}>
        {label}
      </div>
      {desc && <div style={{ color: "#666", fontSize: 11, marginTop: 3, fontFamily: "'Barlow', sans-serif" }}>{desc}</div>}
    </button>
  );
}

// ─── SECTION ─────────────────────────────────────────────────────────────────

function Section({ title, locked, children }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
        <span style={{
          fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
          fontSize: 11, letterSpacing: 3, color: locked ? "#444" : "#e8002d",
          textTransform: "uppercase",
        }}>{title}</span>
        {locked && <span style={{ fontSize: 10, color: "#444", letterSpacing: 1 }}>— SABİT</span>}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6, opacity: locked ? 0.4 : 1 }}>
        {children}
      </div>
    </div>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────

export default function FormulaConfigurator() {
  const [bodyColor, setBodyColor] = useState(COLORS[0].hex);
  const [wingOption, setWingOption] = useState("full");
  const [jantOption, setJantOption] = useState("braid");
  const [seatOption, setSeatOption] = useState("carbon");
  const [steeringOption, setSteeringOption] = useState("display");

  // Model URL — kendi GLB dosyanı buraya koy
  // Örnek: "/models/formula_student.glb"
  const MODEL_URL = "/models/formula_student.glb";
  // ↑ BU SATIRI kendi modelinle değiştir!
  // Gerçek kullanımda: const MODEL_URL = "/models/formula_student.glb";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;900&family=Barlow:wght@400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0a0a0f; }
        @keyframes spin { to { transform: rotate(360deg); } }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #111; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 2px; }
      `}</style>

      <div style={{
        display: "flex", height: "100vh", background: "#0a0a0f",
        fontFamily: "'Barlow', sans-serif", overflow: "hidden",
      }}>

        {/* ── Sol panel ── */}
        <div style={{
          width: 280, background: "#0d0d14",
          borderRight: "1px solid rgba(255,255,255,0.06)",
          display: "flex", flexDirection: "column",
          overflowY: "auto", flexShrink: 0,
        }}>
          {/* Logo */}
          <div style={{ padding: "24px 20px 20px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900,
              fontSize: 22, letterSpacing: 2, color: "#fff",
            }}>FORMULA <span style={{ color: "#e8002d" }}>STUDENT</span></div>
            <div style={{ fontSize: 11, color: "#555", letterSpacing: 3, marginTop: 2 }}>CONFIGURATOR</div>
          </div>

          {/* Options */}
          <div style={{ padding: "20px 16px", flex: 1 }}>

            {/* Renk */}
            <Section title="Araç Rengi">
              <div style={{ display: "flex", gap: 10 }}>
                {COLORS.map(c => (
                  <button key={c.id} onClick={() => setBodyColor(c.hex)} title={c.label} style={{
                    width: 36, height: 36, borderRadius: "50%", background: c.hex,
                    border: bodyColor === c.hex ? "3px solid #e8002d" : "2px solid #333",
                    cursor: "pointer", transition: "all 0.2s", flexShrink: 0,
                    boxShadow: bodyColor === c.hex ? `0 0 12px ${c.hex}66` : "none",
                  }} />
                ))}
              </div>
              <div style={{ color: "#555", fontSize: 11, marginTop: 4 }}>
                {COLORS.find(c => c.hex === bodyColor)?.label}
              </div>
            </Section>

            {/* Kanat */}
            <Section title="Arka Kanat">
              {WING_OPTIONS.map(w => (
                <OptionCard key={w.id} label={w.label} desc={w.desc}
                  selected={wingOption === w.id} onClick={() => setWingOption(w.id)} />
              ))}
            </Section>

            {/* Jant */}
            <Section title="Jant">
              {JANT_OPTIONS.map(j => (
                <OptionCard key={j.id} label={j.label} desc={j.desc}
                  selected={jantOption === j.id} onClick={() => setJantOption(j.id)} />
              ))}
            </Section>

            {/* Koltuk */}
            <Section title="Koltuk">
              {SEAT_OPTIONS.map(s => (
                <OptionCard key={s.id} label={s.label} desc={s.desc}
                  selected={seatOption === s.id} onClick={() => setSeatOption(s.id)} />
              ))}
            </Section>

            {/* Direksiyon */}
            <Section title="Direksiyon">
              {STEERING_OPTIONS.map(s => (
                <OptionCard key={s.id} label={s.label} desc={s.desc}
                  selected={steeringOption === s.id} onClick={() => setSteeringOption(s.id)} />
              ))}
            </Section>

            {/* Sabit parçalar */}
            <Section title="Lastik" locked><OptionCard label="Pirelli Slick" desc="225/40 R13" selected /></Section>
            <Section title="Süspansiyon" locked><OptionCard label="Çift Salıncaklı" desc="Push-rod sistem" selected /></Section>
            <Section title="Motor" locked><OptionCard label="Honda CBR600RR" desc="600cc, 4 silindir" selected /></Section>
            <Section title="Fren" locked><OptionCard label="AP Racing" desc="4 pistonlu kaliper" selected /></Section>
            <Section title="Şasi" locked><OptionCard label="Monokok CF" desc="Karbon fiber monokok" selected /></Section>
            <Section title="Batarya" locked><OptionCard label="LiPo 48V" desc="Elektrikli güç ünitesi" selected /></Section>
          </div>
        </div>

        {/* ── 3D Viewport ── */}
        <div style={{ flex: 1, position: "relative" }}>
          {/* Header bar */}
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, zIndex: 10,
            padding: "16px 24px", display: "flex", alignItems: "center",
            justifyContent: "space-between",
            background: "linear-gradient(to bottom, rgba(10,10,15,0.9), transparent)",
          }}>
            <div style={{ color: "#444", fontSize: 11, letterSpacing: 2 }}>
              SC19 · {COLORS.find(c => c.hex === bodyColor)?.label} ·{" "}
              {WING_OPTIONS.find(w => w.id === wingOption)?.label}
            </div>
            <div style={{ color: "#333", fontSize: 11, letterSpacing: 1 }}>
              DRAG TO ROTATE · SCROLL TO ZOOM
            </div>
          </div>

          <Canvas
            camera={{ position: [2.4, 1.0, 3.4], fov: 45 }}
            gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
            style={{ background: "#0a0a0f" }}
          >
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 8, 5]} intensity={1.2} castShadow />
            <directionalLight position={[-5, 3, -5]} intensity={0.4} color="#4466ff" />
            <spotLight position={[0, 10, 0]} intensity={0.6} color="#ffffff" />

            <Suspense fallback={<Html center><Loader /></Html>}>
              <Car
                modelUrl={MODEL_URL}
                bodyColor={bodyColor}
                wingOption={wingOption}
                jantOption={jantOption}
              />
              <ContactShadows position={[0, -0.8, 0]} opacity={0.4} scale={10} blur={2} />
              <Environment preset="city" />
            </Suspense>

            <OrbitControls
              enablePan={true}
              minDistance={0.5}
              maxDistance={50}
              maxPolarAngle={Math.PI / 2 + 0.1}
              autoRotate={false}
            />
          </Canvas>

          {/* Bottom info bar */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            padding: "20px 24px",
            background: "linear-gradient(to top, rgba(10,10,15,0.95), transparent)",
            display: "flex", alignItems: "flex-end", justifyContent: "space-between",
          }}>
            <div>
              <div style={{
                fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900,
                fontSize: 32, color: "#fff", letterSpacing: 1, lineHeight: 1,
              }}>SC19</div>
              <div style={{ color: "#555", fontSize: 12, letterSpacing: 2, marginTop: 4 }}>
                FORMULA STUDENT · 2024
              </div>
            </div>
            <div style={{ display: "flex", gap: 24 }}>
              {[
                { label: "AĞIRLIK", value: "215 kg" },
                { label: "GÜÇ", value: "110 hp" },
                { label: "0-100", value: "2.9 s" },
              ].map(stat => (
                <div key={stat.label} style={{ textAlign: "right" }}>
                  <div style={{ color: "#e8002d", fontSize: 11, letterSpacing: 2, fontFamily: "'Barlow Condensed', sans-serif" }}>
                    {stat.label}
                  </div>
                  <div style={{ color: "#fff", fontSize: 20, fontWeight: 700, fontFamily: "'Barlow Condensed', sans-serif" }}>
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
