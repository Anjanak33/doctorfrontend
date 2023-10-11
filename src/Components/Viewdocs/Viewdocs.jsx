import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import '../Viewdocs/Viewdocs.css'


function Viewdocs() {

   // const pathParameter=useParams()
   // console.log(pathParameter);
   // console.log(pathParameter.id);


    const{id}=useParams()
    console.log(id);

    const [DoctorDetails,SetDoctorDetails]=useState({})

    const fetchData=async()=>{
      const {data}=await axios.get(`http://localhost:3001/doctors/${id}`)
      console.log(data);
      SetDoctorDetails(data)
    }
    console.log(DoctorDetails);
    useEffect(()=>{
      fetchData()
    },[])
  return (
    <div>

    <Row>

    <Col style={{margin:'110px'}}>
    
    <Card className='card1' >
      <ListGroup variant="flush"style={{height:'380px',width:'100%'}} >
        <ListGroup.Item>{DoctorDetails.name}</ListGroup.Item>
        <ListGroup.Item>Speciality: {DoctorDetails.specialty}</ListGroup.Item>
        <ListGroup.Item>Available Days: {DoctorDetails.available_days}</ListGroup.Item>
        <ListGroup.Item>Available Hours: {DoctorDetails.available_hours}</ListGroup.Item>
        <ListGroup.Item>Rating: {DoctorDetails.rating}</ListGroup.Item>
        <ListGroup.Item>{DoctorDetails.email}</ListGroup.Item>
        <ListGroup.Item className='text-primary'>{DoctorDetails.phone}</ListGroup.Item>




      </ListGroup>
    </Card>

    </Col>

    </Row>

    </div>
  )
}

export default Viewdocs