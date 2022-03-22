import React, { useState  } from "react";
import { connect } from "react-redux";
import { fetchCity } from "../store/actions/cityActions";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const Header = (props) => {
  const [city, setCity] = useState("");
  const [cityName, setCityName] = useState("");
  const [blank, setBlank] = useState(false);


  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.fetchCity(city);
    setCityName(city);
    setCity("");
    !city ? setBlank(true) : setBlank(false);
  };
  return (
    <Container className="mt-1 ">
      <Row>
        <Col md={{ offset: 2, span: 8 }} >
          <Form onSubmit={handleSubmit}>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Write city name"
              onChange={handleChange}
              value={city}
              className="form"
            />
            {/* <Button className="mt-2" variant="primary" type="submit">
              Submit
            </Button> */}
          </Form>
        </Col>
      </Row>
      <Row>
      
        <Col md={{ offset:3, span: 6 }} className="mt-3 error">
          {blank
            ? "City Name Can't Be Blank."
            : props.cityReducer.error
            ? `${cityName.toUpperCase()} Wrong City Name!`
            : ""}
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = ({ cityReducer }) => ({ cityReducer });

const mapDispatchToProps = { fetchCity };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
