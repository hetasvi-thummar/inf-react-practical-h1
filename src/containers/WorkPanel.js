import React from "react";
import { Container, Row, Col } from "reactstrap";
import panellogo1 from "../images/panels-icon-1.png";
import panellogo2 from "../images/panels-icon-2.png";
import panellogo3 from "../images/panels-icon-3.png";
import panellogo4 from "../images/panels-icon-4.png";
import panellogo5 from "../images/panels-icon-5.png";

const WorkPanel = () => {
  return (
    <Container fluid className="home-sub-banner">
      <Container>
        <Row>
          <Col md={12}>
            <h4 className="home-title">How does it work?</h4>
          </Col>
        </Row>
        <Row>
          <Col md={7}>
            <Row className="panel-box">
              <Col md={9} className="col-reverse">
                <h3>Select Car Preference</h3>
                <div>
                  Provide your car type, make, model and other preferences.
                </div>
              </Col>
              <Col md={3}>
                <img src={panellogo1} alt="panel-logo1" />
              </Col>
            </Row>
          </Col>
          <Col md={5}></Col>
        </Row>
        <Row>
          <Col md={5}></Col>
          <Col md={7}>
            <Row className="panel-box">
              <Col md={3}>
                <img src={panellogo2} alt="panel-logo1" />
              </Col>
              <Col md={9}>
                <h3>Information Broadcast</h3>
                <div>
                  Preferences are sent to dealers without sharing your contact
                  information.
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col md={7}>
            <Row className="panel-box">
              <Col md={9} className="col-reverse">
                <h3>Personalized Offer</h3>
                <div>Receive multiple bids from the Dealers.</div>
              </Col>
              <Col md={3}>
                <img src={panellogo3} alt="panel-logo1" />
              </Col>
            </Row>
          </Col>
          <Col md={5}></Col>
        </Row>
        <Row>
          <Col md={5}></Col>
          <Col md={7}>
            <Row className="panel-box">
              <Col md={3}>
                <img src={panellogo4} alt="panel-logo1" />
              </Col>
              <Col md={9}>
                <h3>Connect And Communicate</h3>
                <div>Read offer details, chat and negotiate.</div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col md={7}>
            <Row className="panel-box">
              <Col md={9} className="col-reverse">
                <h3>Exchange Contact Infromation</h3>
                <div>Like the bid and schedule a test drive.</div>
              </Col>
              <Col md={3}>
                <img src={panellogo5} alt="panel-logo1" />
              </Col>
            </Row>
          </Col>
          <Col md={5}></Col>
        </Row>
      </Container>
    </Container>
  );
};

export default WorkPanel;
