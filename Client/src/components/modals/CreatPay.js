import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button, Modal } from "react-bootstrap";
// import axios from "axios";
import instance from "../Instance";
//import App from '../modals/Choice'
import "./creatpay.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePay = ({ show, onHide }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [telephone, setTelephone] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState();
  const navigate = useNavigate();

  const handleAdd = async () => {
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("surname", surname);
      formData.append("telephone", telephone);
      formData.append("city", city);
      formData.append("address", address);

      await axios.post("http://localhost:5000/api/basket/payment", formData);
    } catch (e) {
      console.error(e);
    } finally {
      onHide();
    }
  };
  const PayMore = () => {
    navigate("/PayMore");
  };
  return (
    <Modal size="lg" show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Заполните данные для заказа
        </Modal.Title>
      </Modal.Header>
      <Modal.Title id="contained-modal-title-vcenter" className="create">
        Введите:
      </Modal.Title>
      <Modal.Body>
        <Form>
          <Form.Control
            className={"product"}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={"Имя"}
          />

          <Form.Control
            className={"product"}
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            placeholder={"Фамилию"}
          />
          <Form.Control
            className={"product"}
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            placeholder={"Номер телефона"}
          />
          <Form.Control
            className={"product"}
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder={"Ваш город"}
          />

          <Form.Control
            className={"product"}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder={"Домашний адрес"}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={() => PayMore()}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreatePay;
