import { Metadata } from "next";
import React from "react";
import AllProductsList from "../../list/all-products-list";

export const metadata: Metadata = {
  title: "E-commerce | All Products",
  description: "E-commerce by Savlatbek",
};

const AllProducts = () => {
  return (
    <section>
      <div className="container">
        <AllProductsList />
      </div>
    </section>
  );
};

export default AllProducts;
