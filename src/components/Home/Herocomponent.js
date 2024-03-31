import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import './Herocomponent.css'

const Herocomponent = () => {
  return (
    <section className="pb-5">
        <Container fluid>
        <Row className="justify-content-center align-items-center">
            <Col lg={10}>
            <Row className="justify-content-center align-items-center">
                <Col lg={11} xs={10}>
                <div className="text-end">
                <img src={require("../../Images/Home/star.png")} width={"64"}/>
                </div>
                </Col>
            </Row>
            <Row className="justify-content-center align-items-center">
                <Col lg={1} xs={1}>
                <div>
                <img src={require("../../Images/Home/star.png")} width={"64"}/>
                </div>
                </Col>
                <Col lg={9} xs={10}>
                <div >
                <h1 style={{ fontSize: "60px", lineHeight: "82px",marginRight:'0%'}} className="text-center">
                    Helping startups archive online<br></br>
                    presence with your <span>Websites</span>
                </h1>
                </div>  
                </Col>
                <Col lg={1}></Col>
            </Row>
            <Row className="justify-content-center align-items-center pt-4">
                <Col>
                <p className="text-center" style={{ fontSize: "24px" }}>
                    diam sit amet, efficitur eros.Sed consectetur dapibus ornare.
                    Suspendisse<br></br>
                    id tempor nisl. Curabitur at massa dui. Praesent lobortis, dui
                </p>
                </Col>
            </Row>
            <Row className="justify-content-center align-items-center pt-4">
                <Col lg={10}>
                <Row>
                    <Col lg={2} className="text-center pb-4">
                    <img src={require("../../Images/Home/its.png")} />
                    </Col>
                    <Col xs={6} lg={4} className="text-center">
                    <a
                        href="#"
                        className="btn p-3"
                        style={{
                        borderRadius: "5px",
                        color: "white",
                        backgroundColor: "#3854BA",
                        fontSize: "20px",
                        }}
                    >
                        Request your serivce
                    </a>
                    </Col>
                    <Col xs={6} lg={5}>
                    <a
                        href="#"
                        className="btn p-2 fw-bold text-center"
                        style={{ fontSize: "25px" }}
                    >
                        <i
                        class="bi bi-play-circle"
                        style={{ color: "#3854BA" }}
                        ></i>{" "}
                        Watch Overview
                    </a>
                    </Col>
                </Row>
                </Col>
            </Row>
            </Col>
        </Row>
        </Container>
    </section>
  )
}

export default Herocomponent
