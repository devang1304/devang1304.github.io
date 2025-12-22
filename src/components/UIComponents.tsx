import React from "react";
import { Briefcase, GraduationCap, User } from "lucide-react";

export const DoodleCard = ({
  children,
  className = "",
  rotate = "0deg",
}: {
  children: React.ReactNode;
  className?: string;
  rotate?: string;
}) => (
  <div
    className={`bg-white p-6 relative shadow-[5px_5px_0px_#2d2d2d] transition-all duration-200 ease-out hover:scale-[1.02] hover:shadow-[8px_8px_0px_#2d2d2d] active:scale-[1.01] active:translate-y-0.5 active:shadow-[4px_4px_0px_#2d2d2d] ${className}`}
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
  const Component = href ? "a" : "button";
  const primaryClasses =
    "bg-[#3b82f6] text-white shadow-[4px_4px_0px_#2d2d2d] hover:shadow-[6px_6px_0px_#2d2d2d] active:shadow-[2px_2px_0px_#2d2d2d]";
  const secondaryClasses =
    "bg-white text-slate-800 shadow-[4px_4px_0px_#cbd5e1] hover:shadow-[6px_6px_0px_#cbd5e1] active:shadow-[2px_2px_0px_#cbd5e1]";

  return (
    // @ts-ignore
    <Component
      href={href}
      download={download}
      onClick={onClick}
      target={
        href?.startsWith("http") || href?.startsWith("#") ? undefined : "_blank"
      }
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
      className={`px-6 py-3 font-bold text-lg transition-all duration-150 ease-out flex items-center gap-2 justify-center
      hover:-translate-y-0.5 active:translate-y-0.5
      ${primary ? primaryClasses : secondaryClasses}`}
      style={{
        border: "3px solid #2d2d2d",
        borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
        textDecoration: "none",
      }}
    >
      {children}
    </Component>
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
  <div className="relative h-8 flex items-center">
    <div className="absolute left-4 -translate-x-1/2">
      <span className="bg-[#f8f5f2] px-2 font-hand text-2xl font-bold text-slate-400">
        {year}
      </span>
    </div>
  </div>
);

export const TimelineCard = ({
  item,
  type,
  idx,
}: {
  item: any;
  type: "experience" | "education";
  idx: number;
}) => (
  <div className="relative md:pl-12">
    <div className="absolute left-4 -translate-x-1/2 top-8 w-5 h-5 bg-blue-500 rounded-full border-2 border-black hidden md:block z-10"></div>
    <DoodleCard rotate={idx % 2 === 0 ? "1deg" : "-1deg"}>
      <div
        className={`flex flex-col md:flex-row justify-between pb-4 ${
          type === "experience"
            ? "mb-4 border-b-2 border-dashed border-slate-200"
            : ""
        }`}
      >
        <div>
          <h3 className="text-2xl font-hand font-bold text-slate-900">
            {type === "experience" ? item.role : item.degree}
          </h3>
          <div className="flex items-center gap-2 text-slate-600 font-mono text-sm mt-1">
            {type === "experience" ? (
              <Briefcase size={16} />
            ) : (
              <GraduationCap size={16} />
            )}
            {type === "experience" ? item.company : item.school}
            <span className="hidden md:inline">|</span>
            <span className="flex items-center gap-1">
              <User size={14} /> {item.location}
            </span>
          </div>
        </div>
        <div className="mt-2 md:mt-0 px-3 py-1 bg-yellow-100 border-2 border-black rounded-full self-start font-mono text-xs font-bold whitespace-nowrap">
          {item.period}
        </div>
      </div>
      {type === "experience" && item.details && (
        <ul className="space-y-2">
          {item.details.map((detail: string, i: number) => (
            <li
              key={i}
              className="flex items-start gap-2 font-hand text-lg text-slate-700"
            >
              <span className="text-blue-500 mt-1">➜</span> {detail}
            </li>
          ))}
        </ul>
      )}
    </DoodleCard>
  </div>
);

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
