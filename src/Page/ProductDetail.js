import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Col, Container, Row } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";

function ProductDetail() {
  const [product, setProduct] = useState(null);
  let { id } = useParams();
  const getProductDetail = async () => {
    let URL = `https://my-json-server.typicode.com/giogio165/zara_mall/products/${id}`;
    let response = await fetch(URL);
    let data = await response.json();
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container className="ProductDetail">
      <Row>
        <Col className="product_img">
          <img src={product?.img} />
        </Col>
        <Col>
          <div className="product_title">{product?.title}</div>
          <div className="product_price">
            {product?.price.toLocaleString()}원
          </div>
          <div className="product_new">
            {product?.new === true ? "신제품" : ""}
          </div>
          <DropdownButton id="dropdown-basic-button" title="사이즈">
            {product?.size.length > 0 &&
              product.size.map((item) => <Dropdown.Item>{item}</Dropdown.Item>)}
          </DropdownButton>

          <Button className="product_add" variant="dark">
            추가
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;
