import React from 'react'
import { Link } from 'react-router-dom'
import LOGO  from '../../assets/logo3.png'



const Footer = () => {
    const currentyear = new Date().getFullYear()
  return (
    <div>
        <footer className='bg-dark text-light pt-5 mt-5'>
            <div className="container-fluid">
                <div className="row text-center text-md-start">
                    <div className="col-md-3 mb-4">
                        <h5>About Our Store</h5>
                        <p>Your go-to destination for quality product, exclusive deals and seamless online shopping</p>
                    </div>
                    <div className="col-md-3 mb-4">
                        <h5>Pages</h5>
                        <ul>
                            <li><Link to='/' className='text-decoration-none text-light'>Home</Link></li>
                            <li><Link to='/about' className='text-decoration-none text-light'>About</Link></li>
                            <li><Link to='/services' className='text-decoration-none text-light'>Service</Link></li>
                            <li><Link to='/contact' className='text-decoration-none text-light'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3 mb-4">
                        <h5>Socials</h5>
                        <p>Follow us on :</p>
                        <Link to='#' className='me-2 text-decoration-none text-light'>Facebook</Link>
                        <Link to='#' className='me-2 text-decoration-none text-light'>Instagram</Link>
                        <Link to='#'className='text-decoration-none text-light' >Tik Tok</Link>
                    </div>
                    <div className="col-md-3 mb-4">
                        <h5>Our Patners</h5>
                        <p>jnbkgmb</p>
                        <p>jnbkgmb</p>
                        <p>jnbkgmb</p>
                    </div>
                </div>
                <div className="text-center py-3 border-top">
                    <small>&copy; </small>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer