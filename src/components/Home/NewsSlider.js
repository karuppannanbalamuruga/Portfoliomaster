import React, { useRef, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Slider from "react-slick";
import { Col, Container, Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
// import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Service.css";

const NewsSlider = () => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);
  
    useEffect(() => {
      setNav1(sliderRef1);
      setNav2(sliderRef2);
    }, []);
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

  return (
      <section className="pt-5 pb-5">
      <Container>
        <Row>
          <Col>
            <div>
              <p>Our Service</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={11} xs={10}>
            <div>
              <h2>We help brands drive growth through digital experiences</h2>
            </div>
          </Col>
          <Col lg={1} xs={1}>
            <div onClick={() => sliderRef2.current}>
              <a
                className="text-center"
                style={{
                  border: "1px solid black",
                  borderRadius: "40px",
                  color: "black",
                  padding: "5px 9px 5px 9px",
                  fontSize: "30px",
                }}
              >
                <i class="bi bi-arrow-right-short"></i>
              </a>
            </div>
          </Col>
        </Row>

        <Container>
        <Row>
          <Col>
            <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)}>
                <div className="p-1">
                <Card
                    className="bg-dark text-white"
                    style={{ borderRadius: "10px" }}
                >
                    <Image
                    src={require("../../Images/Home/service13.png")}
                    style={{ height: "50vh",position:'relative'}} fluid
                    />

                    <Card.ImgOverlay style={{ padding: "1rem 2rem 2rem 2rem" }}>
                    <Row>
                        <Col lg={11} xs={10}>
                            <h2 style={{bottom:'8px'}}>
                            New technologies<br></br>
                            with AI evolution
                            </h2>
                        <p style={{bottom:'8px'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Vestibulum gravida, sem vel iaculis ultrices, metus elit
                            rutrum massa, nec commodo risus erat id magna. Nam
                            mollis ut orci sit amet vestibulu
                        </p>
                        <Button variant="outline-light">
                            Read More <i class="bi bi-arrow-up-right"></i>
                        </Button>{" "}
                        </Col>
                        <Col lg={1} xs={1} className="text-end">
                        <a
                            href="#"
                            className="text-center fw-bold"
                            style={{
                            borderRadius: "25px",
                            color: "black",
                            backgroundColor: "white",
                            padding: "0.6rem 0.8rem 0.6rem 0.8rem",
                            fontSize:'20px'
                            }}
                        >
                            <i class="bi bi-share"></i>
                        </a>
                        </Col>
                    </Row>
                    </Card.ImgOverlay>
                </Card>
                </div>
                <div className="p-2">
                <Card
                    className="bg-dark text-white"
                    style={{ borderRadius: "10px" }}
                >
                    <img
                    src={require("../../Images/Home/service14.png")}
                    style={{ height: "50vh" }}
                    />

                    <Card.ImgOverlay style={{ padding: "1rem 2rem 2rem 2rem" }}>
                    <Row>
                        <Col lg={11} xs={10}>
                            <h2 style={{bottom:'8px'}}>
                            New technologies<br></br>
                            with AI evolution
                            </h2>
                        <p style={{bottom:'8px'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Vestibulum gravida, sem vel iaculis ultrices, metus elit
                            rutrum massa, nec commodo risus erat id magna. Nam
                            mollis ut orci sit amet vestibulu
                        </p>
                        <Button variant="outline-light">
                            Read More <i class="bi bi-arrow-up-right"></i>
                        </Button>{" "}
                        </Col>
                        <Col lg={1} xs={1} className="text-end">
                        <a
                            href="#"
                            className="text-center fw-bold"
                            style={{
                            borderRadius: "25px",
                            color: "black",
                            backgroundColor: "white",
                            padding: "0.6rem 0.8rem 0.6rem 0.8rem",
                            fontSize:'20px'
                            }}
                        >
                            <i class="bi bi-share"></i>
                        </a>
                        </Col>
                    </Row>
                    </Card.ImgOverlay>
                </Card>
                </div>
                <div className="p-2">
                <Card
                    className="bg-dark text-white"
                    style={{ borderRadius: "10px" }}
                >
                    <img
                    src={require("../../Images/Home/service15.png")}
                    style={{ height: "50vh" }}
                    />

                    <Card.ImgOverlay style={{ padding: "1rem 2rem 2rem 2rem" }}>
                    <Row>
                        <Col lg={11} xs={10}>
                            <h2 style={{bottom:'8px'}}>
                            New technologies<br></br>
                            with AI evolution
                            </h2>
                        <p style={{bottom:'8px'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Vestibulum gravida, sem vel iaculis ultrices, metus elit
                            rutrum massa, nec commodo risus erat id magna. Nam
                            mollis ut orci sit amet vestibulu
                        </p>
                        <Button variant="outline-light">
                            Read More <i class="bi bi-arrow-up-right"></i>
                        </Button>{" "}
                        </Col>
                        <Col lg={1} xs={1} className="text-end">
                        <a
                            href="#"
                            className="text-center fw-bold"
                            style={{
                            borderRadius: "25px",
                            color: "black",
                            backgroundColor: "white",
                            padding: "0.6rem 0.8rem 0.6rem 0.8rem",
                            fontSize:'20px'
                            }}
                        >
                            <i class="bi bi-share"></i>
                        </a>
                        </Col>
                    </Row>
                    </Card.ImgOverlay>
                </Card>
                </div>
                <div className="p-2">
                <Card
                    className="bg-dark text-white"
                    style={{ borderRadius: "10px" }}
                >
                    <img
                    src={require("../../Images/Home/service16.png")}
                    style={{ height: "50vh" }}
                    />

                    <Card.ImgOverlay style={{ padding: "1rem 2rem 2rem 2rem" }}>
                    <Row>
                        <Col lg={11} xs={10}>
                            <h2 style={{bottom:'8px'}}>
                            New technologies<br></br>
                            with AI evolution
                            </h2>
                        <p style={{bottom:'8px'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Vestibulum gravida, sem vel iaculis ultrices, metus elit
                            rutrum massa, nec commodo risus erat id magna. Nam
                            mollis ut orci sit amet vestibulu
                        </p>
                        <Button variant="outline-light">
                            Read More <i class="bi bi-arrow-up-right"></i>
                        </Button>{" "}
                        </Col>
                        <Col lg={1} xs={1} className="text-end">
                        <a
                            href="#"
                            className="text-center fw-bold"
                            style={{
                            borderRadius: "25px",
                            color: "black",
                            backgroundColor: "white",
                            padding: "0.6rem 0.8rem 0.6rem 0.8rem",
                            fontSize:'20px'
                            }}
                        >
                            <i class="bi bi-share"></i>
                        </a>
                        </Col>
                    </Row>
                    </Card.ImgOverlay>
                </Card>
                </div>
                <div className="p-1">
                <Card
                    className="bg-dark text-white"
                    style={{ borderRadius: "10px" }}
                >
                    <Image
                    src={require("../../Images/Home/service13.png")}
                    style={{ height: "50vh",position:'relative'}} fluid
                    />

                    <Card.ImgOverlay style={{ padding: "1rem 2rem 2rem 2rem" }}>
                    <Row>
                        <Col lg={11} xs={10}>
                            <h2 style={{bottom:'8px'}}>
                            New technologies<br></br>
                            with AI evolution
                            </h2>
                        <p style={{bottom:'8px'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Vestibulum gravida, sem vel iaculis ultrices, metus elit
                            rutrum massa, nec commodo risus erat id magna. Nam
                            mollis ut orci sit amet vestibulu
                        </p>
                        <Button variant="outline-light">
                            Read More <i class="bi bi-arrow-up-right"></i>
                        </Button>{" "}
                        </Col>
                        <Col lg={1} xs={1} className="text-end">
                        <a
                            href="#"
                            className="text-center fw-bold"
                            style={{
                            borderRadius: "25px",
                            color: "black",
                            backgroundColor: "white",
                            padding: "0.6rem 0.8rem 0.6rem 0.8rem",
                            fontSize:'20px'
                            }}
                        >
                            <i class="bi bi-share"></i>
                        </a>
                        </Col>
                    </Row>
                    </Card.ImgOverlay>
                </Card>
                </div>
                <div className="p-1">
                <Card
                    className="bg-dark text-white"
                    style={{ borderRadius: "10px" }}
                >
                    <Image
                    src={require("../../Images/Home/service14.png")}
                    style={{ height: "50vh",position:'relative'}} fluid
                    />

                    <Card.ImgOverlay style={{ padding: "1rem 2rem 2rem 2rem" }}>
                    <Row>
                        <Col lg={11} xs={10}>
                            <h2 style={{bottom:'8px'}}>
                            New technologies<br></br>
                            with AI evolution
                            </h2>
                        <p style={{bottom:'8px'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Vestibulum gravida, sem vel iaculis ultrices, metus elit
                            rutrum massa, nec commodo risus erat id magna. Nam
                            mollis ut orci sit amet vestibulu
                        </p>
                        <Button variant="outline-light">
                            Read More <i class="bi bi-arrow-up-right"></i>
                        </Button>{" "}
                        </Col>
                        <Col lg={1} xs={1} className="text-end">
                        <a
                            href="#"
                            className="text-center fw-bold"
                            style={{
                            borderRadius: "25px",
                            color: "black",
                            backgroundColor: "white",
                            padding: "0.6rem 0.8rem 0.6rem 0.8rem",
                            fontSize:'20px'
                            }}
                        >
                            <i class="bi bi-share"></i>
                        </a>
                        </Col>
                    </Row>
                    </Card.ImgOverlay>
                </Card>
                </div>
            </Slider>
            <Slider
                asNavFor={nav1}
                ref={slider => (sliderRef2 = slider)}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
                {...settings}
            >
                <div className="p-2">
                <Card className="bg-dark text-white">
                    <img
                    src={require("../../Images/Home/service13.png")}
                    style={{ height: "50vh" }}
                    />
                    <Card.ImgOverlay style={{ padding: "1rem 2rem 2rem 2rem" }}>
                    <Row>
                        <Col lg={10} xs={10}>
                            <h2 style={{bottom:'8px'}}>
                            New technologies<br></br>
                            with AI evolution
                            </h2>
                        <p style={{bottom:'8px'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Vestibulum gravida, sem vel iaculis ultrices, metus elit
                            rutrum massa, nec commodo risus erat id magna. Nam
                            mollis ut orci sit amet vestibulu
                        </p>
                        <Button variant="outline-light">
                            Read More <i class="bi bi-arrow-up-right"></i>
                        </Button>{" "}
                        </Col>
                        <Col lg={1} xs={1} className="text-end">
                        <a
                            href="#"
                            className="text-center fw-bold"
                            style={{
                            borderRadius: "25px",
                            color: "black",
                            backgroundColor: "white",
                            padding: "0.6rem 0.8rem 0.6rem 0.8rem",
                            fontSize:'20px'
                            }}
                        >
                            <i class="bi bi-share"></i>
                        </a>
                        </Col>
                    </Row>
                    </Card.ImgOverlay>
                </Card>
                </div>
                <div className="p-2">
                <Card className="bg-dark text-white">
                    <img
                    src={require("../../Images/Home/service14.png")}
                    style={{ height: "50vh" }}
                    />
                    <Card.ImgOverlay style={{ padding: "1rem 2rem 2rem 2rem" }}>
                    <Row>
                        <Col lg={10} xs={10}>
                            <h2 style={{bottom:'8px'}}>
                            New technologies<br></br>
                            with AI evolution
                            </h2>
                        <p style={{bottom:'8px'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Vestibulum gravida, sem vel iaculis ultrices, metus elit
                            rutrum massa, nec commodo risus erat id magna. Nam
                            mollis ut orci sit amet vestibulu
                        </p>
                        <Button variant="outline-light">
                            Read More <i class="bi bi-arrow-up-right"></i>
                        </Button>{" "}
                        </Col>
                        <Col lg={1} xs={1} className="text-end">
                        <a
                            href="#"
                            className="text-center fw-bold"
                            style={{
                            borderRadius: "25px",
                            color: "black",
                            backgroundColor: "white",
                            padding: "0.6rem 0.8rem 0.6rem 0.8rem",
                            fontSize:'20px'
                            }}
                        >
                            <i class="bi bi-share"></i>
                        </a>
                        </Col>
                    </Row>
                    </Card.ImgOverlay>
                </Card>
                </div>
                <div className="p-2">
                <Card className="bg-dark text-white">
                    <img
                    src={require("../../Images/Home/service15.png")}
                    style={{ height: "50vh" }}
                    />
                    <Card.ImgOverlay style={{ padding: "1rem 2rem 2rem 2rem" }}>
                    <Row>
                        <Col lg={10} xs={10}>
                            <h2 style={{bottom:'8px'}}>
                            New technologies<br></br>
                            with AI evolution
                            </h2>
                        <p style={{bottom:'8px'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Vestibulum gravida, sem vel iaculis ultrices, metus elit
                            rutrum massa, nec commodo risus erat id magna. Nam
                            mollis ut orci sit amet vestibulu
                        </p>
                        <Button variant="outline-light">
                            Read More <i class="bi bi-arrow-up-right"></i>
                        </Button>{" "}
                        </Col>
                        <Col lg={1} xs={1} className="text-end">
                        <a
                            href="#"
                            className="text-center fw-bold"
                            style={{
                            borderRadius: "25px",
                            color: "black",
                            backgroundColor: "white",
                            padding: "0.6rem 0.8rem 0.6rem 0.8rem",
                            fontSize:'20px'
                            }}
                        >
                            <i class="bi bi-share"></i>
                        </a>
                        </Col>
                    </Row>
                    </Card.ImgOverlay>
                </Card>
                </div>
                <div className="p-2">
                <Card className="bg-dark text-white">
                    <img
                    src={require("../../Images/Home/service16.png")}
                    style={{ height: "50vh" }}
                    />
                    <Card.ImgOverlay style={{ padding: "1rem 2rem 2rem 2rem" }}>
                    <Row>
                        <Col lg={10} xs={10}>
                            <h2 style={{bottom:'8px'}}>
                            New technologies<br></br>
                            with AI evolution
                            </h2>
                        <p style={{bottom:'8px'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Vestibulum gravida, sem vel iaculis ultrices, metus elit
                            rutrum massa, nec commodo risus erat id magna. Nam
                            mollis ut orci sit amet vestibulu
                        </p>
                        <Button variant="outline-light">
                            Read More <i class="bi bi-arrow-up-right"></i>
                        </Button>{" "}
                        </Col>
                        <Col lg={1} xs={1} className="text-end">
                        <a
                            href="#"
                            className="text-center fw-bold"
                            style={{
                            borderRadius: "25px",
                            color: "black",
                            backgroundColor: "white",
                            padding: "0.6rem 0.8rem 0.6rem 0.8rem",
                            fontSize:'20px'
                            }}
                        >
                            <i class="bi bi-share"></i>
                        </a>
                        </Col>
                    </Row>
                    </Card.ImgOverlay>
                </Card>
                </div>
                <div className="p-2">
                <Card className="bg-dark text-white">
                    <img
                    src={require("../../Images/Home/service13.png")}
                    style={{ height: "50vh" }}
                    />
                    <Card.ImgOverlay style={{ padding: "1rem 2rem 2rem 2rem" }}>
                    <Row>
                        <Col lg={10} xs={10}>
                            <h2 style={{bottom:'8px'}}>
                            New technologies<br></br>
                            with AI evolution
                            </h2>
                        <p style={{bottom:'8px'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Vestibulum gravida, sem vel iaculis ultrices, metus elit
                            rutrum massa, nec commodo risus erat id magna. Nam
                            mollis ut orci sit amet vestibulu
                        </p>
                        <Button variant="outline-light">
                            Read More <i class="bi bi-arrow-up-right"></i>
                        </Button>{" "}
                        </Col>
                        <Col lg={1} xs={1} className="text-end">
                        <a
                            href="#"
                            className="text-center fw-bold"
                            style={{
                            borderRadius: "25px",
                            color: "black",
                            backgroundColor: "white",
                            padding: "0.6rem 0.8rem 0.6rem 0.8rem",
                            fontSize:'20px'
                            }}
                        >
                            <i class="bi bi-share"></i>
                        </a>
                        </Col>
                    </Row>
                    </Card.ImgOverlay>
                </Card>
                </div>
                <div className="p-1">
                <Card className="bg-dark text-white">
                    <img
                    src={require("../../Images/Home/service14.png")}
                    style={{ height: "50vh" }}
                    />
                    <Card.ImgOverlay style={{ padding: "1rem 2rem 2rem 2rem" }}>
                    <Row>
                        <Col lg={10} xs={10}>
                            <h2 style={{bottom:'8px'}}>
                            New technologies<br></br>
                            with AI evolution
                            </h2>
                        <p style={{bottom:'8px'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Vestibulum gravida, sem vel iaculis ultrices, metus elit
                            rutrum massa, nec commodo risus erat id magna. Nam
                            mollis ut orci sit amet vestibulu
                        </p>
                        <Button variant="outline-light">
                            Read More <i class="bi bi-arrow-up-right"></i>
                        </Button>{" "}
                        </Col>
                        <Col lg={1} xs={1} className="text-end">
                        <a
                            href="#"
                            className="text-center fw-bold"
                            style={{
                            borderRadius: "25px",
                            color: "black",
                            backgroundColor: "white",
                            padding: "0.6rem 0.8rem 0.6rem 0.8rem",
                            fontSize:'20px'
                            }}
                        >
                            <i class="bi bi-share"></i>
                        </a>
                        </Col>
                    </Row>
                    </Card.ImgOverlay>
                </Card>
                </div>
            </Slider>
          </Col>
        </Row>
        </Container>
      </Container>
    </section>
  )
}

export default NewsSlider
