import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Button, Table } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { emptyCart, removeFromCart } from '../redux/slices/cartSlice'


function Cart() {
  const [total, setTotal] = useState('');
  const navigate = useNavigate();
  const cartArray = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  const getCartTotal = () => {
    if (cartArray.length > 0) {
      setTotal(cartArray.map((item) => item.price).reduce((p1, p2) => p1 + p2))
    }
    else {
      setTotal(0)
    }
  }
  useEffect(() => {
    getCartTotal();
  }, [cartArray]);

  const checkout = () => {
    dispatch(emptyCart())
    alert('Thank You.........For Your Order')
    navigate('/')
  }

  return (
    <div className="container" style={{ marginTop: '100px' }}>
      {cartArray.length > 0 ? (
        <Row>
          <Col lg={7}>
            <Table className="text-center" striped bordered hover>
              <thead>
                <tr>
                  <th>SI.No</th>
                  <th>Title</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartArray.map((item, index) => (
                  <tr key={item.id}> {/* Provide a unique key */}
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td>
                      <img style={{ height: '100px' }} src={item.thumbnail} alt="thumbnail" />
                    </td>
                    <td>${item.price}</td>
                    <td>
                      <Button variant="light" onClick={() => dispatch(removeFromCart(item.id))}>
                        <i className="fa-solid fa-trash text-danger"></i>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
          <Col lg={4}>
            <div className="border mt-1 p-3 rounded shadow">
              <div className="text-center">
                <h1 className="text-primary mb-4">Cart Summary</h1>
              </div>
              <h4>Total Products: <span>{cartArray.length}</span></h4>
              <h4 className="mt-3">Total: <span className="text-danger fw-bolder fs-2">${total}</span></h4>
              <div className="d-grid mt-1">
                <button onClick={checkout} className="btn btn-success">Check Out</button>
              </div>
            </div>
          </Col>
        </Row>
      ) : (
        <div style={{ height: '73vh' }} className='d-flex flex-column justify-content-center align-items-center text-danger' >
          <img src="https://media.tenor.com/RUMIrc0BPyEAAAAi/shopping-cart-shopping.gif" alt="" />
          <h4 className='text-danger fw-bolder'> Your Cart is empty!!!</h4>
          <button className='btn btn-success rounded mt-3 '><Link style={{ textDecoration: 'none', color: 'white' }} className='btn btn-success text-center ' to='/'>Go Back to Home</Link></button>
        </div>
      )}
    </div>
  );
}

export default Cart;
