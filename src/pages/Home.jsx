import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/slices/wishlistSlice';
import { addtoCart } from '../redux/slices/cartSlice'; // Fixed import

function Home() {
  const data = useFetch('https://dummyjson.com/products');
  const dispatch = useDispatch();
  console.log(data);

  return (
    <Row className='m-5 py-5'>
      {data?.length > 0 ? (
        data?.map((item) => (
          <Col className='mb-5 mt-3' sm={12} md={6} lg={4} xl={3} key={item.id}>
            <Card style={{ width: '18rem', boxShadow: '0 4px 8px 0 ' }}>
              <Card.Img variant='top' src={item.thumbnail} style={{ height: '200px' }} />
              <Card.Body>
                <Card.Title>{item.title.slice(0, 20)}..</Card.Title>
                <Card.Text>
                  <p>{item.description.slice(0, 50)}..</p>
                  <p className='fw-bolder'>Price:${item.price}</p>
                </Card.Text>
                <div className='d-flex align-items-center justify-content-between'>
                  <Button onClick={() => dispatch(addToWishlist(item))} variant='outline-danger btn rounded'>
                    <i className='fa-solid fa-heart'></i>
                  </Button>
                  <Button onClick={() => dispatch(addtoCart(item))} variant='outline-success btn rounded'>
                    <i className='fa-solid fa-cart-plus'></i>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))
      ) : (
        <p>Nothing to show</p>
      )}
    </Row>
  );
}

export default Home;
