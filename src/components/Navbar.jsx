import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo } from "../assets";
import MobileNav from "./MobileNav";
import BubbleNavbar from "./valvetui/BubbleNavbar";

const Navbar = () => {
  const [active, setActive] = useState("About");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`${
          styles.paddingX
        } w-full flex items-center py-4 fixed top-0 z-30 transition-all duration-300 ${
          scrolled
            ? "bg-[#050816]/90 backdrop-blur-md border-b border-white/10 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
          <Link
            to='/'
            className='flex items-center gap-2.5'
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={logo}
              alt='logo'
              className='w-10 h-10 rounded-full object-cover border border-white/20 shadow-sm'
            />
            <p className='text-white text-[18px] font-bold cursor-pointer flex'>
              Aditya &nbsp;
              <span className='sm:block hidden'> Chavan</span>
            </p>
          </Link>

          {/* Desktop Valvet UI Bubble Navbar */}
          <div className='hidden sm:flex items-center'>
            <BubbleNavbar
              items={navLinks}
              active={active}
              onSelect={(item) => setActive(item.title)}
            />
          </div>

          {/* Mobile Hamburger Button */}
          <div className='sm:hidden flex flex-1 justify-end items-center'>
            <button
              onClick={() => setToggle(!toggle)}
              aria-label='Toggle Navigation'
              className='w-11 h-11 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-md flex flex-col justify-center items-center gap-1.5 p-2 hover:bg-white/10 hover:border-white/30 transition-all duration-200 active:scale-95'
            >
              <span
                className={`w-5 h-[2px] bg-white rounded-full transition-all duration-300 ${
                  toggle ? "rotate-45 translate-y-[8px]" : ""
                }`}
              />
              <span
                className={`w-5 h-[2px] bg-white rounded-full transition-all duration-300 ${
                  toggle ? "opacity-0 scale-0" : ""
                }`}
              />
              <span
                className={`w-5 h-[2px] bg-white rounded-full transition-all duration-300 ${
                  toggle ? "-rotate-45 -translate-y-[8px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* GSAP Animated Side Drawer */}
      <MobileNav
        isOpen={toggle}
        onClose={() => setToggle(false)}
        active={active}
        setActive={setActive}
      />
    </>
  );
};

export default Navbar;
