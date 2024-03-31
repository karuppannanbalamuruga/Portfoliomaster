import React from 'react'
import { Col, Container, Row } from "react-bootstrap";


const Footercomponent = () => {
  return (
    <div>
      <Container fluid>
        <Row className="justify-content-center align-items-center">
          <Col lg={11}>
            <Row>
                <Col lg={3} className="pb-5">
                  <img src={require("../../Images/Home/footer.png")} width={300} height={62} />
                </Col>
            </Row>
            <Row>
                <Col lg={7}>
                  <Row className="pb-4">
                    <Col lg={1} xs={2}>
                      <div
                        href="#"
                        className="text-center"
                        style={{
                          width:'58px',
                          height:'58px',
                          borderRadius: "40px",
                          color: "white",
                          backgroundColor: "#3854BA",
                          fontSize:'20px'
                        }}
                      >
                      <div>
                        <img src={require("../../Images/Home/instagram.png")} width={27} height={27} style={{marginTop:'15px'}} />
                      </div>
                      </div>
                    </Col>
                    <Col lg={1} xs={2}>
                      <div
                        href="#"
                        className="text-center"
                        style={{
                          width:'58px',
                          height:'58px',
                          borderRadius: "40px",
                          color: "white",
                          backgroundColor: "#3854BA",
                          fontSize:'20px'
                        }}
                      >
                      <img src={require("../../Images/Home/facebook.png")} width={27} height={27} style={{marginTop:'15px'}} />
                      </div>
                    </Col>
                    <Col lg={1} xs={2}>
                      <div
                        href="#"
                        className="text-center"
                        style={{
                          width:'58px',
                          height:'58px',
                          borderRadius: "40px",
                          color: "white",
                          backgroundColor: "#3854BA",
                          fontSize:'20px'
                        }}
                      >
                      <img src={require("../../Images/Home/Vector.png")} width={27} height={27} style={{marginTop:'15px'}} />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <p style={{fontSize:'22px'}}>
                      92/2, Narayana Nagar 2nd Block,<br></br>
                      Doddakallasandra,Konanakunte, <br></br>
                      Bengaluru, Karnataka 560062
                    </p>
                  </Row>
                </Col>
                <Col lg={5}>
                  <Row >
                    <Col lg={6} xs={6}>
                      <div style={{fontSize:'22px'}}>
                      <h3 className="pb-3"><u>Redirect to</u></h3>
                      <p>Home</p>
                      <p>Project</p>
                      <p>Academy</p>
                      </div>
                      
                    </Col>
                    <Col lg={6} xs={6}>
                    <div style={{fontSize:'22px'}}>
                      <h3 className="pb-3"><u>Helpfull links</u></h3>
                      <p>Support</p>
                      <p>Privacy Policy</p>
                      <p>Terms & Conditions</p>
                    </div>  
                    </Col>
                  </Row>
                </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <hr></hr>
        <Row>
          <Col>
            <p className="text-center">© 2023 UNDERWINGS TECHNOLOGY PVT LTD</p>
          </Col>
        </Row>
    </div>
  )
}

export default Footercomponent
