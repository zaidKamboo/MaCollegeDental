import React from 'react'
import Carousel from './Carousel'
import HorizontalList from './HorizontalList';

const Grid = () => {
    const itemList = ['MUHS MANDATE', 'LINK 2', 'LINK 3'];
    return (
        <div>
            <div class="">

                <div class="row">
                    <div className="container">

                    </div>
                    <div class="col-2 gridLeft">
                        <div className="">
                            <HorizontalList items={itemList} />
                        </div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam doloribus voluptatibus eligendi autem quis exercitationem molestias error ea at, cumque, nostrum eum. Nihil aliquid qui at commodi. Labore debitis voluptate voluptates laudantium quasi, id adipisci ullam laboriosam, expedita, reprehenderit sit! Dolorem impedit explicabo debitis fuga aspernatur praesentium dignissimos, odit nostrum, animi soluta id qui a pariatur,
                    </div>
                    <div class="col-8 gridMain">
                        <Carousel />
                    </div>
                    <div class="col-2 ">
                        <h6>News & Announcements</h6>
                        <div className="gridRight">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum est, quae corporis voluptate iste minus, repudiandae exercitationem, expedita debitis repellat vel eaque ullam dignissimos. Consectetur tenetur sed ex, dignissimos optio laborum consequuntur amet dolorem quidem, cupiditate placeat minus harum qui, similique blanditiis laudantium nisi id quo autem corrupti soluta. Cupiditate totam odit, corrupti id, dicta ad nihil animi illum sed nulla quidem quaerat asperiores.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Grid
