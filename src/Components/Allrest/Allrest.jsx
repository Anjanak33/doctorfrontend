import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DocsCard from '../DocsCard/DocsCard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';





function Allrest() {

  const [allDoctors,setAllDoctors]=useState([])

  const fetchData=async()=>{

    const response=await axios.get('http://localhost:3001/doctors')
    console.log(response.data);
    setAllDoctors(response.data)
  }

  console.log(allDoctors);
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div>

      <Row>
      {
        allDoctors.map((item)=>(

          <Col sm={12} md={6} lg={4} xl={3} >
          <DocsCard doctors={item}/>
          </Col>
        ))
      }
      </Row>
    </div>
  )
}

export default Allrest