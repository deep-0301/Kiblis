import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CardData from "./CardData";

function Cards() {
  return (
    <>
      <div className="container card-title w-25">
        <h1 className="div-title ">Lets Help You Get Your Dream Home</h1>
        <p className="'title-info text-center">
          With over 500+ housing scattered across Nigeria
        </p>
      </div>
      <div className="row card-div align-self-center mx-5 my-5">
        {CardData.map((vaule, index) => (
          <div className="col-md-4 card" key={index}>
            <img class="card-img-top" src={vaule.photo} alt="Card image cap" />
            <div class="card-body">
              <div className="title">
                <h5 class="card-title d-inline mx-0">{vaule.title}</h5>
                <h5 className="card-title d-inline mx-3 px-5">
                  {vaule.number}
                </h5>
              </div>
              <p class="card-text my-0">{vaule.location}</p>
              <p class="card-text ">{vaule.area}</p>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
                a maecenas.
              </p>
              <div className="button-div text-center">
                <button className="button-card">More Details</button>
              </div>
            </div>
          </div>
        ))}

        <div className="button-div text-center my-5">
          <button className="button-view">View More</button>
        </div>
      </div>
    </>
  );
}

export default Cards;
