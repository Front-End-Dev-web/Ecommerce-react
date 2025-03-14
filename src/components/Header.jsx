import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faCartShopping,faGlobe } from '@fortawesome/free-solid-svg-icons'
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
        <span className="navbar-toggler-icon" ></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0  order-lg-1  ">
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
        <form className="d-flex cs-form order-lg-2 " role="search">
          <input
            className="form-control me-2 input"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="cs-btn" type="submit">
          <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#f85606",}} /></button>
        </form>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mlt  order-lg-3 ">
          <li className="nav-item login">
            <i className="fa-regular fa-user" ></i>

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
          <FontAwesomeIcon icon={faGlobe} style={{color: "#f5f9ff",}} />
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
            <FontAwesomeIcon icon={faCartShopping} style={{color: "#f6f7f9",fontSize:'20px'}} />
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