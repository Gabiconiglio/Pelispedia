import { useEffect, useState } from "react";
import { DotPulse } from "@uiball/loaders";
import Cards from "../Components/Cards/Cards.jsx";
import Paginador from "../Components/Paginator/Paginator.jsx";
import "../Components/Loader/Loader.css";
import "../Css/Films.css";

function Films() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState([]);
  const maxPagesToShow = 20;
  const moviesPerPage = 20;
  const categoria = "Films";
  const BASE_URL = `https://api.themoviedb.org/3/movie/popular?api_key=4cb4d24dfb40658a8f14ee7e34eeecec&page=${currentPage}&language=es-es&adult=false`;

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, [currentPage]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
    storedFavorites && setFavorites(storedFavorites);
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section>
      <h1 className="titulo">Películas</h1>
      <ul className="movie-grid">
        {movies.length > 0 ? (
          movies
            .slice(0, moviesPerPage)
            .map((movie) => (
              <Cards
                key={movie.id}
                data={movie}
                favorites={favorites}
                setFavorite={setFavorites}
              />
            ))
        ) : (
          <DotPulse size={40} speed={1.3} color="black" />
        )}
      </ul>
      <Paginador
        currentPage={currentPage}
        onPageChange={handlePageChange}
        totalPages={maxPagesToShow}
      />
    </section>
  );
}

export default Films;
