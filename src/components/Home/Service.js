import React, { useRef } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Slider from "react-slick";
import { Col, Container, Row } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Service.css";
import 'bootstrap-icons/font/bootstrap-icons.css';


const ServicesData =[
    {
      id: 1,
      title: 'Web - Development',
      description: 'diam sit amet, efficitur eros.Sed consectetur dapibus ornare. Suspendisse id tempor nisl. Curabitur at massa dui. Praesent lobortis, dui et convallis tincidunt,ipsum diam molestie magna',
      button:'Know more'
  
    },
    {
      id: 2,
      title: 'UI/UX Designing',
      description: 'diam sit amet, efficitur eros.Sed consectetur dapibus ornare. Suspendisse id tempor nisl. Curabitur at massa dui. Praesent lobortis, dui et convallis tincidunt,ipsum diam molestie magna',
      button:'Know more'
  
    },
    {
      id: 3,
      title: 'Mobile-App Development',
      description: 'diam sit amet, efficitur eros.Sed consectetur dapibus ornare. Suspendisse id tempor nisl. Curabitur at massa dui. Praesent lobortis, dui et convallis tincidunt,ipsum diam molestie magna',
      button:'Know more'
  
    },
    {
      id: 4,
      title: 'Graphical Designing',
      description: 'diam sit amet, efficitur eros.Sed consectetur dapibus ornare. Suspendisse id tempor nisl. Curabitur at massa dui. Praesent lobortis, dui et convallis tincidunt,ipsum diam molestie magna',
      button:'Know more'
  
    },
    {
      id: 5,
      title: 'Web - Development',
      description: 'diam sit amet, efficitur eros.Sed consectetur dapibus ornare. Suspendisse id tempor nisl. Curabitur at massa dui. Praesent lobortis, dui et convallis tincidunt,ipsum diam molestie magna',
      button:'Know more'
  
    },
    {
      id: 6,
      title: 'UI/UX Designing',
      description: 'diam sit amet, efficitur eros.Sed consectetur dapibus ornare. Suspendisse id tempor nisl. Curabitur at massa dui. Praesent lobortis, dui et convallis tincidunt,ipsum diam molestie magna',
      button:'Know more'
  
    },
    {
      id: 7,
      title: 'Mobile-App Development',
      description: 'diam sit amet, efficitur eros.Sed consectetur dapibus ornare. Suspendisse id tempor nisl. Curabitur at massa dui. Praesent lobortis, dui et convallis tincidunt,ipsum diam molestie magna',
      button:'Know more'
  
    },
    {
      id: 8,
      title: 'Graphical Designing',
      description: 'diam sit amet, efficitur eros.Sed consectetur dapibus ornare. Suspendisse id tempor nisl. Curabitur at massa dui. Praesent lobortis, dui et convallis tincidunt,ipsum diam molestie magna',
      button:'Know more'
  
    },
    {
      id: 9,
      title: 'Web - Development',
      description: 'diam sit amet, efficitur eros.Sed consectetur dapibus ornare. Suspendisse id tempor nisl. Curabitur at massa dui. Praesent lobortis, dui et convallis tincidunt,ipsum diam molestie magna',
      button:'Know more'
  
    },
    {
      id: 10,
      title: 'UI/UX Designing',
      description: 'diam sit amet, efficitur eros.Sed consectetur dapibus ornare. Suspendisse id tempor nisl. Curabitur at massa dui. Praesent lobortis, dui et convallis tincidunt,ipsum diam molestie magna',
      button:'Know more'
  
    },
    {
      id: 11,
      title: 'Mobile-App Development',
      description: 'diam sit amet, efficitur eros.Sed consectetur dapibus ornare. Suspendisse id tempor nisl. Curabitur at massa dui. Praesent lobortis, dui et convallis tincidunt,ipsum diam molestie magna',
      button:'Know more'
  
    },
    {
      id: 12,
      title: 'Graphical Designing',
      description: 'diam sit amet, efficitur eros.Sed consectetur dapibus ornare. Suspendisse id tempor nisl. Curabitur at massa dui. Praesent lobortis, dui et convallis tincidunt,ipsum diam molestie magna',
      button:'Know more'
  
    },
  ]

const Service = () => {
    const setShow = useRef(null);
    console.log(setShow.current);
    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };
  return (
    <section>
    <Container>
      <Row>
        <Col>
          <div>
            <p>Our Service</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={11} xs={10}>
          <div>
            <h2>We help brands drive growth through digital experiences</h2>
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
      
      <Container>
      <Row className="pt-4">
        <Col>
        <div>
        <Slider {...settings} ref={setShow}>
        
          <div>
            <Row>
              <Col lg={6}>
                <Card
                  className="p-4 shadow p-3 mb-5 rounded"
                  style={{ border: "white" }}
                >
                  <Card.Body>
                    <Card.Title>
                      <h5 className="fw-bold pb-3">Web - Development</h5>
                    </Card.Title>
                    <Card.Text>
                      diam sit amet, efficitur eros.Sed consectetur dapibus
                      ornare. Suspendisse id tempor nisl. Curabitur at massa
                      dui. Praesent lobortis, dui et convallis tincidunt,
                      ipsum diam molestie magna,
                    </Card.Text>
                    <Button
                    className="Know"
                      style={{
                        border: "3px solid #3854BA",
                      }}
                      variant=""
                    >
                      Know more
                    </Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={6}>
                <Card
                  className="p-4 shadow p-3 mb-5 rounded"
                  style={{ border: "white" }}
                >
                  <Card.Body>
                    <Card.Title>
                      <h5 className="fw-bold pb-3">UI/UX Designing</h5>
                    </Card.Title>
                    <Card.Text>
                      diam sit amet, efficitur eros.Sed consectetur dapibus
                      ornare. Suspendisse id tempor nisl. Curabitur at massa
                      dui. Praesent lobortis, dui et convallis tincidunt,
                      ipsum diam molestie magna,
                    </Card.Text>
                    <Button
                      className="Know"
                      style={{
                        border: "3px solid #3854BA",
                      }}
                      variant=""
                    >
                      Know more
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                <Card
                  className="p-4 shadow p-3 mb-5 rounded"
                  style={{ border: "white" }}
                >
                  <Card.Body>
                    <Card.Title>
                      <h5 className="fw-bold pb-3">Mobile-App Development</h5>
                    </Card.Title>
                    <Card.Text>
                      diam sit amet, efficitur eros.Sed consectetur dapibus
                      ornare. Suspendisse id tempor nisl. Curabitur at massa
                      dui. Praesent lobortis, dui et convallis tincidunt,
                      ipsum diam molestie magna,
                    </Card.Text>
                    <Button
                      className="Know"
                      style={{
                        border: "3px solid #3854BA",
                      }}
                      variant=""
                    >
                      Know more
                    </Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={6}>
                <Card
                  className="p-4 shadow p-3 mb-5 rounded"
                  style={{ border: "white" }}
                >
                  <Card.Body>
                    <Card.Title>
                      <h5 className="fw-bold pb-3">Graphical Designing</h5>
                    </Card.Title>
                    <Card.Text>
                      diam sit amet, efficitur eros.Sed consectetur dapibus
                      ornare. Suspendisse id tempor nisl. Curabitur at massa
                      dui. Praesent lobortis, dui et convallis tincidunt,
                      ipsum diam molestie magna,
                    </Card.Text>
                    <Button
                      className="Know"
                      style={{
                        border: "3px solid #3854BA",
                      }}
                      variant=""
                    >
                      Know more
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>


          <div>
            <Row>
              <Col lg={6}>
                <Card
                  className="p-4 shadow p-3 mb-5 rounded"
                  style={{ border: "white" }}
                >
                  <Card.Body>
                    <Card.Title>
                      <h5 className="fw-bold pb-3">Web - Development</h5>
                    </Card.Title>
                    <Card.Text>
                      diam sit amet, efficitur eros.Sed consectetur dapibus
                      ornare. Suspendisse id tempor nisl. Curabitur at massa
                      dui. Praesent lobortis, dui et convallis tincidunt,
                      ipsum diam molestie magna,
                    </Card.Text>
                    <Button
                      className="Know"
                      style={{
                        border: "3px solid #3854BA",
                      }}
                      variant=""
                    >
                      Know more
                    </Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={6}>
                <Card
                  className="p-4 shadow p-3 mb-5 rounded"
                  style={{ border: "white" }}
                >
                  <Card.Body>
                    <Card.Title>
                      <h5 className="fw-bold pb-3">UI/UX Designing</h5>
                    </Card.Title>
                    <Card.Text>
                      diam sit amet, efficitur eros.Sed consectetur dapibus
                      ornare. Suspendisse id tempor nisl. Curabitur at massa
                      dui. Praesent lobortis, dui et convallis tincidunt,
                      ipsum diam molestie magna,
                    </Card.Text>
                    <Button
                      className="Know"
                      style={{
                        border: "3px solid #3854BA",
                      }}
                      variant=""
                    >
                      Know more
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                <Card
                  className="p-4 shadow p-3 mb-5 rounded"
                  style={{ border: "white" }}
                >
                  <Card.Body>
                    <Card.Title>
                      <h5 className="fw-bold pb-3">Mobile-App Development</h5>
                    </Card.Title>
                    <Card.Text>
                      diam sit amet, efficitur eros.Sed consectetur dapibus
                      ornare. Suspendisse id tempor nisl. Curabitur at massa
                      dui. Praesent lobortis, dui et convallis tincidunt,
                      ipsum diam molestie magna,
                    </Card.Text>
                    <Button
                      className="Know"
                      style={{
                        border: "3px solid #3854BA",
                      }}
                      variant=""
                    >
                      Know more
                    </Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={6}>
                <Card
                  className="p-4 shadow p-3 mb-5 rounded"
                  style={{ border: "white" }}
                >
                  <Card.Body>
                    <Card.Title>
                      <h5 className="fw-bold pb-3">Graphical Designing</h5>
                    </Card.Title>
                    <Card.Text>
                      diam sit amet, efficitur eros.Sed consectetur dapibus
                      ornare. Suspendisse id tempor nisl. Curabitur at massa
                      dui. Praesent lobortis, dui et convallis tincidunt,
                      ipsum diam molestie magna,
                    </Card.Text>
                    <Button
                      className="Know"
                      style={{
                        border: "3px solid #3854BA",
                      }}
                      variant=""
                    >
                      Know more
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>

          <div>
            <Row>
              <Col lg={6}>
                <Card
                  className="p-4 shadow p-3 mb-5 rounded"
                  style={{ border: "white" }}
                >
                  <Card.Body>
                    <Card.Title>
                      <h5 className="fw-bold pb-3">Web - Development</h5>
                    </Card.Title>
                    <Card.Text>
                      diam sit amet, efficitur eros.Sed consectetur dapibus
                      ornare. Suspendisse id tempor nisl. Curabitur at massa
                      dui. Praesent lobortis, dui et convallis tincidunt,
                      ipsum diam molestie magna,
                    </Card.Text>
                    <Button
                      className="Know"
                      style={{
                        border: "3px solid #3854BA",
                      }}
                      variant=""
                    >
                      Know more
                    </Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={6}>
                <Card
                  className="p-4 shadow p-3 mb-5 rounded"
                  style={{ border: "white" }}
                >
                  <Card.Body>
                    <Card.Title>
                      <h5 className="fw-bold pb-3">UI/UX Designing</h5>
                    </Card.Title>
                    <Card.Text>
                      diam sit amet, efficitur eros.Sed consectetur dapibus
                      ornare. Suspendisse id tempor nisl. Curabitur at massa
                      dui. Praesent lobortis, dui et convallis tincidunt,
                      ipsum diam molestie magna,
                    </Card.Text>
                    <Button
                      className="Know"
                      style={{
                        border: "3px solid #3854BA",
                      }}
                      variant=""
                    >
                      Know more
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                <Card
                  className="p-4 shadow p-3 mb-5 rounded"
                  style={{ border: "white" }}
                >
                  <Card.Body>
                    <Card.Title>
                      <h5 className="fw-bold pb-3">Mobile-App Development</h5>
                    </Card.Title>
                    <Card.Text>
                      diam sit amet, efficitur eros.Sed consectetur dapibus
                      ornare. Suspendisse id tempor nisl. Curabitur at massa
                      dui. Praesent lobortis, dui et convallis tincidunt,
                      ipsum diam molestie magna,
                    </Card.Text>
                    <Button
                      className="Know"
                      style={{
                        border: "3px solid #3854BA",
                      }}
                      variant=""
                    >
                      Know more
                    </Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={6}>
                <Card
                  className="p-4 shadow p-3 mb-5 rounded"
                  style={{ border: "white" }}
                >
                  <Card.Body>
                    <Card.Title>
                      <h5 className="fw-bold pb-3">Graphical Designing</h5>
                    </Card.Title>
                    <Card.Text>
                      diam sit amet, efficitur eros.Sed consectetur dapibus
                      ornare. Suspendisse id tempor nisl. Curabitur at massa
                      dui. Praesent lobortis, dui et convallis tincidunt,
                      ipsum diam molestie magna,
                    </Card.Text>
                    <Button
                      className="Know"
                      style={{
                        border: "3px solid #3854BA",
                      }}
                      variant=""
                    >
                      Know more
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>


        </Slider>
        </div>
        </Col>
      </Row>
    </Container>  
    </Container>
  </section>
  )
}

export default Service
