import { useEffect, useState } from "react";
import Cards from "../Components/Cards/Cards.jsx";
import "../Css/Favorites.css"

function Favorites() {
    const [favoriteData, setFavoriteData] = useState([]);
    const [storedFavorites, setStoredFavorites] = useState([]);
  
    // LLAMADO A LA API POR CADA ELEMENTO GUARDADO EN EL FAVORITES DE LOCAL STORAGE
    useEffect(() => {
      const storedFavoritesFromLocalStorage = JSON.parse(localStorage.getItem("favorites")) || [];
    
      if (storedFavoritesFromLocalStorage.length > 0) {
        Promise.all(
          storedFavoritesFromLocalStorage.map((idDetail) =>
            fetch(
              `https://api.themoviedb.org/3/movie/${idDetail}?api_key=4cb4d24dfb40658a8f14ee7e34eeecec&language=es-es`
            ).then((res) => res.json())
          )
        )
        .then((data) => {
          setFavoriteData(data);
          setStoredFavorites(storedFavoritesFromLocalStorage);
        })
        .catch((error) => console.error(error));
      }
    }, []);


  return (
    <div>
      <h2 className="text-center my-6">FAVORITES</h2>
      <ul className="flex justify-center items-center flex-wrap gap-6" id="Favo">
        {favoriteData.length > 0 ? (
          favoriteData.map((data) => (
            <Cards
              key={data.id}
              data={data} // Usar idDetail como dato, ya que es un ID
              favorites={favoriteData}
            />
          ))
        ) : (
          <p>No hay bebidas favoritas guardadas.</p>
        )}
      </ul>
    </div>
  );
}

export default Favorites;






