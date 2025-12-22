import React from "react";
import { Briefcase, Sparkles } from "lucide-react";
import {
  SectionTitle,
  YearMarker,
  TimelineCard,
} from "../components/UIComponents";
import { experienceData, educationData, personalData } from "../data/content";

export default function Experience() {
  // Combine and sort data
  const combinedData = [
    ...experienceData.map((d) => ({ ...d, type: "experience" })),
    ...educationData.map((d) => ({ ...d, type: "education" })),
    ...personalData.map((d) => ({ ...d, type: "personal" })),
  ].sort((a, b) => {
    const getDate = (item: any) => {
      // Handle range "Oct 2024 -- Dec 2025" or single "Sep 2024"
      const dateStr = (item.period || item.date).split("--")[0].trim();
      const [month, year] = dateStr.split(" ");
      const monthIdx = [
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
      ].indexOf(month);
      return new Date(parseInt(year), monthIdx);
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
  ];

  const getItemYear = (item: any) => {
    if (!item) return null;
    const dateStr = (item.period || item.date || "").split("--")[0].trim();
    return dateStr.includes(" ") ? dateStr.split(" ")[1] : dateStr;
  };

  return (
    <section id="experience" className="mb-32">
      <SectionTitle
        title="Experience & Adventures"
        icon={Briefcase}
        onClick={undefined}
      />

      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-300 hidden md:block border-l-2 border-dashed border-slate-400 -z-10"></div>
        <div className="space-y-8">
          {combinedData.map((item: any, idx) => {
            const year = getItemYear(item);
            const prevYear = getItemYear(combinedData[idx - 1]);

            return (
              <React.Fragment key={idx}>
                {(!prevYear || year !== prevYear) && (
                  <YearMarker year={parseInt(year)} />
                )}
                {/* @ts-ignore */}
                <TimelineCard
                  item={item}
                  type={item.type}
                  idx={idx}
                  color={colors[idx % colors.length]}
                />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
