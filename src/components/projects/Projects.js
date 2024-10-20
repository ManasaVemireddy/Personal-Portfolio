import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import nxttrendz from "../../images/nxttrendz.png"
import question_bot from "../../images/question_bot.jpg";
import nxtwatch from "../../images/nxtwatch.png"
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

export default function Projects() {
  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col
              md={12}
              className="certificate-description d-flex justify-content-start"
            >
              <Zoom left cascade>
                <h1 className="aboutme-heading">Projects</h1>
              </Zoom>
            </Col>
            <Col md={4}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                     Nxt Trendz (Ecommerce Clone - Amazon, Flipkart)
                    </h5>
                    <img src={nxttrendz} alt={nxttrendz} />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://github.com/bobbepallisri/nxttrends.git"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      Implemented Nxt Trendz application which is a clone
                      for ECommerce applications like Amazon, Flipkart
                      where users can login and can see list of products
                      with search, filters, sort by etc...
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    React JS,JS, CSS, Bootstrap, Routing, REST API Calls,
                    Local Storage, JWT Token.
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={4}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                    Nxt Watch
                    </h5>
                    <img src={nxtwatch} alt={nxtwatch} />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://github.com/bobbepallisri/Nxt-Watch.git"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      Built the Nxt Watch application, modelled after
                      YouTube, enabling users to log in, explore video
                      categories such as Trending and Gaming, access
                      saved videos, and search for specific content while
                      adjusting the interface theme

                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    React JS,JS, CSS, Bootstrap, Routing, REST API Calls,
                    Local Storage, JWT Token.
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={4}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                    Question Bot Ai 
                    </h5>
                    <img src={question_bot} alt={question_bot} />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://github.com/bobbepallisri/miniproject1.git"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                     QuestBot AI facilitates efficient creation of multiple
                     choice questions (MCQs) for assessing students
                     understanding of various subjects and topic.
                     QuestBot AI, a revolutionary tool transforming
                     learning assessment. By swiftly generating
                     customized multiple-choice questions (MCQs) from
                     data, QuestBot AI leverages artificial intellegence to
                     streamline the assessment process
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    HTML, CSS, JavaScript, React.js, google api (gemini api)
                  </div>
                </div>
              </Fade>
            </Col>
          </Row>
          <div className="blog--viewAll">
            <Link to="/projectspage">
              <button className="btn btn-primary">
                View All
                <HiArrowRight className="viewArr" />
              </button>
            </Link>
          </div>
        </Container>
      </Container>
    </div>
  );
}
