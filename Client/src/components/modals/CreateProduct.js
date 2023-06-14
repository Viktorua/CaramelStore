import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button, Modal } from "react-bootstrap";
import ImageUploader from "../../http/Item";
// import axios from "axios";
import instance from "../Instance";
//import App from '../modals/Choice'

const CreateProduct = ({ show, onHide }) => {
  const [description, setDescription] = useState("");
  const [style, setStyle] = useState("");
  const [color, setColor] = useState("");
  const [type, setType] = useState("");
  const [size, setSize] = useState();
  const [price, setPrice] = useState();
  const [production, setProduction] = useState();
  const [textile, setTextile] = useState();
  const [count, setCount] = useState();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleUploadImage = (event) => {
    setSelectedFile(event.target.files[0]);
    // onHide();
  };

  const handleAddProduct = async () => {
    onHide();
    try {
      const formData = new FormData();
      formData.append("image", selectedFile);
      formData.append("type", type);
      formData.append("description", description);
      formData.append("size", size);
      formData.append("price", price);
      formData.append("style", style);
      formData.append("color", color);
      formData.append("production", production);
      formData.append("textile", textile);
      formData.append("count", count);

      await instance.post("clothes", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Modal size="lg" show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новый товар
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => setType(e.target.value)}
          >
            <option>Выбери тип товара</option>
            <option value="Юбки">Юбки</option>
            <option value="Платья">Платья</option>
            <option value="Брюки">Брюки</option>
            <option value="Блузки">Блузки</option>
            <option value="Пиджаки">Пиджаки</option>
            <option value="Обувь">Обувь</option>
            <option value="Спортивная одежда">Спортивная одежда</option>
          </Form.Select>

          <Form.Control
            className={"product"}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder={"Введите описание товара"}
          />
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => setStyle(e.target.value)}
            className={"product"}
          >
            <option>Выбери стиль</option>
            <option value="Повседневная">Повседневная</option>
            <option value="Праздничная">Праздничная</option>
          </Form.Select>
          <Form.Select
            className={"product"}
            value={color}
            onChange={(e) => setColor(e.target.value)}
          >
            <option>Укажите цвет</option>
            <option value="черный">черный</option>
            <option value="бежевый">бежевый</option>
            <option value="белый">белый</option>
            <option value="красный">красный</option>
            <option value="синий">синий</option>
            <option value="жёлтый">жёлтый</option>
            <option value="оранжевый">оранжевый</option>
            <option value="зелёный">зелёный</option>
            <option value="розовый">розовый</option>
            <option value="фиолетовый">фиолетовый</option>
          </Form.Select>

          <Form.Select
            className={"product"}
            value={size}
            onChange={(e) => setSize(e.target.value)}
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
          <Form.Control
            className={"product"}
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            placeholder="Введите стоимость товара"
            type="number"
          />
          <Form.Control
            className={"product"}
            value={production}
            onChange={(e) => setProduction(e.target.value)}
            placeholder={"Введите страну производства"}
          />
          <Form.Control
            className={"product"}
            value={textile}
            onChange={(e) => setTextile(e.target.value)}
            placeholder={"Введите тип ткани"}
          />
          <Form.Control
            className={"product"}
            value={count}
            onChange={(e) => setCount(e.target.value)}
            placeholder={"Введите количество товара"}
          />

          <Button className={"img"} variant={"btn btn-dark"}>
            <ImageUploader handleUploadImage={handleUploadImage} />
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={handleAddProduct}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateProduct;
