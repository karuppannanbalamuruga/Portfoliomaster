import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from 'react-bootstrap/Image';
import { useRef } from "react";

const Maincontent = () => {

const setShow = useRef(null);
  return (
    <section>
        <Container>
        <Row className="pb-3">
            <Col lg={8}>
            <p>Projects</p>
            <h2>Our project and case studies</h2>
            </Col>
            <Col lg={4} >
            <h1 style={{ color: "#ECEEF9",fontSize:'90px' }}>PROJECTS</h1>
            </Col>
        </Row>
        </Container>
        <section className="pt-5 bg-dark" style={{height:"340vh",marginBottom:'7rem'}}>
        <Container>
            <Row>
            <Col lg={6} xs={6}>
                <Card className="bg-dark text-white">
                <Image
                    src={require("../../Images/Project/service1.png")}
                    style={{ position: "relative", height: "55vh" }}
                    fluid
                />
                <Card.ImgOverlay style={{ padding: "12rem 1rem 3rem 1rem" }}>
                    <div className="d-flex">
                    <h6>Website development</h6>
                    </div>
                    <div className="d-flex">
                    <h2>Cosmicstar Technologys</h2>
                    </div>
                    <div className="d-flex">
                    <Button>
                        Explore project <i class="bi bi-arrow-up-right"></i>
                    </Button>
                    </div>
                </Card.ImgOverlay>
                </Card>
            </Col>
            <Col lg={6} xs={6}>
                <Card className="bg-dark text-white">
                <Image
                    src={require("../../Images/Project/service2.png")}
                    style={{ position: "relative", height: "55vh" }}
                    fluid
                />
                <Card.ImgOverlay style={{ padding: "12rem 1rem 3rem 1rem" }}>
                    <div className="d-flex">
                    <h6>Website development</h6>
                    </div>
                    <div className="d-flex">
                    <h2>Cosmicstar Technologys</h2>
                    </div>
                    <div className="d-flex">
                    <Button>
                        Explore project <i class="bi bi-arrow-up-right"></i>
                    </Button>
                    </div>
                </Card.ImgOverlay>
                </Card>
            </Col>
            </Row>

            <Row className="pt-3">
            <Col lg={6} xs={6}>
                <Card className="bg-dark text-white">
                <Image
                    src={require("../../Images/Project/service3.png")}
                    style={{ position: "relative", height: "55vh" }}
                    fluid
                />
                <Card.ImgOverlay style={{ padding: "12rem 1rem 3rem 1rem" }}>
                    <div className="d-flex">
                    <h6>Website development</h6>
                    </div>
                    <div className="d-flex">
                    <h2>Cosmicstar Technologys</h2>
                    </div>
                    <div className="d-flex">
                    <Button>
                        Explore project <i class="bi bi-arrow-up-right"></i>
                    </Button>
                    </div>
                </Card.ImgOverlay>
                </Card>
            </Col>
            <Col lg={6} xs={6}>
                <Card className="bg-dark text-white">
                <Image
                    src={require("../../Images/Project/service4.png")}
                    style={{ position: "relative", height: "55vh" }}
                    fluid
                />
                <Card.ImgOverlay style={{ padding: "12rem 1rem 3rem 1rem" }}>
                    <div className="d-flex">
                    <h6>Website development</h6>
                    </div>
                    <div className="d-flex">
                    <h2>Cosmicstar Technologys</h2>
                    </div>
                    <div className="d-flex">
                    <Button>
                        Explore project <i class="bi bi-arrow-up-right"></i>
                    </Button>
                    </div>
                </Card.ImgOverlay>
                </Card>
            </Col>
            </Row>

            <Row className="pt-3">
            <Col lg={6} xs={6}>
                <Card className="bg-dark text-white">
                <Image
                    src={require("../../Images/Project/service5.png")}
                    style={{ position: "relative", height: "55vh" }}
                    fluid
                />
                <Card.ImgOverlay style={{ padding: "12rem 1rem 3rem 1rem" }}>
                    <div className="d-flex">
                    <h6>Website development</h6>
                    </div>
                    <div className="d-flex">
                    <h2>Cosmicstar Technologys</h2>
                    </div>
                    <div className="d-flex">
                    <Button>
                        Explore project <i class="bi bi-arrow-up-right"></i>
                    </Button>
                    </div>
                </Card.ImgOverlay>
                </Card>
            </Col>
            <Col lg={6} xs={6}>
                <Card className="bg-dark text-white">
                <Image
                    src={require("../../Images/Project/service6.png")}
                    style={{ position: "relative", height: "55vh" }}
                    fluid
                />
                <Card.ImgOverlay style={{ padding: "12rem 1rem 3rem 1rem" }}>
                    <div className="d-flex">
                    <h6>Website development</h6>
                    </div>
                    <div className="d-flex">
                    <h2>Cosmicstar Technologys</h2>
                    </div>
                    <div className="d-flex">
                    <Button>
                        Explore project <i class="bi bi-arrow-up-right"></i>
                    </Button>
                    </div>
                </Card.ImgOverlay>
                </Card>
            </Col>
            </Row>

            <Row className="pt-3">
            <Col lg={6} xs={6}>
                <Card className="bg-dark text-white">
                <Image
                    src={require("../../Images/Project/service7.png")}
                    style={{ position: "relative", height: "55vh" }}
                    fluid
                />
                <Card.ImgOverlay style={{ padding: "12rem 1rem 3rem 1rem" }}>
                    <div className="d-flex">
                    <h6>Website development</h6>
                    </div>
                    <div className="d-flex">
                    <h2>Cosmicstar Technologys</h2>
                    </div>
                    <div className="d-flex">
                    <Button>
                        Explore project <i class="bi bi-arrow-up-right"></i>
                    </Button>
                    </div>
                </Card.ImgOverlay>
                </Card>
            </Col>
            <Col lg={6} xs={6}>
                <Card className="bg-dark text-white">
                <Image
                    src={require("../../Images/Project/service8.png")}
                    style={{ position: "relative", height: "55vh" }}
                    fluid
                />
                <Card.ImgOverlay style={{ padding: "12rem 1rem 3rem 1rem" }}>
                    <div className="d-flex">
                    <h6>Website development</h6>
                    </div>
                    <div className="d-flex">
                    <h2>Cosmicstar Technologys</h2>
                    </div>
                    <div className="d-flex">
                    <Button>
                        Explore project <i class="bi bi-arrow-up-right"></i>
                    </Button>
                    </div>
                </Card.ImgOverlay>
                </Card>
            </Col>
            </Row>

            <Row className="pt-3">
            <Col lg={6} xs={6}>
                <Card className="bg-dark text-white">
                <Image
                    src={require("../../Images/Project/service9.png")}
                    style={{ position: "relative", height: "55vh" }}
                    fluid
                />
                <Card.ImgOverlay style={{ padding: "12rem 1rem 3rem 1rem" }}>
                    <div className="d-flex">
                    <h6>Website development</h6>
                    </div>
                    <div className="d-flex">
                    <h2>Cosmicstar Technologys</h2>
                    </div>
                    <div className="d-flex">
                    <Button>
                        Explore project <i class="bi bi-arrow-up-right"></i>
                    </Button>
                    </div>
                </Card.ImgOverlay>
                </Card>
            </Col>
            <Col lg={6} xs={6}>
                <Card className="bg-dark text-white">
                <Image
                    src={require("../../Images/Project/service10.png")}
                    style={{ position: "relative", height: "55vh" }}
                    fluid
                />
                <Card.ImgOverlay style={{ padding: "12rem 1rem 3rem 1rem" }}>
                    <div className="d-flex">
                    <h6>Website development</h6>
                    </div>
                    <div className="d-flex">
                    <h2>Cosmicstar Technologys</h2>
                    </div>
                    <div className="d-flex">
                    <Button>
                        Explore project <i class="bi bi-arrow-up-right"></i>
                    </Button>
                    </div>
                </Card.ImgOverlay>
                </Card>
            </Col>
            </Row>

            <Row className="pt-3">
            <Col lg={6} xs={6}>
                <Card className="bg-dark text-white">
                <Image
                    src={require("../../Images/Project/service11.png")}
                    style={{ position: "relative", height: "55vh" }}
                    fluid
                />
                <Card.ImgOverlay style={{ padding: "12rem 1rem 3rem 1rem" }}>
                    <div className="d-flex">
                    <h6>Website development</h6>
                    </div>
                    <div className="d-flex">
                    <h2>Cosmicstar Technologys</h2>
                    </div>
                    <div className="d-flex">
                    <Button>
                        Explore project <i class="bi bi-arrow-up-right"></i>
                    </Button>
                    </div>
                </Card.ImgOverlay>
                </Card>
            </Col>
            <Col lg={6} xs={6}>
                <Card className="bg-dark text-white">
                <Image
                    src={require("../../Images/Project/service12.png")}
                    style={{ position: "relative", height: "55vh" }}
                    fluid
                />
                <Card.ImgOverlay style={{ padding: "12rem 1rem 3rem 1rem" }}>
                    <div className="d-flex">
                    <h6>Website development</h6>
                    </div>
                    <div className="d-flex">
                    <h2>Cosmicstar Technologys</h2>
                    </div>
                    <div className="d-flex">
                    <Button>
                        Explore project <i class="bi bi-arrow-up-right"></i>
                    </Button>
                    </div>
                </Card.ImgOverlay>
                </Card>
            </Col>
            </Row>
        </Container>
        </section>
    </section>
  )
}

export default Maincontent
