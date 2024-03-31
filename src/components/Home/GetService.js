import React from 'react'
import { Col, Container, Row } from "react-bootstrap";


const GetService = () => {
  return (
    <section style={{ paddingTop: "13rem", paddingBottom: "5rem" }}>
    <Container>
      <Row
        className="bg-dark"
        style={{ height: "41vh", borderRadius: "20px" }}
      >
        <Col lg={9} xs={9}>
          <div style={{padding:"2.5rem 2.5rem 0rem 2.5rem"}}>
            <h1 style={{ color: "white" }}>Get Started</h1>
            <p style={{ color: "white",padding:"0rem 1rem 0rem 0rem"}}>
              diam sit amet, efficitur eros.Sed consectetur dapibus ornare.
              Suspendisse id tempor nisl. Curabitur at massa dui.
            </p>
            <a
              href="#"
              className="btn p-2"
              style={{
                borderRadius: "5px",
                color: "white",
                backgroundColor: "#3854BA",
              }}
            >
              Get your serivce
            </a>
          </div>
        </Col>
        <Col lg={3} xs={3}>
          
            <img
              src={require("../../Images/started.png")}
              style={{
                position: "absolute",
                width: "30%",
                height: "80%",
                margin: "-225.3px 0px 0px -70px",
              }}
              fluid
            />
          
        </Col>
      </Row>
    </Container>
  </section>
  )
}

export default GetService
