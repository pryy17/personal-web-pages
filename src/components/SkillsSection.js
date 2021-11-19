import React, { useState } from "react";
import { Modal, Button, Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faServer, faPalette} from '@fortawesome/free-solid-svg-icons'
import Aos from "aos";
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">FrontEnd</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div class="skills">
          <div class="details">
            <span>HTML</span> <span>90%</span>
          </div>
          <div class="bar">
            <div id="html-bar"></div>
          </div>
        </div>

        <div class="skills">
          <div class="details">
            <span>CSS</span> <span>75%</span>
          </div>
          <div class="bar">
            <div id="css-bar"></div>
          </div>
        </div>

        <div class="skills">
          <div class="details">
            <span>Javascript</span> <span>72%</span>
          </div>
          <div class="bar">
            <div id="javascript-bar"></div>
          </div>
        </div>

        <div class="skills">
          <div class="details">
            <span>jQuery</span> <span>68%</span>
          </div>
          <div class="bar">
            <div id="jQuery-bar"></div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
function MyVerticallyCenteredModal1(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">FrontEnd</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div class="skills">
          <div class="details">
            <span>HTML</span> <span>90%</span>
          </div>
          <div class="bar">
            <div id="html-bar"></div>
          </div>
        </div>

        <div class="skills">
          <div class="details">
            <span>CSS</span> <span>75%</span>
          </div>
          <div class="bar">
            <div id="css-bar"></div>
          </div>
        </div>

        <div class="skills">
          <div class="details">
            <span>Javascript</span> <span>72%</span>
          </div>
          <div class="bar">
            <div id="javascript-bar"></div>
          </div>
        </div>

        <div class="skills">
          <div class="details">
            <span>jQuery</span> <span>68%</span>
          </div>
          <div class="bar">
            <div id="jQuery-bar"></div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
function MyVerticallyCenteredModal2(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">FrontEnd</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div class="skills">
          <div class="details">
            <span>HTML</span> <span>90%</span>
          </div>
          <div class="bar">
            <div id="html-bar"></div>
          </div>
        </div>

        <div class="skills">
          <div class="details">
            <span>CSS</span> <span>75%</span>
          </div>
          <div class="bar">
            <div id="css-bar"></div>
          </div>
        </div>

        <div class="skills">
          <div class="details">
            <span>Javascript</span> <span>72%</span>
          </div>
          <div class="bar">
            <div id="javascript-bar"></div>
          </div>
        </div>

        <div class="skills">
          <div class="details">
            <span>jQuery</span> <span>68%</span>
          </div>
          <div class="bar">
            <div id="jQuery-bar"></div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export const SkillsSection = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <Container className="skills">
      <Row xs={2} md={2} sm={1}>
        <Col className="button-skills d-grid gap-2" 
        data-aos="zoom-in"
        >
          <Button fluid variant="primary" onClick={() => setModalShow(true)}>
          <span><FontAwesomeIcon icon={faCode} /></span> <strong> my Frontend skills </strong>
          </Button>

          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </Col>
        <Col className="button-skills d-grid gap-2" data-aos="zoom-in">
          <Button variant="primary" onClick={() => setModalShow(true)}>
          <span><FontAwesomeIcon icon={faServer} /></span> <strong> my backend skills </strong>
          </Button>

          <MyVerticallyCenteredModal1
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </Col>
        <Col className="button-skills d-grid gap-2" data-aos="zoom-in">
          <Button  variant="primary" onClick={() => setModalShow(true)}>
          <span><FontAwesomeIcon icon={faPalette} /></span> <strong> my UI/UX skills </strong>
          </Button>

          <MyVerticallyCenteredModal2
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </Col>
      </Row>
      </Container>
    </div>
  );
};

export default SkillsSection;
