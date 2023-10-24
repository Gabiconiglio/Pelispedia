import { Link } from "react-router-dom";
import "../CardDetail/CardDetail.css";

function CardDetail({ data, categoria, setFavorite, favorites }) {
  const API_IMG = "https://image.tmdb.org/t/p/w500";

  const isFavorite = favorites.some(
    (item) => item.id === data.id && item.categoria === categoria
  );

  const handleFavorite = () => {
    if (Array.isArray(favorites)) {
      const isFavorite = favorites.some(
        (item) => item.id === data.id && item.categoria === categoria
      );

      if (isFavorite) {
        const updatedFavorites = favorites.filter(
          (item) => item.id !== data.id && item.categoria !== categoria
        );

        setFavorite(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      } else {
        const updatedFavorites = [...favorites, { id: data.id, categoria }];

        setFavorite(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      }
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="img">
        <img
          src={API_IMG + data.poster_path}
          alt={`Slide ${data.index}`}
          className="card-image"
        />
      </figure>
      <div className="card-body">
        <div className="card-content">
          <div className="card-actions justify-end"></div>
          <div className="card-actions justify-end">
            <button className="btn btn-dark" id="btn">
              {categoria === "Series" ? (
                <Link
                  to={`/Series`}
                  style={{ color: "gray", textDecoration: "none" }}
                >
                  Back
                </Link>
              ) : (
                <Link
                  to={`/Films`}
                  style={{ color: "gray", textDecoration: "none" }}
                >
                  Back
                </Link>
              )}
            </button>
            <button
              onClick={handleFavorite}
              className="btn btn-dark"
              style={{
                color: favorites.some(
                  (item) => item.id === data.id && item.categoria === categoria
                )
                  ? "red"
                  : "white",
              }}
            >
              {isFavorite ? "❤" : "🤍"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
