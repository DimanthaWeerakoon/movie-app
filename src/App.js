import "swiper/css";
import "./assets/boxicons-2.1.4/css/boxicons.min.css";
import "./App.scss";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
// import Routings from "./config/Routings";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Detail from "./pages/Detail";

function App() {
  return (
    <>
      <Header />
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
