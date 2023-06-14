import { makeAutoObservable } from "mobx";

export default class BasketStore {
  constructor() {
    this._basket = [];
    makeAutoObservable(this);
  }

  setNewProduct = (value) => {
    const data = [...this._basket];
    this._basket = [...data, value];
  };

  setRemoveProduct = (itemId) => {
    console.log("this._basket", this._basket);
    console.log("item.id", itemId);
    this._basket = this._basket.filter((item) => Number(item.id) !== itemId);
  };

  get basket() {
    return this._basket;
  }
}
