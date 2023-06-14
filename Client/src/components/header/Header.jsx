import React, { useContext } from "react";
import "./header.styles.css";
import { useNavigate } from "react-router";
import basket from "../../images/basket.svg";
import me from "../../images/me.svg";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";

const Header = observer(() => {
  const { user } = useContext(Context);
  const { _user, _isAuth } = user;

  const navigate = useNavigate();

  const changeRoute = (url) => {
    if (url) {
      navigate(`/${url}`);
    } else {
      navigate("/");
    }
  };

  return (
    <div className={"header"}>
      <span className={"header__brand"} onClick={() => changeRoute()}>
        CARAMEL.STORE
      </span>
      <ul className={"header__menu"}>
        {_user?.data?.role === "admin" && (
          <li className={"li_Admin"}>
            <div
              className="admin"
              onClick={() => {
                changeRoute("admin");
              }}
            >
              Админ
            </div>
          </li>
        )}

        <li className={"li_shop"}>
          <span onClick={() => changeRoute("shop")}>Каталог</span>
        </li>
        <li className={"li_about"}>
          <span onClick={() => changeRoute("about")}>О нас</span>
        </li>
        <li className={"li_contacts"}>
          <span onClick={() => changeRoute("contacts")}>Контакты</span>
        </li>
        <li>
          <span className={"menu__separator"}>|</span>
        </li>
        {_isAuth && (
          <li className={"menu__images"} onClick={() => changeRoute("basket")}>
            <img src={basket} alt="" />
          </li>
        )}
        <li
          className={"menu__images"}
          onClick={() => {
            if (!_isAuth) {
              changeRoute("login");
            } else {
              changeRoute("me");
            }
          }}
        >
          <img src={me} alt="" />
        </li>
      </ul>
    </div>
  );
});

export default Header;
