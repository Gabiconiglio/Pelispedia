import { useEffect, useState } from "react";
import { DotPulse } from "@uiball/loaders";
import Cards from "../Components/Cards/Cards.jsx";
import Paginador from "../Components/Paginator/Paginator.jsx"
import "../Css/Series.css";
import "../Components/Loader/Loader.css";

function Films() {
  const [series, setSeries] = useState([]);
  const[currentPage,setCurrentPage]= useState(1);
  const [favorites, setFavorites] = useState([]);
  const maxPagesToshow=20;
  const seriesPerPage=20;
  const categoria = 'Series';
  const BASE_URL = `https://api.themoviedb.org/3/tv/popular?api_key=4cb4d24dfb40658a8f14ee7e34eeecec&page=${currentPage}&language=es-es&adult=false`;


  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        setSeries(data.results);
      });
  }, [currentPage]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
    storedFavorites && setFavorites(storedFavorites);
  }, []);
  
  const handlePageChange=(page)=>{
    setCurrentPage(page);
  }

  return (
    <section>
      <h1 className="titulo">Series</h1>
      <ul className="movie-grid">
        {series.length > 0 ? (
          series
            .slice(0, seriesPerPage)
            .map((series) => <Cards key={series.id} data={series} favorites={favorites}
            setFavorite={setFavorites} />)
        ) : (
          <DotPulse size={40} speed={1.3} color="black" />
        )}
      </ul>
      <Paginador
        currentPage={currentPage}
        onPageChange={handlePageChange}
        totalPages={maxPagesToshow}
      />
    </section>
  );
}

export default Films;
