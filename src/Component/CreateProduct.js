import React, { useState, useEffect } from 'react';
import { Form, Button, Col, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function ProductForm() {
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [nextId, setNextId] = useState('1');
  const history = useNavigate();

  useEffect(() => {
    // Fetch existing products to determine the next ID
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8000/products');
        if (response.ok) {
          const products = await response.json();
          const lastProduct = products[products.length - 1];
          if (lastProduct && lastProduct.id) {
            const lastId = parseInt(lastProduct.id, 10);
            setNextId((lastId + 1).toString());
          }
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      id: nextId,
      name: productName,
      category: productCategory,
      description: productDescription,
      price: productPrice.toString(),
    };

    try {
      const response = await fetch('http://localhost:8000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });

      if (response.ok) {
        // Navigate to Product List after Finishind
        history('/');
        // Clear the form fields
        setProductName('');
        setProductCategory('');
        setProductDescription('');
        setProductPrice('');

        // Increment the ID for the next product
        setNextId((parseInt(nextId, 10) + 1).toString());
      } else {
        alert('Failed to add product');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while adding the product');
    }
  };

  return (
    <Container className='col-md-6'>
    <Form onSubmit={handleSubmit} className='m-5'>
      <Form.Group as={Col} controlId="formProductName">
        <Form.Label>Product Name</Form.Label>
        <Form.Control
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Enter product name"
          required
        />
      </Form.Group>

      <Form.Group as={Col} controlId="formProductCategory">
        <Form.Label>Category</Form.Label>
        <Form.Control
          as="select"
          value={productCategory}
          onChange={(e) => setProductCategory(e.target.value)}
          required
        >
          <option value="">Select category...</option>
          <option value="Smart Phones">Smart Phones</option>
          <option value="Laptops">Laptops</option>
        </Form.Control>
      </Form.Group>

      <Form.Group as={Col} controlId="formProductDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
          placeholder="Enter product description"
          rows={3}
          required
        />
      </Form.Group>

      <Form.Group as={Col} controlId="formProductPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          step="0.01"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          placeholder="Enter product price"
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit" className='my-3'>
        Add Product
      </Button>
    </Form>
    </Container>
  );
}

export default ProductForm;
