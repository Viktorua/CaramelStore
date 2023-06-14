import { observer } from "mobx-react-lite";
import Basket from "../../pages/Basket";
import { Button } from "bootstrap";

export const Delete = observer(({ data = [] }) => {
  const handleRemoveFromCart = (itemId) => {
    Basket.setRemoveProduct(itemId);
  };

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <Button
            variant="btn btn-dark"
            onClick={() => handleRemoveFromCart(item.id)}
          >
            Удалить
          </Button>
        </div>
      ))}
    </div>
  );
});
