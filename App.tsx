import React, { useState, useEffect } from "react";
import {
  Code as CodeIcon,
  Briefcase,
  User,
  Mail,
  Github,
  Linkedin,
  Cpu,
  GraduationCap,
  BookOpen,
  Layers,
  ExternalLink,
  Download,
  Sparkles,
} from "lucide-react";

// --- STYLED COMPONENTS (DOODLE THEME) ---

const DoodleCard = ({
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

const StickyNote = ({
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

const HandButton = ({
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

const SectionTitle = ({
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

const SkillTag = ({
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

// --- RESUME DATA ---

const experienceData = [
  {
    role: "Graduate Research Assistant - AI in Cybersecurity",
    company: "Rochester Institute of Technology",
    period: "Oct 2024 -- Dec 2025",
    location: "Rochester, NY",
    details: [
      "Developed an explainable intrusion detection framework using Temporal Graph Neural Networks (TGNN) on DARPA Trusted Computing datasets.",
      "Benchmarked explainability methods (GNNExplainer, PGExplainer), analyzing fidelity, stability, and accuracy for SOC dashboards.",
    ],
  },
  {
    role: "Senior Engineer - Cloud Infrastructure & Security",
    company: "Netwoven Inc.",
    period: "Aug 2020 -- Jun 2023",
    location: "Kolkata, India",
    details: [
      "Played a key role in migrating over 5,000 users across Microsoft 365 tenants, ensuring a smooth transition with minimal downtime.",
      "Drove Azure cost optimization for clients through smart resource tagging, budgeting, and creating easy-to-read cost reports.",
      "Wrote PowerShell and Power Automate scripts that automated tedious IT tasks, freeing up valuable time for the team.",
      "Became a go-to expert for the Govern365 data platform, running proofs-of-concept and demos that helped win over new customers.",
    ],
  },
];

const educationData = [
  {
    degree: "MS Data Science",
    school: "Rochester Institute of Technology",
    period: "Aug 2023 -- Dec 2025",
    location: "Rochester, NY",
  },
  {
    degree: "Bachelor of Computer Applications",
    school: "Amity University",
    period: "Jul 2017 -- Jun 2020",
    location: "Noida, India",
  },
];

const projectsData = [
  {
    title: "Evaluation Framework for SOC LLMs",
    tech: "OpenAPI, HuggingFace, AWS Bedrock, GCP Vertex AI",
    period: "Jul 2025 -- Present",
    desc: "Built a vendor-agnostic benchmark ingesting multi-source logs, normalizing to ECS/STIX, mapping to MITRE ATT&CK, and evaluating SOC workflows across models (Anthropic, OpenAI, Gemini, LLaMA).",
  },
  {
    title: "Financial Management Hub (Serverless AWS App)",
    tech: "AWS, Terraform, Docker, CI/CD",
    period: "Feb 2025 -- Apr 2025",
    desc: "Developed a serverless financial tracking app using AWS Amplify, Lambda, and DynamoDB, integrated with Plaid/OpenAI APIs. Implemented auto-scaling infrastructure.",
  },
  {
    title: "Travel Itinerary Planner with Google ADK Agents",
    tech: "Google ADK, Vertex AI, BigQuery",
    period: "May 2025 -- Jun 2025",
    desc: "Built a multi-agent planning system leveraging Google ADK; agents ranked attractions and generated optimized day-by-day travel itineraries.",
  },
];

const publicationsData = [
  {
    title:
      "Survey Perspective: The Role of Explainable AI in Threat Intelligence",
    authors: "Nidhi Rastogi, Devang Dhanuka, et al.",
    link: "https://www.arxiv.org/abs/2503.02065v1",
    desc: "Survey study on integrating XAI into SOC workflows.",
  },
  {
    title:
      "Too Much to Trust? Measuring the Security and Cognitive Impacts of Explainability in AI-Driven SOCs",
    authors: "Nidhi Rastogi, Devang Dhanuka, et al.",
    link: "https://arxiv.org/abs/2503.02065",
    desc: "Evaluates explainability methods’ effect on analyst trust and efficiency.",
  },
  {
    title: "Impact of LLMs on Team Collaboration in Software Development",
    authors: "Devang Dhanuka",
    link: "https://arxiv.org/abs/2510.08612",
    desc: "",
  },
];

const importantSkills = [
  "Python",
  "PyTorch",
  "TensorFlow",
  "LangGraph",
  "ADK",
  "Docker",
  "Kubernetes",
  "Terraform",
  "CI/CD",
  "AWS",
  "GCP",
  "Azure",
  "SQL",
];

const YearMarker = ({ year }: { year: number }) => (
  <div className="relative h-8 flex items-center">
    <div className="absolute left-4 -translate-x-1/2">
      <span className="bg-[#f8f5f2] px-2 font-hand text-2xl font-bold text-slate-400">
        {year}
      </span>
    </div>
  </div>
);

const TimelineCard = ({
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

const DoodleSticker = ({
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

// --- MAIN APP COMPONENT ---

export default function App() {
  const [confetti, setConfetti] = useState<
    { id: number; x: number; y: number; emoji: string }[]
  >([]);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const triggerConfetti = (e: React.MouseEvent<HTMLElement>) => {
    const x = e.pageX;
    const y = e.pageY;
    const newConfetti = Array.from({ length: 1 }).map((_, i) => ({
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
      setConfetti((c) => c.slice(newConfetti.length));
    }, 2000);
  };

  const publicationColors = ["bg-yellow-100", "bg-blue-100", "bg-green-100"];

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
          <a
            href="#"
            className="font-hand text-2xl font-bold flex items-center gap-1.5"
          >
            <span className="text-blue-500">&lt;/&gt;</span>
            <span>@devang1304</span>
          </a>
          <div className="hidden md:flex gap-6 font-hand text-lg">
            {["Experience", "Projects", "Papers"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-600 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="relative z-20 max-w-6xl mx-auto pt-32 px-4 md:px-8 pb-20">
        {/* --- HERO SECTION --- */}
        <section id="about" className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <div className="inline-block px-3 py-1 border-2 border-black rounded-full font-mono text-xs font-bold bg-green-200 transform -rotate-2">
                OPEN TO WORK
              </div>
              <h1 className="text-5xl md:text-7xl font-hand font-bold leading-tight">
                Hi, I'm{" "}
                <span className="text-blue-600 relative inline-block">
                  Devang
                  <svg
                    className="absolute w-full h-3 -bottom-1 left-0 text-yellow-300 z-[-1]"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 5 Q 50 10 100 5"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                    />
                  </svg>
                </span>
                !
              </h1>

              <div className="flex flex-wrap gap-4 pt-4">
                <HandButton
                  href="./resume.pdf" // IMPORTANT: For this to work, add a 'resume.pdf' file to the same folder as your index.html.
                  download
                  onClick={undefined}
                >
                  <Download size={20} className="mr-1" />
                  Download Resume
                </HandButton>
                <div className="flex gap-2">
                  <a
                    href="https://github.com/devang1304"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 bg-white border-2 border-black rounded-full transition-all duration-150 ease-out shadow-[2px_2px_0px_#000] hover:bg-black hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#000]"
                  >
                    <Github
                      size={24}
                      className="text-black group-hover:text-white transition-colors duration-150"
                    />
                  </a>
                  <a
                    href="https://linkedin.com/in/devang1304"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 bg-white border-2 border-black rounded-full transition-all duration-150 ease-out shadow-[2px_2px_0px_#000] hover:bg-[#0077b5] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#000]"
                  >
                    <Linkedin
                      size={24}
                      className="text-[#0077b5] group-hover:text-white transition-colors duration-150"
                    />
                  </a>
                  <a
                    href="mailto:devangdhanuka@gmail.com"
                    className="group p-3 bg-white border-2 border-black rounded-full transition-all duration-150 ease-out shadow-[2px_2px_0px_#000] hover:bg-red-500 hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#000]"
                  >
                    <Mail
                      size={24}
                      className="text-red-500 group-hover:text-white transition-colors duration-150"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center relative">
              <div className="w-64 h-64 md:w-80 md:h-80 relative z-10">
                <img
                  src="./profile.jpeg"
                  alt="Devang Dhanuka"
                  className="w-full h-full object-cover border-4 border-black bg-white"
                  style={{
                    borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                    boxShadow: "8px 8px 0px rgba(0,0,0,0.1)",
                  }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://placehold.co/400x400?text=Devang";
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- SKILLS SUBSECTION --- */}
        <section id="skills" className="mb-32 text-center">
          <div className="flex flex-wrap justify-center items-center gap-4 max-w-4xl mx-auto">
            {importantSkills.map((skill, i) => (
              <SkillTag
                key={skill}
                rotate={`${(i % 2 === 0 ? 1 : -1) * (1 + (i % 4))}deg`}
              >
                {skill}
              </SkillTag>
            ))}
          </div>
        </section>

        {/* --- EDUCATION & EXPERIENCE SECTION --- */}
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
              <TimelineCard
                item={experienceData[0]}
                type="experience"
                idx={0}
              />
              <YearMarker year={2024} />
              <TimelineCard item={educationData[0]} type="education" idx={1} />
              <YearMarker year={2023} />
              <TimelineCard
                item={experienceData[1]}
                type="experience"
                idx={2}
              />
              <YearMarker year={2020} />
              <TimelineCard item={educationData[1]} type="education" idx={3} />
              <YearMarker year={2017} />
            </div>
          </div>
        </section>

        {/* --- PROJECTS SECTION --- */}
        <section id="projects" className="mb-32">
          <SectionTitle title="Projects" icon={Cpu} onClick={undefined} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((proj, idx) => (
              <DoodleCard
                key={idx}
                rotate={`${(idx % 3) - 1}deg`}
                className="flex flex-col h-full"
              >
                <div className="flex-1">
                  <div className="h-12 w-12 bg-slate-900 text-white flex items-center justify-center rounded-lg mb-4 border-2 border-black shadow-[2px_2px_0px_#ccc]">
                    <CodeIcon size={24} />
                  </div>
                  <h3 className="text-xl font-hand font-bold mb-2 leading-tight">
                    {proj.title}
                  </h3>
                  <p className="font-mono text-xs text-blue-600 mb-3 font-bold">
                    {proj.tech}
                  </p>
                  <p className="font-hand text-slate-600 text-lg mb-4">
                    {proj.desc}
                  </p>
                </div>
                <div className="pt-4 border-t-2 border-dashed border-slate-200 mt-auto">
                  <span className="font-mono text-xs bg-slate-100 px-2 py-1 rounded border border-slate-300">
                    {proj.period}
                  </span>
                </div>
              </DoodleCard>
            ))}
          </div>
        </section>

        {/* --- PUBLICATIONS SECTION --- */}
        <section id="papers" className="mb-32">
          <SectionTitle
            title="Publications"
            icon={BookOpen}
            onClick={undefined}
          />
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              {publicationsData.slice(0, 2).map((pub, idx) => (
                <StickyNote
                  key={idx}
                  color={publicationColors[idx % publicationColors.length]}
                  rotate={`${idx % 2 === 0 ? 1 : -1.5}deg`}
                  className="border-2 border-black max-w-full"
                >
                  <h4 className="font-bold font-hand text-xl mb-1 leading-tight">
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline decoration-blue-500 decoration-2 flex items-start gap-2"
                    >
                      {pub.title}{" "}
                      <ExternalLink
                        size={16}
                        className="mt-1 text-blue-500 flex-shrink-0"
                      />
                    </a>
                  </h4>
                  <p className="text-xs font-mono text-slate-500 mb-2">
                    {pub.authors}
                  </p>
                  <p className="font-hand text-slate-700">{pub.desc}</p>
                </StickyNote>
              ))}
            </div>
            <div className="space-y-6 lg:pt-10">
              {publicationsData.slice(2).map((pub, idx) => (
                <StickyNote
                  key={idx}
                  color={
                    publicationColors[(idx + 2) % publicationColors.length]
                  }
                  rotate={`${idx % 2 === 0 ? 1 : -1.5}deg`}
                  className="border-2 border-black max-w-full"
                >
                  <h4 className="font-bold font-hand text-xl mb-1 leading-tight">
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline decoration-blue-500 decoration-2 flex items-start gap-2"
                    >
                      {pub.title}{" "}
                      <ExternalLink
                        size={16}
                        className="mt-1 text-blue-500 flex-shrink-0"
                      />
                    </a>
                  </h4>
                  <p className="text-xs font-mono text-slate-500 mb-2">
                    {pub.authors}
                  </p>
                  <p className="font-hand text-slate-700">{pub.desc}</p>
                </StickyNote>
              ))}
            </div>
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer
          id="contact"
          className="text-center border-t-2 border-dashed border-slate-300 pt-12 pb-8"
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
