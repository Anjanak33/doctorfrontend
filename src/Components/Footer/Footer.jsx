import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css'

function Footer() {
  return (
    <div>

<Navbar className="bg-primary">
        <Container>
          <Navbar.Brand href="#home">
          <p>All Rights are Reserved Under Doctor Booking @doctorappoinment.com</p>           
          </Navbar.Brand>
        </Container>
      </Navbar>


    </div>
  )
}

export default Footer