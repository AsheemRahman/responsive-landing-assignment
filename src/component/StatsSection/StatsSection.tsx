import React from "react";
import "./StatsSection.css";

interface StatCardProps {
    title: string;
    value: string;
    subtitle: string;
    text: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, subtitle, text }) => {
    return (
        <div className="stat-card">
            <h4 className="stat-title">{title}</h4>
            <div className="stat-value">{value}</div>
            <h5 className="stat-subtitle">{subtitle}</h5>
            <p className="stat-text">{text}</p>
        </div>
    );
};

const StatsSection: React.FC = () => {
    return (
        <div className="stats-container">
            <StatCard title="Lorem ipsum" value="123+" subtitle="Lorem ipsum"
                text="Lorem ipsum dolor sit amet,  consectetur sadipscing elitr, sed diam  nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
            />

            <StatCard title="Lorem ipsum" value="12+" subtitle="Lorem ipsum"
                text="Lorem ipsum dolor sit amet,  consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et"
            />

            <StatCard  title="Lorem ipsum"  value="12+" subtitle="Lorem ipsum"
                text="Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam  nonumy eirmod tempor invidunt ut  labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et"
            />

            <StatCard title="Lorem ipsum" value="123" subtitle="Lorem ipsum"
                text="Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut"
            />
        </div>
    );
};

export default StatsSection;
