// import './App.css';
import DateComp from "./components/DateComp";
import Header from "./components/Form";
import WeatherCard from "./components/WeatherCard";
import "./components/style.css";
import rainbow from "./assets/rainbow.gif";
import { Container, Row, Col } from "react-bootstrap";
function App() {
  return (
    <div>
      <Container>
        <Row >
        <Col  className="header">
          <img className="rainbow" src={rainbow} alt="rainbow" />
          <br/>
          <h1 className="appH1 ">Weather App</h1>
        </Col>
        </Row>
      </Container>

      <DateComp />

      <Header />
      <WeatherCard />
    </div>
  );
}

export default App;
