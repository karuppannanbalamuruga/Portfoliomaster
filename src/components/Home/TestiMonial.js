import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "react-bootstrap/Image";
import { Col, Container, Row } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const TestiMonial = () => {
    const setShow = useRef(null);
    console.log(setShow.current);
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 2.3,
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
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
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
    <section className="pt-5">
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
            <h2>Testimonial</h2>
            <p>
              diam sit amet, efficitur eros.Sed consectetur dapibus ornare.
              Suspendisse id tempor nisl. Curabitur at massa dui. Praesent
              lobortis, dui et convallis tincidunt, ipsum diam molestie magna,
            </p>
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
                padding: "5px 9px 5px 9px",
                fontSize: "30px",
              }}
            >
              <i class="bi bi-arrow-right-short"></i>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
    <section>
      <Container fluid>
        <Row>
          <Col>
            <Slider
              {...settings}
              ref={setShow}
              style={{ padding: "2rem 0rem 2rem 0rem" }}
            >
              <div className="p-4" style={{ marginLeft: "10rem" }}>
                <Row
                  style={{ borderRadius: "30rem" }}
                  className="shadow bg-body-tertiary"
                >
                  <Col lg={4}>
                    <div className="p-2">
                      <Image src={require("../../Images/Home/Review1.png")} />
                    </div>
                  </Col>
                  <Col lg={7}>
                    <div className="px-3">
                      <h3>Avanthika Muthuvel</h3>
                      <p>CityGate</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Quisque tempus sodales urna, ut vulputate nunc
                        tempor et. Fusce vitae urna elementum,
                      </p>
                      <p style={{ color: "yellow" }}>
                        <i class="bi bi-star-fill"></i>{" "}
                        <i class="bi bi-star-fill"></i>{" "}
                        <i class="bi bi-star-fill"></i>{" "}
                        <i class="bi bi-star-fill"></i>{" "}
                        <i class="bi bi-star-fill"></i>
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="p-4">
                <Row
                  style={{ borderRadius: "30rem" }}
                  className="shadow bg-body-tertiary"
                >
                  <Col lg={4}>
                    <div className="p-2">
                      <Image src={require("../../Images/Home/Review2.png")} />
                    </div>
                  </Col>
                  <Col lg={7}>
                    <div className="px-3">
                      <h3>Avanthika Muthuvel</h3>
                      <p>CityGate</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Quisque tempus sodales urna, ut vulputate nunc
                        tempor et. Fusce vitae urna elementum,
                      </p>
                      <p style={{ color: "yellow" }}>
                        <i class="bi bi-star-fill"></i>{" "}
                        <i class="bi bi-star-fill"></i>{" "}
                        <i class="bi bi-star-fill"></i>{" "}
                        <i class="bi bi-star-fill"></i>{" "}
                        <i class="bi bi-star-fill"></i>
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="p-4">
                <Row
                  style={{ borderRadius: "30rem" }}
                  className="shadow bg-body-tertiary"
                >
                  <Col lg={4}>
                    <div className="p-2">
                      <Image src={require("../../Images/Home/Review3.png")} />
                    </div>
                  </Col>
                  <Col lg={7}>
                    <div className="px-3">
                      <h3>Avanthika Muthuvel</h3>
                      <p>CityGate</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Quisque tempus sodales urna, ut vulputate nunc
                        tempor et. Fusce vitae urna elementum,
                      </p>
                      <p style={{ color: "yellow" }}>
                        <i class="bi bi-star-fill"></i>{" "}
                        <i class="bi bi-star-fill"></i>{" "}
                        <i class="bi bi-star-fill"></i>{" "}
                        <i class="bi bi-star-fill"></i>{" "}
                        <i class="bi bi-star-fill"></i>
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="p-4">
                <Row
                  style={{ borderRadius: "30rem" }}
                  className="shadow bg-body-tertiary"
                >
                  <Col lg={4}>
                    <div className="p-3">
                      <Image src={require("../../Images/Home/Review11.png")} />
                    </div>
                  </Col>
                  <Col lg={7}>
                    <div className="px-2">
                      <h3>Avanthika Muthuvel</h3>
                      <p>CityGate</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Quisque tempus sodales urna, ut vulputate nunc
                        tempor et. Fusce vitae urna elementum,
                      </p>
                      <p style={{ color: "yellow" }}>
                        <i class="bi bi-star-fill"></i>{" "}
                        <i class="bi bi-star-fill"></i>{" "}
                        <i class="bi bi-star-fill"></i>{" "}
                        <i class="bi bi-star-fill"></i>{" "}
                        <i class="bi bi-star-fill"></i>
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Slider>

            <Slider {...settings} ref={setShow}>
              <div className="p-4" style={{ marginLeft: "10rem" }}>
                <Row
                  style={{ borderRadius: "30rem" }}
                  className="shadow bg-body-tertiary"
                >
                  <Col lg={4}>
                    <div className="p-2">
                      <Image src={require("../../Images/Home/Review10.png")} />
                    </div>
                  </Col>
                  <Col lg={7}>
                    <div className="px-2">
                      <h3>Avanthika Muthuvel</h3>
                      <p>CityGate</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Quisque tempus sodales urna, ut vulputate nunc
                        tempor et. Fusce vitae urna elementum,
                      </p>
                      <p style={{ color: "yellow" }}>
                        <i class="bi bi-star-fill"></i>{" "}
                        <i class="bi bi-star-fill"></i>{" "}
                        <i class="bi bi-star-fill"></i>{" "}
                        <i class="bi bi-star-fill"></i>{" "}
                        <i class="bi bi-star-fill"></i>
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="p-4">
                <Row
                  style={{ borderRadius: "30rem" }}
                  className="shadow bg-body-tertiary"
                >
                  <Col lg={4}>
                    <div className="p-2">
                      <Image src={require("../../Images/Home/Review6.png")} />
                    </div>
                  </Col>
                  <Col lg={7}>
                    <div className="px-2">
                      <h3>Avanthika Muthuvel</h3>
                      <p>CityGate</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Quisque tempus sodales urna, ut vulputate nunc
                        tempor et. Fusce vitae urna elementum,
                      </p>
                      <p style={{ color: "yellow" }}>
                        <i class="bi bi-star-fill"></i>{" "}
                        <i class="bi bi-star-fill"></i>{" "}
                        <i class="bi bi-star-fill"></i>{" "}
                        <i class="bi bi-star-fill"></i>{" "}
                        <i class="bi bi-star-fill"></i>
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="p-4">
                <Row
                  style={{ borderRadius: "30rem" }}
                  className="shadow bg-body-tertiary"
                >
                  <Col lg={4}>
                    <div className="p-2">
                      <Image src={require("../../Images/Home/Review7.png")} />
                    </div>
                  </Col>
                  <Col lg={7}>
                    <div className="px-2">
                      <h3>Avanthika Muthuvel</h3>
                      <p>CityGate</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Quisque tempus sodales urna, ut vulputate nunc
                        tempor et. Fusce vitae urna elementum,
                      </p>
                      <p style={{ color: "yellow" }}>
                        <i class="bi bi-star-fill"></i>{" "}
                        <i class="bi bi-star-fill"></i>{" "}
                        <i class="bi bi-star-fill"></i>{" "}
                        <i class="bi bi-star-fill"></i>{" "}
                        <i class="bi bi-star-fill"></i>
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="p-4">
                <Row
                  style={{ borderRadius: "30rem" }}
                  className="shadow bg-body-tertiary"
                >
                  <Col lg={4}>
                    <div className="p-2">
                      <Image src={require("../../Images/Home/Review2.png")} />
                    </div>
                  </Col>
                  <Col lg={7}>
                    <div className="px-2">
                      <h3>Avanthika Muthuvel</h3>
                      <p>CityGate</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Quisque tempus sodales urna, ut vulputate nunc
                        tempor et. Fusce vitae urna elementum,
                      </p>
                      <p style={{ color: "yellow" }}>
                        <i class="bi bi-star-fill"></i>{" "}
                        <i class="bi bi-star-fill"></i>{" "}
                        <i class="bi bi-star-fill"></i>{" "}
                        <i class="bi bi-star-fill"></i>{" "}
                        <i class="bi bi-star-fill"></i>
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Slider>

            <Slider
              {...settings}
              ref={setShow}
              style={{ padding: "2rem 0rem 2rem 0rem" }}
            >
              <div className="p-4" style={{ marginLeft: "10rem" }}>
                <Row
                  style={{ borderRadius: "30rem" }}
                  className="shadow bg-body-tertiary"
                >
                  <Col lg={4}>
                    <div className="p-2">
                      <Image src={require("../../Images/Home/Review9.png")} />
                    </div>
                  </Col>
                  <Col lg={7}>
                    <div className="px-3">
                      <h3>Avanthika Muthuvel</h3>
                      <p>CityGate</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Quisque tempus sodales urna, ut vulputate nunc
                        tempor et. Fusce vitae urna elementum,
                      </p>
                      <p style={{ color: "yellow" }}>
                        <i class="bi bi-star-fill"></i>{" "}
                        <i class="bi bi-star-fill"></i>{" "}
                        <i class="bi bi-star-fill"></i>{" "}
                        <i class="bi bi-star-fill"></i>{" "}
                        <i class="bi bi-star-fill"></i>
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="p-4">
                <Row
                  style={{ borderRadius: "30rem" }}
                  className="shadow bg-body-tertiary"
                >
                  <Col lg={4}>
                    <div className="p-2">
                      <Image src={require("../../Images/Home/Review10.png")} />
                    </div>
                  </Col>
                  <Col lg={7}>
                    <div className="px-3">
                      <h3>Avanthika Muthuvel</h3>
                      <p>CityGate</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Quisque tempus sodales urna, ut vulputate nunc
                        tempor et. Fusce vitae urna elementum,
                      </p>
                      <p style={{ color: "yellow" }}>
                        <i class="bi bi-star-fill"></i>{" "}
                        <i class="bi bi-star-fill"></i>{" "}
                        <i class="bi bi-star-fill"></i>{" "}
                        <i class="bi bi-star-fill"></i>{" "}
                        <i class="bi bi-star-fill"></i>
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="p-4">
                <Row
                  style={{ borderRadius: "30rem" }}
                  className="shadow bg-body-tertiary"
                >
                  <Col lg={4}>
                    <div className="p-2">
                      <Image src={require("../../Images/Home/Review11.png")} />
                    </div>
                  </Col>
                  <Col lg={7}>
                    <div className="px-3">
                      <h3>Avanthika Muthuvel</h3>
                      <p>CityGate</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Quisque tempus sodales urna, ut vulputate nunc
                        tempor et. Fusce vitae urna elementum,
                      </p>
                      <p style={{ color: "yellow" }}>
                        <i class="bi bi-star-fill"></i>{" "}
                        <i class="bi bi-star-fill"></i>{" "}
                        <i class="bi bi-star-fill"></i>{" "}
                        <i class="bi bi-star-fill"></i>{" "}
                        <i class="bi bi-star-fill"></i>
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
    </section>
  )
}

export default TestiMonial
