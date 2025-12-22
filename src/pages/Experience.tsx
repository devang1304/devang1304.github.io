import React from "react";
import { Briefcase } from "lucide-react";
import {
  SectionTitle,
  YearMarker,
  TimelineCard,
} from "../components/UIComponents";
import { experienceData, educationData } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="mb-32">
      <SectionTitle
        title="Education & Experience"
        icon={Briefcase}
        onClick={undefined}
      />
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-300 hidden md:block border-l-2 border-dashed border-slate-400 -z-10"></div>
        <div className="space-y-8">
          <YearMarker year={2026} />
          <TimelineCard item={experienceData[0]} type="experience" idx={0} />
          <YearMarker year={2024} />
          <TimelineCard item={educationData[0]} type="education" idx={1} />
          <YearMarker year={2023} />
          <TimelineCard item={experienceData[1]} type="experience" idx={2} />
          <YearMarker year={2020} />
          <TimelineCard item={educationData[1]} type="education" idx={3} />
          <YearMarker year={2017} />
        </div>
      </div>
    </section>
  );
}
