import React, { useState, useEffect } from 'react';;
const bulletPoints = [
    "Admission Open for 2023 - 24.List of Sanctioned MRP ProposalsBest College for admission.\n" +
    "Notification for College Minor Research Project(MRP)\n" +
    "Best College for admission\n" +
    "NOTICE : List off selected and apporved candidates - second round PHD (ENGLISH) 2022."
];

const InfiniteScrollingBullets = () => {
    const [scrollPos, setScrollPos] = useState( 0 );

    useEffect( () => {
        const scrollInterval = setInterval( () => {
            setScrollPos( scrollPos => ( scrollPos + 1 ) % bulletPoints.length );
        }, 2000 ); // Adjust the interval duration as needed

        return () => {
            clearInterval( scrollInterval );
        };
    }, [] );

    return (
        <div className="bullet-scroll-section mt-5">
            <ul className="bullet-list">
                {bulletPoints.map( ( point, index ) => (
                    <li key={index} className={index === scrollPos ? "active" : ""}>
                        {point}
                    </li>
                ) )}
            </ul>
        </div>
    );
};

export default InfiniteScrollingBullets;
