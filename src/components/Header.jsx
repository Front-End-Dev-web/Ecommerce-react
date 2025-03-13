import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import '../index.css'
import '../App.css'
export default function Header(){
    return(
        <>
        <header>
  <nav className="navbar navbar-expand-xl .container-fluid d-flex justify-content-center align-items-center">
    <div className="container-fluid cs">
      <a className="navbar-brand" href="#">
        <img
          src="https://icms-image.slatic.net/images/ims-web/e650d6ca-1841-4646-b0e9-4ddbf2beb731.png"
          alt=""
        />
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
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown category">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Categories
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <form className="d-flex cs-form" role="search">
          <input
            className="form-control me-2 input"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success cs-btn" type="submit">
            <i className="fa-solid fa-magnifying-glass" />
          </button>
        </form>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mlt">
          <li className="nav-item login">
            <i className="fa-regular fa-user" />
            <a className="nav-link" href="#">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Sign Up
            </a>
          </li>
          <li className="nav-item nvss">
            <i className="fa-solid fa-globe" />
            <select
              className="form-select nav-link"
              aria-label="Default select example"
            >
              <option selected="">ENG</option>
              <option value={1}>URDU</option>
            </select>
          </li>
          <li className="nav-item">
            <a className="nav-link n4" href="#">
              <i className="fa fa-shopping-cart js" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>

        
        
        
        </>
    )
}