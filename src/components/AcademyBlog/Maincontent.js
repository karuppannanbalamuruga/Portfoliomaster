import React from 'react'
import { Col, Container, Row } from "react-bootstrap";

const Maincontent = () => {
  return (
    <section>
      <Container>
          <Row className='pb-5'>
              <Col lg={9}>
              <p>Our Service</p>
              <h1>We help brands drive growth through
              digital experiences</h1>
              </Col>
              <Col lg={3}>
              <h2 style={{ color: "#ECEEF9",fontSize:'95px' }}>BLOGS</h2>
              </Col>
          </Row>
          <div>
          </div>
      </Container>
      <section style={{background: '#3854BA1A'}}>
          <Container>
          <Row className='pt-5'>
                  <Col lg={11} xs={9}>
                  <h1>
                      New technologies with AI evolution
                  </h1>
                  <p className='pt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida, sem vel iaculis ultrices, metus <br></br>
                  elit rutrum massa, nec commodo risus erat id magna. Nam mollis ut orci sit amet vestibulu</p>
                  </Col>
                  <Col lg={1} xs={1}>
                  <div style={{margin:'-4rem 0rem 0rem 2rem'}}>
                  <a
                      href="#"
                      className="text-center fw-bold shadow"
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
                  </div>
                  </Col>
              </Row>
              <Row>
                  <Col className='pt-2'>
                  <img src={require('../../Images/AcadamyBlog/service17.png')} style={{position:'relative',height:'100vh'}} fluid/>
                  </Col>
              </Row>
              <Row>
                  <Col className='pt-3'>
                  <p>Etiam mauris mauris, elementum vel mauris vel, ornare auctor mauris. Nulla convallis ullamcorper consequat. Maecenas gravida, sem eu bibendum luctus, erat massa dapibus nunc, vitae hendrerit tellus felis eu magna. In iaculis justo sapien, vel tempus elit porta a. Vivamus laoreet metus sit amet diam venenatis dignissim. Duis magna metus, fringilla nec tellus ut, tristique porta justo. Mauris elementum, ipsum quis lacinia pretium, justo ante sodales ligula, vel dictum tellus leo ut quam. Sed feugiat tellus eu metus maximus tempus. Aliquam fringilla eu sem eu pellentesque. Vivamus at lacinia purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam elementum egestas. Donec posuere justo sit amet enim rhoncus, in ornare ipsum rutrum.</p>
                  </Col>
              </Row>
              <Row>
                  <Col className='pt-3'>
                  <img src={require('../../Images/AcadamyBlog/service18.png')} style={{position:'relative',height:'100vh'}} fluid/>
                  </Col>
              </Row>
              <Row>
                  <Col className='pt-3'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempus sodales urna, ut vulputate nunc tempor et. Fusce vitae urna elementum, sagittis sapien ut, cursus est. Sed malesuada metus eu bibendum dapibus. Mauris blandit, tortor vel volutpat aliquet, metus nisi mollis dui, vel mattis orci diam nec nibh. Donec sed massa id libero ultrices tristique nec eu leo. Praesent ut felis et ante molestie dictum. Sed ornare, felis vel elementum pharetra, tellus orci porta magna, non blandit lorem sapien in tortor. Aenean volutpat ex et sodales tempus. Nunc gravida, odio ac semper ultricies, mi nisl porta lectus, ut semper enim neque a lacus. Morbi risus lorem, posuere nec nunc eu, rutrum accumsan risus. Nunc varius, magna a fringilla rutrum, ipsum orci tempus diam, aliquet sodales arcu leo quis est.
  Vestibulum sit amet dolor vitae felis pulvinar aliquam. Aliquam varius a urna eu ornare. Aliquam erat volutpat. Quisque nec odio feugiat, hendrerit purus ac, tempor sem. Morbi nec elit tellus. Integer non urna imperdiet, ultrices quam id, finibus nulla. Ut eget ipsum congue, scelerisque diam sit amet, efficitur eros.
  Sed consectetur dapibus ornare. Suspendisse id tempor nisl. Curabitur at massa dui. Praesent lobortis, dui et convallis tincidunt, ipsum diam molestie magna, eu tincidunt ligula urna et dui. Aliquam sit amet porta libero. Duis et efficitur massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vehicula dapibus diam quis porttitor. Donec ex tellus, vulputate non mi ut, fringilla lobortis ipsum. Suspendisse faucibus odio nec elementum rutrum.</p>
                  </Col>
              </Row>
              <Row>
                  <Col className='pb-4'>
                  <p><i class="bi bi-clock"></i> 1 day ago | Author : Underwings</p>
                  </Col>
              </Row>
          </Container>
      </section>
    </section>
  )
}

export default Maincontent;
