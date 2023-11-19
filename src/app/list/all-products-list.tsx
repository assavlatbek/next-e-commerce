"use client";

import { useEffect, useState } from "react";

import "./style.css";
import request from "@/server";
import { Pagination } from "@mui/material";
import { LIMIT } from "@/constants";
import AllProductsCard from "@/components/cards/all-products";
import { AllProductsType } from "@/types/all-products";
import Reload from "@/components/reload/Reload";

interface Types {
  limit: number;
  search: string;
  page: number;
  category?: string;
}

const AllproductsList = () => {
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(1);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const controlPages = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    setPage(1);
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const params: Types = {
          page,
          limit: LIMIT,
          search,
        };
        if (category) {
          params.category = category;
        }
        const {
          data: { products, total },
        } = await request.get("product", { params });
        setProducts(products);
        setTotal(total);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
    const getCategories = async () => {
      const { data: categories } = await request.get("category");
      setCategories(categories);
    };
    getCategories();
  }, [setCategories, setProducts, page, search, category]);

  const Sorting = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    setPage(1);
  };

  return (
    <>
      <div className="all-products-header">
        <h1>All Products ({total})</h1>
        <select onChange={(e) => Sorting(e)} className="all-products-filter">
          <option value="">All</option>
          {categories?.map((category: { _id: string; name: string }) => (
            <option key={category?._id} value={category?._id}>
              {category?.name}
            </option>
          ))}
        </select>
      </div>
      <div className="all-products-search">
        <input
          type="text"
          placeholder="searching..."
          value={search}
          onChange={(e) => {
            handleSearch(e);
          }}
        />
      </div>
      <br />
      <div className="all-products-row">
        {loading
          ? "Loading..."
          : !products.length
          ? "Not Found!"
          : products?.map((product: AllProductsType) => (
              <AllProductsCard key={product._id} {...product} />
            ))}
      </div>
      <br />
      <div
        style={{
          textAlign: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        {total / LIMIT > 1 ? (
          <Pagination
            count={Math.ceil(total / LIMIT)}
            page={page}
            onChange={(event, value) => controlPages(event, value)}
            boundaryCount={2}
          />
        ) : null}
      </div>
      <br />
      <Reload />
    </>
  );
};

export default AllproductsList;
