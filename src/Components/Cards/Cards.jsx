import { Link } from "react-router-dom";
import imagen from "../Cards/noDisponible.jpg";
import "../Cards/Cards.css";

function Card({ data, categoria, setFavorite, favorites }) {
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
        {data.poster_path ? (
          <img
            src={API_IMG + data.poster_path}
            alt={`Slide ${data.index}`}
            className="card-image"
          />
        ) : (
          <div className="noDispo">
            <img
              src={imagen}
              alt={`Slide ${data.index}`}
              className="card-image"
            />
          </div>
        )}
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
            <button className="btn btn-dark" id="btn">
              <Link
                to={
                  categoria === "Films"
                    ? `detail/${data.id}`
                    : categoria === "Series"
                    ? `detail/${data.id}`
                    : categoria === "FilmsDet"
                    ? `Films/detail/${data.id}`
                    : categoria === "SeriesDet"
                    ? `Series/detail/${data.id}`
                    : categoria === "FilmsHome"
                    ? `Films/detail/${data.id}`
                    : `detail/${data.id}`
                }
                style={{ color: "gray", textDecoration: "none" }}
              >
                Detalle
              </Link>
            </button>
            <button
              onClick={handleFavorite}
              className="btn btn-dark"
              style={{ color: isFavorite ? "red" : "white" }}
            >
              {isFavorite ? "❤" : "🤍"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
