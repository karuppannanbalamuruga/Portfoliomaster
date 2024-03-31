import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import emailjs from 'emailjs-com';
import Image from "react-bootstrap/Image";
import InputGroup from "react-bootstrap/InputGroup";
import Swal from 'sweetalert2'
import { useState,useRef } from 'react';

const Maincontent = () => {

    const [validated, setValidated] = useState();

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
     const form = useRef();
    
     const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_bww2pvw','template_388t6bz',form.current,'RxCngKsHzJhXqC8wj')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text)
      })
     };
     const handleClick = () => {
      Swal.fire({
        text: "Succesfully sent",
      });
     }


  return (
       <section style={{backgroundColor:'#3854BA1A'}} className="pb-5">
      <Container fluid>
        <Row className="justify-content-center align-items-center">
          <Col lg={11}>
            <Row>
              <Col lg={7}>
                <Image
                  src={require("../../Images/Home/contact.png")}
                  style={{ position: "relative", height: "100vh" }}
                  fluid={true}
                />
              </Col>
              <Col lg={5} style={{ paddingTop: "10rem" }}>
                <Row className="justify-content-center align-items-center">
                  <Col lg={9}>
                    <h1>Contact us</h1>
                    <p>
                      Free fell to contact us any time.We will get<br></br>
                      back to you as soon as we can!
                    </p>
                    <Form
                      noValidate
                      validated={validated}
                      ref={form}
                      onSubmit={sendEmail}
                      onClick={handleSubmit}
                    >
                      <Form.Group className="pb-4"  controlId="validationCustomUsername">
                        <InputGroup hasValidation>
                          <Form.Control
                          style={{backgroundColor:'#3854BA1A',border:'1px solid grey'}}
                          className="p-2"
                            type="text"
                            placeholder="Full name"
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Please choose a username.
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>
                      <Form.Group className="pb-4" controlId="formGroupEmail">
                        <Form.Control
                        style={{backgroundColor:'#3854BA1A',border:'1px solid grey'}}
                        className="p-2"
                          type="email"
                          placeholder="Enter your email-id"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please choose a username.
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="pb-4" controlId="validationCustomtext">
                        <Form.Control
                        style={{backgroundColor:'#3854BA1A',border:'1px solid grey'}}
                        className="p-2"
                          type="text"
                          placeholder="Description about your service"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please choose a username.
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Button style={{padding:'0.5rem 9.7rem 0.5rem 9.8rem',backgroundColor: "#3854BA"}} type="submit" onClick={handleClick}>Send Request</Button>
                     
                    </Form>
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

export default Maincontent
