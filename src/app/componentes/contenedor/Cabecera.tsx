import { NavLink } from "react-router-dom";
import milogo from "../../../assets/img/revista.png"
export const Cabecera = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={milogo} height="70" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="*">
                  Editoriales
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle show"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  Revistas
                </a>
                <ul className="dropdown-menu show" data-bs-popper="static">
                  <li>
                  <NavLink className="dropdown-item" to="/revcre">
                      Registar Revistas
                    </NavLink>
                  </li>
                  <li>
                  <NavLink className="dropdown-item" to="/revlis">
                      Listar revistas
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                  <NavLink className="dropdown-item" to="/revadm">
                      Administrar revistas
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/quien">
                  Quienes somos
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
