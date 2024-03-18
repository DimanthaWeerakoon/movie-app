import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tmdbApi, { movieType } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import "./hero-slide.scss";
import Button, { OutlineButton } from "../button/Button";

const HeroSlide = () => {
  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, {
          params,
        });
        setMovieItems(response.results.slice(0, 6));
      } catch (error) {
        console.log("error", error);
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
            <HeroSlideItem item={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const HeroSlideItem = (props) => {
  const [isActive, setIsActive] = useState(false);
  const item = props.item;
  const history = useNavigate();

  const background = apiConfig.orignailImage(
    item.backdrop_path || item.poster_path
  );

  const activateSlide = () => {
    setIsActive(true);
  };

  return (
    <div
      className={`hero-slide__item ${isActive ? "active" : ""}`}
      style={{ backgroundImage: `url(${background})` }}
      onClick={activateSlide}
    >
      <div className="hero-slide__item__content container">
        <div className="hero-slide__item__content__info">
          <h2 className="title">{item.title}</h2>
          <div className="overview">{item.overview}</div>
          <div className="btns">
            <Button onClick={() => history("/movie/" + item.id)}>
              Watch now
            </Button>
            <OutlineButton onClick={() => console.log("trailer")}>
              Watch trailer
            </OutlineButton>
          </div>
        </div>
        <div className="hero-slide__item__content__poster">
          <img src={apiConfig.w500Image(item.poster_path)} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
