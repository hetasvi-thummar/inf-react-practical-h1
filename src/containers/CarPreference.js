import React, { useEffect } from "react";
import { Row, FormGroup, Input, Button, Form, Col } from "reactstrap";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { carsData, carModelData } from "../redux/actions";

const carpreferenceSchema = yup.object().shape({
  cartype: yup.string().required("*CarType is Required"),
  carmake: yup.string().required("*CarMake is Required"),
  carmodel: yup.string().required("*CarModel is Required"),
  estimetedcredit: yup.string().required("*Estimeted Credit is Required"),
  miles: yup.string().required("*Miles is Required"),
  zipcode: yup.number().required("*Zip Code is Required"),
});

const CarPreference = () => {
  const { control, register, handleSubmit, errors } = useForm({
    resolver: yupResolver(carpreferenceSchema),
  });
  const dispatch = useDispatch();

  const { carmake, carmodel } = useSelector((state) => ({
    carmake: state.CarReducer.carmake,
    carmodel: state.CarReducer.carmodel.carmodel,
  }));

  useEffect(() => {
    dispatch(carsData());
  }, [dispatch]);

  const setCarMake = (e) => {
    dispatch(carModelData(e.target.value));
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)} className="searchform">
        <Row>
          <Col md={12}>
            <h4 className="home-rightside-title">Select Car Preferences</h4>
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
                refs={register}
                defaultValue=""
              >
                <option>Car Type*</option>
                <option>New Cars</option>
                <option>Used Cars</option>
                <option>Certified pre-owned</option>
              </Controller>
              {errors && errors.cartype && (
                <span className="text-danger">{errors.cartype.message}</span>
              )}
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Input
                type="select"
                name="carmake"
                control={control}
                refs={register}
                defaultValue=""
                onChange={setCarMake}
              >
                <option>Car Make*</option>
                {carmake !== null &&
                  carmake.map((car) => (
                    <option value={car.makeId}>{car.makeName}</option>
                  ))}
              </Input>
              {errors && errors.carmake && (
                <span className="text-danger">{errors.carmake.message}</span>
              )}
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
                refs={register}
                defaultValue=""
              >
                <option>Car Model*</option>
                {carmodel !== null &&
                  carmodel.map((car) => (
                    <option key={car.modelId}>{car.modelName}</option>
                  ))}
              </Controller>
              {errors && errors.carmodel && (
                <span className="text-danger">{errors.carmodel.message}</span>
              )}
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Controller
                as={Input}
                type="select"
                name="estimetedcredit"
                control={control}
                refs={register}
                defaultValue=""
              >
                <option> Estimated Credit Score*</option>
                <option> Credit Challenged</option>
                <option> 550-600</option>
                <option> 600-650</option>
                <option> 650-700</option>
                <option> 700-750</option>
                <option> 750-800</option>
              </Controller>
              {errors && errors.estimetedcredit && (
                <span className="text-danger">
                  {errors.estimetedcredit.message}
                </span>
              )}
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
                refs={register}
                defaultValue=""
              >
                <option>50 Miles From*</option>
                <option>75 Miles From*</option>
                <option>100 Miles From*</option>
              </Controller>
              {errors && errors.miles && (
                <span className="text-danger">{errors.miles.message}</span>
              )}
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Controller
                as={Input}
                type="select"
                name="zipcode"
                control={control}
                refs={register}
                defaultValue=""
              >
                <option>Zip Code*</option>
              </Controller>
              {errors && errors.zipcode && (
                <span className="text-danger">{errors.zipcode.message}</span>
              )}
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Button className="signin-button ">GET STARTED</Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default CarPreference;
