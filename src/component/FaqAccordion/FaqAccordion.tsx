import { useState } from "react";
import "./FaqAccordion.css";

interface FaqItem {
    question: string;
    answer: string;
}

const faqData: FaqItem[] = [
    {
        question: "How does an investor gain access to MF Utility?",
        answer: "Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
        question: "Will investors be able to have multiple Common Account Numbers?",
        answer: "Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
        question: "How does an investor gain access to MF Utility?",
        answer: "Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
];

export default function FaqAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>();

    const toggle = (i: number) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    return (
        <div className="faq-container">
            <h1 className="faq-title">FAQ</h1>
            {faqData.map((item, i) => (
                <div key={i} className="faq-item">
                    <button className="faq-question" onClick={() => toggle(i)}>
                        <span>{item.question}</span>
                        <div className={`faq-icon ${openIndex === i ? "open" : ""}`}>
                            {openIndex === i ? "–" : "+"}
                        </div>
                    </button>
                    {openIndex === i && (
                        <div className="faq-answer">
                            {item.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
