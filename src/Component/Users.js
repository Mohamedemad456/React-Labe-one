import React from "react";
import { Container, Spinner, Alert, ListGroup } from "react-bootstrap";
import {NavLink} from "react-router-dom";
import useFetch from "./UseFetch";

function ProductsList() {
  const { data: productList, isPending, error } = useFetch("http://localhost:8000/products");

  // Create an array of categories and remove duplicates
  const categories = productList
    ? productList
        .map((product) => product.category) // Extract categories
        .filter((value, index, self) => self.indexOf(value) === index) // Remove duplicates
    : [];

    return (
      <Container style={{ marginTop: "100px" }}>
        {/* Loading Spinner */}
        {isPending && (
          <div className="text-center mb-5">
            <Spinner animation="border" variant="primary" />
          </div>
        )}

  
        {/* Error Message */}
        {error && (
          <Alert variant="danger">
            <strong>Error:</strong> {error}
          </Alert>
        )}
  
        {/* Categories and Products */}
        {categories.map((category) => (
          <div key={category} className="mb-5" style={{ color: "#F5511E" }}>
            <h2 className="fs-1">{category}</h2>
            <ListGroup>
              {productList
                ?.filter((product) => product.category === category)
                .map((product) => (
                  <NavLink
                    to={`/Product/${product.id}`}
                    key={product.id}
                    className="list-group-item d-flex justify-content-between align-items-center p-5"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <div>
                      <strong style={{ color: "#F5511E" }} className="fs-4">
                        {product.name}:<br />
                      </strong>
                      <span className="fs-5">
                        {product.description}<br />
                      </span>
                    </div>
                  </NavLink>
                ))}
            </ListGroup>
            <hr />
          </div>
        ))}
      </Container>
    );
}
export default ProductsList;
