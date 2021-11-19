import "./App.scss";
import Navbar from "./components/NavbarComponent";
import Header from "./components/HeaderComponent";
import SocialMediaBtn from "./components/SocialMediaBtn";
import { Col, Container, Row } from "react-bootstrap";
import Flipped from "./components/Flipped";
import About from "./components/About";
import StudySection from "./components/StudySection";
import "aos/dist/aos.css";
import SkillsSection from "./components/SkillsSection";
import Aos from "aos";



function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Header */}
      <Header />
      <SocialMediaBtn />
      <Row>
        <About />
      </Row>
      <Container data-aos="flip-up" className="skills-container" >
        <div className="skills-title">
          <h1>Skills</h1>
          <a>my skills Web Development</a>
        </div>
        <SkillsSection />
      </Container>
      <Container id="qualification">
        <div className="judul-qualification"><strong>Qualification</strong>
        <p>my qualification journey</p>
        </div>
        <StudySection />
      </Container>
    </div>
  );
}

export default App;
