import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardDeck,
  CardTitle,
} from "reactstrap";
import icon1 from "../images/icon_01.png";
import icon2 from "../images/icon_02.png";
import icon3 from "../images/icon_03.png";

const WhyUsPanel = () => {
  return (
    <Container fluid={true} className="bg-white">
      <Container>
        <Row>
          <Col md={12}>
            <h4 className="home-title">
              What Differentiates us from our Competitors?
              <p>WHY US?</p>
            </h4>
          </Col>
        </Row>
        <Row className="m-5">
          <CardDeck>
            <Card className="home-panelbox">
              <CardImg
                src={icon1}
                alt="Card image cap"
                className="panel-icon text-center"
              />
              <CardTitle className="panelbox-title">Privacy Control</CardTitle>
              <CardText className="panelbox-subtitle">
                - You decide when to share your contact details and with whom.
              </CardText>
              <CardText className="panelbox-subtitle">
                - We don't share or sell your personal information with anyone.
              </CardText>
            </Card>
            <Card className="home-panelbox">
              <CardImg
                src={icon2}
                alt="Card image cap"
                className="panel-icon text-center"
              />
              <CardTitle className="panelbox-title">
                Go Right to the Source
              </CardTitle>
              <CardText className="panelbox-subtitle">
                - Connect directly with local Dealerships.
              </CardText>
              <CardText className="panelbox-subtitle">
                - Communicate directly in real time.
              </CardText>
            </Card>
            <Card className="home-panelbox">
              <CardImg
                src={icon3}
                alt="Card image cap"
                className="panel-icon text-center"
              />
              <CardTitle className="panelbox-title">
                Personalized, Fair and Free
              </CardTitle>

              <CardText className="panelbox-subtitle">
                AutoDigg is open, fair, and free.
              </CardText>
              <CardText className="panelbox-subtitle">
                - Receive personalized offer rather than redundant list of cars.
              </CardText>
              <CardText className="panelbox-subtitle">
                - No pressure, walk away anytime without any obligation.
              </CardText>
            </Card>
          </CardDeck>
        </Row>
      </Container>
    </Container>
  );
};

export default WhyUsPanel;
