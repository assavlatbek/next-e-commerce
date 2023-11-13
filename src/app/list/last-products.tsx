"use client";

import LastProductCard from "@/components/cards/last-products";
import useLastProduct from "@/store/last-produts";
import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";

const LastProductsList = () => {
  const { loading, data: last_product, getData } = useLastProduct();

  useEffect(() => {
    getData();
  }, [getData]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: { max: 1024, min: 500 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <section className="container">
      {loading ? (
        "Loading..."
      ) : (
        <Carousel
          responsive={responsive}
          showDots={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
        >
          {last_product.map((el) => (
            <LastProductCard key={Date.now()} {...el} />
          ))}
        </Carousel>
      )}
    </section>
  );
};

export default LastProductsList;
