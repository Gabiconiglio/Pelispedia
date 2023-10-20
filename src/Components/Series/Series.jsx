import React, { useEffect, useState } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "../Series/Series.css";

function Series() {
  const URL =
    "https://api.themoviedb.org/3/genre/tv/list?api_key=4cb4d24dfb40658a8f14ee7e34eeecec&language=es-es";
  const [series, setSeries] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSeries(data.genres);
      });
  }, []);

  return (
    <section>
      <NavDropdown.Item title="Series" className="txtSeries">
        {series.length > 0 ? (
          series.slice(0, 20).map((genre) => (
            <NavDropdown.Item eventKey={genre.id}>
              <Link to={`/Series/${genre.name}`} className="link">{genre.name}</Link>
            </NavDropdown.Item>
          ))
        ) : (
          <p>No series available.</p>
        )}
      </NavDropdown.Item>
    </section>
  );
}

export default Series;
