import { useEffect } from "react"; 
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate, faCircle } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
export default function StudySection() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <div>
      <Container className="study-container" fluid>
          
        <Row sm={2} ld={2} className="study-content">
          <Row sm={1} ld={1} className="study-row">
            <Col className="study-col-head" data-aos="flip-up">
              <span></span>

              <span>
                <h1>graphic designer &nbsp; <FontAwesomeIcon icon={faUserGraduate} /></h1>
              </span>

              <p>ppkdb jakbar </p>
            </Col>
            <Col className="study-col1"  data-aos="flip-up">
              <span></span>
              <span>
                <h1>informatic enginer &nbsp; <FontAwesomeIcon icon={faUserGraduate} /></h1>
              </span>
              <p>Esa Unggul university</p>
            </Col>
          </Row>
          <Row>
            <Col className="study-col2" data-aos="flip-up">
              <span></span>
              <span>
                <h1><FontAwesomeIcon icon={faUserGraduate} /> &nbsp; web development</h1>
              </span>
              <p>Otodidak</p>
            </Col>
          </Row>
        </Row>
        <div className="container-circle">
              <div className="circle">
                <FontAwesomeIcon icon={faCircle} />
              </div> 
              <div className="circle">
                <FontAwesomeIcon icon={faCircle} />
              </div> 
              <div className="circle">
                <FontAwesomeIcon icon={faCircle} />
              </div> 
          </div>
      </Container>
    </div>
  );
}
