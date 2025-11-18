import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaYoutube, FaQuora } from "react-icons/fa";
import { MdLocationOn, MdDirectionsBus } from "react-icons/md";
import "./Footer.css";

const Footer: React.FC = () => {
    return (
        <footer className="footer">

            <div className="footer-container">
                <div className="globe-bg"></div>
                <div className="footer-center">

                    <div className="footer-section">
                        <h3>Contact us</h3>
                        <p>Address: amet, consetetur sadipscing elitr, sed diam</p>
                        <p>Email id: eirmod tempor invidunt ut labore et dolore</p>
                        <p>Phone no: 123456789</p>
                    </div>

                    <div className="footer-section follow-section">
                        <h3>Follow us</h3>
                        <div className="social-icons">
                            <FaFacebookF />
                            <FaLinkedinIn />
                            <FaInstagram />
                            <FaTwitter />
                            <FaYoutube />
                            <FaQuora />
                        </div>
                    </div>

                    <div className="footer-section">
                        <h3>Head Office</h3>

                        <div className="office-item">
                            <MdLocationOn className="office-icon" />
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
                        </div>
                        <div className="office-item">
                            <MdLocationOn className="office-icon" />
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
                        </div>
                        <div className="office-item">
                            <MdLocationOn className="office-icon" />
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
                        </div>
                        <div className="office-item">
                            <MdDirectionsBus className="office-icon" />
                            <p>Lorem ipsum asd asdsaweeq Lorem Ipsum</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                © 2021 All Rights Reserved. Privacy Policy
            </div>
        </footer>
    );
};

export default Footer;
