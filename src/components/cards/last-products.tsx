"use client";

import { useStore } from "@/store/cart-store";
import { useFavouritesStore } from "@/store/favourites";
import LastProductsType from "@/types/last-products";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

function formatPrice(price: number): string {
  return String(price ? price : 4000000).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const LastProductCard = ({
  _id,
  price,
  image,
  sold,
  quantity,
  description,
  title,
}: LastProductsType) => {
  const formattedPrice = formatPrice(price);

  const navigate = useRouter();

  const addToCart = useStore((state) => state.addToCart);
  const increaseQuantity = useStore((state) => state.increaseQuantity);
  const decreaseQuantity = useStore((state) => state.decreaseQuantity);
  const cartQuantity = useStore((state) => state.cart[_id]?.quantity || 0);

  const toggleFavorite = useFavouritesStore((state) => state.toggleFavorite);
  const isFavorite = useFavouritesStore((state) =>
    state.favorites.some((p) => p._id === _id)
  );

  const handleToggleFavorite = () => {
    toggleFavorite({
      _id,
      price,
      image,
      sold,
      quantity,
      description,
      title,
      checked: false,
      category: {
        _id: "",
        name: "",
        image: {
          public_id: "",
          url: "",
        },
        createdAt: "",
        updatedAt: "",
        __v: 0,
      },
      createdAt: "",
      updatedAt: "",
      __v: 0,
    });
  };

  const handleAddToCart = () => {
    if (window || localStorage.getItem("token"))
      if (cartQuantity === 0) {
        addToCart(_id, title, price);
      } else {
        increaseQuantity(_id);
      }
    else {
      toast.error("Login requeired, You are redricting");
      setTimeout(() => {
        navigate.push("/auth/login");
      }, 1000);
    }
  };

  const handleIncreaseQuantity = () => {
    increaseQuantity(_id);
  };

  const handleDecreaseQuantity = () => {
    decreaseQuantity(_id);
  };

  return (
    <div className="home-card">
      <center className="product-card-image-container">
        <Image
          width={300}
          height={300}
          src={
            image?.url
              ? image?.url
              : "https://mobilecity-live.s3.ap-southeast-2.amazonaws.com/wp-content/uploads/2021/01/01010454/W13-6-600x450.jpg"
          }
          alt="image"
        />
      </center>
      <div className="home-card-body">
        <h3 className="product-name">{title ? title : "Iphone"}</h3>
        <hr />
        <div className="card-row">
          <p>{description ? description : "hello"}</p>
        </div>
        <div className="card-row">
          <p>
            <b>sold:</b> <span className="text-green">{sold ? sold : 0}</span>
          </p>
          <p>
            <b>quantity:</b>{" "}
            <span className="text-green">{quantity ? quantity : 0}</span>
          </p>
        </div>

        <p>
          <b>Price: </b> <span className="text-green">{formattedPrice}USZ</span>
        </p>
      </div>
      <div className="card-action">
        {cartQuantity > 0 ? (
          <>
            <button className="add-by-button">
              <span className="minus-button" onClick={handleDecreaseQuantity}>
                -
              </span>
              <span>{cartQuantity}</span>
              <span className="plus-button" onClick={handleIncreaseQuantity}>
                +
              </span>
            </button>
          </>
        ) : (
          <button className="add-button" onClick={handleAddToCart}>
            Add to Cart - {formattedPrice}USZ
          </button>
        )}
      </div>
    </div>
  );
};

export default LastProductCard;
