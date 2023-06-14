import React from "react";
import styles from "./our_shop.styles.css";
import fashion from "../../images/fashion.svg";
import style from "../../images/style.svg";
import taste from "../../images/taste.svg";
import sales from "../../images/sales.svg";

import arrow from "../../images/arrow.svg";
import MySlider from "../my_slider/MySlider";
import MySlider2 from "../my_slider/MySlider2";
import { useNavigate } from "react-router";

const OurShop = () => {
  const navigate = useNavigate();

  const changeRoute = (url) => {
    if (url) {
      navigate(`/${url}`);
    } else {
      navigate("/");
    }
  };

  return (
    <div className={"our-shop"}>
      <p className={"header-text"}>Наш магазин это:</p>
      <div className={"fashion"}>
        <div className={"fashion__text"}>
          <span>МОДА</span>
        </div>
        <div>
          <img src={fashion} alt="" className={"fashion__img"} />
        </div>
      </div>
      <div className={"style"}>
        <div>
          <img src={style} alt="" />
        </div>
        <div className={"style__text"}>
          <span>СТИЛЬ</span>
        </div>
      </div>
      <div className={"taste"}>
        <div className={"taste__text"}>
          <span>ВКУС</span>
        </div>
        <div>
          <img src={taste} alt="" className={"fashion__img"} />
        </div>
      </div>
      <div className={"sales"}>
        <div className={"sales__text"}>
          <p>Скидки до 70% на многие образы</p>
        </div>
        <div className={"sales__img"}>
          <img src={sales} alt="" />
        </div>
      </div>
      <MySlider />
      <div className={"to-catalog"}>
        <p className={"to-catalog__text"} onClick={() => changeRoute("shop")}>
          Перейти к каталогу
        </p>
        <img src={arrow} alt="" className={"to-catalog__img"} />
      </div>
      <p className={"reviews"}>Отзывы</p>
      <MySlider2 />
    </div>
  );
};

export default OurShop;
