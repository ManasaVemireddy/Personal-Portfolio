import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import Particle from "../../Particle";
import pdf from "../../assets/SRIKANTH_BOBBEPALLI.pdf"; // Local file import
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Zoom from "react-reveal/Zoom";

// Set the workerSrc for pdfjs
pdfjs.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.7.76/pdf.min.mjs';

const resumeLink =
  "https://raw.githubusercontent.com/ManasaVemireddy/Personal-Portfolio/src/assets/SRIKANTH_BOBBEPALLI.pdf";

function Resume() {
  const [width, setWidth] = useState(1200);
  const [error, setError] = useState(null); // State to track errors

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWidth);
    updateWidth(); // Initialize width on load

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div>
      <section className="home-section">
        <Container fluid id="home">
          <Particle />
          <Container className="home-content">
            <div
              className="d-flex justify-content-center"
              style={{ backgroundColor: "#fbd9ad" }}
            >
              <Zoom left cascade>
                <h1 style={{ color: "rgb(134 61 176)" }}>RESUME</h1>
              </Zoom>
            </div>
            <div className="certificate-section mt-4" id="about">
              <div className="d-flex justify-content-center">
                <Button variant="primary" href={pdf} target="_blank">
                  <AiOutlineDownload />
                  &nbsp;Download Resume
                </Button>
              </div>
              <div className="resume d-flex justify-content-center mt-4">
                <Document
                  file={resumeLink}
                  onLoadError={(error) => setError(error.message)} // Handle load errors
                >
                  {error ? (
                    <div>Error loading PDF: {error}</div> // Display error
                  ) : (
                    <Page pageNumber={1} scale={width > 786 ? 1.6 : 0.6} />
                  )}
                </Document>
              </div>
              <div className="d-flex justify-content-center mt-4">
                <Button variant="primary" href={pdf} target="_blank">
                  <AiOutlineDownload />
                  &nbsp;Download Resume
                </Button>
              </div>
            </div>
          </Container>
        </Container>
      </section>
    </div>
  );
}

export default Resume;
