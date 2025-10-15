import { useMemo, useState, type CSSProperties } from "react";
import timeline from "@/content/timeline.json";
import type { TimelineItem } from "@/types/content";
import {
  compareTimelineItems,
  formatTimelineRange,
  getMonthIndex,
  getYearFromDateValue
} from "@/utils/date";
import SectionHeading from "./SectionHeading";
import "./TimelineSection.css";

const allTimelineItems = [...(timeline as TimelineItem[])].sort(
  compareTimelineItems
);

const timelineBounds = (() => {
  const startMonths = allTimelineItems.map((item) => getMonthIndex(item.start));
  const endMonths = allTimelineItems.map((item) =>
    getMonthIndex(item.end, { inclusiveEnd: true })
  );
  const minMonth = Math.min(...startMonths);
  const maxMonth = Math.max(...endMonths);
  const minYear = Math.min(
    ...allTimelineItems.map((item) => getYearFromDateValue(item.start))
  );
  const maxYear = Math.max(
    ...allTimelineItems.map((item) => getYearFromDateValue(item.end))
  );

  return { minMonth, maxMonth, minYear, maxYear };
})();

const TimelineSection = () => {
  const [highlightRange, setHighlightRange] =
    useState<{ start: number; end: number } | null>(null);

  const filteredItems = allTimelineItems;

  const totalSpan = Math.max(1, timelineBounds.maxMonth - timelineBounds.minMonth);

  const clampPercent = (value: number) => Math.max(0, Math.min(100, value));

  const years = useMemo(() => {
    const list: number[] = [];
    for (let year = timelineBounds.minYear; year <= timelineBounds.maxYear; year += 1) {
      list.push(year);
    }
    return list;
  }, []);

  const yearOffsets = useMemo(() => {
    return years.map((year) => {
      const monthIndex = getMonthIndex(`${year}-01`);
      const percent = ((timelineBounds.maxMonth - monthIndex) / totalSpan) * 100;
      return Math.max(2, Math.min(98, clampPercent(percent)));
    });
  }, [years, totalSpan]);

  const highlightStyles = useMemo(() => {
    if (!highlightRange) {
      return {
        "--highlight-start": "0%",
        "--highlight-end": "0%",
        "--highlight-opacity": "0"
      } as CSSProperties;
    }

    const toPercent = (month: number) =>
      clampPercent(((timelineBounds.maxMonth - month) / totalSpan) * 100);

    const start = toPercent(highlightRange.start);
    const end = toPercent(highlightRange.end);
    const top = Math.min(start, end);
    const bottom = Math.max(start, end);
    const adjustedBottom = bottom === top ? Math.min(100, top + 1) : bottom;

    return {
      "--highlight-start": `${top}%`,
      "--highlight-end": `${adjustedBottom}%`,
      "--highlight-opacity": "1"
    } as CSSProperties;
  }, [highlightRange, totalSpan]);

  const handleHighlight = (item: TimelineItem) => {
    setHighlightRange({
      start: getMonthIndex(item.start),
      end: getMonthIndex(item.end, { inclusiveEnd: true })
    });
  };

  const clearHighlight = () => {
    setHighlightRange(null);
  };

  return (
    <section className="container surface timeline-section" id="timeline">
      <SectionHeading
        eyebrow="Journey"
        title="Timeline of school and work."
      />

      <div className="timeline-body">
        <div className="timeline-axis" style={highlightStyles} aria-hidden="true">
          {years.map((year, index) => (
            <div
              className="timeline-axis-year"
              key={year}
              style={{ top: `${yearOffsets[index]}%` }}
            >
              {year}
            </div>
          ))}
        </div>

        <div className="timeline-list" role="list">
          {filteredItems.map((item) => (
            <article
              className="timeline-card"
              key={item.id}
              role="listitem"
              onMouseEnter={() => handleHighlight(item)}
              onMouseLeave={clearHighlight}
              onFocus={() => handleHighlight(item)}
              onBlur={clearHighlight}
            >
              <div className="timeline-header" tabIndex={0}>
                <div className="timeline-meta">
                  <span className={`timeline-chip ${item.category}`}>{item.category}</span>
                  <p className="timeline-period">
                    {formatTimelineRange(item.start, item.end)}
                  </p>
                </div>
                <h3>{item.title}</h3>
                <p className="timeline-organization">{item.organization}</p>
              </div>

              <div className="timeline-details">
                <p className="timeline-summary">{item.summary}</p>
                <ul className="timeline-highlights">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <div className="timeline-tags">
                  {item.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}

          {filteredItems.length === 0 ? (
            <div className="timeline-empty surface" role="status">
              <p>No entries match the selected filters right now.</p>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
