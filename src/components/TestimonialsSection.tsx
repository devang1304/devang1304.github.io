import testimonials from "@/content/testimonials.json";
import type { Testimonial } from "@/types/content";
import SectionHeading from "./SectionHeading";
import "./TestimonialsSection.css";

const testimonialList = testimonials as Testimonial[];

const TestimonialsSection = () => {
  return (
    <section
      className="container surface testimonials-section"
      id="testimonials"
    >
      <SectionHeading
        eyebrow="Voices"
        title="Testimonials"
        description="Notes from collaborators, advisors, and clients."
      />

      {testimonialList.length === 0 ? (
        <div className="testimonials-empty surface">
          <p>
            Testimonials will appear here. Add entries to{" "}
            <code>src/content/testimonials.json</code> with quotes, names, and
            roles to populate this section.
          </p>
        </div>
      ) : (
        <div className="testimonials-grid">
          {testimonialList.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.id}>
              <p className="quote">“{testimonial.quote}”</p>
              <p className="name">{testimonial.name}</p>
              <p className="role">
                {testimonial.role} · {testimonial.relationship}
              </p>
              {testimonial.link ? (
                <a href={testimonial.link} target="_blank" rel="noreferrer">
                  Read more
                </a>
              ) : null}
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default TestimonialsSection;
