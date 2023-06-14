import { Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Catalog from "./components/catalog/Catalog";
import Products from "./components/products/Products";
import Store from "./components/Store";
import { Container, Row } from "react-bootstrap";

import MainPage from "./pages/MainPage";
import Admin from "./pages/Admin";
import Pay from "./pages/Pay";
import PayMore from "./pages/PayMore";
import AuthPage from "./pages/AuthPage";
import AboutPage from "./pages/AboutPage";
import Basket from "./pages/Basket";
import ContactsPage from "./pages/ContactsPage";
import CatalogPage from "./pages/CatalogPage";
import MePage from "./pages/MePage";
import { urls } from "./consts";

import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from ".";
import instance from "./components/Instance";
import { useEffect } from "react";
import { useState } from "react";
import { More } from "./pages/More";

const App = observer(() => {
  const [data, setData] = useState([]);
  const { clothes } = useContext(Context);

  const getAllClothes = async () => {
    try {
      const response = await instance.get("clothes/");
      clothes.setClothes(response.data);
      setData(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getAllClothes();
  }, []);
  // this.addToOrder = this.addToOrder.bind(this);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/Admin"} element={<Admin />} />
        <Route path={"/Pay"} element={<Pay />} />
        <Route path={"/PayMore"} element={<PayMore />} />
        <Route path={"/More/:id"} element={<More data={data} />} />
        <Route path={"/about"} element={<AboutPage />} />
        <Route path={"/contacts"} element={<ContactsPage />} />
        <Route path={"/basket"} element={<Basket />} />
        <Route path={"/me"} element={<MePage />} />
        <Route path={"/login"} element={<AuthPage path="login" />} />
        <Route path={"/register"} element={<AuthPage path="register" />} />
        <Route
          path={"/shop"}
          element={<CatalogPage data={clothes._clothes || []} />}
        />

        {/* <Container>
          <Row>
            <Store />
          </Row>
        </Container> */}

        <Route
          path="/shop/skirts"
          element={
            <div>
              <Catalog
                urls={urls}
                data={data?.filter((item) => item.type === "Юбки")}
              />
            </div>
          }
        />
        <Route
          path="/shop/dresses"
          element={
            <div>
              <Catalog
                urls={urls}
                data={data?.filter((item) => item.type === "Платья")}
              />
            </div>
          }
        />
        <Route
          path="/shop/pants"
          element={
            <div>
              <Catalog
                urls={urls}
                data={data?.filter((item) => item.type === "Брюки")}
              />
            </div>
          }
        />
        <Route
          path="/shop/blouse"
          element={
            <div>
              <Catalog
                urls={urls}
                data={data?.filter((item) => item.type === "Блузки")}
              />
            </div>
          }
        />
        <Route
          path="/shop/blazer"
          element={
            <div>
              <Catalog
                urls={urls}
                data={data?.filter((item) => item.type === "Пиджаки")}
              />
            </div>
          }
        />
        <Route
          path="/shop/shoes"
          element={
            <div>
              <Catalog
                urls={urls}
                data={data?.filter((item) => item.type === "Обувь")}
              />
            </div>
          }
        />
        <Route
          path="/shop/sportswear"
          element={
            <div>
              <Catalog
                urls={urls}
                data={data?.filter((item) => item.type === "Спортивная одежда")}
              />
            </div>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
});

export default App;
