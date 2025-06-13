import { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <label className="inline-flex items-center cursor-pointer select-none">
      <input
        type="checkbox"
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
        className="sr-only"
      />
      <div className="w-14 h-7 bg-gray-300 dark:bg-gray-700 rounded-full relative transition-colors duration-300">
        <div
          className={`dot absolute left-1 top-0.5 w-6 h-6 bg-white rounded-full shadow flex items-center justify-center text-lg transition-transform duration-300 ${
            darkMode ? 'translate-x-7' : ''
          }`}
        >
          {darkMode ? '🌙' : '☀️'}
        </div>
      </div>
     
    </label>
  );
};

export default DarkModeToggle;
