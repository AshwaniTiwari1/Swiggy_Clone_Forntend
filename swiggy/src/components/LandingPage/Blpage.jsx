import React from 'react'
import "./lp.css";

const Blpage = () => {
  return (

    <>
      <div className="atc" >
        <div className="container-fluide">
          <div className="row">
            <div className="col-sm-6">
              <div className="row">
                <div className="col-sm-7">
                  <img className="logo" src='https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/1200px-Swiggy_logo.svg.png' alt='logo'/>
                </div >
                <div className="col-sm-5 btn">
                  <button className="btn1">Login</button>
                  <button className="btn2">Signin</button>

                </div>
              </div>

           
              <div className="rotaionpart">
                <h1>Unexpected guests?</h1>
                <p className="pra">Order food from favourite restaurants near you.</p>
              </div>
            


              <div className="sear">

                <input className="in" type="text" placeholder="Enter your delivery location" />

                <input className="spbt" type="button" value="FIND OUT" />
              </div>

              <div className="main_city">
                <p className="ci">POPULAR CITIES IN INDIA</p>
                <p className="city_name">
                  <span>Ahmedabad</span>
                  <span className="ci">Bangalore</span>
                  <span>Chennai</span>
                  <span className="ci">Delhi</span>
                  <span>Gurgaon</span>
                  <span className="ci">Hyderabad</span>
                  <span>Kolkata</span><br/>
                    <span className="ci">MumbaiPune& more.</span>
                </p>



              </div>


            </div>


            <div className="col-sm-6">
              <img className="side_img" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq"/>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}


export default Blpage
