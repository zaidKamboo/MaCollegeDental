import React from "react"
import { Link } from "react-router-dom";

const HorizontalList = ({ items }) => {
    return (
        <ul className="horizontal-list ">

            {items.map((item, index) => (
                <li key={index} className="horizontal-list-item sideNavDiv">
                    <div >
                        <Link className="sidenavItem" to={`${item}` === "MUHS MANDATE" ? "/muhsMandate" : ""}>  {item}</Link>

                    </div>
                </li>
            ))}
        </ul>
    );
};

export default HorizontalList;