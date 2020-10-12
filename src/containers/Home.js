import React from "react";
import {
  Container,
  Row,
  Col,
  FormGroup,
  Input,
  Button,
  Card,
  CardImg,
  CardText,
  CardDeck,
  CardTitle,
  Form,
} from "reactstrap";
import { Layout } from "../components";
import { useForm, Controller } from "react-hook-form";
import panellogo1 from "../images/panels-icon-1.png";
import panellogo2 from "../images/panels-icon-2.png";
import panellogo3 from "../images/panels-icon-3.png";
import panellogo4 from "../images/panels-icon-4.png";
import panellogo5 from "../images/panels-icon-5.png";
import icon1 from "../images/icon_01.png";
import icon2 from "../images/icon_02.png";
import icon3 from "../images/icon_03.png";

const Home = () => {
  const { control, register, handleSubmit, errors } = useForm({
    // resolver: yupResolver(carSearchSchema),
  });
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
                  src="https://www.youtube.com/embed/SDFUmf8otfc?rel=0&amp;modestbranding=1&amp;autohide=1&amp;showinfo=0&amp;"
                ></iframe>
              </div>
            </Col>
            <Col md={2}></Col>
            <Col md={5}>
              <Form className="searchform">
                <Row>
                  <Col md={12}>
                    <h4 className="home-rightside-title">
                      Select Car Preferences
                    </h4>
                  </Col>
                  <Col>
                    <p className="home-rightside-subtitle">
                      * indicates mandatory field.
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Controller
                        as={Input}
                        type="select"
                        name="cartype"
                        control={control}
                        ref={register}
                        placeholder=" Car Type*"
                      >
                        <option>Car Type*</option>
                      </Controller>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Controller
                        as={Input}
                        type="select"
                        name="carmake"
                        control={control}
                        ref={register}
                        placeholder=" Car Make*"
                      >
                        <option>Car Make*</option>
                      </Controller>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Controller
                        as={Input}
                        type="select"
                        name="carmodel"
                        control={control}
                        ref={register}
                        placeholder=" Car Model*"
                      >
                        <option>Car Model*</option>
                      </Controller>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Controller
                        as={Input}
                        type="select"
                        name="estimetedcredit"
                        control={control}
                        ref={register}
                        placeholder=" Estimated Score*"
                      >
                        <option> Estimated Credit Score*</option>
                      </Controller>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Controller
                        as={Input}
                        type="select"
                        name="milesfrom"
                        control={control}
                        ref={register}
                        placeholder=" 50 Miles From*"
                      >
                        <option>50 Miles From*</option>
                      </Controller>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Controller
                        as={Input}
                        type="select"
                        name="zipcode"
                        control={control}
                        ref={register}
                        placeholder="Zip Code*"
                      >
                        <option>Zip Code*</option>
                      </Controller>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <Button className="signin-button ">GET STARTED</Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </Container>
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
                <CardTitle className="panelbox-title">
                  Privacy Control
                </CardTitle>
                <CardText className="panelbox-subtitle">
                  - You decide when to share your contact details and with whom.
                </CardText>
                <CardText className="panelbox-subtitle">
                  - We don't share or sell your personal information with
                  anyone.
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
                  - Receive personalized offer rather than redundant list of
                  cars.
                </CardText>
                <CardText className="panelbox-subtitle">
                  - No pressure, walk away anytime without any obligation.
                </CardText>
              </Card>
            </CardDeck>
          </Row>
        </Container>
      </Container>
      <Container fluid>
        <Row>
          <Col md={6} className="signin-box">
            <Row>
              <h4 className="signin-title">DEALER</h4>
            </Row>
            <Form onSubmit={handleSubmit(onsubmit)} className="login-form">
              <FormGroup>
                <Controller
                  as={Input}
                  type="text"
                  name="identifier"
                  defaultValue=""
                  placeholder="username"
                  control={control}
                  refs={register}
                />
              </FormGroup>
              <FormGroup>
                <Controller
                  as={Input}
                  type="password"
                  name="password"
                  defaultValue=""
                  placeholder="password"
                  control={control}
                  refs={register}
                />
              </FormGroup>
              <FormGroup>
                <Button className="signin-button">SIGN IN</Button>
              </FormGroup>
            </Form>
            <Row>
              <div className="or-div">OR</div>
            </Row>
            <Row>
              <a className="registernow-link">REGISTER NOW</a>
            </Row>
            <Row>
              <a className="forgotpassword-link">Forgot Password?</a>
            </Row>
          </Col>
          <Col md={6} className="register-box">
            <Row>
              <h4 className="signin-title">BUYER</h4>
            </Row>
            <Form onSubmit={handleSubmit(onsubmit)} className="login-form">
              <FormGroup>
                <Controller
                  as={Input}
                  type="text"
                  name="identifier"
                  defaultValue=""
                  placeholder="username"
                  control={control}
                  refs={register}
                />
              </FormGroup>
              <FormGroup>
                <Controller
                  as={Input}
                  type="email"
                  name="email"
                  defaultValue=""
                  placeholder="E-mail"
                  control={control}
                  refs={register}
                />
              </FormGroup>
              <FormGroup>
                <Controller
                  as={Input}
                  type="password"
                  name="password"
                  defaultValue=""
                  placeholder="password"
                  control={control}
                  refs={register}
                />
              </FormGroup>
              <FormGroup>
                <Button className="signin-button">REGISTER</Button>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
      <Container fluid={true} className="contactus-box">
        <Container>
          <Row>
            <Col md={12}>
              <h4 className="home-title">Contact Us</h4>
            </Col>
          </Row>

          <Form>
            <Row>
              <Col md={4}>
                <FormGroup>
                  <Controller
                    as={Input}
                    type="text"
                    name="identifier"
                    defaultValue=""
                    placeholder="Name*"
                    control={control}
                    refs={register}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Controller
                    as={Input}
                    type="email"
                    name="email"
                    defaultValue=""
                    placeholder="Email*"
                    control={control}
                    refs={register}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Controller
                    as={Input}
                    type="text"
                    name="phone"
                    defaultValue=""
                    placeholder="Phone*"
                    control={control}
                    refs={register}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <FormGroup>
                  <Controller
                    as={Input}
                    type="textarea"
                    name="message"
                    defaultValue=""
                    placeholder="Your message*"
                    control={control}
                    refs={register}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <FormGroup className="text-center">
                  <Button className="sendmsg-button"> SEND MESSAGE</Button>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </Container>
      </Container>
    </Layout>
  );
};

export default Home;
