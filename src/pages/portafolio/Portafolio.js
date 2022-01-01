import React from "react";
import { useTranslation } from "react-i18next";

import Tiro from "../../img/Tiro.jpg";
import Web from "../../img/web.png";
import Agenda from "../../img/agenda.png";
import Calculadora from "../../img/calculadora.png";
import Esta from "../../img/esta.png";
import Webl from "../../img/webl.jpg";
import AC from "../../img/ac.png";
const Portafolio = () => {
  const [t] = useTranslation("global");
  return (
    <div className="contenedor">
      <h2 className="centrar"> {t("portfolio.click")}</h2><br />
      
      <div className="row row-cols-1 row-cols-md-2 g-4">
      <div className="col">
          <div className="card">
            <a href="https://github.com/DannyAceves/LaravelBreeze" target="__blank"><img src={Webl} className="img-imgpo" alt="foto"/></a>
            <div className="card-body">
              <h1 className="card-title">{t("portfolio.tesoem")}</h1>
              <p className="card-text">
                {t("portfolio.tesoem-description")}
                </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <a href="https://github.com/Thelocoko/TiroParabolico" target="__blank"><img src={Tiro} className="img-imgpo" alt="foto" /></a>
            <div className="card-body">
              <h1 className="card-title">{t("portfolio.simulator")}</h1>
              <p className="card-text">
                {t("portfolio.simulator-description")}
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <a href="https://github.com/Thelocoko/WebBootstrap" target="__blank"><img src={Web} className="img-imgpo" alt="foto" /></a>
            <div className="card-body">
              <h1 className="card-title">{t("portfolio.bootstrap")}</h1>
              <p className="card-text">
              {t("portfolio.bootstrap-description")}
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
          <a href="https://github.com/Thelocoko/A8S212021Proyecto" target="__blank"><img src={Agenda} className="img-imgpo" alt="foto" /></a>
            <div className="card-body">
              <h1 className="card-title">{t("portfolio.android-agent")}</h1>
              <p className="card-text">
              {t("portfolio.android-agent-description")}
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <a href= "https://github.com/Thelocoko/A7S212021prac2" target="__blank"><img src={Calculadora} className="img-imgpo" alt="foto" /></a>
            <div className="card-body">
              <h1 className="card-title">{t("portfolio.calculator")}</h1>
              <p className="card-text">
              {t("portfolio.calculator-description")}
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <a href="https://github.com/Thelocoko/portafolio" target="__blank"><img src={Esta} className="img-imgpo" alt="foto"/></a>
            <div className="card-body">
              <h1 className="card-title">{t("portfolio.web")}</h1>
              <p className="card-text">
              {t("portfolio.web-description")}
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <a href="https://github.com/Thelocoko/acapptesoem" target="__blank"><img src={AC} className="img-imgpo" alt="foto"/></a>
            <div className="card-body">
              <h1 className="card-title">{t("portfolio.ac")}</h1>
              <p className="card-text">
              {t("portfolio.ac-description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portafolio;
