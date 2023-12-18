import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeWishlist } from '../redux/slices/wishlistSlice';
import { addtoCart } from '../redux/slices/cartSlice';
function Wishlist() {
  const wishlistArray = useSelector((state) => state.wishlistReducer)
  console.log(wishlistArray);

  const dispatch = useDispatch()

  const handleWishlist=(item)=>{
    dispatch(addtoCart(item))
    dispatch(removeWishlist(item.id))
  }

  return (
    <div >
      <Row className='m-5 py-5' style={{ marginTop: '150px' }}>
        {wishlistArray?.length > 0 ?
          wishlistArray.map((item) => (
            <Col className='mb-5 mt-3' sm={12} md={6} lg={4} xl={3}>
              <Card style={{ width: '18rem', boxShadow: '0 4px 8px 0 ' }}>
                <Card.Img variant="top" src={item.thumbnail} style={{ height: '200px' }} />
                <Card.Body>
                  <Card.Title>{item.title.slice(0, 20)}..</Card.Title>
                  <Card.Text>
                    <p>{item.description.slice(0, 50)}..</p>
                    <p className='fw-bolder'>Price:${item.price}..</p>
                  </Card.Text>
                  <div className='d-flex align-items-center justify-content-between'>
                    <Button onClick={()=>dispatch(removeWishlist(item.id))} variant="outline-danger btn rounded"><i class="fa-solid fa-trash"></i></Button>
                    <Button onClick={()=>handleWishlist(item)}  variant="outline-success btn rounded"><i class="fa-solid fa-cart-plus"></i></Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>)):
            <div style={{height:'73vh'}} className='d-flex flex-column justify-content-center align-items-center text-danger' >
              {/* <img src="https://media.tenor.com/RUMIrc0BPyEAAAAi/shopping-cart-shopping.gif" alt="" />
              <h4 className='text-danger fw-bolder'> Your Wishlist is empty!!!</h4> */}
              <img height="50%" src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" alt="" />
              <h4 className='text-danger fw-bolder'> Your Wishlist is empty!!!</h4>
            <button className='btn btn-success rounded mt-3 '><Link style={{textDecoration:'none',color:'white'}} className='btn btn-success text-center ' to='/'>Go Back to Home</Link></button>
            </div>
          }


      </Row >

    </div >
  )
}

export default Wishlist