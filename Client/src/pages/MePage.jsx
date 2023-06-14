import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import "./me.css";
import { registration } from "../http/userAPI";
import { useState } from "react";
import axios from "axios";
import { toJS } from "mobx";

const MePage = observer((param) => {
  const { user } = useContext(Context);

  console.log("user", toJS(user));

  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleAddToCart = async () => {
    const {
      _user: { id: user_id },
    } = user;

    const { name, surname, email, id } = param;

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("name", name);
      formData.append("surname", surname);
      formData.append("userId", id);

      const { data } = await axios.post("http://localhost:5000/api/login", {
        name,
        surname,
        email,
        id: user_id,
      });

      console.log("jjjjj", data, email);
    } catch (e) {
      console.error(e);
    }
  };
  const logout = () => {
    console.log(jwt_decode(localStorage.getItem("token")));
    user.setUser({});
    user.setIsAuth(false);
    navigate("/login");
  };
  console.log("info", param);

  const {
    _user: { data = {} },
  } = user;
  return (
    <div className="me-page">
      <div className="head">
        <h1 style={{ textAlign: "left" }}>Личные данные</h1>
        <button className="log-out" onClick={logout}>
          Выйти
        </button>
      </div>
      <div
        className="user-data"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <span className="user-form_info">
          Данные указанные при регистрации:
        </span>
        <span className="user-form"> Ваш e-mail: {data.email}</span>
        <span className="user-form">Ваше имя: {data.name} </span>
        <span className="user-form">Ваша фамилия: {data.surname}</span>
      </div>
    </div>
  );
});

export default MePage;
