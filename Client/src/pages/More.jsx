import React, { useState, useEffect } from "react";
import "./basket.css";
import { useParams, useNavigate } from "react-router";
import { observer } from "mobx-react-lite";
import { CardDetails } from "../components/card_details/CardDetails";
import ArrowBack from "../images/ArrowBack.svg";
import "./more.css";

export const More = observer(({ data = [] }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (data.length) {
      setProduct(data.find((v) => v.id === +id) || {});
    }
  }, [id, data]);

  const handleClickBack = () => {
    navigate(-1);
  };

  return (
    //отрисовка карточки в "подробнее"
    <div style={{ display: "flex" }}>
      <img
        className="callBack"
        src={ArrowBack}
        alt="ArrowBack"
        onClick={handleClickBack}
      />
      <div
        style={{
          display: "flow",
          flexDirection: "column",
          gap: 100,
        }}
        key={product.id}
      >
        <div className="more">
          <CardDetails param={product} />
        </div>
        {/* <Magnifier /> */}
      </div>
    </div>
  );
});
