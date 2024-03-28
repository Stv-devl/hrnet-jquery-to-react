import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to={`/home`}>
        <img
          className="main-nav-logo-image"
          src="./logo.png"
          alt="HRnet Logo"
        />
      </Link>
      <div className="nav-Wrapper">
        <Link className="nav-link" to={`/add`}>
          add worker
        </Link>
        <Link className="nav-link" to={`/list`}>
          labour list
        </Link>
      </div>
    </nav>
  );
};

export default Banner;
