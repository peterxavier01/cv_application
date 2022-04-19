const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light d-md-none container">
      <a className="navbar-brand logo" href="/">
        Peter Uadiale
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#edu">
              Education <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#skills">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#experience">
              Experience
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#cert">
              Certifications
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#languages">
              Languages
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
