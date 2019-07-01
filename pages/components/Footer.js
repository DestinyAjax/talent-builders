import React from "react";
import Link from "next/link";
import { TBLogo, Instagram, Fb, Twitter, LinkdIn } from "../../reuse/svg";
import "../../scss/footer.scss";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
export const Footer = () => (
    <div className="footer">
        <Accordion>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    <h5>featured courses</h5>
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="0">
                    <Card.Body className="d-flx-c">
                        <Link>
                            <a>Pressing laptop</a>
                        </Link>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                    <h5>membership</h5>
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="1">
                    <Card.Body className="d-flx-c">
                        <Link>
                            <a>Pressing laptop</a>
                        </Link>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                    <h5>About us</h5>
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="2">
                    <Card.Body className="d-flx-c">
                        <Link>
                            <a>Pressing laptop</a>
                        </Link>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                    <h5>support</h5>
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="3">
                    <Card.Body className="d-flx-c">
                        <Link>
                            <a>Pressing laptop</a>
                        </Link>
                        <Link>
                            <a>Pressing laptop</a>
                        </Link>
                        <Link>
                            <a>Pressing laptop</a>
                        </Link>
                        <Link>
                            <a>Pressing laptop</a>
                        </Link>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
        <div className="top  al-i-c">
            <div className="columns d-flx-c">
                <h5>featured courses</h5>
                <Link>
                    <a>Pressing laptop</a>
                </Link>
                <Link>
                    <a>Pressing laptop</a>
                </Link>
                <Link>
                    <a>Pressing laptop</a>
                </Link>
                <Link>
                    <a>Pressing laptop</a>
                </Link>
            </div>
            <div className="columns d-flx-c">
                <h5>membership</h5>
                <Link>
                    <a>Pressing laptop</a>
                </Link>
                <Link>
                    <a>Pressing laptop</a>
                </Link>
                <Link>
                    <a>Pressing laptop</a>
                </Link>
                <Link>
                    <a>Pressing laptop</a>
                </Link>
            </div>
            <div className="columns d-flx-c">
                <h5>company</h5>
                <Link>
                    <a>Pressing laptop</a>
                </Link>
                <Link>
                    <a>Pressing laptop</a>
                </Link>
                <Link>
                    <a>Pressing laptop</a>
                </Link>
                <Link>
                    <a>Pressing laptop</a>
                </Link>
            </div>
            <div className="columns d-flx-c">
                <h5>support</h5>
                <Link>
                    <a>Pressing laptop</a>
                </Link>
                <Link>
                    <a>Pressing laptop</a>
                </Link>
                <Link>
                    <a>Pressing laptop</a>
                </Link>
                <Link>
                    <a>Pressing laptop</a>
                </Link>
            </div>
            <div className="columns d-flx-c">
                <h5>Social</h5>
                <div className="d-flx j-c-sb al-i-c">
                    <Link>
                        <Instagram />
                    </Link>
                    <Link>
                        <Fb />
                    </Link>
                    <Link>
                        <Twitter />
                    </Link>
                    <Link>
                        <LinkdIn />
                    </Link>
                </div>
            </div>
        </div>
        <div className="bottom d-flx j-c-sb al-i-c">
            <div className="columns d-flx-c">
                <span className="d-flx al-i-c">
                    <TBLogo />
                    TalentBuilder
                </span>
            </div>

            <div className="columns d-flx-c">
                <h5>legal</h5>
                <p>Terms of Use</p>
                <p>Privacy Policy</p>
            </div>
            <div className="columns d-flx-c">
                <Link>
                    <a className="pri-btn">Contact Us</a>
                </Link>
            </div>
        </div>
    </div>
);
