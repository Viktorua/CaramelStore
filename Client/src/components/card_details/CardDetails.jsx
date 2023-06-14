import { observer } from "mobx-react-lite";
import "./CardDetails.styles.css";

export const CardDetails = observer(({ param = {} }) => {
  const pathToImage = `http://localhost:5000/images/${param.img}`;

  return (
    <div className="more">
      <span className={"discription_more"}>{param.description}</span>
      <span className={"price_more"}>Стоимость </span>
      <span className={"price_num_more"}>{param.price}P</span>
      <span className={"size_more"}>Размер </span>
      <span className={"size_num_more"}>{param.size}</span>
      <span className={"size_more"}>Цвет </span>
      <span className={"size_num_more"}>{param.color} </span>
      <span className={"size_more"}>Производство </span>
      <span className={"size_num_more"}>Турция </span>
      <span className={"size_more"}>{param.production} </span>
      <span className={"size_more"}>Состав </span>
      <span className={"price_num_more"}>Хлопок </span>
      <span className={"size_more"}>{param.textile} </span>
      <img
        className={"img_more"}
        // style={{ width: "300px", height: "498px" }}
        src={pathToImage}
        alt="imageProduct"
      />
    </div>
  );
});
