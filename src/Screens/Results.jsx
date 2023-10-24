import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DotPulse } from "@uiball/loaders";
import Cards from "../Components/Cards/Cards.jsx";
import React from "react";
import "../Components/Loader/Loader.css";
import "../Css/Results.css";

function Results() {
  const [data, setData] = useState([]);
  const [dataSeries, setdataSeries] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const { query } = useParams();
  const catPeliculas = "FilmsDet";
  const catSeries = "SeriesDet";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=4cb4d24dfb40658a8f14ee7e34eeecec&include_adult=false&language=es-ES`
    )
      .then((res) => res.json())
      .then((data) => data.results && setData(data.results));
  }, [query]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/tv?query=${query}&api_key=4cb4d24dfb40658a8f14ee7e34eeecec&include_adult=false&language=es-ES`
    )
      .then((res) => res.json())
      .then((data) => data.results && setdataSeries(data.results));
  }, [query]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
    storedFavorites && setFavorites(storedFavorites);
  }, []);

  return (
    <>
      <section>
        <h1 className="text-center my-6" id="resultado">
          Resultados para: {query}
        </h1>
        <h1 className="tituloResult1">Películas</h1>
        <ul className="movie-grid">
          {data.length > 0 ? (
            data
              .slice(0, 12)
              .map((movie) => (
                <Cards
                  key={movie.id}
                  data={movie}
                  favorites={favorites}
                  setFavorite={setFavorites}
                  categoria={catPeliculas}
                />
              ))
          ) : (
            <DotPulse
              size={40}
              speed={1.3}
              color="black"
              className="cargando"
            />
          )}
        </ul>
        <h1 className="tituloResult2">Series</h1>
        <ul className="movie-grid">
          {dataSeries.length > 0 ? (
            dataSeries
              .slice(0, 12)
              .map((serie) => (
                <Cards
                  key={serie.id}
                  data={serie}
                  favorites={favorites}
                  setFavorite={setFavorites}
                  categoria={catSeries}
                />
              ))
          ) : (
            <DotPulse
              size={40}
              speed={1.3}
              color="black"
              className="cargando"
            />
          )}
        </ul>
      </section>
    </>
  );
}
export default Results;
