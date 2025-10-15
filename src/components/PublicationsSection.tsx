import publications from "@/content/publications.json";
import type { Publication } from "@/types/content";
import SectionHeading from "./SectionHeading";
import "./PublicationsSection.css";

const publicationList = publications as Publication[];

const PublicationsSection = () => {
  return (
    <section
      className="container surface publications-section"
      id="publications"
    >
      <SectionHeading
        eyebrow="Research"
        title="Publications & manuscripts"
        description="Explorations into explainable AI, analyst cognition, and collaboration in software delivery."
      />
      <div className="publication-list">
        {publicationList.map((publication) => (
          <article className="publication-card" key={publication.id}>
            <p className="publication-status">{publication.status}</p>
            <h3>{publication.title}</h3>
            <p className="publication-authors">
              {publication.authors.join(", ")}
            </p>
            <p className="publication-summary">{publication.summary}</p>
            {publication.link ? (
              <a
                className="publication-link"
                href={publication.link}
                target="_blank"
                rel="noreferrer"
              >
                Access publication
              </a>
            ) : (
              <span className="publication-link disabled">
                Link coming soon
              </span>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default PublicationsSection;
