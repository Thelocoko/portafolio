import React from "react";
import "./About.css"

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

const About = () => {
  return (
    <div className="contenedor">
      <div className="card mb-3">
        <div className="row g-0">
            <div className="card-body">
              <h1>Un poco sobre mi</h1>
              <p>
                Mi nombre es Elias Conde Reyes, estoy aproximandome a ser Ing.
                en Sistemas computacionales.
              </p>
              <br />
              <p>
                Me encanta el aprendizaje de la programación en general, dentro
                de la cual se encuentra la programación de aplicaciones, ya sean
                aplicaciones web, progresivas o nativas para dispositivos
                móviles. Siempre estoy aprendiendo a desarrollar alguna
                aplicación en algun framework multiplataforma como lo es "React
                native" o "flutter".
              </p>
              <br />
              <p>
                Como formación profesional dentro del ámbito de la programación
                comenzó al estudiar Ingeniería en Sistemas Computacionales que
                estoy a punto de terminar; La especialidad que me da la escuela
                es en dispositivos móviles sin embargo me gusta explorar otras
                areas como la programación web, puedo desarrollar Front-End y
                Back-End, estoy cerca de egresar del Tecnológico de Estudios
                Superiores del Oriente del Estado de México. Tego un nivel de
                ingles B2 escrito y hablado, incluso tuve la oportunidad de
                vivir 1 mes en Cánada para tomar un curso de liderazgo y
                practicar mi ingles en la escuela Royal Roads University ubicada
                en Vancouver Islan. Me gusta mucho aprender y buscar soluciones
                a distintas problematicas, en mis tiempos libres suelo jugar
                videojuegos o tratar de aprender mas acerca de este mundo de la
                programación.
              </p>
              <br />
              <p>
                Estas son algunas de las herramientas que he aprendido a
                utilizar durante mi aprendizaje:
              </p>
              <div className="img">
              <img src= {Android} className="img-img" alt="foto" />
              <img src= {Css}className="img-img" alt="foto" />
              <img src= {Firebase}className="img-img" alt="foto" />
              <img src= {Flutter}className="img-img" alt="foto" />
              <img src= {Git}className="img-img" alt="foto" />
              <img src= {Html}className="img-img" alt="foto" />
              <img src= {Java}className="img-img" alt="foto" />
              <img src= {Js}className="img-img" alt="foto" />
              <img src= {Laravel}className="img-img" alt="foto" />
              <img src= {Mysql}className="img-img" alt="foto" />
              <img src= {Php}className="img-img" alt="foto" />
              <img src= {Reactjs}className="img-img" alt="foto" />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
export default About;
