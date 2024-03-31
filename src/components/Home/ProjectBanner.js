import React, { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "react-bootstrap/Image";
import "./Service.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }

const ProjectBanner = () => {
    const setShow = useRef(null);
    console.log(setShow.current);
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 2.2,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  return (
    <section>
    <Container className="pb-5">
      <Row>
        <Col>
          <div>
            <p>Projects</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={11} xs={10}>
          <div>
            <h2>Our projects and case studies</h2>
          </div>
        </Col>
        <Col lg={1} xs={1}>
          <div onClick={() => setShow.current.slickNext()}>
            <a
              className="text-center"
              style={{
                border: "1px solid black",
                borderRadius: "40px",
                color: "black",
                padding: "4px 9px 4px 9px",
                fontSize: "30px",
              }}
            >
              <i class="bi bi-arrow-right-short"></i>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
    <Container fluid>
      <Row className="bg-dark">
        <Col>
          <Slider {...settings} ref={setShow}>
            <div className="p-2">
              <Card className="bg-dark text-white" style={{ width: "100%" }}>
                <Image
                  src={require("../../Images/Project/service1.png")}
                  style={{
                    position: "relative",
                    height: "55vh"
                  }}
                  fluid
                />
                <Card.ImgOverlay style={{ top: "220px", left: "20px" }}>
                  <div className="d-flex">
                    <h6>Website development</h6>
                  </div>
                  <div className="d-flex">
                    <h2>Cosmicstar Technologys</h2>
                  </div>
                  <div className="d-flex">
                    <a
                    href="#"
                    className="btn p-2"
                    style={{
                      borderRadius: "5px",
                      color: "white",
                      backgroundColor: "#3854BA",
                    }}
                  >
                    Explore project <i class="bi bi-arrow-up-right"></i>
                  </a>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </div>

            <div className="p-2">
              <Card className="bg-dark text-white">
                <Image
                  src={require("../../Images/Project/service2.png")}
                  style={{ height: "55vh" }}
                />
                <Card.ImgOverlay style={{ top: "220px", left: "20px" }}>
                  <div className="d-flex">
                    <h6>Website development</h6>
                  </div>
                  <div className="d-flex">
                    <h2>Cosmicstar Technologys</h2>
                  </div>
                  <div className="d-flex">
                  <a
                    href="#"
                    className="btn p-2"
                    style={{
                      borderRadius: "5px",
                      color: "white",
                      backgroundColor: "#3854BA",
                    }}
                  >
                    Explore project <i class="bi bi-arrow-up-right"></i>
                  </a>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </div>

            <div className="p-2">
              <Card className="bg-dark text-white">
                <Image
                  src={require("../../Images/Project/service3.png")}
                  style={{ height: "55vh" }}
                />
                <Card.ImgOverlay style={{ top: "220px", left: "20px" }}>
                  <div className="d-flex">
                    <h6>Website development</h6>
                  </div>
                  <div className="d-flex">
                    <h2>Cosmicstar Technologys</h2>
                  </div>
                  <div className="d-flex">
                  <a
                    href="#"
                    className="btn p-2"
                    style={{
                      borderRadius: "5px",
                      color: "white",
                      backgroundColor: "#3854BA",
                    }}
                  >
                    Explore project <i class="bi bi-arrow-up-right"></i>
                  </a>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </div>

            <div className="p-2">
              <Card className="bg-dark text-white">
                <Image
                  src={require("../../Images/Project/service4.png")}
                  style={{ height: "55vh" }}
                />
                <Card.ImgOverlay style={{ top: "220px", left: "20px" }}>
                  <div className="d-flex">
                    <h6>Website development</h6>
                  </div>
                  <div className="d-flex">
                    <h2>Cosmicstar Technologys</h2>
                  </div>
                  <div className="d-flex">
                  <a
                    href="#"
                    className="btn p-2"
                    style={{
                      borderRadius: "5px",
                      color: "white",
                      backgroundColor: "#3854BA",
                    }}
                  >
                    Explore project <i class="bi bi-arrow-up-right"></i>
                  </a>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </div>

            <div className="p-2">
              <Card className="bg-dark text-white">
                <Image
                  src={require("../../Images/Project/service5.png")}
                  style={{ height: "55vh" }}
                />
                <Card.ImgOverlay style={{ top: "220px", left: "20px" }}>
                  <div className="d-flex">
                    <h6>Website development</h6>
                  </div>
                  <div className="d-flex">
                    <h2>Cosmicstar Technologys</h2>
                  </div>
                  <div className="d-flex">
                  <a
                    href="#"
                    className="btn p-2"
                    style={{
                      borderRadius: "5px",
                      color: "white",
                      backgroundColor: "#3854BA",
                    }}
                  >
                    Explore project <i class="bi bi-arrow-up-right"></i>
                  </a>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </div>

            <div className="p-2">
              <Card className="bg-dark text-white">
                <Image
                  src={require("../../Images/Project/service6.png")}
                  style={{ height: "55vh" }}
                />
                <Card.ImgOverlay style={{ top: "220px", left: "20px" }}>
                  <div className="d-flex">
                    <h6>Website development</h6>
                  </div>
                  <div className="d-flex">
                    <h2>Cosmicstar Technologys</h2>
                  </div>
                  <div className="d-flex">
                  <a
                    href="#"
                    className="btn p-2"
                    style={{
                      borderRadius: "5px",
                      color: "white",
                      backgroundColor: "#3854BA",
                    }}
                  >
                    Explore project <i class="bi bi-arrow-up-right"></i>
                  </a>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </div>

            <div className="p-2">
              <Card className="bg-dark text-white">
                <Image
                  src={require("../../Images/Project/service7.png")}
                  style={{ height: "55vh" }}
                />
                <Card.ImgOverlay style={{ top: "220px", left: "20px" }}>
                  <div className="d-flex">
                    <h6>Website development</h6>
                  </div>
                  <div className="d-flex">
                    <h2>Cosmicstar Technologys</h2>
                  </div>
                  <div className="d-flex">
                  <a
                    href="#"
                    className="btn p-2"
                    style={{
                      borderRadius: "5px",
                      color: "white",
                      backgroundColor: "#3854BA",
                    }}
                  >
                    Explore project <i class="bi bi-arrow-up-right"></i>
                  </a>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </div>

            <div className="p-2">
              <Card className="bg-dark text-white">
                <Image
                  src={require("../../Images/Project/service8.png")}
                  style={{ height: "55vh" }}
                />
                <Card.ImgOverlay style={{ top: "220px", left: "20px" }}>
                  <div className="d-flex">
                    <h6>Website development</h6>
                  </div>
                  <div className="d-flex">
                    <h2>Cosmicstar Technologys</h2>
                  </div>
                  <div className="d-flex">
                  <a
                    href="#"
                    className="btn p-2"
                    style={{
                      borderRadius: "5px",
                      color: "white",
                      backgroundColor: "#3854BA",
                    }}
                  >
                    Explore project <i class="bi bi-arrow-up-right"></i>
                  </a>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </div>

            <div className="p-2">
              <Card className="bg-dark text-white">
                <Image
                  src={require("../../Images/Project/service9.png")}
                  style={{ height: "55vh" }}
                />
                <Card.ImgOverlay style={{ top: "220px", left: "20px" }}>
                  <div className="d-flex">
                    <h6>Website development</h6>
                  </div>
                  <div className="d-flex">
                    <h2>Cosmicstar Technologys</h2>
                  </div>
                  <div className="d-flex">
                  <a
                    href="#"
                    className="btn p-2"
                    style={{
                      borderRadius: "5px",
                      color: "white",
                      backgroundColor: "#3854BA",
                    }}
                  >
                    Explore project <i class="bi bi-arrow-up-right"></i>
                  </a>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </div>

            <div className="p-2">
              <Card className="bg-dark text-white">
                <Image
                  src={require("../../Images/Project/service10.png")}
                  style={{ height: "55vh" }}
                />
                <Card.ImgOverlay style={{ top: "220px", left: "20px" }}>
                  <div className="d-flex">
                    <h6>Website development</h6>
                  </div>
                  <div className="d-flex">
                    <h2>Cosmicstar Technologys</h2>
                  </div>
                  <div className="d-flex">
                  <a
                    href="#"
                    className="btn p-2"
                    style={{
                      borderRadius: "5px",
                      color: "white",
                      backgroundColor: "#3854BA",
                    }}
                  >
                    Explore project <i class="bi bi-arrow-up-right"></i>
                  </a>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </div>

            <div className="p-2">
              <Card className="bg-dark text-white">
                <Image
                  src={require("../../Images/Project/service11.png")}
                  style={{ height: "55vh" }}
                />
                <Card.ImgOverlay style={{ top: "220px", left: "20px" }}>
                  <div className="d-flex">
                    <h6>Website development</h6>
                  </div>
                  <div className="d-flex">
                    <h2>Cosmicstar Technologys</h2>
                  </div>
                  <div className="d-flex">
                    <a
                    href="#"
                    className="btn p-2"
                    style={{
                      borderRadius: "5px",
                      color: "white",
                      backgroundColor: "#3854BA",
                    }}
                  >
                    Explore project <i class="bi bi-arrow-up-right"></i>
                  </a>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </div>

            <div className="p-2">
              <Card className="bg-dark text-white ">
                <Image
                  src={require("../../Images/Project/service12.png")}
                  style={{ height: "55vh" }}
                />
                <Card.ImgOverlay style={{ top: "220px", left: "20px" }}>
                  <div className="d-flex">
                    <h6>Website development</h6>
                  </div>
                  <div className="d-flex">
                    <h2>Cosmicstar Technologys</h2>
                  </div>
                  <div className="d-flex">
                    <Button style={{backgroundColor: "#3854BA"}}>
                      Explore project <i class="bi bi-arrow-up-right"></i>
                    </Button>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </div>
          </Slider>
        </Col>
      </Row>
    </Container>
  </section>
  )
}

export default ProjectBanner
