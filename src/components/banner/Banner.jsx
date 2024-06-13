import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faList } from "@fortawesome/free-solid-svg-icons";

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
          <FontAwesomeIcon icon={faPlus} />
          <p> Add worker</p>
        </Link>
        <Link className="nav-link" to={`/list`}>
          <FontAwesomeIcon icon={faList} />
          <p> Labour list</p>
        </Link>
      </div>
    </nav>
  );
};

export default Banner;
