import React from "react";
import "./basket.css";
import { useNavigate } from "react-router";
import { CartProduct } from "../components/products/Products";
import { useContext } from "react";
import { Context } from "..";
import { toJS } from "mobx";
import { useEffect } from "react";
import axios from "axios";
import { observer } from "mobx-react-lite";

const Basket = observer(() => {
  const { basket } = useContext(Context);
  const { user } = useContext(Context);

  const navigate = useNavigate();

  const changeRoute = (url) => {
    if (url) {
      navigate(`/${url}`);
    } else {
      navigate("/");
    }
  };

  return <CartProduct data={basket._basket} />;
});

export default Basket;
