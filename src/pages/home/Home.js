import React from "react";
import Imagen from "../../img/perfil.jpg";
import PDF from "../../documents/Cv.pdf";
import "./Home.css";
function Home() {
  return (
    <div className="contenedor">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={Imagen} className="img-imgp" alt="foto" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title">Elias Conde reyes</h1>
              <p className="card-text">
                Hola soy desarrollador de aplicaciones web y móviles conozco un
                poco de back-end y front-end, con buen manejo de diseño de ui/ux
                con la meta de lograr mejorar aun más.
              </p>
              <div className="centrar">
                <a
                  className="btn btn-dark"
                  href={PDF}
                  target="_blank"
                  role="button"
                  rel="noreferrer"
                >
                  Descargar CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
