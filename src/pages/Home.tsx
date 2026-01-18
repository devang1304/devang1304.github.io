import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  Cpu,
  Code as CodeIcon,
  BookOpen,
  ExternalLink,
  Lock,
  ArrowRight,
} from "lucide-react";
import {
  HandButton,
  SkillTag,
  SectionTitle,
  DoodleCard,
  StickyNote,
} from "../components/UIComponents";
import { FadeInOnScroll } from "../components/AnimationUtils";
import {
  projectsData,
  publicationsData,
  importantSkills,
} from "../data/content";

export default function Home() {
  const location = useLocation();

  // Handle navigation: scroll to top or hash section
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [location]);

  const publicationColors = [
    "bg-yellow-100",
    "bg-blue-100",
    "bg-green-100",
    "bg-pink-100",
    "bg-purple-100",
    "bg-orange-100",
    "bg-rose-100",
    "bg-cyan-100",
  ];

  return (
    <>
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
              <HandButton href="./resume.pdf" download onClick={undefined}>
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

      {/* --- ABOUT ME SECTION --- */}
      <section id="about-me" className="mb-16">
        <div className="max-w-5xl space-y-4 font-hand text-xl text-slate-700 leading-relaxed">
          <p>
            I'm a{" "}
            <span className="font-bold text-blue-600">
              Data Science & AI professional
            </span>{" "}
            with a Master's from{" "}
            <span className="font-bold">Rochester Institute of Technology</span>
            . My work sits at the intersection of{" "}
            <span className="underline decoration-yellow-300 decoration-4">
              machine-learning
            </span>
            ,{" "}
            <span className="underline decoration-green-300 decoration-4">
              cloud infrastructure
            </span>
            , and{" "}
            <span className="underline decoration-pink-300 decoration-4">
              cybersecurity
            </span>{" "}
            — building intelligent systems that solve real problems.
          </p>

          <p>
            Before grad school, I spent three years at{" "}
            <span className="font-bold">Netwoven</span> as a Cloud Engineer,
            delivering Azure-based infrastructure and security solutions across
            multiple industries. My work there earned me the{" "}
            <span className="italic">Spot Award</span> and{" "}
            <span className="italic">Role Model Award</span> for performance and
            impact.
          </p>

          <p>
            Most recently, I researched{" "}
            <span className="font-bold text-purple-600">
              Explainable AI for Intrusion Detection Systems
            </span>{" "}
            — teaching AI to explain itself so security analysts can actually
            trust its decisions. Now, I'm looking for opportunities in{" "}
            <span className="font-bold text-blue-600">AI & MLOps</span> where I
            can build and deploy intelligent systems at scale.
          </p>
        </div>
      </section>

      {/* --- SKILLS SUBSECTION --- */}
      {/* <section id="skills" className="mb-32 text-center">
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
      </section> */}

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="mb-32">
        <SectionTitle title="Projects" icon={Cpu} onClick={undefined} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((proj, idx) => (
            <FadeInOnScroll key={idx} delay={idx * 100}>
              <DoodleCard
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
                <div className="pt-4 border-t-2 border-dashed border-slate-200 mt-auto flex justify-between items-center">
                  <span className="font-mono text-xs bg-slate-100 px-2 py-1 rounded border border-slate-300">
                    {proj.period}
                  </span>
                  {/* @ts-ignore */}
                  {proj.isPrivate ? (
                    <div className="flex items-center gap-1 px-3 py-1.5 bg-slate-100 text-slate-500 font-mono text-xs rounded-full border-2 border-slate-300 cursor-not-allowed opacity-80">
                      <Lock size={14} />
                      Private
                    </div>
                  ) : (
                    proj.link && (
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-1 px-3 py-1.5 bg-slate-900 text-white font-mono text-xs rounded-full border-2 border-black shadow-[2px_2px_0px_#000] hover:bg-slate-700 hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#000] transition-all"
                      >
                        <Github size={14} />
                        Code
                      </a>
                    )
                  )}
                </div>
              </DoodleCard>
            </FadeInOnScroll>
          ))}
        </div>
      </section>

      {/* --- PUBLICATIONS SECTION --- */}
      <section id="papers" className="mb-32 scroll-mt-32">
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
                color={publicationColors[(idx + 2) % publicationColors.length]}
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

      {/* --- EXPERIENCE CTA SECTION --- */}
      <section className="mb-16 text-center">
        <div className="relative inline-block p-8 md:p-12 bg-gradient-to-br from-blue-50 to-purple-50 border-4 border-black rounded-2xl shadow-[8px_8px_0px_#000] transform hover:-translate-y-1 transition-transform duration-200">
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-300 border-2 border-black rounded-full" />
          <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-pink-300 border-2 border-black rounded-full" />

          <h2 className="text-3xl md:text-4xl font-hand font-bold mb-4">
            Want to know{" "}
            <span className="text-blue-600 relative inline-block">
              my story
              <svg
                className="absolute w-full h-2 -bottom-1 left-0 text-yellow-300 z-[-1]"
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
            ?
          </h2>
          <p className="font-hand text-lg text-slate-600 mb-6 max-w-md mx-auto">
            Explore my journey through work, education, and adventures!
          </p>
          <Link
            to="/experience"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-hand text-xl font-bold rounded-full border-3 border-black shadow-[4px_4px_0px_#000] hover:bg-blue-600 hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_#000] transition-all"
          >
            See My Journey
            <ArrowRight
              size={24}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </section>
    </>
  );
}
