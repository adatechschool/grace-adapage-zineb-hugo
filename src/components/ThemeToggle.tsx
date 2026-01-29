import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="
        px-4 py-2 rounded-lg
        bg-gradient-to-br from-indigo-100 to-pink-100
        dark:from-slate-700 dark:to-slate-800
        text-gray-900 dark:text-gray-100
        ring-1 ring-indigo-200 dark:ring-slate-600
        hover:scale-105
        transition-all duration-300
      "
    >
      {dark ? "☀️ Mode clair" : "🌙 Mode sombre"}
    </button>
  );
}
