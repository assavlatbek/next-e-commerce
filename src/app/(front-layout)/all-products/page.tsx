import { Metadata } from "next";
import React from "react";
import AllProductsList from "../../list/all-products-list";
import Loader from "@/components/loader/Loader";

export const metadata: Metadata = {
  title: "E-commerce | All Products",
  description: "E-commerce by Savlatbek",
};

const AllProducts = () => {
  return (
    <section>
      <Loader />
      <div className="container">
        <AllProductsList />
      </div>
    </section>
  );
};

export default AllProducts;
