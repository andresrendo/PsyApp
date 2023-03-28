import { getDoc, doc, collection, getDocs} from 'firebase/firestore';
import { DOCTOR_PROFILE_URL } from '../../constants/urls';
import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { db } from '../../firebase/config';
import styles from "./SearchDoctor.module.css"
import { Link, useNavigate } from 'react-router-dom';
import { getDoctorByEspecialidad } from '../../firebase/users/user-service';
import { async } from '@firebase/util';
import { Cargando } from '../../components/Cargando/Cargando';



// Pagina de buscar doctor
export function SearchDoctor() {
    
    const [Doctor, setDoctor] = useState({
      especialidad: '',
    });

    const [Doctores, setDoctores] = useState([]);
    const [isLoading, setLoading] = useState(false)


    const handleOnChange = (event) => {
      const { name, value } = event.target;
      setDoctor ({
          ...Doctor,
          [name]: value
      })
    };
   
    const [lista, setLista] = useState([]);

    //funcion para renderizar lista de doctores
    const getLista = async () => {
        try {
            setLoading(true)
            const querySnapshot = await getDocs(collection(db, 'doctores'))
            const docs = []
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id:doc.id})
            })
            setLista(docs)
            //setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
      getLista()
    }, [lista])
    
    //Funcion para buscar doctor
    const onSubmit = async (event) => {
      try {
        event.preventDefault();
        const{especialidad} = Doctor
        const lista_doctores = await getDoctorByEspecialidad(especialidad);
        setDoctores(lista_doctores)
      } catch (error) {
      }
    }
   
  if (Doctores && Doctores.length > 0){
    return (
      <div className='d-flex justify-content-around flex-wrap d-flex'>
      
      <form className="row g-2">
        <div className="col-auto">
          <input type="text" readOnly className="form-control-plaintext" id="staticEmail2" defaultValue=""/>
        </div>
        <div className="col-auto">
          <input className="form-control" type="text" placeholder="Nombre o especialidad" name= 'especialidad' onChange={handleOnChange} aria-label="default input example" />
        </div>
        <div className="col-auto">
          <button type="submit" className={`btn btn-primary mb-3 ${styles.btn1}`} onClick={onSubmit}>Buscar</button>
        </div>
      </form>
      
        <Col xs={12} md={12} lg= {9}>
            
            <Row xs={2} md={3} className="g-4">
            
            {
            Doctores.map(list => (
              <Card key={list.id}>
                <Card.Img variant="top" src= {list.foto} />
                <Card.Body>
                  <Card.Title> {list.nombre}</Card.Title>
                  <Card.Text>{list.descripcion}</Card.Text>
                  <Link to={`/profile/${list.id}`} state={{data: list}}>
                    
                    <button className={`btn ${styles.btn1}`} >Ver detalles</button>
                  </Link>
                </Card.Body>

              </Card> 
            ))}
            
            </Row>
        </Col>
    </div> 
    );
  }else{
    return( <div className='d-flex justify-content-around flex-wrap d-flex'>
    <form className="row g-2 my-4">
      <div className="col-auto">
        <input type="text" readOnly className="form-control-plaintext" id="staticEmail2" defaultValue=""/>
      </div>
      <div className="col-auto">
        <input className="form-control" type="text" placeholder="Nombre o especialidad" name= 'especialidad' onChange={handleOnChange} aria-label="default input example" />
      </div>
      <div className="col-auto">
        <button type="submit" className={`btn mb-3 ${styles.btn1}`} onClick={onSubmit}>Buscar</button>
      </div>
    </form>
      <Col xs={12} md={12} lg= {9}>
          
          <Row xs={2} md={3} className="g-4">
          
          {lista.map(list => (
            <Card key={list.id}>
              <Card.Img variant="top" src= {list.foto} />
              <Card.Body>
                <Card.Title> {list.nombre}</Card.Title>
                <Card.Text>{list.descripcion}</Card.Text>
                  <Link to={`/profile/${list.id}`} state={{data: list}}>
                      <Button className={`btn ${styles.btn1}`}>Ver detalles</Button>
                  </Link>
              </Card.Body>

            </Card> 
          ))}
          
          </Row>
      </Col>
  </div>
  )
  }
}

//const [data, setData] = useState({
//  nombre:'',
//  edad:'',
//  especialidad:'',
//  idioma:'',
//  nacionalidad:'',
//  formacion:'',
//  foto:'',
//  experiencia:'',
//  descripcion:'',
//  area_de_atencion:[],
//})
