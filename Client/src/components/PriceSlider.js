import React, { useContext, useState } from "react";
import "./PriceSlider.css";
import { Context } from "..";
import { useEffect } from "react";

const PriceSlider = () => {
  const [Price, setPrice] = useState();
  const { filters } = useContext(Context);

  const handleMinPriceChange = (event) => {
    setPrice(Number(event.target.value));
    filters.setFilters({ type: "price", value: event.target.value });
  };

  useEffect(() => {
    if (filters.filters) {
      const { price = "" } = filters.filters;
      setPrice(price || "");
    }
  }, [filters]);

  return (
    <div>
      <label htmlFor="minPrice" className="PriceSlider">
        Укажите цену:
      </label>
      <input
        className="PriceSlider"
        type="range"
        id="setPrice"
        min={0}
        max={50000}
        value={Price}
        onChange={handleMinPriceChange}
        color="black"
        aria-controls="black"
      />
      <span className="PriceSlider">{Price}</span>
    </div>
  );
};

export default PriceSlider;
