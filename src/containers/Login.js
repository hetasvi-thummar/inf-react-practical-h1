import React from "react";
import { Row, FormGroup, Input, Button, Form } from "reactstrap";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { loginData } from "../redux/actions/AuthAction";

const signinSchema = yup.object().shape({
  email: yup.string().required("*Email is Required"),
  password: yup.string().required("*Password is Required"),
});

const Login = () => {
  const { control, register, handleSubmit, errors } = useForm({
    resolver: yupResolver(signinSchema),
  });

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(loginData(data));
  };
  return (
    <>
      <Row>
        <h4 className="signin-title">DEALER</h4>
      </Row>
      <Form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <FormGroup>
          <Controller
            as={Input}
            type="email"
            name="email"
            defaultValue=""
            placeholder="Email"
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
          <Button className="signin-button">SIGN IN</Button>
        </FormGroup>
      </Form>
      <Row>
        <div className="or-div">OR</div>
      </Row>
      <Row>
        <a href="#" className="registernow-link">
          REGISTER NOW
        </a>
      </Row>
      <Row>
        <a className="forgotpassword-link">Forgot Password?</a>
      </Row>
    </>
  );
};

export default Login;
