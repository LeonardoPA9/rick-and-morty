import { Link } from "react-router-dom";
import { routerRoutes } from "../../utils/Routes";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="text-link" to={routerRoutes.HOME}>
          <span className="navbar-brand">RickyWiki</span>
        </Link>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <Link to={routerRoutes.HOME}>
                <span className="nav-link">Home</span>
              </Link>
            </li>
            <Link to={routerRoutes.EPISODES}>
              <span className="nav-link">Episodes</span>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
