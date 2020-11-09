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
import { Container, Row, Col, Label } from "reactstrap";
import { FaBan, FaBars } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { carListData } from "../redux/actions";
import autodigglogo from "../images/logo-autodigg.png";
import { slide as Menu } from "react-burger-menu";
import { FaUserCircle, FaComments } from "react-icons/fa";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import Pagination from "react-js-pagination";

const DashboardHeader = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [page, setPage] = useState(1);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);

  const dispatch = useDispatch();

  const { loading, cars } = useSelector((state) => ({
    loading: state.CarListReducer.loading,
    cars: state.CarListReducer.cars,
  }));

  useEffect(() => {
    dispatch(carListData(page));
  }, [dispatch]);

  console.log(cars);

  const handlePageChange = (page) => {
    dispatch(carListData(page));
    console.log(`active page is ${page}`);
    //setPage(page + 1);
  };
  return (
    <>
      <Navbar color="dark" className="text-white" light>
        <NavbarToggler onClick={toggle} className="mr-2">
          <FaComments color="white" className="msg-icon" />
        </NavbarToggler>
        )
        <NavbarBrand href="/" className="mr-auto">
          <img src={autodigglogo} alt="autodigg" />
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2">
          <FaBars color="white" />
        </NavbarToggler>
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
        <Collapse isOpen={isOpen} navbar>
          <Col md={12}>
            <div className="msg-box">
              <div>
                <h5 className="text-dark text-center">Messaging</h5>
              </div>
              <div className="chat-div chat-username">
                <img
                  src="https://www.autodiggdemo.com/storage/avatars/buyers/B-92QK2.jpg?v=1602831052"
                  className="user-img"
                />
                Bhavdip Pambhar
              </div>
              <div className="chat-div chat-username">
                <img
                  src="https://www.autodiggdemo.com/storage/avatars/buyers/B-92QK2.jpg?v=1602831052"
                  className="user-img"
                />
                Bhavdip Pambhar
              </div>
              <div className="chat-div chat-username">
                <img
                  src="https://www.autodiggdemo.com/storage/avatars/buyers/B-92QK2.jpg?v=1602831052"
                  className="user-img"
                />
                Devang Desai
              </div>
              <div className="chat-div chat-username">
                <img
                  src="https://www.autodiggdemo.com/storage/avatars/buyers/B-92QK2.jpg?v=1602831052"
                  className="user-img"
                />
                Devang Desai 2
              </div>
              <div className="chat-div chat-username">
                <img
                  src="https://www.autodiggdemo.com/storage/avatars/buyers/B-92QK2.jpg?v=1602831052"
                  className="user-img"
                />
                Dhwani Yagnik
              </div>
              <div className="chat-div chat-username">
                <img
                  src="https://www.autodiggdemo.com/storage/avatars/buyers/B-92QK2.jpg?v=1602831052"
                  className="user-img"
                />
                Victor kim
              </div>
            </div>
          </Col>
        </Collapse>
      </Navbar>
      <Container fluid className="new-req-container" id="page-wrap">
        <Row>
          <Col md={10} className="new-req-header-div pl-4 pr-4">
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
                        <Container className="new-request-box mb-4  pb-3">
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
                            <Thead>
                              <Tr>
                                <Th>CAR TYPE</Th>
                                <Th>CAR MAKE</Th>
                                <Th>CAR MODEL</Th>
                                <Th>CAR YEAR</Th>
                                <Th>OFFERS</Th>
                              </Tr>
                            </Thead>
                            <Tbody>
                              <Tr>
                                <Td>Used Car</Td>
                                <Td>{car.carMake}</Td>
                                <Td>{car.carModel}</Td>
                                <Td>Any</Td>
                                <Td>No Offers yet</Td>
                              </Tr>
                            </Tbody>
                          </Table>
                          <Table>
                            <Thead>
                              <Tr>
                                <Th>MILEAGE</Th>
                                <Th>EXTERIOR COLOR</Th>
                                <Th>INTERIOR COLOR</Th>
                                <Th>CREDIT SCORE</Th>
                                <Th>MAX PRICE</Th>
                              </Tr>
                            </Thead>
                            <Tbody>
                              <Tr>
                                <Td>{car.milage}</Td>
                                <Td>{car.color}</Td>
                                <Td>{car.color}</Td>
                                <Td>No Credit Score</Td>
                                <Td>{car.price}</Td>
                              </Tr>
                            </Tbody>
                          </Table>
                        </Container>
                      </>
                    ))}
                </Row>
              </>
            )}
          </Col>

          {/* <Col md={2}>
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
          </Col> */}
        </Row>
        <Container>
          <Row className="text-center">
            <Pagination
              activePage={page}
              itemsCountPerPage={10}
              totalItemsCount={450}
              pageRangeDisplayed={5}
              onChange={handlePageChange}
            />
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default DashboardHeader;
