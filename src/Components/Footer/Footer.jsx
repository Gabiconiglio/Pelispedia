import React from "react";
import "../Footer/Footer.css";
import { MDBFooter } from "mdb-react-ui-kit";
import Icono from "../Footer/Icono.png";

export default function Footer() {
  return (
    <MDBFooter
      bgColor="dark"
      expand="lg"
      fixed="bottom"
      className="footer-expand-xs"
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-2 border-bottom">
        <div className="me-2 d-none d-lg-block">
          <div>
            <span>Conéctate con nosotros en GitHub:</span>
            <p className="empresa">Vates SA</p>
            <p>2023</p>
          </div>
        </div>
        <div className="d-flex align-items-center flex-column">
          <a className="me-2 text-reset" href="https://github.com/Gabiconiglio/Pelispedia" target="blank">
            <img className="git" src={Icono} alt="GitHub" />
          </a>
          <a className="me-2 text-reset" href="mailto:Gabrielconiglio@hotmail.com" style={{ textDecoration: "none" }}>
            <p id="mail">Gabrielconiglio@hotmail.com</p>
            <p className="nombre">Gabriel Coniglio</p>
          </a>
        </div>
      </section>
      <div className="text-center p-4">
        © 2023 Copyright:
        <a className="text-reset fw-bold" id="curso">
          Curso Introducción React
        </a>
      </div>
    </MDBFooter>
  );
}
