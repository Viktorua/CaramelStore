import React from "react";

import "./footer.styles.css";

export default function Footer() {
  return (
    <div className={"footer"}>
      <p>г.Таганрог ул.Петровская 45</p>
      <p>Eжедневно с 9:00 до 20:00</p>
      <a href="https://web.telegram.org/a/#-1832500260" className={"inst-link"}>
        Мы в Telegram!
      </a>
    </div>
  );
}
