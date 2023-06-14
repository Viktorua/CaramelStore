import React from "react";
import { Button, Container, ButtonGroup } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import "./paymore.css";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const PayMore = () => {
  const navigate = useNavigate();
  const [typePay, setTypePay] = useState("");

  const back = () => {
    navigate("/basket");
  };
  const save = () => {
    navigate("/shop");
  };
  return (
    <Container className="mainblock">
      <div className="telephone">
        контактный телефон для совершения перевода:{" "}
      </div>
      <div className="telephoneNamber">+7(928) 666-32-11</div>
      <div className="telephoneNamber">ИНН 7839326623</div>
      <Form.Select
        aria-label="Default select example"
        onChange={(e) => setTypePay(e.target.value)}
        className="modalblock"
      >
        <option>Выбери способ оплаты</option>
        <option value="Наличные при получении">Наличные при получении</option>
        <option value="СБП перевод">СБП перевод</option>
      </Form.Select>

      <Button variant="danger" className="back" onClick={() => back()}>
        Назад
      </Button>
      <Button variant="success" className="save" onClick={() => save()}>
        Сохранить
      </Button>
    </Container>
  );
};

export default PayMore;
