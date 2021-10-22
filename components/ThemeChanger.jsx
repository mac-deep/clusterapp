import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
  SunIcon as SunSolid,
  MoonIcon as MoonSolid,
} from "@heroicons/react/solid";
import {
  SunIcon as SunOutline,
  MoonIcon as MoonOutline,
} from "@heroicons/react/outline";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="absolute top-8 right-8 ">
      <button
        type="button"
        className="rounded-full m-4 w-12 h-12 dark:text-white text-black "
        onClick={() => setTheme("light")}
      >
        {theme === "light" ? (
          <SunSolid className="w-8 h-8 text-black" />
        ) : (
          <SunOutline className="w-8 h-8 text-white" />
        )}
      </button>
      <button
        type="button"
        className="rounded-full m-4 w-12 h-12"
        onClick={() => setTheme("dark")}
      >
        {theme === "dark" ? (
          <MoonSolid className="w-8 h-8 text-white" />
        ) : (
          <MoonOutline className="w-8 h-8 text-black" />
        )}
      </button>
    </div>
  );
};

export default ThemeChanger;
