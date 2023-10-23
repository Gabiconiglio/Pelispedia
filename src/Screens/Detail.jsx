import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardDetail from "../Components/CardDetail/CardDetail.jsx";
import "../Css/Detail.css";

function Detail(cat) {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const { idDetail } = useParams();
  const { category } = useParams();
  const BASE_URL_MOVIES = `https://api.themoviedb.org/3/movie/${idDetail}?api_key=4cb4d24dfb40658a8f14ee7e34eeecec&language=es-es`;
  const BASE_URL_SERIES = `https://api.themoviedb.org/3/tv/${idDetail}?api_key=4cb4d24dfb40658a8f14ee7e34eeecec&language=es-es`;

  console.log(cat)

  if (category === "Films"|| cat==="Films") {
    useEffect(() => {
      fetch(BASE_URL_MOVIES)
        .then((res) => res.json())
        .then((data) => {
          setMovies(data);
        });
    }, []);
  } else {
    useEffect(() => {
      fetch(BASE_URL_SERIES)
        .then((res) => res.json())
        .then((data) => {
          setSeries(data);
        });
    }, []);
  }

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
    storedFavorites && setFavorites(storedFavorites);
  }, []);

  return (
    <>
      <div className="card-details-container">
        {category === "Series" ? (
          <CardDetail key={series.id} data={series} categoria={category}favorites={favorites}
          setFavorite={setFavorites}   />
        ) : (
          <CardDetail key={movies.id} data={movies} categoria={category} favorites={favorites}
          setFavorite={setFavorites}  />
        )}
        <div className="text-details">
          <h1 className="d-d-flex align-items-center" id="detalle">
           {movies?.title || series?.name || "No disponible"}
          </h1>
          <p id="descripcion">
            <strong>Descripción: </strong>
            {movies?.overview || series?.overview || "No disponible"}{" "}
          </p>
          <p id="Genero">
            <strong>Género: </strong>
            {movies?.genres && movies.genres[0]
              ? movies.genres[0].name
              : series?.genres && series.genres[0]
              ? series.genres[0].name
              : "No Disponible"}
          </p>
          {category === "Films" ? (
            <div id="duracion">
              <p>
                <strong>Duración: </strong>
                {movies?.runtime ? `${movies.runtime} Mins` : "No disponible"}
              </p>
            </div>
          ) : null}
          <p id="fecha">
            <strong>Fecha de lanzamiento: </strong>
            {movies?.release_date || series?.first_air_date || "No disponible"}
          </p>
          <p id="puntuacion">
            <strong>Puntuación: </strong>
            {movies?.vote_average
              ? `${movies.vote_average} / 10`
              : series?.vote_average
              ? `${series.vote_average} / 10`
              : "No disponible"}
          </p>
          {category === "Series" ? (
            <div id="datos">
              <p>
                <strong>Cantidad de Capitulos: </strong>
                {series?.number_of_episodes
                  ? `${series.number_of_episodes}`
                  : "No disponible"}
              </p>
              <p>
                <strong>Cantidad de temporadas: </strong>
                {series?.number_of_seasons
                  ? `${series.number_of_seasons}`
                  : "No disponible"}
              </p>
            </div>
          ) : null}
          {/* <p className="produc">
            <strong>Productora: </strong>
            {series?.production_companies
              ? series.production_companies[0].name
              : movies?.production_companies && movies.production_companies[0]
              ? movies.production_companies[0].name
              : "No disponible"}
          </p> */}
        </div>
      </div>
    </>
  );
}

export default Detail;
