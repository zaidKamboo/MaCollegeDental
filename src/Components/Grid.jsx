import React from 'react'
import Carousel from './Carousel'
import HorizontalList from './HorizontalList';
import AutoScrollText from './AutoScrollText';

const Grid = () => {
    const itemList = ['MUHS MANDATE', 'LINK 2', 'LINK 3'];
    return (
        <div className="row">
            <div className="container">
            </div>
            <div className="col-2 gridLeft">
                <div className="">
                    <HorizontalList items={itemList} />
                </div>
                Lorem ipsum
            </div>
            <div className="col-8 gridMain">
                <Carousel />
            </div>
            <div className="col-2 ">
                <h5>NEWS & ANNOUNCEMENTS</h5>
                <div className="gridRight">
                    <AutoScrollText />
                </div>
            </div>
        </div>
    )
}

export default Grid
