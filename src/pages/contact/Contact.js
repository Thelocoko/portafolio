import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
    function sendEmail(event){
        
        emailjs.sendForm('service_djwu6jh', 'template_4sz7mon', event.target, 'user_6jITVM6qXTBsZ3Kp8UNpW')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
  const [datos, setDatos] = useState({
    nombre: "",
    correo: "",
    asunto: "",
    mensaje: "",
  });
  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };
  const enviardatos = (event) => {
    event.preventDefault();
    sendEmail(event);
    event.target.reset();
    setDatos({
        nombre: "",
        correo: "",
        asunto: "",
        mensaje: "",
      });
  };
  return (
    <div className="container">
      <br />
      <form className="row" onSubmit={enviardatos}>
        <div className="col-8 form-group mx-auto">
          <input
            placeholder="Nombre"
            className="form-control"
            type="text"
            name="nombre"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-8 form-group mx-auto">
          <input
            placeholder="Correo"
            className="form-control"
            type="email"
            name="correo"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-8 form-group mx-auto">
          <input
            placeholder="Asunto"
            className="form-control"
            type="text"
            name="asunto"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-8 form-group mx-auto">
          <textarea
            placeholder="Mensaje"
            className="form-control"
            type="text"
            name="mensaje"
            rows="4"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-8 form-group mx-auto">
          <div className="centrar">
            <button className="btn btn-dark" type="submit">
              Enviar ahora
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Contact;
