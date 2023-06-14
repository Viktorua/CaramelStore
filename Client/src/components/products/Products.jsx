import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation, useParams } from "react-router";
import "./products.styles.css";
import { Context } from "../../index";
import { toJS } from "mobx";
import { useState } from "react";
import axios from "axios";
import { observer } from "mobx-react-lite";
import { Button, ButtonGroup } from "react-bootstrap";
import BasketStore from "../../store/BasketStore";
import { login } from "../../http/userAPI";
import { Delete } from "../modals/Delete";

export const ProductsContent = observer(({ param }) => {
  const { pathname } = useLocation();
  const { basket } = useContext(Context);
  const { clothes } = useContext(Context);
  const { user = {} } = useContext(Context);
  const {
    _user: { data: userData },
  } = user;
  const navigate = useNavigate();
  const [isAddFavorite, setIsAddFavorite] = useState(false);
  const [isAddMore, setIsAddMore] = useState(false);
  const isAdmin = userData?.role === "admin";

  const isButtonDisabled = pathname.includes("basket");
  const textForBasket = userData?.role ? "В корзину" : "Авторизоваться";
  const isUser = !!userData?.role;

  const buttonClassName = `products__pair__item__content__button ${
    isAddFavorite ? "addToFavorite" : ""
  }`;
  const buttonClassNameMore = `products__pair__item__content__button ${
    isAddMore ? "addToFavorite" : ""
  }`;

  const pathToImage = `http://localhost:5000/images/${param.img}`;

  const handleAddToCart = async () => {
    const {
      _user: { id: user_id },
    } = user;

    const {
      type,
      description,
      size,
      price,
      img,
      style,
      color,
      production,
      textile,
      count,
      id,
    } = param;

    // запрос на сохранения товара в баскет по id
    try {
      const formData = new FormData();
      formData.append("image", img);
      formData.append("type", type);
      formData.append("description", description);
      formData.append("size", size);
      formData.append("price", price);
      formData.append("style", style);
      formData.append("color", color);
      formData.append("production", production);
      formData.append("textile", textile);
      formData.append("userId", user_id);
      formData.append("count", count);
      formData.append("clotheId", id);

      const { data } = await axios.post(
        "http://localhost:5000/api/basket/add",
        {
          type,
          description,
          size,
          price,
          img,
          style,
          color,
          production,
          textile,
          count,
          userId: user_id,
          clotheId: id,
        }
      );

      setIsAddFavorite(true);
      basket.setNewProduct(param);

      setIsAddMore(true);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (isAddFavorite) {
      setTimeout(() => setIsAddFavorite(false), 20000);
    }
  }, [isAddFavorite]);

  const more = (id) => {
    navigate(`/More/${id}`);
  };

  const handleToLogin = () => {
    navigate(`/login`);
  };

  const handleDelete = async () => {
    const { _clothes: resultData } = clothes;
    const a = resultData.filter((v) => v.id !== param.id);
    console.log(a);
    clothes.setClothes(a);

    await axios.post("http://localhost:5000/api/clothes/delete", {
      userId: userData.id,
      clotheId: param.id,
    });
  };

  return (
    <div className={"products__pair__item__content"}>
      <span className={"discription"}>{param.description}</span>
      <span className={"price"}>Стоимость </span>
      <span className={"price_num"}>{param.price}P</span>
      <span className={"size"}>Размер </span>
      <span className={"size_num"}>{param.size}</span>

      <img
        className={"img_main"}
        style={{ width: "300px", height: "498px" }}
        src={pathToImage}
      />

      {!isButtonDisabled && (
        <button
          className={buttonClassName}
          variant="btn btn-dark"
          onClick={isUser ? handleAddToCart : handleToLogin}
        >
          {isAddFavorite ? "Добавлено" : textForBasket}
        </button>
      )}

      {!isButtonDisabled && (
        <Button
          variant="btn btn-dark"
          className={"delete"}
          onClick={() => more(param.id)}
        >
          Подробнее
        </Button>
      )}

      {isAdmin && (
        <Button
          variant="btn btn-dark"
          className={"delete"}
          onClick={handleDelete}
        >
          Удалить
        </Button>
      )}
    </div>
  );
});

export const CartProduct = observer(({ data = [] }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { basket } = useContext(Context);
  const navigate = useNavigate();
  console.log("mjxcmjxdm,", data);
  const pay = (url) => {
    if (url) {
      navigate(`/Pay`);
    } else {
      navigate("/Pay");
    }
  };

  useEffect(() => {
    if (data.length > 0) {
      const price = data.reduce((acc, el) => acc + Number(el.price), 0);
      setTotalPrice(price);
    }
    if (data.length === 0) {
      setTotalPrice(0);
    }
  }, [data]);

  const handleRemoveFromCart = (itemId) => {
    basket.setRemoveProduct(itemId);
  };

  return (
    //отрисовка корзины
    <div
      style={{
        display: "flow",
        flexDirection: "column",
        gap: 100,
      }}
    >
      <div className={"products__pair__item__content"}>
        {data.map((item) => (
          <div className={"products__pair__item_bus"} key={item.id}>
            <ProductsContent
              className={"products__pair__item_bus"}
              param={item}
            />
            <ButtonGroup className="products__pair__item_butt">
              <Button
                variant="btn btn-dark"
                onClick={() => handleRemoveFromCart(item.id)}
              >
                Удалить
              </Button>
              <Button variant="btn btn-dark" onClick={() => pay()}>
                Оплатить
              </Button>
            </ButtonGroup>
          </div>
        ))}
      </div>
      <div className="basket_price">Общая стоимость: {totalPrice}P</div>
    </div>
  );
});
const filterByOption = (data = [], options) => {
  let temp = [...data];

  const { color = "", style = "", size = "", price = "" } = toJS(options);

  if (color) {
    temp = temp.filter((item) => item.color === color);
  }

  if (style) {
    temp = temp.filter((item) => item.style === style);
  }

  if (size) {
    temp = temp.filter((item) => item.size === +size);
  }

  if (price) {
    temp = temp.filter((item) => item.price <= +price);
  }

  return temp;
};

const Products = observer((props) => {
  const { data } = props;

  const {
    filters: { filters },
  } = useContext(Context);

  const [resultData, setResultData] = useState([]);

  useEffect(() => {
    setResultData(filterByOption(data, filters));
  }, [filters, data]);
  //отрисовка каталога
  return (
    <div className="products">
      <div className="products__pair">
        {resultData?.length > 0 &&
          resultData.map((value) => (
            <div className={"products__pair__item"} key={value.id}>
              <ProductsContent param={value} />
            </div>
          ))}
      </div>
    </div>
  );
});

export default Products;
