import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a id="logo" className="navbar-brand" href="#">
            Plant Pal
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/plants">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/plants">
                  Plant Database
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/schedules/new">
                  Add to Collection
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/schedules/show">
                  Plant Collection
                </Link>
              </li>
              {localStorage.jwt === undefined ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">
                      Become a member
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <LogoutLink className="nav-link" />
                </li>
              )}
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}
