import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Mail } from "lucide-react";
import { DoodleSticker } from "./UIComponents";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [confetti, setConfetti] = useState<
    { id: number; x: number; y: number; emoji: string }[]
  >([]);
  const location = useLocation();

  const triggerConfetti = (e: React.MouseEvent<HTMLElement>) => {
    const x = e.pageX;
    const y = e.pageY;
    const newConfetti = Array.from({ length: 1 }).map((_, i) => ({
      id: Math.random(),
      x,
      y,
      emoji: [
        "✨",
        "🎉",
        "⭐",
        "🚀",
        "🎈",
        "🎊",
        "🔥",
        "💯",
        "🦄",
        "🍕",
        "🍦",
        "🌈",
        "👻",
        "🤖",
      ][Math.floor(Math.random() * 14)],
    }));
    setConfetti((c) => [...c, ...newConfetti]);
    setTimeout(() => {
      setConfetti((c) => c.slice(newConfetti.length));
    }, 2000);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="min-h-screen bg-[#f8f5f2] text-slate-800 selection:bg-yellow-200 overflow-x-hidden font-sans"
      onClick={triggerConfetti}
    >
      {confetti.map((c) => (
        <div
          key={c.id}
          className="absolute text-2xl pointer-events-none z-[100] animate-pop"
          style={{ left: c.x, top: c.y }}
        >
          {c.emoji}
        </div>
      ))}

      <style>{`
        .font-hand { fontFamily: 'Patrick Hand', cursive; }
        .font-mono { fontFamily: 'Space Mono', monospace; }
        @keyframes pop {
            0% { transform: translateY(0) scale(1); opacity: 1; }
            100% { transform: translateY(-100px) scale(1.5) rotate(20deg); opacity: 0; }
        }
        .animate-pop {
            animation: pop 1s ease-out forwards;
        }
      `}</style>

      {/* BACKGROUND */}
      <div
        className="fixed inset-0 opacity-10 pointer-events-none z-0"
        style={{
          backgroundImage: "radial-gradient(#444 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>
      <DoodleSticker className="top-[20%] left-[5%] rotate-12">
        ✨
      </DoodleSticker>
      <DoodleSticker className="top-[80%] left-[10%] -rotate-12">
        〰️
      </DoodleSticker>
      <DoodleSticker className="top-[30%] right-[8%] rotate-6">
        ⭐
      </DoodleSticker>
      <DoodleSticker className="bottom-[10%] right-[5%] -rotate-6">
        🚀
      </DoodleSticker>

      {/* NAV */}
      <nav className="fixed w-full z-50 top-0 left-0 px-4 py-4 md:px-8">
        <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-sm border-2 border-black rounded-full px-6 py-3 flex justify-between items-center shadow-[4px_4px_0px_rgba(0,0,0,0.1)]">
          <Link
            to="/"
            className="font-hand text-2xl font-bold flex items-center gap-1.5"
          >
            <span className="text-blue-500">&lt;/&gt;</span>
            <span>@devang1304</span>
          </Link>
          <div className="hidden md:flex gap-6 font-hand text-lg">
            <Link
              to="/experience"
              className={`hover:text-blue-600 transition-colors ${
                location.pathname === "/experience"
                  ? "text-blue-600 underline decoration-wavy"
                  : ""
              }`}
            >
              Experience
            </Link>
            {location.pathname === "/" ? (
              <>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="hover:text-blue-600 transition-colors bg-transparent border-none cursor-pointer"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("papers")}
                  className="hover:text-blue-600 transition-colors bg-transparent border-none cursor-pointer"
                >
                  Papers
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/#projects" // Simple link for now, could be improved with hash routing logic
                  className="hover:text-blue-600 transition-colors"
                >
                  Projects
                </Link>
                <Link
                  to="/#papers"
                  className="hover:text-blue-600 transition-colors"
                >
                  Papers
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      <main className="relative z-20 max-w-6xl mx-auto pt-32 px-4 md:px-8 pb-20">
        {children}

        {/* --- FOOTER --- */}
        <footer
          id="contact"
          className="text-center border-t-2 border-dashed border-slate-300 pt-12 pb-8 mt-16"
        >
          <h3 className="font-hand text-3xl font-bold mb-6">Let's Connect.</h3>
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="mailto:devangdhanuka@gmail.com"
              className="flex items-center gap-2 font-mono hover:text-blue-600 transition-colors"
            >
              <Mail size={20} /> devangdhanuka@gmail.com
            </a>
          </div>
          <p className="font-mono text-xs text-slate-400">
            &copy; {new Date().getFullYear()} Devang Dhanuka.
          </p>
        </footer>
      </main>
    </div>
  );
}
