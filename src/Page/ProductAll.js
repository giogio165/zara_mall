import React, { useEffect, useState } from "react";
import ProductCard from "../Component/ProductCard";
import { useSearchParams } from "react-router-dom";

import { Col, Container, Row } from "react-bootstrap";

function ProductAll() {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    let url = `https://my-json-server.typicode.com/giogio165/zara_mall/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div>
      <Container>
        <Row>
          {productList.map((item) => (
            <Col lg={3}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default ProductAll;
