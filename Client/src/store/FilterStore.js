import { makeAutoObservable } from "mobx";

export default class FilterStore {
  constructor() {
    this._filters = {};
    makeAutoObservable(this);
  }

  setFilters = (data) => {
    console.log("data", data);
    const { type, value } = data;
    const resultData = { ...this._filters };
    this._filters = { ...resultData, [type]: value };
  };

  get filters() {
    return this._filters;
  }
}
