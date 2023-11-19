"use client";

import React, { useEffect, useState } from "react";
import AllProductsCard from "@/components/cards/all-products";
import { Product } from "@/store/favourites";

import "./style.css";
import LastProductsList from "./last-products";
import Reload from "@/components/reload/Reload";

const FavoritesPage: React.FC = () => {
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([]);

  useEffect(() => {
    const favoritesFromLocalStorage = JSON.parse(
      localStorage.getItem("favorites") ?? "[]"
    );

    setFavoriteProducts(favoritesFromLocalStorage);
    console.log(favoritesFromLocalStorage);
  }, []);
  return (
    <>
      {!favoriteProducts.length ? (
        <div className="w-100">
          <p>No favorites yet.</p>
          <br />
          <div>
            <LastProductsList />
          </div>
        </div>
      ) : (
        <div className="all-products-row">
          {favoriteProducts.map((product) => (
            <AllProductsCard key={Date.now()} {...product} />
          ))}
        </div>
      )}
      <Reload />
    </>
  );
};

export default FavoritesPage;
