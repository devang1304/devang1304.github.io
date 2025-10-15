import "./SectionHeading.css";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  anchor?: string;
};

const SectionHeading = ({
  eyebrow,
  title,
  description,
  anchor
}: SectionHeadingProps) => {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
      <h2 id={anchor}>{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  );
};

export default SectionHeading;
