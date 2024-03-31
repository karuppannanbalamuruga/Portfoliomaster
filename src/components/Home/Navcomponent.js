import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const Navcomponent = () => {
    return (
        <Container fluid style={{marginTop:'46px'}}>
          <Row className="justify-content-center align-items-center">
            <Col lg={11}>
              <Navbar
                expand="lg"
                className="p-3"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                <img src={require("../../Images/Home/logo.png")} />
                <Navbar.Toggle
                  aria-controls="basic-navbar-nav"
                  style={{ background: "white" }}
                />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto">
                    <Nav.Link
                      className="me-4"
                      style={{ color: "white" }}
                      as={Link} to={"/"}
                    >
                      Home
                    </Nav.Link>
                    <Nav.Link
                      className="me-4"
                      style={{ color: "white" }}
                      as={Link} to={"/Project"}
                    >
                      Projects
                    </Nav.Link>
                    <Nav.Link
                      className="me-4"
                      style={{ color: "white" }}
                      as={Link} to={"/AcademyBlog"}
                    >
                      Academy
                    </Nav.Link>
                    <Nav.Link
                      className="me-4"
                      style={{ color: "white" }}
                      as={Link} to={"/Contact"}
                    >
                      Contact
                    </Nav.Link>
                    <Nav.Link
                      href="#"
                      className="btn me-2 px-4"
                      style={{
                        borderRadius: "5px",
                        color: "white",
                        backgroundColor: "#3854BA",
                      }}
                    >
                      Get in Touch
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>          
            </Col>
          </Row>
        </Container>
    );
}

export default Navcomponent
