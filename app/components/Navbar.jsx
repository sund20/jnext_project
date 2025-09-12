'use client';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { assets } from '../../assets/assets';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('top');
  const sideMenubar = useRef(null);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'work', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-40% 0px -60% 0px',
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openMenu = () => {
    if (sideMenubar.current) sideMenubar.current.style.transform = 'translateX(0)';
  };

  const closeMenu = () => {
    if (sideMenubar.current) sideMenubar.current.style.transform = 'translateX(36rem)';
  };

  const linkClass = (section) =>
    `font-Ovo ${
      activeSection === section
        ? 'underline underline-offset-8 tracking-wide font-semibold text-primary'
        : ''
    }`;

  // Scroll to top on logo click
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed top-1 left-5 right-5 z-50 mx-auto">
        <nav
          className={`mx-auto flex items-center justify-between p-6 lg:px-8 h-16 ${
            isScroll ? 'shadow-lg bg-white/35 backdrop-blur-lg' : 'bg-white'
          }`}
        >
          <Link href="/" onClick={handleLogoClick}  className="flex items-start gap-2 cursor-pointer">
            <Image
              src={assets.solis_logo}
              alt="Logo"
              width={25}
              height={8}
              className="object-scale-down"
            />
            <span className="text-2xl font-Newsreader font-medium text-darkBg">Solis</span>
          </Link>

          <ul className="hidden md:flex gap-8 py-8 px-12 text-gray-900 text-center text-xl">
            <li>
              <Link href="#about" scroll className={linkClass('about')}>
                About
              </Link>
            </li>
            <li>
              <Link href="#skills" scroll className={linkClass('skills')}>
                Skills
              </Link>
            </li>
            <li>
              <Link href="#work" scroll className={linkClass('work')}>
                Work
              </Link>
            </li>
            <li>
              <Link href="#contact" scroll className={linkClass('contact')}>
                Contact
              </Link>
            </li>
          </ul>

          <div className="flex-none md:justify-end justify-items-end gap-4">
            <ThemeToggle />
          </div>

          <button onClick={openMenu} className="block md:hidden">
            <Image src={assets.menu_black} alt="menu Icon" className="w-6 h-6" />
          </button>

          {/* Mobile Menu */}
          <ul
            ref={sideMenubar}
            style={{ transform: 'translateX(36rem)' }}
            className="fixed top-20 left-3/4 transform -translate-x-1/2 w-1/5 max-w-xs bg-zinc-500/80 shadow-md flex flex-col items-center space-y-4 p-6 z-50 transition-transform duration-500 ease-in-out md:hidden"
          >
            <div onClick={closeMenu} className="absolute top-2 w-4 h-4 right-5 cursor-pointer">
              <Image src={assets.close_black} alt="close x" className="w-5" />
            </div>
            {['home', 'about', 'skills', 'work', 'contact'].map((section) => (
              <li key={section}>
                <Link href={`#${section}`} scroll onClick={closeMenu} className={linkClass(section)}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
