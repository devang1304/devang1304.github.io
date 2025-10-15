import "./SiteHeader.css";

const SiteHeader = () => {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#top" className="brand">
          <span className="brand-accent">{">"}</span> Devang Dhanuka
        </a>
        <nav className="nav">
          <a href="#timeline">Timeline</a>
          <a href="#projects">Projects</a>
          <a href="#publications">Publications</a>
          <a href="#skills">Skills</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
