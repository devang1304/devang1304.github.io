export type TimelineCategory = "work" | "education";

export type CallToAction = {
  label: string;
  href: string;
  external?: boolean;
};

export type HeroMetric = {
  label: string;
  value: string;
  detail: string;
};

export type HeroContent = {
  name: string;
  title: string;
  tagline: string;
  description: string;
  location: string;
  cta: {
    primary: CallToAction;
    secondary?: CallToAction;
  };
  metrics: HeroMetric[];
};

export type TimelineItem = {
  id: string;
  title: string;
  organization: string;
  location: string;
  category: TimelineCategory;
  start: string;
  end: string;
  summary: string;
  highlights: string[];
  tags: string[];
};

export type Project = {
  id: string;
  name: string;
  period: string;
  summary: string;
  outcomes: string[];
  tech: string[];
  links?: CallToAction[];
};

export type Publication = {
  id: string;
  title: string;
  authors: string[];
  summary: string;
  status: string;
  link?: string;
};

export type SkillCategory = {
  category: string;
  items: string[];
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  relationship: string;
  link?: string;
};
