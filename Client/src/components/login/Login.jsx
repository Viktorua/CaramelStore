import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../index";

import "./login.styles.css";
import { login } from "../../http/userAPI";

const Login = observer(() => {
  const { user } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const click = async () => {
    let data = await login(email, password);

    user.setUser(data);
    user.setIsAuth(true);

    if (data.role !== "user") {
      navigate("/shop");
    } else {
      navigate("/shop");
    }
    if (data.role === "Admin") {
      navigate("/Admin");
    }
  };

  return (
    <form className="login-form">
      <input
        type="text"
        placeholder="Email"
        className="input-field"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Пароль"
        className="input-field"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="button-auth-log" onClick={click}>
        <span>Войти</span>
      </div>
    </form>
  );
});

export default Login;
