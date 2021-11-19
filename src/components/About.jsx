import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Flipped from "./Flipped";
import Aos from "aos";

export default function About() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <div>
      <Container fluid>
        <Row className="about-container">
          <Row>
            <Col data-aos="fade-up" style={{ textAlign: "center" }}>
              <h1>About Me</h1>
              <a>my introduction</a>
            </Col>
          </Row>
          <Row sm={1} lg={2}>
            <Col>
              <div data-aos="fade-right" className="Photo-profil">
                <Flipped />
              </div>
            </Col>

            <Col>
              <div data-aos="fade-left" className="profil-about">
                <Row className="experience">
                  <a>
                    Web Developer, with extensive knowledge
                    <br />
                    and im fresh graduate, working in web
                    <br />
                    technologies and UI/UX design, delivering <br />
                    quality work
                  </a>
                  <Col>
                    <strong>3+</strong> <br />
                    <a>
                      Year
                      <br />
                      Experince
                    </a>
                  </Col>
                  <Col>
                    <strong>3+</strong> <br />
                    <a>
                      Completed
                      <br />
                      Project
                    </a>
                  </Col>
                  <Col>
                    <strong>0</strong> <br />
                    <a>
                      Companiest
                      <br />
                      Worked
                    </a>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
}
