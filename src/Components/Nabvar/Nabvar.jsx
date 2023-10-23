import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../Nabvar/Nabvar.css";
import PelispediaLogo from "../Nabvar/Pelispedia.png";
import { Link } from "react-router-dom";
import Search from "../Search/Search.jsx";
import Series from "../Series/Series.jsx";

function Nabvar() {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      variant="dark"
      fixed="top"
      className="navbar-expand-xs"
    >
      <Container fluid className="test">
        <div className="d-flex align-items-center">
          <Link to={"/"}>
            <img
              src={PelispediaLogo}
              alt="Pelispedia"
              className="logo"
              id="icono"
            />
          </Link>
          <Navbar.Brand className="d-flex align-items-center" id="titulo">Pelispedia</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto" navbarScroll>
            <Link to={"/Films"} className="Films">
              Películas
            </Link>
            <Link to={"/Series"} className="Series">
              Series
            </Link>
            <Link to={"/Favoritos"} className="Favoritos">
              Favoritos
            </Link>
          </Nav>
          <Search />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nabvar;
