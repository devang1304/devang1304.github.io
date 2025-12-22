import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Mail, Menu, X } from "lucide-react";
import { DoodleSticker } from "./UIComponents";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [confetti, setConfetti] = useState<
    { id: number; x: number; y: number; emoji: string }[]
  >([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const location = useLocation();

  const triggerConfetti = (e: React.MouseEvent<HTMLElement>) => {
    const x = e.pageX;
    const y = e.pageY;
    const newConfetti = Array.from({ length: 1 }).map(() => ({
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
      const idsToRemove = new Set(newConfetti.map((n) => n.id));
      setConfetti((c) => c.filter((item) => !idsToRemove.has(item.id)));
    }, 2000);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  // Track active section based on scroll position (only on home page)
  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection(null);
      return;
    }

    const handleScroll = () => {
      const sections = ["papers", "projects"];
      const scrollPosition = window.scrollY + 150;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      setActiveSection(null);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const isActiveLink = (path: string, hash?: string) => {
    if (path === "/" && !hash) {
      return location.pathname === "/" && activeSection === null;
    }
    if (hash === "papers") {
      return activeSection === "papers";
    }
    return location.pathname === path;
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
        @media (prefers-reduced-motion: reduce) {
            .animate-pop {
                animation: none;
                opacity: 0;
            }
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
            onClick={(e) => {
              if (location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="font-hand text-2xl font-bold flex items-center gap-1.5"
          >
            <span className="text-blue-500">&lt;/&gt;</span>
            <span>@devang1304</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-6 font-hand text-lg">
            <Link
              to="/"
              onClick={(e) => {
                if (location.pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className={`hover:text-blue-600 transition-colors ${
                isActiveLink("/")
                  ? "text-blue-600 underline decoration-wavy"
                  : ""
              }`}
            >
              Home
            </Link>
            {location.pathname === "/" ? (
              <button
                onClick={() => scrollToSection("papers")}
                className={`hover:text-blue-600 transition-colors bg-transparent border-none cursor-pointer font-hand text-lg ${
                  isActiveLink("/", "papers")
                    ? "text-blue-600 underline decoration-wavy"
                    : ""
                }`}
              >
                Publications
              </button>
            ) : (
              <Link
                to="/#papers"
                className="hover:text-blue-600 transition-colors"
              >
                Publications
              </Link>
            )}
            <Link
              to="/experience"
              className={`hover:text-blue-600 transition-colors ${
                isActiveLink("/experience")
                  ? "text-blue-600 underline decoration-wavy"
                  : ""
              }`}
            >
              Experiences
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden p-2 hover:bg-slate-100 rounded-full transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 md:hidden transform transition-transform duration-300 ease-out shadow-[-4px_0_20px_rgba(0,0,0,0.15)] ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 pt-20">
          <nav className="flex flex-col gap-4 font-hand text-xl">
            <Link
              to="/"
              onClick={(e) => {
                if (location.pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
                setMobileMenuOpen(false);
              }}
              className={`py-3 px-4 rounded-lg hover:bg-slate-100 transition-colors ${
                isActiveLink("/") ? "bg-blue-50 text-blue-600" : ""
              }`}
            >
              Home
            </Link>
            {location.pathname === "/" ? (
              <button
                onClick={() => scrollToSection("papers")}
                className={`py-3 px-4 rounded-lg hover:bg-slate-100 transition-colors text-left font-hand text-xl ${
                  isActiveLink("/", "papers") ? "bg-blue-50 text-blue-600" : ""
                }`}
              >
                Publications
              </button>
            ) : (
              <Link
                to="/#papers"
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 px-4 rounded-lg hover:bg-slate-100 transition-colors"
              >
                Publications
              </Link>
            )}
            <Link
              to="/experience"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-3 px-4 rounded-lg hover:bg-slate-100 transition-colors ${
                isActiveLink("/experience") ? "bg-blue-50 text-blue-600" : ""
              }`}
            >
              Experiences
            </Link>
          </nav>

          <div className="mt-8 pt-6 border-t border-slate-200">
            <a
              href="mailto:devangdhanuka@gmail.com"
              className="flex items-center gap-2 font-mono text-sm text-slate-600 hover:text-blue-600 transition-colors"
            >
              <Mail size={16} /> devangdhanuka@gmail.com
            </a>
          </div>
        </div>
      </div>

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
