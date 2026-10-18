"use client";

import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

const LIME = "#8b6cf5";
const W = 1280;
const H = 800;

const CODE = [
  "const pedro = {",
  '  role: "Full Stack Developer",',
  '  city: "Goiânia, GO",',
  '  stack: ["Django", "Next.js", "PostgreSQL"],',
  '  shipped: ["SGAP", "Seleção", "SGC"],',
  '  status: "open to work",',
  "};",
  "",
  "export function hire(me = pedro) {",
  '  return me.status === "open to work"',
  '    ? "phthedev@gmail.com"',
  '    : "try again soon";',
  "}",
];
const TOTAL = CODE.join("\n").length;
const FILES = ["app", "  components", "    Hero.tsx", "    Work.tsx", "    About.tsx", "  i18n", "developer.ts", "package.json"];

/** Cor por token, no estilo do tema escuro do VS Code. */
function paintLine(ctx: CanvasRenderingContext2D, line: string, x: number, y: number) {
  const re = /("[^"]*")|\b(const|export|function|return)\b|(\b[a-z]+)(?=:)|(\bhire\b)|([{}[\](),;?:=]+)|(\s+)|([\w.@]+)/g;
  let m: RegExpExecArray | null;
  let cx = x;
  while ((m = re.exec(line))) {
    ctx.fillStyle = m[1] ? "#ce9178" : m[2] ? "#569cd6" : m[3] ? "#9cdcfe" : m[4] ? "#dcdcaa" : m[5] ? "#d4d4d4" : "#9cdcfe";
    ctx.fillText(m[0], cx, y);
    cx += ctx.measureText(m[0]).width;
  }
}

function drawScreen(ctx: CanvasRenderingContext2D, typed: number, caret: boolean) {
  ctx.fillStyle = "#1e1e1e";
  ctx.fillRect(0, 0, W, H);

  ctx.fillStyle = "#323233";
  ctx.fillRect(0, 0, W, 38);
  ["#ff5f57", "#febc2e", "#28c840"].forEach((c, i) => {
    ctx.fillStyle = c;
    ctx.beginPath();
    ctx.arc(26 + i * 26, 19, 7, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.fillStyle = "#cccccc";
  ctx.font = "600 17px Segoe UI, Arial, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("developer.ts — portfolio — Visual Studio Code", W / 2, 25);
  ctx.textAlign = "left";

  ctx.fillStyle = "#333333";
  ctx.fillRect(0, 38, 64, H - 68);
  ctx.fillStyle = LIME;
  ctx.fillRect(0, 54, 4, 40);
  ctx.fillStyle = "#858585";
  [56, 116, 176, 236].forEach((y) => ctx.fillRect(22, y, 22, 22));
  ctx.fillStyle = "#252526";
  ctx.fillRect(64, 38, 250, H - 68);
  ctx.font = "600 15px Segoe UI, Arial, sans-serif";
  ctx.fillStyle = "#bbbbbb";
  ctx.fillText("EXPLORER", 84, 70);
  ctx.font = "21px Consolas, 'Courier New', monospace";
  FILES.forEach((f, i) => {
    const active = f === "developer.ts";
    if (active) {
      ctx.fillStyle = "#37373d";
      ctx.fillRect(64, 92 + i * 32, 250, 30);
    }
    ctx.fillStyle = active ? "#ffffff" : "#cccccc";
    ctx.fillText(f, 84, 114 + i * 32);
  });

  ctx.fillStyle = "#2d2d2d";
  ctx.fillRect(314, 38, W - 314, 44);
  ctx.fillStyle = "#1e1e1e";
  ctx.fillRect(314, 38, 220, 44);
  ctx.fillStyle = LIME;
  ctx.fillRect(314, 38, 220, 3);
  ctx.fillStyle = "#ffffff";
  ctx.font = "18px Segoe UI, Arial, sans-serif";
  ctx.fillText("developer.ts", 336, 66);
  ctx.fillStyle = "#969696";
  ctx.fillText("Work.tsx", 556, 66);

  // código digitado até `typed` caracteres
  let left = typed;
  let y = 140;
  for (let i = 0; i < CODE.length; i++) {
    ctx.fillStyle = "#6e7681";
    ctx.textAlign = "right";
    ctx.font = "26px Consolas, 'Courier New', monospace";
    ctx.fillText(String(i + 1), 372, y);
    ctx.textAlign = "left";
    ctx.font = "34px Consolas, 'Courier New', monospace";
    const line = CODE[i];
    const part = line.slice(0, Math.max(0, left));
    paintLine(ctx, part, 394, y);
    if (left >= 0 && left <= line.length && caret) {
      ctx.fillStyle = LIME;
      ctx.fillRect(394 + ctx.measureText(part).width + 2, y - 30, 4, 40);
    }
    left -= line.length + 1;
    y += 50;
  }

  ctx.fillStyle = LIME;
  ctx.fillRect(0, H - 30, W, 30);
  ctx.fillStyle = "#ffffff";
  ctx.font = "600 16px Segoe UI, Arial, sans-serif";
  ctx.fillText("  main      0 errors      Goiânia, BR", 14, H - 10);
  ctx.textAlign = "right";
  ctx.fillText("TypeScript   UTF-8   Ln 9, Col 1   ", W - 14, H - 10);
  ctx.textAlign = "left";
}

function useScreenTexture(calm: boolean) {
  const { ctx, tex } = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = W;
    canvas.height = H;
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 8;
    return { ctx: canvas.getContext("2d")!, tex };
  }, []);

  const state = useRef({ t: calm ? TOTAL : 0, last: -1, hold: 0 });
  useFrame((_, dt) => {
    const s = state.current;
    if (!calm) {
      if (s.t >= TOTAL) {
        s.hold += dt;
        if (s.hold > 4) { s.t = 0; s.hold = 0; }
      } else {
        s.t = Math.min(TOTAL, s.t + dt * 26);
      }
    }
    const typed = Math.floor(s.t);
    const caret = calm || Math.floor(performance.now() / 500) % 2 === 0;
    const key = typed * 2 + (caret ? 1 : 0);
    if (key !== s.last) {
      s.last = key;
      drawScreen(ctx, typed, caret);
      tex.needsUpdate = true;
    }
  });

  useEffect(() => () => tex.dispose(), [tex]);
  return tex;
}

function useLogoTexture() {
  return useMemo(() => {
    const c = document.createElement("canvas");
    c.width = 512;
    c.height = 256;
    const g = c.getContext("2d")!;
    g.fillStyle = LIME;
    g.font = "400 150px Anton, Impact, sans-serif";
    g.textAlign = "center";
    g.textBaseline = "middle";
    g.fillText("</PH>", 256, 134);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  }, []);
}

function Keys() {
  const ref = useRef<THREE.InstancedMesh>(null);
  const cols = 14;
  const rows = 5;
  useLayoutEffect(() => {
    const m = ref.current;
    if (!m) return;
    const o = new THREE.Object3D();
    let i = 0;
    for (let r = 0; r < rows; r++)
      for (let c = 0; c < cols; c++) {
        o.position.set(-1.84 + c * 0.283, 0.085, -1.12 + r * 0.275);
        o.updateMatrix();
        m.setMatrixAt(i++, o.matrix);
      }
    m.instanceMatrix.needsUpdate = true;
  }, []);
  return (
    <instancedMesh ref={ref} args={[undefined, undefined, cols * rows]}>
      <boxGeometry args={[0.235, 0.05, 0.23]} />
      <meshStandardMaterial color="#0d0d0c" roughness={0.6} />
    </instancedMesh>
  );
}

function Laptop({ calm, idle }: { calm: boolean; idle: React.MutableRefObject<boolean> }) {
  const root = useRef<THREE.Group>(null);
  const lid = useRef<THREE.Group>(null);
  const { camera, size } = useThree();
  const screen = useScreenTexture(calm);
  const logo = useLogoTexture();
  const open = useRef(calm ? 1 : 0);

  // Em telas estreitas a câmera recua para o notebook caber inteiro
  useEffect(() => {
    camera.position.z = size.width / size.height >= 1.4 ? 6.6 : 7.4;
  }, [camera, size]);

  useFrame((state, dt) => {
    open.current = Math.min(1, open.current + dt * 0.55);
    const e = 1 - Math.pow(1 - open.current, 3);
    if (lid.current) lid.current.rotation.x = -1.85 * e;
    if (root.current && idle.current && !calm) {
      root.current.rotation.y += (Math.sin(state.clock.elapsedTime * 0.6) * 0.45 - root.current.rotation.y) * Math.min(dt * 2, 1);
    }
    if (root.current) {
      const s = Math.min(window.scrollY / window.innerHeight, 1.2);
      root.current.position.y = -0.55 + s * 1.2;
    }
  });

  return (
    <group ref={root} position={[0, -0.55, 0]} rotation={[0.05, 0, 0]}>
      <RoundedBox args={[4.2, 0.14, 2.9]} radius={0.06} smoothness={4}>
        <meshStandardMaterial color="#6b6b66" metalness={0.55} roughness={0.38} />
      </RoundedBox>
      <mesh position={[0, 0.075, -0.2]}>
        <boxGeometry args={[4.0, 0.02, 2.5]} />
        <meshStandardMaterial color="#2a2a27" roughness={0.8} />
      </mesh>
      <Keys />
      <mesh position={[0, 0.088, 1.0]}>
        <boxGeometry args={[1.3, 0.012, 0.75]} />
        <meshStandardMaterial color="#4a4a46" metalness={0.5} roughness={0.3} />
      </mesh>
      <mesh position={[0, 0.0, 1.452]}>
        <boxGeometry args={[0.7, 0.03, 0.012]} />
        <meshStandardMaterial color={LIME} emissive={LIME} emissiveIntensity={0.6} />
      </mesh>

      {/* tampa: gira em torno da dobradiça traseira */}
      <group ref={lid} position={[0, 0.07, -1.45]}>
        <RoundedBox args={[4.2, 0.1, 2.7]} radius={0.05} smoothness={4} position={[0, 0.05, 1.35]}>
          <meshStandardMaterial color="#6b6b66" metalness={0.55} roughness={0.38} />
        </RoundedBox>
        <mesh position={[0, -0.003, 1.35]} rotation={[Math.PI / 2, 0, 0]}>
          <planeGeometry args={[3.98, 2.48]} />
          <meshBasicMaterial map={screen} toneMapped={false} />
        </mesh>
        <mesh position={[0, -0.001, 1.35]} rotation={[Math.PI / 2, 0, 0]}>
          <planeGeometry args={[4.1, 2.6]} />
          <meshBasicMaterial color="#050505" toneMapped={false} />
        </mesh>
        <mesh position={[0, 0.101, 1.35]} rotation={[-Math.PI / 2, 0, Math.PI]}>
          <planeGeometry args={[1.5, 0.75]} />
          <meshBasicMaterial map={logo} transparent toneMapped={false} />
        </mesh>
      </group>
    </group>
  );
}

function Controls({ idle }: { idle: React.MutableRefObject<boolean> }) {
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  return (
    <OrbitControls
      enableZoom={false}
      enablePan={false}
      enableDamping
      minPolarAngle={Math.PI / 3.2}
      maxPolarAngle={Math.PI / 1.95}
      onStart={() => {
        clearTimeout(timer.current);
        idle.current = false;
      }}
      onEnd={() => {
        // volta ao balanço depois de 3s sem mexer
        timer.current = setTimeout(() => (idle.current = true), 3000);
      }}
    />
  );
}

export default function HeroScene({ calm }: { calm: boolean }) {
  const idle = useRef(true);
  return (
    <Canvas
      camera={{ position: [0, 2.2, 6.6], fov: 38 }}
      dpr={[1, 1.75]}
      gl={{ alpha: true, antialias: true }}
      className="cursor-grab active:cursor-grabbing"
      aria-label="Notebook 3D com VS Code aberto. Arraste para girar."
      role="img"
    >
      <ambientLight intensity={0.9} />
      <directionalLight position={[4, 6, 6]} intensity={2.4} />
      <directionalLight position={[-6, 2, -3]} intensity={1.2} color={LIME} />
      <Laptop calm={calm} idle={idle} />
      <Controls idle={idle} />
    </Canvas>
  );
}
