import React from "react";
import Imagen from "../../img/perfil.jpg";
import PDF_ES from "../../documents/Curriculum_ES.pdf";
import PDF_EN from "../../documents/Curriculum_EN.pdf";
import PDF_FR from "../../documents/Curriculum_FR.pdf";
import { useTranslation } from "react-i18next";
import "./Home.css";
function Home() {
  const [t] = useTranslation("global");

  function a() {
    if(t("home.pdf") === "PDF"){
      return PDF_ES
    }
    else if (t("home.pdf") === "PDF_EN"){
      return PDF_EN
    }
    else if (t("home.pdf") === "PDF_FR"){
      return PDF_FR
    }
  }
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
              {t("home.introduction")}
              </p>
              <div className="centrar">
                <a
                  className="btn btn-dark"
                  href={a()}
                  target="_blank"
                  role="button"
                  rel="noreferrer"
                >
                  {t("home.button")}
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
