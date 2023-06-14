import { makeAutoObservable } from "mobx";

export default class ClothesStore {
  constructor() {
    this._clothes = [];
    this._page = 1;
    this._totalCount = 0;
    this._limit = 3;
    makeAutoObservable(this);
  }

  setPage(page) {
    this._page = page;
  }
  setTotalCount(count) {
    this._totalCount = count;
  }
  setClothes(clothes) {
    this._clothes = clothes;
  }

  get clothes() {
    return this._clothes;
  }

  get totalCount() {
    return this._totalCount;
  }
  get page() {
    return this._page;
  }
  get limit() {
    return this._limit;
  }
}
