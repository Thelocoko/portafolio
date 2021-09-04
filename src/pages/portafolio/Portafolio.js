import React from "react";

import Tiro from "../../img/Tiro.jpg";
import Web from "../../img/web.png";
import Agenda from "../../img/agenda.png";
import Calculadora from "../../img/calculadora.png";
import Esta from "../../img/esta.png";

const Portafolio = () => {
  return (
    <div className="contenedor">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card">
            <a href="https://github.com/Thelocoko/TiroParabolico" target="__blank"><img src={Tiro} className="img-imgpo" alt="foto" /></a>
            <div class="card-body">
              <h1 class="card-title">Simulador de tiro parabólico</h1>
              <p class="card-text">
                Aplicación diseñada con unity y lenguaje C#. Consiste en simular
                el tiro parabólico con ayuda de los sensores de nuestro
                smartphone android, cuenta con 2 niveles ya que le afecta la
                gravedad
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <a href="https://github.com/Thelocoko/WebBootstrap" target="__blank"><img src={Web} className="img-imgpo" alt="foto" /></a>
            <div class="card-body">
              <h1 class="card-title">Web personal con Bootstrap</h1>
              <p class="card-text">
                Página personal donde se explica el procedimiento para crear la
                aplicación de simulación de tiro parabólico, creada con el
                framework Bootstrap.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
          <a href="https://github.com/Thelocoko/A8S212021Proyecto" target="__blank"><img src={Agenda} class="img-imgpo" alt="foto" /></a>
            <div class="card-body">
              <h1 class="card-title">Agenda para android</h1>
              <p class="card-text">
                Creada en androdid studio y lenguaje java, implementa una base
                de datos sqlite3. Es una aplicación que guarda solo texto en la
                base de datos, las imagenes se guardan en el dispositivo con un
                nombre específico, basicamente es un CRUD.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <a href= "https://github.com/Thelocoko/A7S212021prac2" target="__blank"><img src={Calculadora} class="img-imgpo" alt="foto" /></a>
            <div class="card-body">
              <h1 class="card-title">Calculadora</h1>
              <p class="card-text">
                Creada en androdid studio y lenguaje java, programación básica,
                es practicamente un hola mundo con un splash screen.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <a href="https://github.com/Thelocoko/portafolio" target="__blank"><img src={Esta} class="img-imgpo" alt="foto"/></a>
            <div class="card-body">
              <h1 class="card-title">Portafolio</h1>
              <p class="card-text">
                Creada con el framework Reactjs con css3 y javascript, puedes explorar esta web.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portafolio;
