import Carousel from "react-bootstrap/Carousel";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "../Carrusel/Carrusel.css";

function Carrusel() {
  const [movies, setMovies] = useState([]);
  const BASE_URL =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=4cb4d24dfb40658a8f14ee7e34eeecec&language=es-es";
  const API_IMG = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  return (
    <Container fluid>
      <Carousel
        className="rounded-xl"
        id="carousel"
        autoPlay={true}
        interval={5000}
      >
        {movies.map((movie, index) => (
          <Carousel.Item key={movie.id}>
            <img
              className="d-block w-100"
              id="foto"
              src={API_IMG + movie.poster_path}
              alt={`Slide ${index}`}
            />
            <Carousel.Caption>
              <h4 style={{ color: "black" }}>{movie.title}</h4>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default Carrusel;
