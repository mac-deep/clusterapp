'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import { Sunny, Moon } from 'react-tw-ionicons';

export default function ThemeChanger() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="absolute w-16 h-16 top-8 right-8  overflow-hidden rounded-xl">
      {theme === 'light' ? (
        <Sunny
          onClick={() => setTheme('dark')}
          className="fill-current rounded-xl h-full w-full p-2 text-yellow-300 bg-yellow-50 border border-yellow-300"
        />
      ) : (
        <Moon
          onClick={() => setTheme('light')}
          className="fill-current rounded-xl h-full w-full p-2 text-white bg-blueGray-900 border border-white"
        />
      )}
    </div>
  );
}
