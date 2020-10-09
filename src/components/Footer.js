import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Container fluid={true} className="footer-box">
      <Container>
        <Row className="footer-sub-box">
          <Col md={2}>
            <h5 className="mb-4">Sitemap</h5>
            <p className="footer-text">Home page</p>
            <p className="footer-text">How it Works</p>
            <p className="footer-text">Blog</p>
          </Col>
          <Col md={8}>
            <h5 className="mb-4">Contact Us</h5>
            <p className="footer-text ">support@autodigg.com</p>
          </Col>
          <Col md={2}>
            <h5 className="mb-4">Follow Us</h5>
            <div className="followus-icon">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
            </div>
          </Col>
        </Row>
        <Row className="footer-sub-box">
          <Col md={12}>
            <p className="footer-text">
              Copyright 2020. All rights reserved by: AutoDigg
            </p>
            <p className="footer-text">
              Registration on or use of this site constitutes acceptance of our
              Terms of Service and Privacy Policy
            </p>
            <p className="footer-text">Frequently Asked Questions</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
