import React from "react";
import { FiCalendar } from "react-icons/fi";
import "./UpcomingExams.css";

const UpcomingExams: React.FC = () => {
    return (
        <section className="upcoming-wrapper">
            <div className="upcoming-left">
                <h2 className="upcoming-title">
                    Upcoming
                    <br />
                    Examinations
                </h2>
                <p className="upcoming-sub">
                    Enquire about the examination &amp;
                    <br />
                    register for the exams
                </p>
            </div>

            <div className="upcoming-divider" />

            <div className="upcoming-items">
                <div className="upcoming-item">
                    <div className="upcoming-icon">
                        <FiCalendar className="upcoming-icon-inner" />
                    </div>
                    <div className="upcoming-text">
                        <p className="upcoming-date">02th October 2014</p>
                        <p className="upcoming-level">Level 1 exam</p>
                    </div>
                </div>

                <div className="upcoming-item">
                    <div className="upcoming-icon">
                        <FiCalendar className="upcoming-icon-inner" />
                    </div>
                    <div className="upcoming-text">
                        <p className="upcoming-date">Nov–Dec 2016</p>
                        <p className="upcoming-level">Level 2</p>
                        <p className="upcoming-desc">Lorem Ipsum</p>
                        <p className="upcoming-desc">Lorem Ipsum</p>
                    </div>
                </div>

                <div className="upcoming-item">
                    <div className="upcoming-icon">
                        <FiCalendar className="upcoming-icon-inner" />
                    </div>
                    <div className="upcoming-text">
                        <p className="upcoming-date">Ongoing this year</p>
                        <p className="upcoming-level">Level 3 (Grad)</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpcomingExams;
