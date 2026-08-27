"use client";;
import React, { useState, useRef, useEffect, useCallback } from "react";
import "./BubbleNavbar.css";

const defaultItems = [
  { label: "Projects", href: "#" },
  { label: "Gallery", href: "#" },
  { label: "Studio", href: "#" },
  { label: "Profile", href: "#" },
];

/**
 * Bubble Navbar — dark pill-shaped nav with a sliding bubble indicator.
 * Active item gets a light gradient bubble; hovered items get a subtle dark highlight.
 *
 * @example
 * ```tsx
 * <BubbleNavbar />
 * ```
 */
function BubbleNavbar({
  items = defaultItems,
  defaultActive = 0,
  onActiveChange
}) {
  const [activeIdx, setActiveIdx] = useState(defaultActive);
  const [hoverIdx, setHoverIdx] = useState(null);
  const navRef = useRef(null);
  const linkRefs = useRef([]);

  const [activeBounds, setActiveBounds] = useState({ top: 0, left: 0, width: 0, height: 0 });
  const [hoverBounds, setHoverBounds] = useState({ top: 0, left: 0, width: 0, height: 0 });

  const updateBounds = useCallback((idx, setter) => {
    const el = linkRefs.current[idx];
    const nav = navRef.current;
    if (!el || !nav) return;
    const elRect = el.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();
    setter({
      top: elRect.top - navRect.top,
      left: elRect.left - navRect.left,
      width: elRect.width,
      height: elRect.height,
    });
  }, []);

  useEffect(() => {
    updateBounds(activeIdx, setActiveBounds);
  }, [activeIdx, updateBounds, items]);

  useEffect(() => {
    if (hoverIdx !== null) {
      updateBounds(hoverIdx, setHoverBounds);
    }
  }, [hoverIdx, updateBounds]);

  const handleClick = (idx) => {
    setActiveIdx(idx);
    onActiveChange?.(idx);
  };

  return (
    <div ref={navRef} className="bubble-navbar__wrap">
      {/* Active indicator */}
      <div
        className="bubble-navbar__indicator bubble-navbar__indicator--active"
        style={{
          top: activeBounds.top,
          left: activeBounds.left,
          width: activeBounds.width,
          height: activeBounds.height,
        }} />
      {/* Hover indicator */}
      <div
        className="bubble-navbar__indicator bubble-navbar__indicator--hover"
        style={{
          top: hoverBounds.top,
          left: hoverBounds.left,
          width: hoverBounds.width,
          height: hoverBounds.height,
        }} />

      <div className="bubble-navbar__nav">
        {items.map((item, i) => (
          <button
            key={i}
            ref={(el) => { linkRefs.current[i] = el; }}
            className={`bubble-navbar__link ${
              i === activeIdx ? "bubble-navbar__link--active" : ""
            }`}
            onClick={() => handleClick(i)}
            onMouseEnter={() => setHoverIdx(i)}
            onMouseLeave={() => setHoverIdx(null)}>
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export { BubbleNavbar };

export default function BubbleNavbarDemo() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0a0a0a",
      }}>
      <BubbleNavbar />
    </div>
  );
}
