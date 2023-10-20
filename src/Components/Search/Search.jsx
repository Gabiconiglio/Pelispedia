import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../Search/Search.css'


function Search() {
  return (
    <Form className="d-flex" id="tex">
      <Form.Control
        type="search"
        placeholder="Buscar"
        className="me-2"
        aria-label="Buscar"
      />
      <Button variant="dark">
        <FontAwesomeIcon icon={faSearch} />
      </Button>
    </Form>
  );
}

export default Search;