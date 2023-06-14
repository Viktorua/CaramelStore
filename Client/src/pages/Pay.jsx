import React from "react";
import { Button, Container } from "react-bootstrap";
import { useState } from "react";

import CreatePay from "../components/modals/CreatPay";

import "./ADMIN.css";

const Pay = () => {
  const [productVisible, setProductisible] = useState(false);

  return (
    <Container>
      <Button
        className={"start"}
        variant={"btn btn-dark"}
        onClick={() => setProductisible(true)}
      >
        Добавить детали оплаты
      </Button>
      <CreatePay show={productVisible} onHide={() => setProductisible(false)} />
    </Container>
  );
};

export default Pay;
