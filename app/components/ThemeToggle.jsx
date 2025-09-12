'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { assets } from '../../assets/assets'; // Adjust the path as necessary
const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  // Load theme from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  // Toggle dark/light mode
  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    setIsDark(!isDark);
  };

  return (
<button
  onClick={toggleTheme}
  className="flex items-center gap-2 p-2 rounded text-sm bg-gray-200 dark:bg-gray-800 dark:text-white"
>
  <Image
    src={isDark ? assets.sun_icon : assets.moon_icon}
    alt='theme icon'
    className='w-4 h-4'
  />
  {isDark ? '' : ''}
</button>

  );
};

export default ThemeToggle;
