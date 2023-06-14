import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import "../components/catalog/catalog.styles.css";
import { Form } from "react-bootstrap";
import { Button, Row, Container } from "react-bootstrap";
import PriceSlider from "./PriceSlider";
import { useEffect } from "react";

const colors = [
  "черный",
  "бежевый",
  "белый",
  "красный",
  "синий",
  "желтый",
  "оранжевый",
  "зеленый",
  "розовый",
  "фиолетовый",
];

const TypeBar = observer(() => {
  const { filters } = useContext(Context);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [style, setStyle] = useState("");

  useEffect(() => {
    if (filters.filters) {
      const { color = "", size = "", style = "" } = filters.filters;
      setColor(color || "");
      setSize(size || "");
      setStyle(style || "");
    }
  }, [filters]);

  return (
    <ListGroup className="TypeBar">
      <Form.Select
        aria-label="Default select example"
        onChange={(e) => {
          const color = e.target.value;

          if (color !== "Укажите цвет") {
            setColor(e.target.value);
            filters.setFilters({ type: "color", value: e.target.value });
          } else {
            setColor(e.target.value);
            filters.setFilters({ type: "color", value: "" });
          }
        }}
        displayName={color}
      >
        <option>Укажите цвет</option>
        {colors.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </Form.Select>
      <Form.Select
        aria-label="Default select example"
        onChange={(e) => {
          const size = e.target.value;
          if (size !== "Укажите размер") {
            setSize(e.target.value);
            filters.setFilters({ type: "size", value: e.target.value });
          } else {
            setSize(e.target.value);
            filters.setFilters({ type: "size", value: "" });
          }
        }}
        className={"product"}
        displayName={size}
      >
        <option>Укажите размер</option>
        <option value="40">40</option>
        <option value="42">42</option>
        <option value="44">44</option>
        <option value="46">46</option>
        <option value="48">48</option>
        <option value="50">50</option>
        <option value="52">52</option>
        <option value="54">54</option>
        <option value="56">56</option>
      </Form.Select>
      <Form.Select
        aria-label="Default select example"
        onChange={(e) => {
          const style = e.target.value;
          if (style !== "Укажите стиль") {
            filters.setFilters({ type: "style", value: e.target.value });
            setStyle(e.target.value);
          } else {
            filters.setFilters({ type: "style", value: "" });
            setStyle(style);
          }
        }}
        className={"product"}
        displayName={style}
      >
        <option>Укажите стиль</option>
        <option value="Повседневная">Повседневная</option>
        <option value="Праздничная">Праздничная</option>
      </Form.Select>
      <Container>
        <Row className="Product">
          <PriceSlider />
        </Row>
      </Container>
    </ListGroup>
  );
});

export default TypeBar;
