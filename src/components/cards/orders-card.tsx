"use client";
import "../style.css";

interface OrdersCardProps {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  onAddToCart: () => void;
  onRemoveFromCart: () => void;
}

function formatPrice(price: number): string {
  return String(price ? price : 4000000).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const OrdersCard: React.FC<OrdersCardProps> = ({
  name,
  price,
  quantity,
  onAddToCart,
  onRemoveFromCart,
}) => {
  const formattedPrice = formatPrice(price * quantity);

  return (
    <div className="ordered-card">
      <span>{name}</span>
      <span>x{quantity}</span>
      <span>{formattedPrice}USZ</span>
      <div className="ordered-card-action">
        <button className="plus" onClick={onAddToCart}>
          +1
        </button>
        <button className="minus" onClick={onRemoveFromCart}>
          -1
        </button>
      </div>
    </div>
  );
};

export default OrdersCard;
