import React from 'react'
import Carousel from './Carousel'
import HorizontalList from './HorizontalList';
import AutoScrollText from './AutoScrollText';

const Grid = () => {
    const itemList = ['MUHS MANDATE', 'LINK 2', 'LINK 3'];
    return (
        <div>
            <div className="">

                <div className="row">
                    <div className="container">

                    </div>
                    <div className="col-2 gridLeft">
                        <div className="">
                            <HorizontalList items={itemList} />
                        </div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam doloribus voluptatibus eligendi autem quis exercitationem molestias error ea at, cumque, nostrum eum. Nihil aliquid qui at commodi. Labore debitis voluptate voluptates laudantium quasi, id adipisci ullam laboriosam, expedita, reprehenderit sit! Dolorem impedit explicabo debitis fuga aspernatur praesentium dignissimos, odit nostrum, animi soluta id qui a pariatur,
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
            </div>
        </div>
    )
}

export default Grid
