import React from 'react'
import Carousel from './Carousel'
import HorizontalList from './HorizontalList';

const Grid = () => {
    const itemList = ['MUHS MANDATE', "abv", "cpd"];
    return (
        <div>
            <div class="">

                <div class="row">
                    <div className="container">

                    </div>
                    <div class="col-2 gridLeft">
                        <div className="sidenav">
                            <HorizontalList items={itemList} />
                        </div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam doloribus voluptatibus eligendi autem quis exercitationem molestias error ea at, cumque, nostrum eum. Nihil aliquid qui at commodi. Labore debitis voluptate voluptates laudantium quasi, id adipisci ullam laboriosam, expedita, reprehenderit sit! Dolorem impedit explicabo debitis fuga aspernatur praesentium dignissimos, odit nostrum, animi soluta id qui a pariatur, quis modi quae! Nesciunt autem officiis molestias fugit dignissimos! Exercitationem culpa facilis laboriosam iusto necessitatibus ab illo? Voluptatem facilis nisi excepturi error itaque soluta est, nostrum esse eos, alias molestiae eum quam rem, porro rerum earum. Corrupti consectetur exercitationem sequi debitis, corporis ducimus est asperiores nam deserunt quod nisi qui doloremque aperiam nihil eum illum soluta consequuntur, quam voluptas et! Repudiandae nulla magni cumque assumenda aut.
                    </div>
                    <div class="col-8 gridMain">
                        <Carousel />
                    </div>
                    <div class="col-2 ">
                        <h6>News & Announcements</h6>
                        <div className="gridRight">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum est, quae corporis voluptate iste minus, repudiandae exercitationem, expedita debitis repellat vel eaque ullam dignissimos. Consectetur tenetur sed ex, dignissimos optio laborum consequuntur amet dolorem quidem, cupiditate placeat minus harum qui, similique blanditiis laudantium nisi id quo autem corrupti soluta. Cupiditate totam odit, corrupti id, dicta ad nihil animi illum sed nulla quidem quaerat asperiores officiis voluptate. Consequatur, recusandae facere nostrum amet architecto provident ratione aliquid impedit maiores ducimus, deleniti in consectetur. Quaerat illo sit fugit atque, aliquam fuga ab eos nostrum distinctio facere aperiam nihil vel quidem, reiciendis possimus tenetur repudiandae inventore! Expedita commodi praesentium, neque beatae non aliquid. Minima nobis officiis ipsa ipsam dolorum voluptate praesentium nam repellendus, ab laborum fuga iste.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Grid
