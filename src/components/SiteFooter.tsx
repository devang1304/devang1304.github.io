import "./SiteFooter.css";

const SiteFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-inner">
        <div>
          <p className="footer-title">Let&apos;s build something impactful.</p>
          <div className="footer-actions">
            <a
              className="cta"
              href="mailto:ddhanuka1304@gmail.com"
              aria-label="Send email to Devang Dhanuka"
            >
              Mail Devang
            </a>
            <a
              className="text-link"
              href="https://www.linkedin.com/in/devang1304/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="text-link"
              href="https://github.com/devang1304"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
        <p className="copyright">
          © {currentYear} Devang Dhanuka. Crafted with React & curiosity.
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
