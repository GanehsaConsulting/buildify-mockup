'use client'

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { PiMoonFill, PiSunFill } from "react-icons/pi";

export default function ThemeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <label className="swap swap-rotate">
      {/* Hidden checkbox to control the state */}
      <input
        type="checkbox"
        onChange={() => setTheme(currentTheme === 'light' ? 'dark' : 'light')}
        checked={currentTheme === 'dark'}
      />

      {/* Sun icon (for light mode) */}
      <div className='z-[999] swap-off p-2 rounded-full bg-lightColor dark:bg-darkColor dark:bg-opacity-50 bg-opacity-50 backdrop-blur-md hover:bg-mainColor dark:hover:bg-mainColorD'>
        <PiSunFill className="md:text-xl" />
      </div>

      {/* Moon icon (for dark mode) */}
      <div className='z-[999] swap-on p-2 rounded-full bg-lightColor dark:bg-darkColor dark:bg-opacity-50 bg-opacity-50 backdrop-blur-md hover:bg-mainColor dark:hover:bg-mainColorD'>
        <PiMoonFill className="md:text-xl" />
      </div>
    </label>
  );
}
