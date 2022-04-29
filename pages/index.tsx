import type { NextPage } from "next";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center dark:bg-gray-800 transition-all">
      <button
        type="button"
        className="rounded-full w-8 h-8 border border-black text-sm hover:bg-gray-200 transition-all ease-in-out absolute top-8 right-8 dark:border-white dark:text-white hover:dark:bg-gray-900"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {isMounted && (theme === "light" ? "L" : "D")}
      </button>
      <h1 className="text-xl dark:text-white">Next.js + Tailwind CSS</h1>
    </div>
  );
};

export default Home;
