"use client";

import AllCategoriesCard from "@/components/cards/all-categories-card";
import useAllCategories from "@/store/all-categories";
import { useEffect } from "react";
import Carousel from "react-multi-carousel";

const AllCategoriesList = () => {
  const { loading, data, getData } = useAllCategories();

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
          autoPlay={false}
          autoPlaySpeed={100}
          keyBoardControl={true}
        >
          {data.map((el) => (
            <AllCategoriesCard key={Date.now()} {...el} />
          ))}
        </Carousel>
      )}
    </section>
  );
};

export default AllCategoriesList;
