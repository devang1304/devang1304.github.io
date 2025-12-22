import React, { useEffect } from "react";
import { Briefcase } from "lucide-react";
import {
  SectionTitle,
  YearMarker,
  TimelineCard,
} from "../components/UIComponents";
import { experienceData, educationData, personalData } from "../data/content";

export default function Experience() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  const combinedData = [
    ...experienceData.map((d) => ({ ...d, type: "experience" as const })),
    ...educationData.map((d) => ({ ...d, type: "education" as const })),
    ...personalData.map((d) => ({ ...d, type: "personal" as const })),
  ].sort((a, b) => {
    const getDate = (item: any) => {
      const dateStr = (item.period || item.date).split("--")[0].trim();
      const parts = dateStr.split(" ");

      // Handle single-word dates like "2024"
      if (parts.length === 1) {
        return new Date(parseInt(parts[0]), 0);
      }

      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const seasonMap: Record<string, number> = {
        Spring: 3,
        Summer: 6,
        Fall: 9,
        Winter: 11,
      };

      const [first, second] = parts;
      const monthIdx = months.indexOf(first);

      if (monthIdx !== -1) {
        return new Date(parseInt(second), monthIdx);
      }

      // Handle "Summer 2024" format
      if (first in seasonMap) {
        return new Date(parseInt(second), seasonMap[first]);
      }

      return new Date(parseInt(second || first), 0);
    };
    return getDate(b).getTime() - getDate(a).getTime();
  });

  const colors = [
    "bg-yellow-100",
    "bg-blue-100",
    "bg-green-100",
    "bg-pink-100",
    "bg-purple-100",
    "bg-orange-100",
    "bg-rose-100",
    "bg-cyan-100",
  ];

  const getItemYear = (item: any) => {
    if (!item) return null;
    const dateStr = (item.period || item.date || "").split("--")[0].trim();
    return dateStr.includes(" ") ? dateStr.split(" ")[1] : dateStr;
  };

  return (
    <section id="experience" className="min-h-screen w-full py-12 px-6 md:px-8">
      <SectionTitle
        title="Experience & Adventures"
        icon={Briefcase}
        className="mb-12"
        onClick={undefined}
      />

      {/* Vertical Timeline Container */}
      <div className="relative max-w-7xl mx-auto">
        {/* Central Timeline Spine */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-slate-300 via-slate-400 to-slate-300 md:-translate-x-1/2" />

        {/* Timeline Items - Responsive spacing: no overlap mobile, slight overlap tablet, more on desktop */}
        <div className="flex flex-col space-y-6 md:-space-y-12 lg:-space-y-10">
          {combinedData.map((item: any, idx) => {
            const year = getItemYear(item);
            const prevYear = getItemYear(combinedData[idx - 1]);
            const side = idx % 2 === 0 ? "left" : "right";

            return (
              <React.Fragment key={idx}>
                {/* Year Marker */}
                {(!prevYear || year !== prevYear) && (
                  <div className="relative flex items-center md:justify-center py-4 md:py-2 pl-6 md:pl-0">
                    <div className="absolute left-0 md:left-1/2 w-0.5 h-full bg-slate-300 md:-translate-x-1/2" />
                    <div className="relative z-10 bg-white px-4 py-2 border-2 border-black rounded-full shadow-[3px_3px_0px_#2d2d2d] font-mono text-sm font-bold">
                      {year}
                    </div>
                  </div>
                )}

                {/* Timeline Card */}
                <TimelineCard
                  item={item}
                  type={item.type}
                  idx={idx}
                  color={colors[idx % colors.length]}
                  side={side}
                />
              </React.Fragment>
            );
          })}
        </div>

        {/* End Marker */}
        <div className="relative flex items-center justify-center py-4">
          <div className="absolute left-0 md:left-1/2 top-0 h-1/2 w-0.5 bg-slate-300 md:-translate-x-1/2" />
          <div className="relative z-10 bg-slate-800 text-white px-4 py-2 rounded-full font-mono text-xs font-bold shadow-[3px_3px_0px_#2d2d2d]">
            The Journey Continues...
          </div>
        </div>
      </div>
    </section>
  );
}
