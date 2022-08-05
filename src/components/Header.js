
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { BrowserRouter, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

import { useState } from 'react'
import { useEffect } from 'react'

import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
// import SearchBox from "./SearchBox";


import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import HandleSearch from "./HandleSearch";




const Header = ({ history, data, title, 

  description, category,
  price,
  location,
  tenders,
  setTenders,



}) => {
  // const [keyword, setKeyword] = useState("");

  const [query, setQuery] = useState("");

 //create a function to handle form submission
  

// console.log(title);
//   const seacrh = (data) => {
  
//     console.log(data)
//      Object.values(data).filter((tender) => tender.title.toLowerCase().includes(query.toLowerCase()))
//   }
//   console(seacrh(data))






  
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(query);
    console.log(query);






    // console.log(data)
    // if there is data filter through it and return the results then query seacrh
    // console log that query and see if it works
    // console.log(query);
    // if (data) {
    //   console.log(data)

      //filter through the data and return the results with particular category
      // console.log(
      //   Object.values(data).filter((tender) => tender.category === "constructions")
      // );

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
  }



  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand>Tender App</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>

            <Form className="d-flex" onSubmit={handleSubmit} inline>
              <input
                // name="q"
                // onChange={(e) => setKeyword(e.target.value)}
                // placeholder="Search for tenders..."
                // type="search"

                lassName="search"
                type="text"
                placeholder="Search by title or description"
                onChange={(e) => setQuery(e.target.value)}
                className="me-2"
                aria-label="Search"
              />
              <Button
                type="submit"
                variant="outline-success"
                onClick={handleSubmit}
              >
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  
      {query &&
        data &&
        data
          .filter(
            (tender) =>
              tender.title.includes(query) || tender.description.includes(query)
          )
          .map((tender) => (
            <div key={tender.id}>
              <h2>{tender.title}</h2>
              <p>
                {tender.description.length > 100
                  ? tender.description.slice(0, 100) + "..."
                  : tender.description}
              </p>
              <p>Posted on {tender.date}</p>
              <Link to={`/tender/${tender.id}`}>
                <button>View Tender</button>
              </Link>
            </div>
          ))}
      {/* {data &&
        Object.values(data).filter((tender) => {
          return (
            //find object by key and value
            <ul>
              {Object.values(data)
                .filter((tender) =>
                  tender.title.toLowerCase().includes(query.toLowerCase())
                )
                .map((tender) => {
                  return (
                    <li key={tender.id} className="tender-list">
                      <h2>{tender.title}</h2>
                    </li>
                  );
                })}
              )
            </ul>
          );
        })} */}
      <HandleSearch/>
    </header>
  );
};

export default Header;