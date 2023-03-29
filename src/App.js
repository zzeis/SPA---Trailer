import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/";
import Contact from "./pages/Sobre";
import Cardapio from "./pages/Cardapio";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './global-style.css';
const Rotas = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact={true} Component={Home} />
        <Route path="/service" Component={Cardapio} />
        <Route path="/contact" Component={Contact} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Rotas;
