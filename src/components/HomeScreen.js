
import { Col, Row } from 'react-bootstrap'

import { useState, useEffect } from 'react'
// import DetailTender from './DetailTender'

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
    <div className="tender-list">
      <h1>Latest Tenders</h1>
      <Row>
        {data &&
          data.slice(0, 10).map((tender) => {
            return (
              <Col
                key={tender.id}
                sm={12}
                md={6}
                lg={4}
                xl={3}
                className="tender-preview"
              >
                <h2>{tender.title}</h2>
                <p>
                  {tender.description.length > 100
                    ? tender.description.slice(0, 100) + "..."
                    : tender.description}
                </p>
                <p>Posted on {tender.date}</p>
                <a href={`/tender/${tender.id}`
                }
                
                >
                  <button
                    onClick={() => {
                      setTenders(tender)
                    
                    }}

                  >View Tender</button>
                </a>

                {/* <Tender tender={tender} /> */}
              </Col>
            );
          })}
      </Row>
    </div>
  );
}

export default HomeScreen