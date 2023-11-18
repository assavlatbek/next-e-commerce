"use client";

import React, { useEffect, useState } from "react";
import AllProductsCard from "@/components/cards/all-products";
import { Product } from "@/store/favourites";

import "./style.css";

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
    <div className="all-products-row">
      {!favoriteProducts.length ? (
        <p>No favorites yet.</p>
      ) : (
        favoriteProducts.map((product) => (
          <AllProductsCard key={Date.now()} {...product} />
        ))
      )}
    </div>
  );
};

export default FavoritesPage;
