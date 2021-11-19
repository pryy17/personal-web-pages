import React, { useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Judul from "./Judul";
import Aos from "aos";
export default function Header() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <div>
      <Row className="header-container" sm={1} lg={2}>
        <Col>
          <Row>
            <Judul />
          </Row>
          <Row data-aos="zoom-in" className="sub-judul">
            <a>
              Hello, My name is <br /> Priandy Dwi Handika <br />
              kapan ya jadi Fullstack Developer
            </a>
            <Button className="contac col-md-2" variant="primary" style={{ marginTop: 10 + "px" }}>
              :(
            </Button>
          </Row>
          <Row  data-aos="zoom-in">
            
          </Row>
        </Col>
        <Col
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-mirror="true"
        >
          <Col>
            <img className="percom" src={"/assets/person2.png"} alt="percom" />
          </Col>
          <img className="person" src={"/assets/person.png"} alt="person" />
        </Col>
      </Row>
    </div>
  );
}
