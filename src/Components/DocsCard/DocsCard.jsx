import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import '../DocsCard/DocsCard.css'
import { Link } from 'react-router-dom';

function DocsCard({doctors}) {
    console.log(doctors);
  return (
    <div>

      <Link to={`/view/${doctors.id}`} style={{textDecoration:"none"}}>

         <Card className='card' >
      <ListGroup variant="flush"style={{height:'380px',width:'100%'}} >
        <ListGroup.Item>{doctors.name}</ListGroup.Item>
        <ListGroup.Item>Specialty: {doctors.specialty}</ListGroup.Item>
        <ListGroup.Item>Available Days: {doctors.available_days}</ListGroup.Item>
        <ListGroup.Item>Available Hours{doctors.available_hours}</ListGroup.Item>
        <ListGroup.Item>Rating{doctors.rating}</ListGroup.Item>
        <ListGroup.Item>{doctors.email}</ListGroup.Item>
        <ListGroup.Item className='text-primary'>{doctors.phone}</ListGroup.Item>




      </ListGroup>
    </Card>
    </Link>
    </div>
  )
}

export default DocsCard