import React from "react";
import "./style.css";

const MenuCard = ({ menuData }) => {
  //   console.log(menuData);

  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const { id, name, category, image, description } = curElem;

          return (
            <>
              <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                  <img src={image} alt="images" className="card-media" />
                    {/* <span className="card-number card-circle subtle">{id}</span> */}
                    {/* <span className="card-author subtle"> {category}</span> */}
                    <h2 className="card-title"> {name} </h2>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <p className="b">⭐-- • 30+MINS • ₹250+FORTWO</p>
                    <p className="c">60% off | Use TRYNEW</p>
                    <span className="card-tag  subtle">Order Now</span>
                  </div>
                  

                  
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;