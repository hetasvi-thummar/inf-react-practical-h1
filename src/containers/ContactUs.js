import React from "react";
import {
  Row,
  FormGroup,
  Input,
  Button,
  Form,
  Col,
  Container,
} from "reactstrap";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { contactData } from "../redux/actions";

const contactusSchema = yup.object().shape({
  name: yup.string().required("*Name is Required"),
  email: yup.string().required("*Email is Required"),
  phone: yup.string().required("*Phone is Required"),
  message: yup.string().required("*Message is Required"),
});

const ContactUs = () => {
  const { control, register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(contactusSchema),
  });

  const dispatch = useDispatch();

  const onSubmit = (contactdata) => {
    dispatch(contactData(contactdata));
    reset(contactdata);
  };
  return (
    <Container fluid={true} className="contactus-box">
      <Container>
        <Row>
          <Col md={12}>
            <h4 className="home-title">Contact Us</h4>
          </Col>
        </Row>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md={4}>
              <FormGroup>
                <Controller
                  as={Input}
                  type="text"
                  name="name"
                  defaultValue=""
                  placeholder="Name*"
                  control={control}
                  refs={register}
                />
                {errors && errors.name && (
                  <span className="text-danger">{errors.name.message}</span>
                )}
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
                {errors && errors.email && (
                  <span className="text-danger">{errors.email.message}</span>
                )}
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
                {errors && errors.phone && (
                  <span className="text-danger">{errors.phone.message}</span>
                )}
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
                {errors && errors.message && (
                  <span className="text-danger">{errors.message.message}</span>
                )}
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
  );
};

export default ContactUs;
