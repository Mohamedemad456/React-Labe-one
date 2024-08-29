import React from 'react'
import { Container , Card , Button } from 'react-bootstrap'
import { useLoaderData, useNavigate } from 'react-router-dom';


function ProductDetails() {
    // const {id} = useParams();
    // const {data : product} = useFetch(`http://localhost:8000/products/${id}`);
    const { data: product} = useLoaderData();
    const history = useNavigate();
    return (
        <Container className='d-flex justify-content-center align-content-center col-mg-6 mt-5'>
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
                        <Button variant="secondary" onClick = {()=> history(-1)} className='mx-2'>Back</Button>
                    </Card.Body>
                </Card>
            )}
        </Container>
    );
}

export default ProductDetails;

export const productDetailsLoader = async ({ params }) => {
    const { id } = params;
    try {
      const res = await fetch(`http://localhost:8000/products/${id}`);
      if (!res.ok) {
        throw new Error(`Product with ID ${id} not found.`);
      }
      return { data: await res.json(), error: null };
    } catch (error) {
      throw error;
    }
  };
  