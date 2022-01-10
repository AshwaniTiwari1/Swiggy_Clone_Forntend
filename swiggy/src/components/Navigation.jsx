import React from "react";
import { NavLink } from "react-router-dom";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './all.css';

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand fixed-top navbar-white bg-white">
        <div className="container">
          <NavLink className="navbar-brand" to="/home">
            <img className="logos" src="../images/swiggy.svg" alt="" />
            <span className="sr-only">(current)</span>
            {/* React Multi-Page Website */}
          </NavLink>
          <NavLink className="" to="/home">
            <i className='fa fa-caret-down'></i>
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto ">
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">
                  <i className='fa fa-search'></i> Search

                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/offers">
                  <img
                    src='./images/percentage.svg'
                    alt='percentage'
                    width='20px'
                    style={{
                      marginBottom: '5px',
                    }}
                  />{' '}
                  Offer

                </NavLink>
              </li>


              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  <i className='fa fa-support'></i> Help
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/home">
                  <i className="fa fa-user-plus" aria-hidden="true"></i> Sign in
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/home">
                 <i className='fa fa-cart-plus'></i> Cart
                </NavLink>
              </li>



              
              
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;