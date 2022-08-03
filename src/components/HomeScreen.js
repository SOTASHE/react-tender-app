
import { Col, Row } from 'react-bootstrap'

import{useState, useEffect} from 'react'
// import tenders from '../Tenders'

const HomeScreen = () => {

    const [data, setTenders] = useState(null)



    useEffect(() => {
        fetch('http://localhost:8000/data')
            .then(res => {
                
                return res.json()
            
            } )
            .then(data =>{
                  
                console.log(data)
                
                setTenders(data)
                })
    }, []) 




  return (
    <>
      <h1>Lasted Ten Tenders</h1>
      <Row>

    {/* dsiplaythe 10  data or tenders */}
              {  if data && data.map(tender => (
                
                  <Col key={tender.id}>
                      <div>
                          <h3>{tender.title}</h3>
                          <p>{tender.description}</p>
                      </div>
                  </Col>
                ))}


              {/* {tenders.map((tender) => (
            
          <Col key={tender.id} sm={12} md={6} lg={4} xl={3}>
            <h3>{tender.title}</h3>
                      <p>{tender.description}</p>
                      <p>{tender.price}</p>
                      <p>{tender.countInStock}</p>
                      <p>{tender.rating}</p>
                      <p>{tender.numReviews}</p>
                      
          </Col>
        ))} */}
      </Row>
    </>
  );
}

export default HomeScreen