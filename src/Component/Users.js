import React, { useState } from "react";
import {
  Container,
  Spinner,
  Alert,
  ListGroup,
  Button,
  Form,
} from "react-bootstrap";
import { Link, NavLink, useLoaderData, useNavigate } from "react-router-dom";

function ProductsList() {
  const { data: productList, error } = useLoaderData();
  const navigate = useNavigate();
  const isLoading = !productList && !error;

  // State for search term
  const [searchTerm, setSearchTerm] = useState("");

  // Filtered products based on the search term
  const filteredProducts = productList?.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = filteredProducts
    ? filteredProducts
        .map((product) => product.category)
        .filter((value, index, self) => self.indexOf(value) === index)
    : [];

  

  const handleDelete = (productId) => {
    fetch(`http://localhost:8000/products/${productId}`, {
      method: "DELETE",
    })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Container style={{ marginTop: "100px" }}>
      <Link to="create">
        <Button>Add Product</Button>
      </Link>

      {/* Search Bar */}
      <Form.Group className="my-4">
        <Form.Control
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form.Group>

      {isLoading && (
        <div className="text-center mb-5">
          <Spinner animation="border" variant="primary" />
        </div>
      )}

      {error && (
        <Alert variant="danger">
          <strong>Error:</strong> {error}
        </Alert>
      )}

      {!isLoading &&
        !error &&
        filteredProducts &&
        categories.map((category) => (
          <div key={category} className="mb-5" style={{ color: "#F5511E" }}>
            <h2 className="fs-1">{category}</h2>
            <ListGroup>
              {filteredProducts
                .filter((product) => product.category === category)
                .map((product) => (
                  <NavLink
                    to={`/Product/${product.id}`}
                    key={product.id}
                    className="list-group-item d-flex justify-content-between align-items-center p-5"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div>
                      <strong style={{ color: "#F5511E" }} className="fs-4">
                        {product.name}:<br />
                      </strong>
                      <span className="fs-5">
                        {product.description}
                        <br />
                      </span>
                    </div>
                    <Button
                      variant="secondary"
                      onClick={() => handleDelete(product.id)}
                    >
                      Delete
                    </Button>
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

export const productListLoader = async () => {
  try {
    const res = await fetch(`http://localhost:8000/products`);
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }
    return { data: await res.json(), error: null };
  } catch (error) {
    throw error;
  }
};
