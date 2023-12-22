import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div style={{ width: '100%', height: '300px', color: 'white' }} className='bg-black d-flex justify-content-center align-items-center flex-column '>
            <div className="footer d-flex justify-content-evenly align-items-center w-100 ">
                <div className="website" style={{ width: '400px' }}>
                    <h4>
                        <i className="fa-solid fa-beat fa-cart-shopping text-warning me-3"></i>
                        {' '} ShopVista
                    </h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eius reiciendis similique natus! Excepturi dolorum dignissimos unde similique, soluta temporibus voluptatibus fuga possimus? Inventore sapiente iure harum saepe? Accusantium, porro.
                    </p>
                </div>
                <div className="Links d-flex flex-column mb-5">
                    <h4 className=''>Links</h4>
                    <Link to={'/'} style={{ textDecoration: "none", color: 'white' }}>Home Page</Link>
                    <Link to={'/cart'} style={{ textDecoration: "none", color: 'white' }}>Cart</Link>
                    <Link to={'/wishlist'} style={{ textDecoration: "none", color: 'white' }}>Wishlist</Link>
                </div>
                <div className='guides d-flex flex-column mb-5'>
                    <h4 className=''>Guides</h4>
                    <Link to={'https://react.dev/'} style={{ textDecoration: "none", color: 'white' }}>React</Link>
                    <Link to={'https://react-bootstrap.netlify.app/'} style={{ textDecoration: "none", color: 'white' }}>React Bootstrap</Link>
                    <Link to={'https://bootswatch.com/'} style={{ textDecoration: "none", color: 'white' }}>Bootswatch</Link>
                </div>
                <div className='contact d-flex flex-column mb-4'>
                    <h4 className='mb-3'>Contact us</h4>
                    <div className='d-flex '>
                        <input type="text" className='form-control' placeholder='Enter your Email Id' />
                        <button className='btn btn-warning text-white ms-3'>Subscribe</button>
                    </div>
                    <div className='icons d-flex justify-content-evenly mt-3'>
                        <Link to={'https://react.dev/'} style={{ textDecoration: "none", color: 'white' }}><i class="fa-brands fa-whatsapp fa-2x"></i></Link>
                        <Link to={'https://react-bootstrap.netlify.app/'} style={{ textDecoration: "none", color: 'white' }}><i class="fa-brands fa-instagram fa-2x"></i></Link>
                        <Link to={'https://bootswatch.com/'} style={{ textDecoration: "none", color: 'white' }}><i class="fa-brands fa-facebook fa-2x"></i></Link>
                    </div>
                </div>
            </div>
            <p>Copyright @2023 ShopVista. Built with React</p>
        </div>
    )
}

export default Footer