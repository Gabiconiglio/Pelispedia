import { useEffect, useState } from "react";
import { DotPulse } from "@uiball/loaders";
import CardFavorite from "../Components/CardFavorite/CardFavorite.jsx";
import "../Css/Favorites.css";
import "../Components/Loader/Loader.css";

function Favorites() {
  const [favoriteData, setFavoriteData] = useState([]);
  const [storedFavorites, setStoredFavorites] = useState([]);

  // carga la card por cada llamado
  useEffect(() => {
    const storedFavoritesFromLocalStorage =
      JSON.parse(localStorage.getItem("favorites")) || [];

    if (storedFavoritesFromLocalStorage.length > 0) {
      Promise.all(
        storedFavoritesFromLocalStorage.map((idDetail) =>
          Promise.all([
            fetch(
              `https://api.themoviedb.org/3/movie/${idDetail}?api_key=4cb4d24dfb40658a8f14ee7e34eeecec&adult=false&language=es-es`
            ),
            fetch(
              `https://api.themoviedb.org/3/tv/${idDetail}?api_key=4cb4d24dfb40658a8f14ee7e34eeecec&adult=false&language=es-es`
            ),
          ]).then(([response1, response2]) => {
            if (response2.status === 200) {
              return response2.json();
            } else {
              return response1.json();
            }
          })
        )
      )
        .then((data) => {
          setFavoriteData(data);
        })
        .catch((error) => console.error(error));
    }
  }, []);

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
            <CardFavorite key={data.id} data={data} favorites={favoriteData} />
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
