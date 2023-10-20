import { useEffect, useState } from "react";
import { DotPulse } from "@uiball/loaders";
import Carrusel from "../Components/Carrusel/Carrusel.jsx";
import Cards from "../Components/Cards/Cards.jsx";
import "../Components/Loader/Loader.css";
import "../Css/Home.css";

function Home() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const categoria = "Films";
  const BASE_URL =
    "https://api.themoviedb.org/3/movie/upcoming?api_key=4cb4d24dfb40658a8f14ee7e34eeecec&language=es-es";

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
    storedFavorites && setFavorites(storedFavorites);
  }, []);

  return (
    <>
      <h1 className="tit">Las mejores puntuadas</h1>
      <div className="d-flex align-items-center flex-column">
        <Carrusel id="caruselHome" />
      </div>
      <section>
        <h1 className="titulo2">Nuevos ingresos</h1>
        <ul className="movie-grid">
          {movies.length > 0 ? (
            movies
              .slice(0, 20)
              .map((movie) => (
                <Cards
                key={movie.id}
                data={movie}
                categoria={categoria}
                favorites={favorites}
                setFavorite={setFavorites}               
                />
              ))
          ) : (
            <DotPulse size={40} speed={1.3} color="black" />
          )}
        </ul>
      </section>
    </>
  );
}

export default Home;
