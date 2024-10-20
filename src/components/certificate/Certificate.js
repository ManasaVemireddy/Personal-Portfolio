import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import nxtwave from "../../images/Nxtwave_certificate.png";
import CCNA_Certificate from "../../images/CCNA_Certificate.jpg";
import cbta from "../../images/CBT&A.pdf";
import c from "../../images/c.jpg";
import skill from "../../images/skill.png";
import problem_solving from "../../images/problem_solving.png";
import python from "../../images/python.png";
import iq from "../../images/IQ_Test.jpg";
import computer from "../../images/Computer_knowledge.jpg";
import Fade from "react-reveal/Fade";

export default function Certificate() {
  return (
    <div className="mt-5">
      <Container>
        {/* <Bounce left cascade> */}
        <Fade left cascade duration={1000} distance="20px">
          <Row className="g-5">
            <Col md={4}>
              <img
                src={nxtwave}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
            <Col md={4}>
              <img
                src={nxtwave}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
            <Col md={4}>
              <img
                src={nxtwave}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
            <Col md={4}>
              <img
                src={nxtwave}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
            <Col md={4}>
              <img
                src={nxtwave}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
            <Col md={4}>
              <img src={nxtwave} alt="" style={{ width: "100%", height: "100%" }} />
            </Col>
            <Col md={4}>
              <img
                src={nxtwave}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
            <Col md={4}>
              <img src={nxtwave} alt="" style={{ width: "100%", height: "100%" }} />
            </Col>
            <Col md={4}>
              <img
                src={nxtwave}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
          </Row>
          {/* </Bounce> */}
        </Fade>
      </Container>
    </div>
  );
}
