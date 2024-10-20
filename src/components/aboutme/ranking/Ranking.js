import React from "react";
import {
  SiCodechef,
  SiLeetcode,
  SiGeeksforgeeks,
} from "react-icons/si";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";

export default function Ranking() {
  return (
    <div className="mt-4">
      <Zoom left cascade>
        <h1>See my rank</h1>
      </Zoom>
      <Container className="mt-5">
        <Row className="g-5">
            
          <Col md={4}>
            <a
              href="htttps://leetcode.com/u/srikanthbobbepalli9848/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons">
              <Zoom cascade>
                <SiLeetcode />
              </Zoom>
            </a>
          </Col>
          <Col md={4}>
            <a
              href="https://www.codechef.com/users/srikanthb9848"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons">
              <Zoom cascade>
                < SiCodechef />
              </Zoom>
            </a>
          </Col>
          <Col md={4}>
            <a
              href="https://www.geekforgeeks.org/user/srikanthbobb8ocv/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <SiGeeksforgeeks />
              </Zoom>
            </a>
          </Col>{" "}
        </Row>
      </Container>
    </div>
  );
}
