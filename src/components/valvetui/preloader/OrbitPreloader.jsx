"use client";;
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { CustomEase } from "gsap/CustomEase";
import "./OrbitPreloader.css";

gsap.registerPlugin(SplitText, CustomEase);
CustomEase.create("hop", "0.9, 0, 0.1, 1");

// ─── Static data ──────────────────────────────────────────────────────────────

const ORBIT_PATHS = [
  {
    id: "loader-orbit-1",
    d: "M 500,-275 A 775,775 0 0,1 500,1275 A 775,775 0 0,1 500,-275 A 775,775 0 0,1 500,1275 A 775,775 0 0,1 500,-275 A 775,775 0 0,1 500,1275 A 775,775 0 0,1 499.99,-275",
  },
  {
    id: "loader-orbit-2",
    d: "M 500,-200 A 700,700 0 0,1 500,1200 A 700,700 0 0,1 500,-200 A 700,700 0 0,1 500,1200 A 700,700 0 0,1 500,-200 A 700,700 0 0,1 500,1200 A 700,700 0 0,1 499.99,-200",
  },
  {
    id: "loader-orbit-3",
    d: "M 500,-125 A 625,625 0 0,1 500,1125 A 625,625 0 0,1 500,-125 A 625,625 0 0,1 500,1125 A 625,625 0 0,1 500,-125 A 625,625 0 0,1 500,1125 A 625,625 0 0,1 499.99,-125",
  },
  {
    id: "loader-orbit-4",
    d: "M 500,-50 A 550,550 0 0,1 500,1050 A 550,550 0 0,1 500,-50 A 550,550 0 0,1 500,1050 A 550,550 0 0,1 500,-50 A 550,550 0 0,1 500,1050 A 550,550 0 0,1 499.99,-50",
  },
  {
    id: "loader-orbit-5",
    d: "M 500,25 A 475,475 0 0,1 500,975 A 475,475 0 0,1 500,25 A 475,475 0 0,1 500,975 A 475,475 0 0,1 500,25 A 475,475 0 0,1 500,975 A 475,475 0 0,1 499.99,25",
  },
  {
    id: "loader-orbit-6",
    d: "M 500,100 A 400,400 0 0,1 500,900 A 400,400 0 0,1 500,100 A 400,400 0 0,1 500,900 A 400,400 0 0,1 500,100 A 400,400 0 0,1 500,900 A 400,400 0 0,1 499.99,100",
  },
  {
    id: "loader-orbit-7",
    d: "M 500,175 A 325,325 0 0,1 500,825 A 325,325 0 0,1 500,175 A 325,325 0 0,1 500,825 A 325,325 0 0,1 500,175 A 325,325 0 0,1 500,825 A 325,325 0 0,1 499.99,175",
  },
  {
    id: "loader-orbit-8",
    d: "M 500,250 A 250,250 0 0,1 500,750 A 250,250 0 0,1 500,250 A 250,250 0 0,1 500,750 A 250,250 0 0,1 500,250 A 250,250 0 0,1 500,750 A 250,250 0 0,1 499.99,250",
  },
];

const DEFAULT_ORBIT_TEXTS = [
  { href: "#loader-orbit-1", startOffset: "30%", textLength: 300, label: "Developer" },
  { href: "#loader-orbit-2", startOffset: "31%", textLength: 280, label: "Frontend" },
  { href: "#loader-orbit-3", startOffset: "33%", textLength: 240, label: "Creative" },
  { href: "#loader-orbit-4", startOffset: "32%", textLength: 260, label: "Designer" },
  { href: "#loader-orbit-5", startOffset: "30%", textLength: 290, label: "Portfolio" },
  { href: "#loader-orbit-6", startOffset: "31%", textLength: 200, label: "Digital" },
  { href: "#loader-orbit-7", startOffset: "33%", textLength: 210, label: "Modern" },
  { href: "#loader-orbit-8", startOffset: "32%", textLength: 190, label: "Design" },
];

const TARGET_TEXT_LENGTHS = [4000, 3500, 3250, 3000, 2500, 2000, 1500, 1250];
const ORBIT_RADII = [775, 700, 625, 550, 475, 400, 325, 250];

// ─── Component ────────────────────────────────────────────────────────────────

export default function OrbitPreloader({
  onComplete,
  orbitLabels,
  heroCopyText = "Your content begins here",
  heroImage = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop",
  loaderBgColor = "#d1d9b8",
  loaderTextColor = "#0f0f0f",
  heroCopyColor = "#fff"
}) {
  const loaderRef = useRef(null);
  const svgRef = useRef(null);
  const counterRef = useRef(null);
  const textPathRefs = useRef([]);
  const orbitTextRefs = useRef([]);
  const heroBgRef = useRef(null);
  const heroWordRefs = useRef([]);

  // Merge custom orbit labels if provided
  const orbitTexts = orbitLabels
    ? DEFAULT_ORBIT_TEXTS.map((ot, i) => ({
        ...ot,
        label: orbitLabels[i] ?? ot.label,
      }))
    : DEFAULT_ORBIT_TEXTS;

  useEffect(() => {
    const textPaths = textPathRefs.current.filter(Boolean);
    const orbitTextEls = orbitTextRefs.current.filter(Boolean);

    // ── 1. Text-length pulse on each orbit ──────────────────────────────────
    const maxOrbitRadius = ORBIT_RADII[0];
    const maxAnimDuration = 1.25;
    const minAnimDuration = 1;

    textPaths.forEach((textPath, index) => {
      const startTextLength = orbitTexts[index].textLength;
      const startOffset = parseFloat(orbitTexts[index].startOffset);

      const animationDelay = (textPaths.length - 1 - index) * 0.1;
      const currentOrbitRadius = ORBIT_RADII[index];
      const currentDuration =
        minAnimDuration +
        (currentOrbitRadius / maxOrbitRadius) * (maxAnimDuration - minAnimDuration);

      const pathLength = 2 * Math.PI * currentOrbitRadius * 3;
      const textLengthIncrease = TARGET_TEXT_LENGTHS[index] - startTextLength;
      const offsetAdjustment = (textLengthIncrease / 2 / pathLength) * 100;
      const targetOffset = startOffset - offsetAdjustment;

      gsap.to(textPath, {
        attr: {
          textLength: TARGET_TEXT_LENGTHS[index],
          startOffset: targetOffset + "%",
        },
        duration: currentDuration,
        delay: animationDelay,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        repeatDelay: 0,
      });
    });

    // ── 2. Random SVG rotation ───────────────────────────────────────────────
    let loaderRotation = 0;
    let rotationTween = null;

    function animateRotation() {
      const spinDirection = Math.random() < 0.5 ? 1 : -1;
      loaderRotation += 25 * spinDirection;

      rotationTween = gsap.to(svgRef.current, {
        rotation: loaderRotation,
        duration: 2,
        ease: "power2.inOut",
        onComplete: animateRotation,
      });
    }

    animateRotation();

    // ── 3. Counter 0 → 100 ──────────────────────────────────────────────────
    const count = { value: 0 };

    gsap.to(count, {
      value: 100,
      duration: 4,
      delay: 1,
      ease: "power1.out",
      onUpdate() {
        if (counterRef.current) {
          counterRef.current.textContent = String(Math.floor(count.value));
        }
      },
      onComplete() {
        gsap.to(counterRef.current?.parentElement ?? null, {
          opacity: 0,
          duration: 0.5,
          delay: 1,
        });
      },
    });

    // ── 4. Orbit-text fade in ────────────────────────────────────────────────
    const orbitTextsReversed = [...orbitTextEls].reverse();

    gsap.set(orbitTextEls, { opacity: 0 });

    gsap.to(orbitTextsReversed, {
      opacity: 1,
      duration: 0.75,
      stagger: 0.125,
      ease: "power1.out",
    });

    // ── 5. Orbit-text fade out → loader exit → hero reveal ──────────────────
    gsap.to(orbitTextsReversed, {
      opacity: 0,
      duration: 0.75,
      stagger: 0.1,
      delay: 6,
      ease: "power1.out",
      onComplete() {
        // Fade out loader
        gsap.to(loaderRef.current, {
          opacity: 0,
          duration: 1,
          onComplete() {
            if (loaderRef.current) loaderRef.current.style.display = "none";
            onComplete?.();
          },
        });

        // Hero background unscale
        gsap.to(heroBgRef.current, {
          scale: 1,
          duration: 2,
          delay: -0.5,
          ease: "hop",
        });

        // Hero copy words slide up
        gsap.to(heroWordRefs.current, {
          y: 0,
          duration: 2,
          delay: -0.25,
          stagger: 0.1,
          ease: "hop",
        });
      },
    });

    // Cleanup: kill all GSAP tweens on unmount
    return () => {
      gsap.killTweensOf([
        ...textPaths,
        ...orbitTextEls,
        svgRef.current,
        counterRef.current?.parentElement,
        count,
        loaderRef.current,
        heroBgRef.current,
        ...heroWordRefs.current,
      ]);
      rotationTween?.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onComplete]);

  // ── Hero copy: split into word spans ──────────────────────────────────────
  const words = heroCopyText.split(" ");

  return (
    <>
      {/* ── Loader ─────────────────────────────────────────────────────────── */}
      <div
        className="valvet-orbit-loader"
        ref={loaderRef}
        style={
          {
            "--orbit-loader-bg": loaderBgColor,
            "--orbit-loader-text": loaderTextColor
          }
        }>
        <svg
          ref={svgRef}
          viewBox="-425 -425 1850 1850"
          xmlns="http://www.w3.org/2000/svg">
          {/* Orbit paths (invisible guides) */}
          {ORBIT_PATHS.map((p) => (
            <path key={p.id} id={p.id} d={p.d} />
          ))}

          {/* Orbit text labels */}
          {orbitTexts.map((ot, i) => (
            <text
              key={ot.href}
              className="valvet-orbit-text"
              ref={(el) => {
                orbitTextRefs.current[i] = el;
              }}>
              <textPath
                href={ot.href}
                startOffset={ot.startOffset}
                textLength={ot.textLength}
                ref={(el) => {
                  textPathRefs.current[i] = el;
                }}>
                {ot.label}
              </textPath>
            </text>
          ))}
        </svg>

        <div className="valvet-orbit-counter">
          <p ref={counterRef}>0</p>
        </div>
      </div>

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="valvet-orbit-hero">
        <div className="valvet-orbit-hero-bg" ref={heroBgRef}>
          <img src={heroImage} alt="" />
        </div>
        <div className="valvet-orbit-hero-copy">
          <p style={{ color: heroCopyColor }}>
            {words.map((word, i) => (
              <span
                key={i}
                className="valvet-orbit-word"
                ref={(el) => {
                  if (el) heroWordRefs.current[i] = el;
                }}>
                {word}
                {i < words.length - 1 ? "\u00A0" : ""}
              </span>
            ))}
          </p>
        </div>
      </section>
    </>
  );
}

export { OrbitPreloader };
