import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ item }) {
  const navigate = useNavigate();
  const price = item.price;
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <div className="ProductCard" onClick={showDetail}>
      <img src={item.img} />
      <div>Choice</div>
      <div>{item.title}</div>
      <div>{price.toLocaleString()}원</div>
      <div>{item?.new === true ? "신제품" : ""}</div>
    </div>
  );
}

export default ProductCard;
