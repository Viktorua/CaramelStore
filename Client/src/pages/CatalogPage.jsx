import React from "react";

import Catalog from "../components/catalog/Catalog";
import { urls } from "../consts";

export default function CatalogPage({ data = [] }) {
  return (
    <div className={"catalog-page"}>
      <Catalog urls={urls} data={data} />
    </div>
  );
}
