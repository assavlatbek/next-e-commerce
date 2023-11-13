import AllProductsList from "@/app/list/all-categories";
import { Metadata } from "next";
import React from "react";
import LastProductsList from "../list/last-products";
import Link from "next/link";
import AllCategoriesList from "@/app/list/all-categories";

export const metadata: Metadata = {
  title: "E-commerce | Home",
  description: "E-commerce by Savlatbek",
};

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="list-row">
          <h1 className="list-card-title">Latest Products</h1>{" "}
          <h3>
            <Link href={"/all-products"}>View all </Link>
          </h3>
        </div>
        <LastProductsList />
        <h1 className="list-card-title">Categories</h1>
        <AllCategoriesList />
      </div>
    </>
  );
};

export default Home;
