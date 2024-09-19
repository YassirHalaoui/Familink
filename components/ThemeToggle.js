'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors"
    >
      {theme === 'dark' ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-700" />}
    </button>
  );
}