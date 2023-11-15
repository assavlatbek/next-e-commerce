import OrdersCard from "@/components/cards/orders-card";
import React from "react";

interface OrdersListProps {
  data: Record<string, { name: string; price: number; quantity: number }>;
  onAddToCart: (productId: string) => void;
  onRemoveFromCart: (productId: string) => void;
}

const OrdersList: React.FC<OrdersListProps> = ({
  data,
  onAddToCart,
  onRemoveFromCart,
}) => {
  return (
    <div>
      {Object.entries(data).map(([productId, product]) => (
        <OrdersCard
          key={productId}
          productId={productId}
          name={product.name}
          price={product.price}
          quantity={product.quantity}
          onAddToCart={() => onAddToCart(productId)}
          onRemoveFromCart={() => onRemoveFromCart(productId)}
        />
      ))}
    </div>
  );
};

export default OrdersList;
