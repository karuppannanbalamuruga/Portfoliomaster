import React from 'react'
import { Col, Container, Row } from "react-bootstrap";

const ClientBanner = () => {
  return (
    <section className="p-3" style={{ background: "#3854BA1A" }} id="project">
    <Container fluid>
      <Row className="justify-content-center align-items-center">
        <Col>
          <Row className="justify-content-center align-items-center">
            <Col xs={6} md={6} lg={2} className="text-center pt-4 pb-5">
              <img src={require("../../Images/Home/Banner1.png")} />
            </Col>
            <Col xs={6} md={6} lg={2} className="text-center pt-4 pb-5">
              <img src={require("../../Images/Home/Banner2.png")} />
            </Col>
            <Col xs={6} md={6} lg={2} className="text-center pb-5">
              <img src={require("../../Images/Home/Banner3.png")} />
            </Col>
            <Col xs={6} md={6} lg={2} className="text-center pb-5">
              <img src={require("../../Images/Home/Banner4.png")} />
            </Col>
            <Col xs={2} md={2} lg={2} className="text-center pb-4">
              <img src={require("../../Images/Home/Banner5.png")} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </section>
  )
}

export default ClientBanner
