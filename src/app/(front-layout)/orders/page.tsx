"use client";

import OrdersList from "@/app/list/orders-list";
import useOrdersStore from "@/store/orders-store";

const OrdersPage: React.FC = () => {
  const { data, addToCart, removeFromCart } = useOrdersStore();

  return (
    <section>
      <div className="container">
        <br />
        <h1>Your Orders</h1>
        <br />
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
