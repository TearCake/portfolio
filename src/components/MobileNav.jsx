import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { navLinks, personalInfo } from "../constants";

const MobileNav = ({ isOpen, onClose, active, setActive }) => {
  const overlayRef = useRef(null);
  const menuRef = useRef(null);
  const linksRef = useRef([]);
  const footerRef = useRef(null);
  const tlRef = useRef(null);

  useEffect(() => {
    // Create GSAP Timeline for opening and closing
    const ctx = gsap.context(() => {
      tlRef.current = gsap
        .timeline({ paused: true })
        .to(overlayRef.current, {
          autoAlpha: 1,
          duration: 0.35,
          ease: "power2.inOut",
        })
        .fromTo(
          menuRef.current,
          { x: "100%", skewX: 2 },
          {
            x: "0%",
            skewX: 0,
            duration: 0.55,
            ease: "power4.out",
          },
          "-=0.2"
        )
        .fromTo(
          linksRef.current,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.45,
            stagger: 0.06,
            ease: "back.out(1.4)",
          },
          "-=0.3"
        )
        .fromTo(
          footerRef.current,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.2"
        );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (tlRef.current) {
      if (isOpen) {
        document.body.style.overflow = "hidden";
        tlRef.current.play();
      } else {
        document.body.style.overflow = "unset";
        tlRef.current.reverse();
      }
    }
  }, [isOpen]);

  const handleLinkClick = (title) => {
    setActive(title);
    onClose();
  };

  return (
    <>
      {/* Backdrop Blur Overlay */}
      <div
        ref={overlayRef}
        onClick={onClose}
        className='fixed inset-0 bg-black/60 backdrop-blur-md z-40 opacity-0 pointer-events-none data-[open=true]:pointer-events-auto transition-opacity duration-300'
        data-open={isOpen}
      />

      {/* Side Navigation Drawer */}
      <div
        ref={menuRef}
        className='fixed top-0 right-0 w-[85vw] max-w-[360px] h-full h-screen bg-[#0a0a1a]/95 backdrop-blur-2xl border-l border-white/10 z-50 flex flex-col justify-between p-7 sm:p-9 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-y-auto'
        style={{ transform: "translateX(100%)" }}
      >
        {/* Top Header */}
        <div className='flex items-center justify-between pb-6 border-b border-white/10'>
          <div className='flex flex-col'>
            <span className='text-[10px] uppercase font-bold tracking-[0.2em] text-[#915EFF]'>
              Navigation
            </span>
            <span className='text-white text-[17px] font-bold'>
              Aditya Chavan
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label='Close Menu'
            className='w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/15 hover:border-white/30 transition-all duration-200 active:scale-95'
          >
            <svg
              className='w-5 h-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>

        {/* Staggered Navigation Links */}
        <ul className='flex flex-col gap-4 my-auto py-6 list-none'>
          {navLinks.map((nav, index) => {
            const isCurrent = active === nav.title;
            const indexNumber = String(index + 1).padStart(2, "0");

            return (
              <li
                key={nav.id}
                ref={(el) => (linksRef.current[index] = el)}
                className='overflow-hidden'
              >
                <a
                  href={`#${nav.id}`}
                  onClick={() => handleLinkClick(nav.title)}
                  className={`group flex items-center justify-between py-2 px-3 rounded-xl transition-all duration-300 ${
                    isCurrent
                      ? "bg-gradient-to-r from-[#915EFF]/20 to-transparent text-white border-l-4 border-[#915EFF] pl-4"
                      : "text-secondary hover:text-white hover:bg-white/5 hover:pl-4"
                  }`}
                >
                  <div className='flex items-center gap-3'>
                    <span className='text-[11px] font-mono font-medium text-[#915EFF]/70 group-hover:text-[#915EFF] transition-colors'>
                      {indexNumber}
                    </span>
                    <span className='text-[20px] font-semibold tracking-wide'>
                      {nav.title}
                    </span>
                  </div>

                  <span className='text-xs text-white/30 group-hover:text-[#915EFF] group-hover:translate-x-1 transition-all duration-200'>
                    ↗
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Footer with Socials & Contact info */}
        <div
          ref={footerRef}
          className='pt-6 border-t border-white/10 flex flex-col gap-3.5 text-xs text-secondary'
        >
          <div className='flex items-center justify-between'>
            <a
              href={personalInfo?.github || "https://github.com/TearCake"}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-white transition-colors duration-200 flex items-center gap-1.5'
            >
              <span>GitHub</span> ↗
            </a>
            <a
              href={personalInfo?.linkedin || "https://linkedin.com"}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-white transition-colors duration-200 flex items-center gap-1.5'
            >
              <span>LinkedIn</span> ↗
            </a>
            <a
              href={`mailto:${personalInfo?.email || "adityachavan1357@gmail.com"}`}
              className='hover:text-[#915EFF] transition-colors duration-200 flex items-center gap-1.5'
            >
              <span>Email</span> ✉
            </a>
          </div>

          <p className='text-[11px] text-white/40 text-center tracking-wider'>
            Honours in Next-Gen AI • 2026
          </p>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
