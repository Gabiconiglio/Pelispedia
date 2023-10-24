import { Form, Button } from "react-bootstrap";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../Search/Search.css";

function Search() {
  const [input, setInput] = useState("");

  return (
    <form onSubmit={(e) => e.preventDefault()} className="d-flex" id="btnSe">
      <Form.Control
        onChange={(e) => setInput(e.target.value)}
        type="Search"
        placeholder="Buscar"
        className="me-2"
        aria-label="Buscar"
      />

      <Button variant="dark">
        <Link to={`/results/${input}`}>
          <FontAwesomeIcon icon={faSearch} className="lupa" />
        </Link>
      </Button>
    </form>
  );
}

export default Search;
