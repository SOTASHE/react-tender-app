



// this is the screen to show the detail of a tender from the list of tenders that we  got from the API and being rendered in the HomeScreen
//so we will receive the tender object as a prop and we will use it to render the detail of the tender

import { Container } from "react-bootstrap"

const DetailTender = (

    { tender
    
    }
)=>{
    return(
        <div className="content">
            <h1>{tender.title}</h1>
    
            <Container className="tender-detail">
                <h1>{tender.title}</h1>
                <p>{tender.description}</p>
                <p>Posted on {tender.date}</p>
                <p>{tender.category}</p>
                <p>{tender.subcategory}</p>
                <p>{tender.location}</p>
                <p>{tender.price}</p>
                <p>{tender.contact}</p>

</Container>

        </div>
    )
}

export default DetailTender