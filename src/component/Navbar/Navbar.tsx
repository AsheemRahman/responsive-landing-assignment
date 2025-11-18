import React from "react";
import "./Navbar.css";
import { FiSearch, FiChevronDown } from "react-icons/fi";

const Navbar: React.FC = () => {
    return (
        <header className="nav">
            <div className="nav-logo">LOGO</div>

            <nav className="nav-links">
                <button className="nav-link">
                    Qualifications <FiChevronDown />
                </button>
                <button className="nav-link">
                    Organizations <FiChevronDown />
                </button>
                <button className="nav-link">
                    Research &amp; Analysis <FiChevronDown />
                </button>
                <button className="nav-link">
                    Lorem ipsum <FiChevronDown />
                </button>
                <button className="nav-link">
                    Lorem ipsum <FiChevronDown />
                </button>
            </nav>

            <div className="nav-right">
                <button className="nav-icon-btn" aria-label="Search">
                    <FiSearch />
                </button>

                <button className="nav-enrol-btn">
                    Enrolment
                </button>
            </div>
        </header>
    );
};

export default Navbar;
