import { NavLink } from "react-router-dom";
export const NoEncontrado = () => {
  return (
    <>
      <main>
        <div className="container py-4">
          <div className="px-4 py-5 my-5 text-center">
            <div className="spinner-border text-warning" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <h1 className="display-5 fw-bold text-body-emphasis">
              Pagina no encontrada
            </h1>
            <div className="col-lg-6 mx-auto">
              <p className="lead mb-4">
                Pagina no se encuentra porfa da click en inicio
              </p>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <NavLink to="/">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg px-4 gap-3"
                  >
                    INICIO
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
