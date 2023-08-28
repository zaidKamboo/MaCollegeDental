import React from "react"
import { Link } from "react-router-dom";

const HorizontalList = ({ items }) => {
    return (
        <ul className="horizontal-list sidenav">
            {items.map((item, index) => (
                <li key={index} className="horizontal-list-item sidenav">
                    <Link className="sidenavItem" to={`${item}` === "MUHS MANDATE" ? "/muhsMandate" : ""}>  {item}</Link>
                </li>
            ))}
        </ul>
    );
};

export default HorizontalList;