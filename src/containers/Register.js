import React from "react";
import { Row, FormGroup, Input, Button, Form } from "reactstrap";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { registerData } from "../redux/actions/AuthAction";

const signupSchema = yup.object().shape({
  name: yup.string().required("*Username is Required"),
  email: yup.string().required("*Email is Required"),
  password: yup.string().required("*Password is Required"),
});
const Register = () => {
  const { control, register, handleSubmit, errors } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const dispatch = useDispatch();

  const onSubmit = (registerdata) => {
    dispatch(registerData(registerdata));
  };
  return (
    <>
      <Row>
        <h4 className="signin-title">BUYER</h4>
      </Row>
      <Form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <FormGroup>
          <Controller
            as={Input}
            type="text"
            name="name"
            defaultValue=""
            placeholder="username"
            control={control}
            refs={register}
          />
          {errors && errors.name && (
            <span className="text-danger">{errors.name.message}</span>
          )}
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
          {errors && errors.email && (
            <span className="text-danger">{errors.email.message}</span>
          )}
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
          {errors && errors.password && (
            <span className="text-danger">{errors.password.message}</span>
          )}
        </FormGroup>
        <FormGroup>
          <Button className="signin-button">REGISTER</Button>
        </FormGroup>
      </Form>
    </>
  );
};

export default Register;
