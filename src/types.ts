export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  note?: string;
  details: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  location: string;
  note?: string;
}

export interface Project {
  title: string;
  tech: string;
  period: string;
  link: string;
  desc: string;
  isPrivate?: boolean;
}

export interface Publication {
  title: string;
  authors: string;
  link: string;
  desc: string;
}

export type PersonalCategory =
  | "Motorsports"
  | "Concert"
  | "Travel"
  | "Road Trip"
  | "Adventure"
  | "Event";

export interface PersonalEvent {
  title: string;
  category: PersonalCategory;
  date: string;
  location: string;
  note?: string;
  media?: {
    type: "image" | "video";
    src: string;
  };
}

export type TimelineItemType = "experience" | "education" | "personal";

export interface TimelineItem {
  type: TimelineItemType;
  role?: string;
  company?: string;
  degree?: string;
  school?: string;
  title?: string;
  category?: PersonalCategory;
  period?: string;
  date?: string;
  location?: string;
  note?: string;
  media?: {
    type: "image" | "video";
    src: string;
  };
  details?: string[];
}
