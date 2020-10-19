import React, { useState, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
} from "reactstrap";
import { Container, Row, Col, Table, Label } from "reactstrap";
import { FaBan, FaBars } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { carListData } from "../redux/actions";
import autodigglogo from "../images/logo-autodigg.png";
import { slide as Menu } from "react-burger-menu";
import { FaUserCircle } from "react-icons/fa";
import { logDOM } from "@testing-library/react";

const DashboardHeader = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const dispatch = useDispatch();

  const { loading, cars } = useSelector((state) => ({
    loading: state.CarListReducer.loading,
    cars: state.CarListReducer.cars,
  }));

  console.log(cars);

  useEffect(() => {
    dispatch(carListData());
  }, [dispatch]);
  return (
    <>
      <Navbar color="dark" className="text-white" light>
        <NavbarBrand href="/" className="mr-auto">
          <img src={autodigglogo} alt="autodigg" />
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />

        <Collapse isOpen={!collapsed} navbar>
          <Menu pageWrapId={"page-wrap"} className="bg-dark" width={"15%"}>
            <UncontrolledDropdown>
              <DropdownToggle nav>
                <FaUserCircle className="usericon" />
                Devang Desai
              </DropdownToggle>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="#">New Requests</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Active Offers</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Accepted Offers</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Archived</NavLink>
            </NavItem>
          </Menu>
        </Collapse>
      </Navbar>
      <Container fluid className="new-req-container" id="page-wrap">
        <Row>
          <Col md={10} className="new-req-header-div pl-5 pr-5">
            <Row className="new-req-header">
              <h3>New Requests</h3>
            </Row>
            {loading ? (
              <div>loading....</div>
            ) : (
              <>
                <Row>
                  {cars !== null &&
                    cars.map((car) => (
                      <>
                        <Container className="new-request-box mb-4">
                          <Row className="pl-3 pt-3 border-bottom">
                            <Col md={4}>
                              <Label>EXPIRES IN:</Label>
                              <Label className="font-weight-bold pl-2">
                                14 days 04:49:00
                              </Label>
                            </Col>
                            <Col md={4}>
                              <Label>BUYER</Label>
                              <Label className="font-weight-bold pl-2">
                                {car.dealerDetails.dealerName}
                              </Label>
                            </Col>
                            <Col md={4}>
                              <FaBan className="text-danger" />
                              <Label className="pr-3">CANCEL</Label>
                              <FaBars className="text-primary" />
                              <Label>DETAILS</Label>
                            </Col>
                          </Row>
                          <Table borderless responsive>
                            <thead>
                              <tr>
                                <td>CAR TYPE</td>
                                <td>CAR MAKE</td>
                                <td>CAR MODEL</td>
                                <td>CAR YEAR</td>
                                <td>OFFERS</td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th>Used Car</th>
                                <th>{car.carMake}</th>
                                <th>{car.carModel}</th>
                                <th>Any</th>
                                <th>No Offers yet</th>
                              </tr>
                            </tbody>
                            <thead>
                              <tr>
                                <td>MILEAGE</td>
                                <td>EXTERIOR COLOR</td>
                                <td>INTERIOR COLOR</td>
                                <td>CREDIT SCORE</td>
                                <td>MAX PRICE</td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th>{car.milage}</th>
                                <th>{car.color}</th>
                                <th>{car.color}</th>
                                <th>No Credit Score</th>
                                <th>{car.price}</th>
                              </tr>
                            </tbody>
                          </Table>
                        </Container>
                      </>
                    ))}
                </Row>
              </>
            )}
          </Col>

          <Col md={2}>
            <Row className="new-req-header-msg">
              <h5>Messaging</h5>
            </Row>
            <Row className="chat-div">
              <img
                src="https://www.autodiggdemo.com/storage/avatars/buyers/B-92QK2.jpg?v=1602831052"
                className="user-img"
              />
              <p className="chat-username">Bhavdip Pambhar</p>
            </Row>
            <Row className="chat-div">
              <img
                src="https://www.autodiggdemo.com/storage/avatars/buyers/B-92QK2.jpg?v=1602831052"
                className="user-img"
              />
              <p className="chat-username">Bhavdip Pambhar</p>
            </Row>
            <Row className="chat-div">
              <img
                src="https://www.autodiggdemo.com/storage/avatars/buyers/B-92QK2.jpg?v=1602831052"
                className="user-img"
              />
              <p className="chat-username">Devang Desai</p>
            </Row>
            <Row className="chat-div">
              <img
                src="https://www.autodiggdemo.com/storage/avatars/buyers/B-92QK2.jpg?v=1602831052"
                className="user-img"
              />
              <p className="chat-username">Devang Desai 2</p>
            </Row>
            <Row className="chat-div">
              <img
                src="https://www.autodiggdemo.com/storage/avatars/buyers/B-92QK2.jpg?v=1602831052"
                className="user-img"
              />
              <p className="chat-username">Dhwani Yagnik</p>
            </Row>
            <Row className="chat-div">
              <img
                src="https://www.autodiggdemo.com/storage/avatars/buyers/B-92QK2.jpg?v=1602831052"
                className="user-img"
              />
              <p className="chat-username">Victor kim</p>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DashboardHeader;
