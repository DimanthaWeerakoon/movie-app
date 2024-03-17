import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import tmdbApi, { movieType } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";

import "./hero-slide.scss";

const HeroSlide = () => {
  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, {
          params,
        });
        setMovieItems(response.results.slice(0, 10));
      } catch {
        console.log("error");
      }
    };
    getMovies();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="hero-slide">
      <Slider {...settings}>
        {movieItems.map((item, i) => (
          <div key={i}>
            <img src={apiConfig.orignailImage(item.backdrop_path)} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlide;
