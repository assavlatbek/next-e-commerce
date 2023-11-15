"use client";

import OrdersList from "@/app/list/orders-list";
import useOrdersStore from "@/store/orders-store";
import React from "react";

const OrdersPage: React.FC = () => {
  const { data, addToCart, removeFromCart } = useOrdersStore();

  return (
    <section>
      <div className="container">
        <h1>Your Orders</h1>
        <OrdersList
          data={data}
          onAddToCart={addToCart}
          onRemoveFromCart={removeFromCart}
        />
      </div>
    </section>
  );
};

export default OrdersPage;
