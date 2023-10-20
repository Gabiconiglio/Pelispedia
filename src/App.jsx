import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nabvar from "./Components/Nabvar/Nabvar.jsx";
import Home from "./Screens/Home.jsx";
import Films from "./Screens/Films.jsx";
import Series from "./Screens/Series.jsx";
import NotFound404 from "./Screens/NotFound404.jsx";
import Favoritos from "./Screens/Favoritos.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Detail from "./Screens/Detail.jsx";

function App() {
  return (
    <BrowserRouter>
      <Nabvar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Films" element={<Films/>} />
        <Route path="/Films/:idDetail" element={<Films/>} />
        <Route path="/Series" element={<Series/>} />
        <Route path="/Favoritos" element={<Favoritos />} />
        <Route path="/:category/Detail/:idDetail" element={<Detail />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
