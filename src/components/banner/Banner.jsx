import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faList } from "@fortawesome/free-solid-svg-icons";

/**
 * The componant is navigation bar.
 * @returns {JSX.Element} - The navigation with with logo, title and 2 button with link for add worker or see the labour list .
 */

const Banner = () => {
  return (
    <nav className="main-nav">
      <div className="title-wrapper">
        <NavLink className="main-nav-logo" to={`/home`}>
          <img
            className="main-nav-logo-image"
            src="https://hrnet-stv.netlify.app/logo.webp"
            alt="HRnet Logo"
          />
        </NavLink>
        <p className="title">HRnet</p>
      </div>
      <div className="nav-Wrapper">
        <NavLink className="nav-link" to={`/add`}>
          <FontAwesomeIcon icon={faPlus} />
          <p> Add worker</p>
        </NavLink>
        <NavLink className="nav-link" to={`/list`}>
          <FontAwesomeIcon icon={faList} />
          <p> Labour list</p>
        </NavLink>
      </div>
    </nav>
  );
};

export default Banner;
