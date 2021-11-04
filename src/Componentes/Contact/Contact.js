import react from "react"
import "./Contact.css"
import Aside from '../Nav/Nav'
import {Button,Form} from "react-bootstrap"
import phonecall from "../images/phone-call.png"
import checked from "../images/SPOILER_checked.png"
import location from '../images/location.png'
import email from "../images/email.png"
export default function Contact() {

    return (
        <div className="row">
            <div className="col-md-3">
                <Aside />
            </div>


            <div className="Map d-flex">
            <div className="Contactt col-md-6">
                
                    <h2 className="Conatct ">Contact</h2>
                    <hr className="hr" />
                    <p className="getintouch">Get in touch</p>
                    <div className="section-form ">
                        <Form>
                            <h4 className="titrefrom">How Can I Help You</h4>
                            <hr className="blueligne" />
                            <Form.Group className=" Input mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="email" placeholder="Full Name" />
                            </Form.Group>
                            <Form.Group className="Input mb-3" controlId="exampleForm.ControlInput1" required>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="entre your email" />
                            </Form.Group>
                            <Form.Group className="Input mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control type="email" placeholder="type somethings" />
                            </Form.Group>
                            <Form.Group className=" Input mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Your Message</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button className="button" type="submit" >
                                Send Message
            </Button>
                        </Form>
                    </div>
                </div>
                    <div className=" map col-md-5">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d25530.537173475554!2d10.190861624853515!3d36.88276056345948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2stn!4v1635775906592!5m2!1sfr!2stn"  style={{width:"600px",height:"450px"}} allowfullscreen="" loading="lazy"></iframe>
                    

                    </div>
               
              
            
            </div>

        </div>
    )







}