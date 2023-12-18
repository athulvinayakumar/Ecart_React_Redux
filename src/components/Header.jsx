import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';


function Header() {
  const wishlist = useSelector((state)=>state.wishlistReducer) // state represnts store
  const cart = useSelector((state)=>state.cartReducer) // state represnts store
  console.log(wishlist); 
  return (
    <Navbar expand="lg" className="bg-primary " fixed='top'>
      <Container>
        <Navbar.Brand><Link to={'/'} style={{ textDecoration: "none", color: 'white', fontWeight: 'bolder', fontSize: '30px' }}><i className="fa-solid fa-bounce fa-cart-shopping me-3"></i>E-CART</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='btn border rounded border-seconadry'><Link to={'/wishlist'} style={{ textDecoration: "none", color: 'white' }}><i className='fa-solid fa-heart text-danger me-2'></i>Wishlist
              <Badge bg="secondary" className='rounded ms-1'>{wishlist.length}</Badge>
      
            </Link></Nav.Link>
            <Nav.Link className='btn border rounded border-seconadry ms-2'><Link to={'/cart'} style={{ textDecoration: "none", color: 'white' }}><i className='fa-solid fa-cart-shopping text-warning me-2'></i>Cart
           
               <Badge bg="secondary" className='rounded ms-1'>{cart.length}</Badge>
     
              </Link></Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header