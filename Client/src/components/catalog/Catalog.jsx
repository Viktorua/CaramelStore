import { useNavigate } from "react-router";

import { Button, Container, Row, Col } from "react-bootstrap";
import "./catalog.styles.css";
import TypeBar from "../TypeBar";
import ButtonsGrop from "./ButtonsGrop";
import Products from "../products/Products";

export default function Catalog(props) {
  // получение товара из бэка

  const { urls, data = [] } = props;
  const navigate = useNavigate();

  const changeRoute = (url) => {
    if (url) {
      navigate(`/${url}`);
    } else {
      navigate("/");
    }
  };

  return (
    <div className={"catalog"}>
      <div className={"catalog__header"}>
        <div className={"catalog__header__text"}>Каталог</div>
      </div>
      <div className={"categories"}>
        <ul className={"categories__list"}>
          {urls?.length > 0 &&
            urls.map((value, index) => {
              return (
                <li className={"category-item"} key={value.id}>
                  <span
                    className={
                      value.properties.isActive === true
                        ? "category-item__text category-item__text-active"
                        : "category-item__text"
                    }
                    onClick={() => {
                      urls.forEach((elem, idx) => {
                        if (idx === index) {
                          elem.properties.isActive = true;
                        } else {
                          elem.properties.isActive = false;
                        }
                      });
                      changeRoute(value.url);
                    }}
                  >
                    {value.properties.text}
                  </span>
                </li>
              );
            })}
        </ul>
        {/* <div className="ButtonsGrop">
          <Row className="ButtonsGrop">
            <ButtonsGrop />
          </Row>
        </div> */}

        <Container>
          <Row className="TypeBar">
            <TypeBar />
          </Row>
          <Products data={data} />
        </Container>
      </div>
    </div>
  );
}
