import React, { useState, useEffect} from "react";
import "./Footer.css";
import { useTranslation } from "react-i18next";

var datetime = new Date();

const Footer = () => {
  const [t, i18n] = useTranslation("global");
  const [language, setLanguage] = useState("es");

  useEffect(() => {
    let data = window.localStorage.getItem("language");
    if (data != null) {
      setLanguage(data);
      i18n.changeLanguage(data);
    }
  }, [i18n]);

  const onChangeLanguage = (but) => {
    if (but === 1) {
      setLanguage("es");
    } else if (but === 2) {
      setLanguage("en");
    } else if (but === 3) {
      setLanguage("fr");
    }
  };
  
  useEffect(() => {
    window.localStorage.setItem("language", language);
  }, [language]);

  return (
    <footer className="footer">
      <ul className="r-footer">
        <li>
          <h2>{t("footer.social-media")}</h2>
          <ul className="box">
            <a
              href="http://www.github.com/thelocoko"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github text-light mr-4"></i>
            </a>
            <a
              href="http://www.twitter.com/thelocoko"
              target="_blank"
              rel="noreferrer"
            >
              <i className="social fab fa-twitter text-light mr-4"></i>
            </a>
            <a
              href="https://instagram.com/thelocoko"
              target="_blank"
              rel="noreferrer"
            >
              <i className="social fab fa-instagram text-light mr-4"></i>
            </a>
          </ul>
          <br />
          <h2>{t("footer.title-languaje")}</h2>
          <ul className="box">
            <div>
              <a
                type="button"
                onClick={() => {
                  onChangeLanguage(1);
                  i18n.changeLanguage("es");
                }}
              >
                <h3>{t("footer.languaje-es")}</h3>
              </a>
            </div>
            <div>
              <a
                type="button"
                onClick={() => {
                  onChangeLanguage(2);
                  i18n.changeLanguage("en");
                }}
                rel="noreferrer"
              >
                <h3>{t("footer.languaje-en")}</h3>
              </a>
            </div>
            <div>
              <a
                type="button"
                onClick={() => {
                  onChangeLanguage(3);
                  i18n.changeLanguage("fr");
                }}
                rel="noreferrer"
              >
                <h3>{t("footer.languaje-fr")}</h3>
              </a>
            </div>
          </ul>
        </li>
      </ul>
      <div className="b-footer">
        <p>
          {t("footer.reserved")} ©Elias Conde Reyes {datetime.getFullYear()}{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
