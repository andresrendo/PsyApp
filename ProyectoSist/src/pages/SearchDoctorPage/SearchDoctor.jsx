import { getDoc, doc, collection, getDocs} from 'firebase/firestore';
import { DOCTOR_PROFILE_URL } from '../../constants/urls';
import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { db } from '../../firebase/config';
import styles from "./SearchDoctor.module.css"
import { Link } from 'react-router-dom';



export const SearchDoctor = () => {
   
    const [lista, setLista] = useState([]);

    //funcion para renderizar lista de doctores
    const getLista = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'doctores'))
            const docs = []
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id:doc.id})
            })
            setLista(docs)
        } catch (error) {
            console.log(error)
        }
    }
    getLista()
    

    
  
  return (
   
    <div className='d-flex justify-content-evenly flex-wrap d-flex'>
        <Col xs={12} md={12} lg= {9}>
            
            <Row xs={2} md={3} className="g-4">
            
            {lista.map(list => (
              <Card key={list.id}>
                <Card.Img variant="top" src= "data:image/jpeg;base64,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" />
                <Card.Body>
                  <Card.Title> {list.nombre}</Card.Title>
                  <Card.Text>{list.descripcion}</Card.Text>
                    <Link to={DOCTOR_PROFILE_URL} state={{data: list}}>
                        <Button variant="primary">Ver detalles</Button>
                    </Link>
                </Card.Body>

              </Card> 
            ))}
            
            </Row>
        </Col>
    </div>
  );
}

//"