const MONTHS = [
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
  "Dec"
];

const PRESENT_VALUE = "present";

const toDateParts = (value: string) => {
  const [year, month] = value.split("-").map(Number);
  return { year, month: Math.max(1, Math.min(12, month || 1)) };
};

const resolvePresentParts = () => {
  const now = new Date();
  return { year: now.getFullYear(), month: now.getMonth() + 1 };
};

const resolveDateParts = (value: string) => {
  if (value.toLowerCase() === PRESENT_VALUE) {
    return resolvePresentParts();
  }
  return toDateParts(value);
};

export const formatDate = (value: string) => {
  if (value.toLowerCase() === PRESENT_VALUE) {
    return "Present";
  }

  const { year, month } = toDateParts(value);
  return `${MONTHS[month - 1]} ${year}`;
};

export const formatTimelineRange = (start: string, end: string) => {
  return `${formatDate(start)} — ${formatDate(end)}`;
};

export const getYearFromDateValue = (value: string) => {
  return resolveDateParts(value).year;
};

export const getMonthIndex = (
  value: string,
  options?: { inclusiveEnd?: boolean }
) => {
  const { year, month } = resolveDateParts(value);
  const base = year * 12 + (month - 1);
  return options?.inclusiveEnd ? base + 1 : base;
};

export const compareTimelineItems = (
  a: { start: string; end: string },
  b: { start: string; end: string }
) => {
  const endComparison =
    getMonthIndex(b.end, { inclusiveEnd: true }) -
    getMonthIndex(a.end, { inclusiveEnd: true });
  if (endComparison !== 0) {
    return endComparison;
  }

  return getMonthIndex(b.start) - getMonthIndex(a.start);
};
