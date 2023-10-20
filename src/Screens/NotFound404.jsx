import NotFound from "../Components/NotFound404/ImagNot.jpg";
import { Link } from "react-router-dom";
import "../Css/NotFound404.css";

function NotFound404() {
  return (
    <>
      <button className="btn btn-dark" id="btnBack">
        <Link to="/" style={{ color: "gray", textDecoration: "none" }}>
          Back to Home
        </Link>
      </button>
      <figure className="imgNot">
        <img src={NotFound} alt={NotFound} className="card-image" />
      </figure>
    </>
  );
}

export default NotFound404;
