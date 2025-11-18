import bg from "../../assets/Group 9196@2x.png";
import "./CardsSection.css";
import { IoIosArrowDroprightCircle } from "react-icons/io";

interface CardItem {
    title: string;
    description: string;
    link?: string;
}

export default function CardsSection() {
    const cardData: CardItem[] = [
        {
            title: "Lorem ipsum",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
        },
        {
            title: "Lorem ipsum",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
        },
        {
            title: "Lorem ipsum",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
        },
        {
            title: "Lorem ipsum",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
        }
    ];

    return (
        <div className="container">
            {cardData.map((card, index) => (
                <div key={index} className="card" style={{ backgroundImage: `url(${bg})` }}>
                    <h3 className="title">{card.title}</h3>
                    <p className="desc">{card.description}</p>

                    <a href={card.link ?? "#"} className="knowMore">
                        Know More <IoIosArrowDroprightCircle className="arrow" />
                    </a>
                </div>
            ))}
        </div>
    );
}
