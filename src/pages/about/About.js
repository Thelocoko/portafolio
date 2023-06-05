import React from "react";
import "./About.css";
import { useTranslation } from "react-i18next";

import Android from "../../img/android-studio.png";
import Css from "../../img/css-3.png";
import Firebase from "../../img/firebase.png";
import Flutter from "../../img/flutter.png";
import Git from "../../img/git.png";
import Html from "../../img/html5.png";
import Java from "../../img/java.png";
import Js from "../../img/js.png";
import Laravel from "../../img/laravel.png";
import Mysql from "../../img/mysql.png";
import Php from "../../img/php.png";
import Reactjs from "../../img/react.png";
import aws from "../../img/aws.png";
import docker from "../../img/docker.png";
import jira from "../../img/jira.png";
import miro from "../../img/miro.png";
import mongo from "../../img/mongo.png";
import postgresql from "../../img/postgresql.png";
import python from "../../img/python.png";
import gitlab from "../../img/gitlab.png";

const About = () => {
  const [t] = useTranslation("global");
  return (
    <div className="contenedor">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="card-body">
            <h1>{t("about.title")}</h1>
            <p>{t("about.name")}</p>
            <br />
            <p>{t("about.first")}</p>
            <br />
            <p>{t("about.second")}</p>
            <br />
            <p>{t("about.tools")}</p>
            <div className="img">
              <img src={Android} className="img-img" alt="foto" />
              <img src={Css} className="img-img" alt="foto" />
              <img src={Firebase} className="img-img" alt="foto" />
              <img src={Flutter} className="img-img" alt="foto" />
              <img src={Git} className="img-img" alt="foto" />
              <img src={Html} className="img-img" alt="foto" />
              <img src={Java} className="img-img" alt="foto" />
              <img src={Js} className="img-img" alt="foto" />
              <img src={Laravel} className="img-img" alt="foto" />
              <img src={Mysql} className="img-img" alt="foto" />
              <img src={Php} className="img-img" alt="foto" />
              <img src={aws} className="img-img" alt="foto" />
              <img src={docker} className="img-img" alt="foto" />
              <img src={jira} className="img-img" alt="foto" />
              <img src={miro} className="img-img" alt="foto" />
              <img src={mongo} className="img-img" alt="foto" />
              <img src={postgresql} className="img-img" alt="foto" />
              <img src={python} className="img-img" alt="foto" />
              <img src={gitlab} className="img-img" alt="foto" />
              <img src={Reactjs} className="img-img" alt="foto" />
            </div>
            <br />
            <p>{t("about.work1")}</p>
            <br />
            <p>{t("about.work2")}</p>
            <br />
            <p>{t("about.work3")}</p>
            <br />
            <p>
              {t("about.work4")}
              <a href={t("about.link1")} target="blank">{t("about.link1")}</a> {t("about.and")}
              <a href={t("about.link2")} target="blank">{t("about.link2")}</a>
              {t("about.work5")}
            </p>
            <br />
            <p>{t("about.work6")}</p>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
