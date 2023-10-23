import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import imagen from "../Cards/noDisponible.jpg";

import "../Cards/Cards.css";

function Card({ data, categoria, setFavorite, favorites }) {
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
                    ? `Films/detail/${data.id}`
                    : categoria === "Series"
                    ? `Series/detail/${data.id}`
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
              {favorites &&
              Array.isArray(favorites) &&
              favorites.includes(data.id)
                ? "❤"
                : "🤍"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
