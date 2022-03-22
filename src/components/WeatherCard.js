import React from "react";
import { connect } from "react-redux";
import "./style.css";
import temperature from "../assets/temperature.png";
import humidity from "../assets/humidity.png";
import wind from "../assets/wind.png";
import sunny from "../assets/sunny.gif";
import cloudy from "../assets/cloudy.gif";
import snowy from "../assets/snowy.gif";
import rainy from "../assets/rainy.gif";
import { Container, Row, Col } from "react-bootstrap";

export const WeatherCard = (props) => {
  const { data } = props.cityReducer.data;

  return props.cityReducer.data ? (
    <Container>
      <div className="weatherCard mt-3 ">
        <Row>
          <Col md={{ span: 4 }} className="location mt-2">
            <div className="detail">

            <span className="city"> {data.name.toUpperCase()},</span>
            <span className="country">{data.sys.country.toUpperCase()}</span>
            </div>
          </Col>
          <Col md={{ span: 4 }} className=" mt-2">
            <div className="box">
              <span className="currentTemp">
                {Math.round(data.main.temp)}{" "}°C
              </span>
            </div>

            <div className="anime">
              {data.weather[0].main === "Clear" ? (
                <img className="anime" src={sunny} alt="sunny" />
              ) : data.weather[0].main === "Snow" ? (
                <img className="anime" src={snowy} alt="snowy" />
              ) : data.weather[0].main === "Clouds" ? (
                <img className="anime" src={cloudy} alt="cloudy" />
              ) : data.weather[0].main === "Rain" ? (
                <img className="anime" src={rainy} alt="rainy" />
              ) : (
                ""
              )}
            </div>
          </Col>
          <Col md={{ span: 4 }} className=" mt-2 ">
            <div className="box">
              <img className="icon" src={temperature} alt="temperature" />
              <span className="title">Feels Like:</span>
              {Math.round(data.main.feels_like)} °C
            </div>
            <div className="box">
              <img className="icon" src={humidity} alt="humidity" />
              <span className="title">Humidity:</span>
              {Math.round(data.main.humidity)} %
            </div>
            <div className="box">
              <img className="icon" src={wind} alt="wind" />
              <span className="title">Wind Speed:</span>
              {Math.round(data.wind.speed)} km/h
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  ) : (
    ""
  );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherCard);
