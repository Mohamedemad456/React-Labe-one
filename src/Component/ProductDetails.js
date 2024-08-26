import React from 'react'
import { Container , Card , Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import useFetch from './UseFetch';

function ProductDetails() {
    const {id} = useParams();
    const {data : product} = useFetch(`http://localhost:8000/products/${id}`);
    return (
        <Container className='d-flex justify-content-center align-content-center col-mg-6'>
            {product && (
                <Card className="mb-3" style={{ width: '30rem' }}>
                    <Card.Img variant="top" src={product.image} alt={product.name} />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>{product.description}</Card.Text>
                        <Card.Text>
                            <strong>Price:</strong> ${product.price}
                        </Card.Text>
                        <Button variant="primary">Buy Now</Button>
                    </Card.Body>
                </Card>
            )}
        </Container>
    );
}

export default ProductDetails
