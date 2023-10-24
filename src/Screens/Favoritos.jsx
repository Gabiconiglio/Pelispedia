import { useEffect, useState } from "react";
import { DotPulse } from "@uiball/loaders";
import CardFavorite from "../Components/CardFavorite/CardFavorite.jsx";
import "../Css/Favorites.css";
import "../Components/Loader/Loader.css";

function Favorites() {
  const [favoriteData, setFavoriteData] = useState([]);

  useEffect(() => {
    const storedFavoritesFromLocalStorage =
      JSON.parse(localStorage.getItem("favorites")) || [];

    if (storedFavoritesFromLocalStorage.length > 0) {
      Promise.all(
        storedFavoritesFromLocalStorage.map(({ id, categoria }) => {
          if (
            categoria === "Films" ||
            categoria === "FilmsHome" ||
            categoria === "FilmsDet"
          ) {
            return fetch(
              `https://api.themoviedb.org/3/movie/${id}?api_key=4cb4d24dfb40658a8f14ee7e34eeecec&adult=false&language=es-es`
            );
          } else if (categoria === "Series" || categoria === "SeriesDet") {
            return fetch(
              `https://api.themoviedb.org/3/tv/${id}?api_key=4cb4d24dfb40658a8f14ee7e34eeecec&adult=false&language=es-es`
            );
          } else {
            return Promise.reject("Categoría desconocida en favoritos");
          }
        })
      )
        .then((responses) => {
          return Promise.all(responses.map((response) => response.json()));
        })
        .then((data) => {
          setFavoriteData(data);
        })
        .catch((error) => console.error(error));
    }
  }, []);

  const removeFavorite = (idDetail) => {
    const updatedFavorites = favoriteData.filter(
      (data) => data.id !== idDetail
    );
    setFavoriteData(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <h2 className="text-center my-6" id="tituloFav">
        Favoritos
      </h2>
      <ul
        className="flex justify-center items-center flex-wrap gap-6"
        id="Favo"
      >
        {favoriteData.length > 0 ? (
          favoriteData.map((data) => (
            <CardFavorite
              key={data.id}
              data={data}
              favorites={favoriteData}
              setFavorite={setFavoriteData}
              removeFavorite={removeFavorite}
            />
          ))
        ) : (
          <DotPulse size={40} speed={1.3} color="black" className="cargando" />
        )}
      </ul>
      {favoriteData.length === 0 ? (
        <h5 className="NoSeleccion">No seleccionaste ningún favorito</h5>
      ) : null}
    </div>
  );
}

export default Favorites;
