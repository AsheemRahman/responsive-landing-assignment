import React from "react";
import "./SubscribeSection.css";
import phoneIllustration from "../../assets/phoneIllustration.svg";
import { MdPlayArrow } from "react-icons/md";


const SubscribeSection: React.FC = () => {
    return (
        <section className="subscribe-wrapper">
            <div className="subscribe-left">
                <h2 className="subscribe-title">Subscribe</h2>
                <p className="subscribe-text">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna.
                </p>

                <div className="subscribe-form">
                    <input type="email" placeholder="Enter your Email Address" className="subscribe-input" />
                    <button className="subscribe-btn">
                        Subscribe Now <MdPlayArrow size={14} />
                    </button>
                </div>
            </div>

            <div className="subscribe-right">
                <img src={phoneIllustration} alt="subscribe" className="subscribe-img" />
            </div>
        </section>
    );
};

export default SubscribeSection;