import React from "react";
import {
  Briefcase,
  GraduationCap,
  User,
  Ticket,
  Plane,
  Heart,
  Car,
  Mountain,
  Palmtree,
  Trophy,
  Music,
  X,
} from "lucide-react";

export const DoodleCard = ({
  children,
  className = "",
  rotate = "0deg",
  bgColor = "bg-white",
}: {
  children: React.ReactNode;
  className?: string;
  rotate?: string;
  bgColor?: string;
}) => (
  <div
    className={`${bgColor} p-5 relative shadow-[5px_5px_0px_#2d2d2d] transition-all duration-200 ease-out hover:scale-[1.02] hover:shadow-[8px_8px_0px_#2d2d2d] active:scale-[1.01] active:translate-y-0.5 active:shadow-[4px_4px_0px_#2d2d2d] ${className}`}
    style={{
      borderRadius: "30px 225px 15px 255px / 255px 15px 225px 20px",
      border: "4px solid #2d2d2d",
      transform: `rotate(${rotate})`,
    }}
  >
    {children}
  </div>
);

export const StickyNote = ({
  children,
  color = "bg-yellow-200",
  rotate = "2deg",
  className = "",
}: {
  children: React.ReactNode;
  color?: string;
  rotate?: string;
  className?: string;
}) => (
  <div
    className={`${color} p-6 text-slate-800 font-medium w-full relative shadow-[5px_5px_0px_#2d2d2d] transition-all duration-200 ease-out hover:scale-[1.02] hover:shadow-[8px_8px_0px_#2d2d2d] active:scale-[1.01] active:translate-y-0.5 active:shadow-[4px_4px_0px_#2d2d2d] ${className}`}
    style={{
      borderRadius: "255px 25px 225px 25px / 25px 225px 35px 255px",
      border: "4px solid #2d2d2d",
      transform: `rotate(${rotate})`,
    }}
  >
    {children}
  </div>
);

export const HandButton = ({
  children,
  primary = true,
  onClick,
  href,
  download,
}: {
  children: React.ReactNode;
  primary?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  href?: string;
  download?: boolean;
}) => {
  const primaryClasses =
    "bg-[#3b82f6] text-white shadow-[4px_4px_0px_#2d2d2d] hover:shadow-[6px_6px_0px_#2d2d2d] active:shadow-[2px_2px_0px_#2d2d2d]";
  const secondaryClasses =
    "bg-white text-slate-800 shadow-[4px_4px_0px_#cbd5e1] hover:shadow-[6px_6px_0px_#cbd5e1] active:shadow-[2px_2px_0px_#cbd5e1]";

  const commonStyles = {
    border: "3px solid #2d2d2d",
    borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
    textDecoration: "none",
  };

  const commonClassName = `px-6 py-3 font-bold text-lg transition-all duration-150 ease-out flex items-center gap-2 justify-center
      hover:-translate-y-0.5 active:translate-y-0.5
      ${primary ? primaryClasses : secondaryClasses}`;

  if (href) {
    return (
      <a
        href={href}
        download={download}
        onClick={onClick}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        className={commonClassName}
        style={commonStyles}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={commonClassName} style={commonStyles}>
      {children}
    </button>
  );
};

export const SectionTitle = ({
  title,
  icon: Icon,
  className = "",
  onClick,
}: {
  title: string;
  icon: React.ElementType;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}) => (
  <div
    className={`group flex items-center gap-3 mb-10 cursor-pointer w-fit ${className}`}
    onClick={onClick}
  >
    <div className="p-2 bg-black text-white rounded-lg rotate-[-3deg] transition-all duration-200 ease-out group-hover:rotate-[-8deg] group-hover:scale-110 group-active:scale-100 group-active:rotate-[-3deg]">
      {Icon && <Icon size={24} />}
    </div>
    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 underline decoration-wavy decoration-blue-400 underline-offset-4 font-hand transition-colors group-hover:text-blue-600">
      {title}
    </h2>
  </div>
);

export const SkillTag = ({
  children,
  rotate,
}: {
  children: React.ReactNode;
  rotate: string;
}) => (
  <div
    className="bg-yellow-200 px-4 py-1 font-hand text-lg font-bold transition-transform duration-150 ease-in-out hover:scale-110 hover:z-10 active:scale-105"
    style={{
      border: "2px solid #2d2d2d",
      boxShadow: "2px 2px 0px #2d2d2d",
      borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
      transform: `rotate(${rotate})`,
    }}
  >
    {children}
  </div>
);

export const YearMarker = ({ year }: { year: number }) => (
  <div className="relative flex flex-col items-center justify-center -ml-16 mr-8 z-0">
    <div className="w-0.5 h-6 bg-slate-400 mb-2"></div>
    <span className="font-mono text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded border border-slate-300">
      {year}
    </span>
  </div>
);

// Custom hook for responsive behavior
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = React.useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  });

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [query]);

  return matches;
};

export const TimelineCard = ({
  item,
  type,
  idx,
  color = "bg-white",
  side = "left",
}: {
  item: any;
  type: "experience" | "education" | "personal";
  idx: number;
  color?: string;
  side?: "left" | "right";
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const cardRef = React.useRef<HTMLDivElement>(null);

  const title =
    type === "experience"
      ? item.role
      : type === "education"
      ? item.degree
      : item.title;

  const subtitle =
    type === "experience"
      ? item.company
      : type === "education"
      ? item.school
      : item.category;

  const period = type === "personal" ? item.date : item.period;

  const hasExpandableContent = item.note || item.media;

  // Click to toggle for both mobile and desktop
  const handleCardClick = () => {
    if (hasExpandableContent) {
      setIsExpanded(!isExpanded);
    }
  };

  // Close popup when clicking outside
  React.useEffect(() => {
    if (!isExpanded || !isDesktop) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    };

    // Add slight delay to prevent immediate close
    const timer = setTimeout(() => {
      document.addEventListener("click", handleClickOutside);
    }, 100);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isExpanded, isDesktop]);

  // Escape key to close
  React.useEffect(() => {
    if (!isExpanded) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsExpanded(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isExpanded]);

  return (
    <div
      className={`relative flex items-center w-full md:w-1/2 ${
        side === "left" ? "md:pr-12 md:justify-end" : "md:pl-12 md:ml-auto"
      }`}
    >
      {/* Timeline Dot */}
      <div
        className={`absolute hidden md:block w-4 h-4 rounded-full border-2 border-black z-20
          ${type === "personal" ? "bg-pink-400" : "bg-blue-500"}
          ${
            side === "left"
              ? "right-0 translate-x-1/2"
              : "left-0 -translate-x-1/2"
          }
        `}
      />

      {/* Mobile Dot */}
      <div
        className={`absolute md:hidden left-0 w-4 h-4 rounded-full border-2 border-black z-20 -translate-x-1/2
          ${type === "personal" ? "bg-pink-400" : "bg-blue-500"}
        `}
      />

      {/* Card Container */}
      <div ref={cardRef} className="w-full md:w-[600px] pl-6 md:pl-0 relative">
        {/* Base Card - On mobile shows inline expansion, on desktop fades out for popup */}
        <DoodleCard
          rotate={idx % 2 === 0 ? "0.5deg" : "-0.5deg"}
          bgColor={color}
          className={`cursor-pointer transition-all duration-300 ease-out relative ${
            isDesktop && isExpanded && hasExpandableContent
              ? "opacity-0"
              : "opacity-100"
          }`}
        >
          <div className="flex flex-col gap-2" onClick={handleCardClick}>
            {/* Title only in collapsed view */}
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-hand font-bold text-slate-900 leading-tight">
                {title}
              </h3>
            </div>
            {/* Date and Expand Row */}
            <div className="flex items-center justify-between">
              <span className="px-2 py-0.5 bg-yellow-100 border border-black rounded-full font-mono text-[10px] font-bold whitespace-nowrap shadow-[2px_2px_0px_#2d2d2d]">
                {period}
              </span>
              {hasExpandableContent && (
                <span
                  className={`flex items-center justify-center w-8 h-8 text-sm text-slate-400 transition-transform duration-300 ${
                    !isDesktop && isExpanded ? "rotate-180" : ""
                  }`}
                  aria-label={isExpanded ? "Collapse" : "Expand"}
                >
                  ▼
                </span>
              )}
            </div>

            {/* Mobile Inline Expansion */}
            {!isDesktop && (
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isExpanded
                    ? "max-h-[600px] opacity-100 mt-3"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="border-t-2 border-dashed border-slate-300 pt-3">
                  {/* Subtitle and Location */}
                  <p className="text-slate-600 font-mono text-xs mb-2">
                    {subtitle}
                    {item.location && ` • ${item.location}`}
                  </p>
                  {/* Category Icon for Personal */}
                  {type === "personal" && (
                    <div className="flex items-center gap-2 text-slate-500 font-mono text-xs mb-2">
                      {item.category === "Motorsports" ||
                      item.category === "Road Trip" ? (
                        <Car size={14} />
                      ) : item.category === "Adventure" ? (
                        <Mountain size={14} />
                      ) : item.category === "Travel" ? (
                        <Palmtree size={14} />
                      ) : item.category === "Concert" ? (
                        <Music size={14} />
                      ) : item.category === "Event" ? (
                        <Trophy size={14} />
                      ) : (
                        <Heart size={14} />
                      )}
                      <span>{item.category}</span>
                    </div>
                  )}

                  {/* Note */}
                  {item.note && (
                    <p className="font-hand text-base text-slate-700 italic">
                      "{item.note}"
                    </p>
                  )}

                  {/* Media */}
                  {item.media && (
                    <div className="mt-3 rounded-lg overflow-hidden border-2 border-black shadow-[3px_3px_0px_#2d2d2d] bg-black">
                      {item.media.type === "video" ? (
                        <video
                          src={item.media.src}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full object-cover"
                        />
                      ) : (
                        <img
                          src={item.media.src}
                          alt="Memory"
                          className="w-full object-cover"
                        />
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </DoodleCard>

        {/* Desktop Popup Card - Absolute positioned, expands over timeline */}
        {isDesktop && (
          <div
            className={`absolute top-1/2 z-50 transition-all duration-300 ease-out origin-center pointer-events-none
              ${
                side === "left"
                  ? "right-0 md:right-auto md:left-1/2"
                  : "left-0 md:left-auto md:right-1/2"
              }
              ${
                isExpanded && hasExpandableContent
                  ? "opacity-100 scale-100 pointer-events-auto -translate-y-1/2"
                  : "opacity-0 scale-95 -translate-y-1/2"
              }`}
            style={{
              width: item.media ? "min(900px, 90vw)" : "min(600px, 90vw)",
              transform:
                isExpanded && hasExpandableContent
                  ? `translateY(-50%) translateX(${
                      side === "left" ? "-30%" : "30%"
                    })`
                  : "translateY(-50%) scale(0.95)",
            }}
          >
            <div
              className={`${color} p-6 relative shadow-[8px_8px_0px_#2d2d2d]`}
              style={{
                borderRadius: "30px 225px 15px 255px / 255px 15px 225px 20px",
                border: "4px solid #2d2d2d",
              }}
            >
              {/* Close Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(false);
                }}
                className="absolute top-3 right-3 p-1.5 bg-slate-100 hover:bg-slate-200 rounded-full border-2 border-black shadow-[2px_2px_0px_#2d2d2d] hover:shadow-[3px_3px_0px_#2d2d2d] active:shadow-[1px_1px_0px_#2d2d2d] active:translate-y-0.5 transition-all z-10"
                aria-label="Close"
              >
                <X size={16} />
              </button>

              <div
                className={`flex ${item.media ? "flex-row" : "flex-col"} gap-4`}
              >
                {/* Left Side - Content */}
                <div className={`flex-1 ${item.media ? "w-1/2" : "w-full"}`}>
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-hand font-bold text-slate-900 leading-tight">
                        {title}
                      </h3>
                      <p className="text-slate-600 font-mono text-xs mt-1">
                        {subtitle}
                        {item.location && ` • ${item.location}`}
                      </p>
                    </div>
                    <span className="px-2 py-0.5 bg-yellow-100 border border-black rounded-full font-mono text-[10px] font-bold whitespace-nowrap shadow-[2px_2px_0px_#2d2d2d]">
                      {period}
                    </span>
                  </div>

                  {/* Category Icon for Personal */}
                  {type === "personal" && (
                    <div className="flex items-center gap-2 text-slate-500 font-mono text-xs mb-2">
                      {item.category === "Motorsports" ||
                      item.category === "Road Trip" ? (
                        <Car size={14} />
                      ) : item.category === "Adventure" ? (
                        <Mountain size={14} />
                      ) : item.category === "Travel" ? (
                        <Palmtree size={14} />
                      ) : item.category === "Concert" ? (
                        <Music size={14} />
                      ) : item.category === "Event" ? (
                        <Trophy size={14} />
                      ) : (
                        <Heart size={14} />
                      )}
                      <span>{item.category}</span>
                    </div>
                  )}

                  {/* Note */}
                  {item.note && (
                    <p className="font-hand text-base text-slate-700 italic border-t-2 border-dashed border-slate-300 pt-3">
                      "{item.note}"
                    </p>
                  )}
                </div>

                {/* Right Side - Media */}
                {item.media && (
                  <div className="w-1/2 flex-shrink-0">
                    <div className="rounded-lg overflow-hidden border-2 border-black shadow-[3px_3px_0px_#2d2d2d] bg-black h-full">
                      {item.media.type === "video" ? (
                        <video
                          src={item.media.src}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-full object-cover max-h-[300px]"
                        />
                      ) : (
                        <img
                          src={item.media.src}
                          alt="Memory"
                          className="w-full h-full object-cover max-h-[300px]"
                        />
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const DoodleSticker = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => (
  <div
    className={`absolute text-3xl text-slate-300/70 pointer-events-none -z-10 hidden md:block ${className}`}
  >
    {children}
  </div>
);
