
import { Col, Row } from 'react-bootstrap'

import { useState, useEffect } from 'react'
// import DetailTender from './DetailTender'

// import Tender from './Tender'

const HomeScreen = () => {

  const [data, setTenders] = useState(null)
  
  //usestate for quering data from the server and seacrhing for tenders
  // const [query, setQuery] = useState('')


  //test the query

  // console.log(data)
  // if there is data filter through it and return the results then query seacrh
// console log that query and see if it works
  // console.log(query);
  // if (data) {
  //   console.log(data)

  //   console.log(
  //     Object.values(data).filter((tender) => tender.category === "constructions")
  //   );

  //    console.log(
  //      Object.values(data).filter(
  //        (tender) =>
  //          tender.title === "Cserepes és Szélmalom utcák felújítása"
  //      )
    
  //   );
    



    // console.log(Object.values(users).filter((user) => user.user_id === 1));
    // console.log(
    //   data.fiiter(tender=>tender.description.toLowerCaseincludes("snayesotashedavid"))
     



    //  );
    
  // }
  

    useEffect(() => {
        fetch('http://localhost:8000/data')
            .then(res => {
                
                return res.json()
            
            } )
            .then(data =>{
                  
              console.log(data)
              
              // the query for seaching for tenders
            
                
                setTenders(data)
                })
    }, 
    
  
    
      []
    
    
    
    ) 
  
  
  
 

  return (
    <div className="tender-list">
      <h1 className='tender-title' >Latest Tenders</h1>

      <Row>
        {/* <input
          className="search"
          type="text"
          placeholder="Search by title or description"
          onChange={(e) => setQuery(e.target.value)}
        /> */}
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
                <a href={`/tender/${tender.id}`}>
                  <button
                    onClick={() => {
                      setTenders(tender);
                    }}
                  >
                    View Tender
                  </button>
                </a>

                {/* <Tender tender={tender} /> */}
              </Col>
            );
          })}
        
      
        {/* {data &&
          Object.values(data).filter((tender) => {
            return (
              //find object by key and value
              <ul>{Object.values(data).filter((tender) =>
                tender.title.toLowerCase().includes(query.toLowerCase())
              ).map((tender) => {
                return (
                  <li key={tender.id} className ="tender-list"  >
                    <h2>{tender.title}</h2>
                  </li>
                 
                )
              })}
                )
                </ul>
              
              
            );
          })} */}
      </Row>
    </div>
  );
}

export default HomeScreen