import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import   './style.css'


export default function DateComp() {
  const [clock, setClock] = useState("");

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClock(date.toLocaleTimeString());
    }, 1000);
  }, []);

  const findDate = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
   
    return `${day} \n  ${date} ${month} ${year}`;
   
  };
 
  return (
    <Container >
      <Row >
        <Col md={{ offset:2, span: 8 }} className="day">
          <span className="clock">{clock}</span>
       <span className="date">{findDate(new Date())}</span> 
       </Col>
      </Row>
    </Container>
  );
}
