import "swiper/css";
import "./assets/boxicons-2.1.4/css/boxicons.min.css";
import "./App.scss";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/footer/Footer";

import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Detail from "./pages/Detail";
import HeaderWithRouter from "./components/header/Header";

function App() {
  return (
    <>
      <HeaderWithRouter />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category/" element={<Catalog />} />
          <Route path="/:category/:id" element={<Detail />} />
          <Route path="/:category/search/:keyword" element={<Catalog />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
