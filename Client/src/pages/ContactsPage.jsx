import React from "react";

import "./contacts.css";

export default function ContactsPage() {
  return (
    <div className={"contacts-page"}>
      <p style={{ fontSize: "25px", paddingLeft: "20px" }}>КОНТАКТЫ:</p>
      <ul className="ul">
        <li className="item">Телефон службы поддержки: 8-918-857-38-81</li>
        <li className="item">
          Звонок по России бесплатный ежедневно с 00:00 до 23:59 по московскому
          времени.
        </li>
        <li className="item">Электронная почта: caramel_store@lmexpress.ru</li>
      </ul>
      <h1 style={{ paddingLeft: "20px" }}>Юридический адрес:</h1>
      <p style={{ paddingLeft: "20px", fontSize: "20px" }}>
        г. Таганрог, ул.Петровская д.45.
      </p>
      <h1 style={{ paddingLeft: "20px" }}>Банковские реквизиты:</h1>

      <p style={{ paddingLeft: "20px" }}>АО "Caramel_store"</p>
      <p style={{ paddingLeft: "20px" }}>ИНН 7839326623</p>
      <p style={{ paddingLeft: "20px" }}>КПП 783450001</p>
      <p style={{ paddingLeft: "20px" }}>ОГРН 1057813298553</p>
      <p style={{ paddingLeft: "20px" }}>ОКПО 79723322</p>
      <p style={{ paddingLeft: "20px", marginBottom: "150px" }}>ОКВЭД 47.71</p>
    </div>
  );
}
