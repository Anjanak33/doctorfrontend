import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'

function Header() {
  return (
    <div>

<Navbar className="bg-primary">
        <Container>
          <Navbar.Brand href="/">
            <h1 className='head'>
          <i class="fa-solid fa-user-doctor fa-fade me-3 "></i>
           Doctor Booking
           </h1>
          </Navbar.Brand>
        </Container>
      </Navbar>


    </div>
  )
}

export default Header