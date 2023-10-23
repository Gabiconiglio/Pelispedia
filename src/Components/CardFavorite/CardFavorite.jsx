import "../CardFavorite/CardFavorite.css";

function CardFavorite({
  data,
  categoria,
  setFavorite,
  favorites,
  removeFavorite,
}) {
  const API_IMG = "https://image.tmdb.org/t/p/w500";

  const isFavorite =
    favorites && Array.isArray(favorites) && favorites.includes(data.id);

  const handleFavorite = () => {
    if (Array.isArray(favorites)) {
      const updatedFavorites = isFavorite
        ? favorites.filter((id) => id !== data.id)
        : [...favorites, data.id];

      setFavorite(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }

    if (removeFavorite) {
      removeFavorite(data.id);
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl" id="cardFav">
      <figure className="img">
        <img
          src={API_IMG + data.poster_path}
          alt={`Slide ${data.index}`}
          className="card-image"
        />
      </figure>
      <div className="card-body">
        <div className="card-content">
          <div className="card-actions justify-end">
            {data.title ? (
              <h2 className="card-title">{data.title}</h2>
            ) : (
              <h2 className="card-title">{data.name}</h2>
            )}
          </div>
          <div className="card-actions justify-end">
            <button
              onClick={handleFavorite}
              className="btn btn-dark"
              style={{ color: isFavorite ? "white" : "red" }}
            >
              {favorites &&
              Array.isArray(favorites) &&
              favorites.includes(data.id)
                ? "🤍"
                : "❤"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardFavorite;
