import skills from "@/content/skills.json";
import type { SkillCategory } from "@/types/content";
import SectionHeading from "./SectionHeading";
import "./SkillsSection.css";

const skillCategories = skills as SkillCategory[];

const SkillsSection = () => {
  return (
    <section className="container surface skills-section" id="skills">
      <SectionHeading
        eyebrow="Toolkit"
        title="Skills & platforms"
        description="Monospaced stack of tools used across research, engineering, and delivery."
      />
      <div className="skills-grid">
        {skillCategories.map((category) => (
          <article className="skill-card" key={category.category}>
            <h3>{category.category}</h3>
            <ul>
              {category.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
