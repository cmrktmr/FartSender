import emailjs from 'emailjs-com';
import Form from 'react-bootstrap/Form'
import { Container, Col, Row, Button, Modal } from 'react-bootstrap'
import unicorn from "../unicorn.png"
import '../App.css';
import logo from "../logo.png"
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Sendmail() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    function Sendmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_wv5spx3', 'template_d4t36gu', e.target, 'user_B4cTJDHjDj4egW4vQIt5B')
            .then(() => {

                setShow({ show: true });
                e.target.reset();

            }, (error) => {
                console.log(error.text);
            });
    }

    return (

        <Container>
            <div className="d-flex justify-content-center mb-3">

                <img src={logo} className="logo " alt="fart sender logo" />
            </div>

            <Row>
                <Col lg={6} md={6} sm={12} xs={12}>
                    <img src={unicorn} className="unicorn" alt="fart sender" />
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                    <Form onSubmit={Sendmail}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control name="name" className="rounded-pill" placeholder="John Done" />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                            <Form.Label>Recived Fart Email address</Form.Label>
                            <Form.Control name="to_email" className="rounded-pill" type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Fart Message</Form.Label>
                            <Form.Control name="mesaj" className="rounded-4" as="textarea" rows={1} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Button type="submit" value="Send" className="btnSubmit">Send Fart</Button>
                        </Form.Group>
                        <h5 >Don't be shy we send farts to your friends for you!</h5>

                    </Form>
                </Col>
            </Row>


            <div className="footer" md={12} xs={12} >
                Made with ❤️ in quarantine
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Fart Status</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you fart sent successfully.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </Container>



    );
}