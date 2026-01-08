import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const ContactForm = () => {
    return (
        <>
            <div className="contact-form">
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridFullName">
                            <Form.Control
                                type="text"
                                placeholder="Full Name"
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Control
                                type="email"
                                placeholder="email"
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridPhoneNumber">
                            <Form.Control
                                type="tel"
                                placeholder="Phone Number"
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridCompanyName">
                            <Form.Control
                                type="text"
                                placeholder="Company Name"
                            />
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3" controlId="formGroupInquiry">
                        <Form.Control type="text" placeholder="Inquiry Type" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} placeholder="Message"/>
                    </Form.Group>

                    <Button className="common-btn" type="submit">
                        Send Inquiry
                    </Button>
                </Form>
            </div>
        </>
    );
};
export default ContactForm;
