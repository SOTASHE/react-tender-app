
import { Col, Row } from 'react-bootstrap'

import{useState, useEffect} from 'react'


// import Tender from './Tender'

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
      <h1>Latest Tenders</h1>
      <Row>

        {data && data.slice(0,10).map(tender => {
          return (
            <Col key={tender.id} sm={12} md={6} lg={4} xl={3}>
              <h2>{tender.title}</h2>
              <p>
                {tender.description.length > 100
                  ? tender.description.slice(0, 100) + "..."
                  : tender.description}
              </p>

               {/* <Tender tender={tender} /> */}
            </Col>
          );
        }
        )}
      </Row>
    </>
  );
}

export default HomeScreen