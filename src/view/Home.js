import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Layout } from "../components";
import {
  Login,
  Register,
  CarPreference,
  ContactUs,
  WhyUsPanel,
  WorkPanel,
} from "../containers";

const Home = () => {
  return (
    <Layout>
      <Container fluid className="main-banner">
        <Container>
          <Row>
            <Col md={5}>
              <h1 className="home-leftside-title">
                Receive Competing Offers from Your Local Dealers.
              </h1>
              <p className="home-leftside-subtitle">
                We NEVER Share Your Contact Information with ANYONE
              </p>
              <div className="mb-4">
                <iframe
                  id="video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen=""
                  width="100%"
                  height="260px"
                  src="https://www.youtube.com/embed/SDFUmf8otfc?;"
                  title="video"
                ></iframe>
              </div>
            </Col>
            <Col md={2}></Col>
            <Col md={5}>
              <CarPreference />
            </Col>
          </Row>
        </Container>
      </Container>
      <WorkPanel />
      <WhyUsPanel />
      <Container fluid>
        <Row>
          <Col md={6} className="signin-box">
            <Login />
          </Col>
          <Col md={6} className="register-box">
            <Register />
          </Col>
        </Row>
      </Container>

      <ContactUs />
    </Layout>
  );
};

export default Home;
