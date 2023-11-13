"use client";

"../style.css";

import { AllProductsType } from "@/types/all-products";
import Image from "next/image";
import React from "react";

function formatPrice(price: number): string {
  return String(price ? price : 4000000).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const AllProductsCard = ({
  price,
  image,
  sold,
  quantity,
  description,
  title,
}: AllProductsType) => {
  const formattedPrice = formatPrice(price);

  const buy = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (typeof event.currentTarget.textContent !== "number") {
      event.currentTarget.textContent = "";
    }
    event.currentTarget.innerHTML = `
    
    <span>-</span>
    <span>${event.currentTarget.textContent + 1}</span>
    <span onclick=${event.currentTarget.textContent + 2}>+</span>


    `;
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
      </div>
      <div className="card-action">
        <button className="add-button" onClick={buy}>
          Add to Cart - <span className="text-green">{formattedPrice}USZ</span>
        </button>
      </div>
    </div>
  );
};

export default AllProductsCard;
