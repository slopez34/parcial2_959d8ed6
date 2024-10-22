import { NavLink } from "react-router-dom";

export const Inicio = () => {
  return (
    <>
      <main>
        <div className="container py-4">
          <header className="pb-3 mb-4 border-bottom">
            <span className="fs-4">Bienvenidos</span>
          </header>

          <div className="p-5 mb-4 bg-body-tertiary rounded-3">
            <div className="container-fluid py-5">
              <h1 className="display-5 fw-bold">Pagina #1 de la moda</h1>
              <p className="col-md-8 fs-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque nisl magna, semper id tempus eget, placerat eget
                leo. Nulla semper ultricies dolor, aliquet viverra est pharetra
                quis. Donec eleifend congue risus, et viverra enim congue sit
                amet. Sed massa neque, fringilla malesuada diam ac, finibus
                sollicitudin diam. In ut ligula vitae lorem bibendum tempor vel
                ac urna.
              </p>
            </div>
          </div>

          <div className="row align-items-md-stretch">
            <div className="col-md-6">
              <div className="h-100 p-5 text-bg-dark rounded-3">
                <h2>Registra tu revista favorita</h2>
                <p>
                  Donec condimentum risus nec auctor elementum. Vivamus
                  vehicula, ipsum eu fermentum vestibulum, nisi neque accumsan
                  neque, sit amet convallis quam velit at quam.
                </p>
                <NavLink to="/revcre">
                  <button className="btn btn-outline-light" type="button">
                    Registrar revista
                  </button>
                </NavLink>
              </div>
            </div>
            <div className="col-md-6">
              <div className="h-100 p-5 bg-body-tertiary border rounded-3">
                <h2>Quienes Somos</h2>
                <p>
                  Pellentesque vel nibh nec nunc consectetur aliquet. Fusce sit
                  amet lacinia augue. Fusce facilisis ipsum ipsum, nec dapibus
                  lectus interdum id. Sed volutpat purus et molestie
                  condimentum. Nullam eget nisi tristique, pellentesque purus
                  non, consectetur mauris.
                </p>
                <NavLink to="/quien">
                  <button className="btn btn-outline-secondary" type="button">
                    Quienes somos
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
