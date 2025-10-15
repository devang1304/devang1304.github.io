import projects from "@/content/projects.json";
import type { Project } from "@/types/content";
import SectionHeading from "./SectionHeading";
import "./ProjectsSection.css";

const projectList = projects as Project[];

const ProjectsSection = () => {
  return (
    <section className="container surface projects-section" id="projects">
      <SectionHeading
        eyebrow="Builds"
        title="Projects & experiments"
        description="Recent platforms and prototypes built around explainable AI, automation, and cloud-native operations."
      />
      <div className="projects-grid">
        {projectList.map((project) => (
          <article className="project-card" key={project.id}>
            <p className="project-period">{project.period}</p>
            <h3>{project.name}</h3>
            <p className="project-summary">{project.summary}</p>
            <ul className="project-outcomes">
              {project.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
            <div className="project-tech">
              {project.tech.map((tech) => (
                <span className="tag" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
            {project.links && project.links.length > 0 ? (
              <div className="project-links">
                {project.links.map((link) =>
                  link.href ? (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        link.href.startsWith("http") ? "noreferrer" : undefined
                      }
                    >
                      {link.label}
                    </a>
                  ) : (
                    <span className="link-disabled" key={link.label}>
                      {link.label}
                    </span>
                  )
                )}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
