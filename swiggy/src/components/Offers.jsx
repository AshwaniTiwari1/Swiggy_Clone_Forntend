import React from 'react';
import "./Offerstyle.css";

import Offercard from './Basics/Offercard';





const Offers = () => {
    return (
        <>
            <div className='off'>
                <div className="jumbotron">

                    <div className="row">
                        <div className="col-sm-8">
                            <h1 className="_NpL9">Offers for you</h1>
                            <p className="_NpL10">Explore top deals and offers exclusively for you!</p>
                        </div>
                        <div className="col-sm-4">
                            <img className="per" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/KHu24Gqw_md3ham" />

                        </div>
                    </div>


                </div>
            </div>


            <div className="container-fluide">
                <div className="navbar2">
                    <div className="btn-group2">
                        <button className="btn-group__item2 btn-group__item--active">Restaurant offers</button>
                        <button className="btn-group__item2">Payment offers/Coupons</button>
                    </div>
                </div>
            </div>

            <div className="container-fluide butoff1">

                <h1 style={{Color: "black"}}>All offers (195)</h1>
                <p style={{Color: "black"}}>All offers and deals, from restaurants near you</p>

            </div>

       <Offercard/>

        </>
    )
}

export default Offers;

