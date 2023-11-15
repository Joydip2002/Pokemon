import React from "react";
import "./Style.css";
const Pokemon_details = ({ detailsData }) => {
  return (
    <div>
      {detailsData == "" ? (
        <div>
          <h4 className=" ">Here Show more details...</h4>
        </div>
      ) : (
        <div className="ima-fluid col-md-12 shadow-lg rounded-3 mt-5">
          <h4 className="text-center text-capitalize">{detailsData.name}</h4>
          <div className="text-center">
            {" "}
            <img
              src={detailsData.sprites.front_default}
              height="20%"
              width="20%"
              alt="img"
            />
          </div>
          <div className="btn-group d-flex justify-content-center">
            {detailsData.abilities.map((ability, i) => {
              return (
                <button
                  type="button"
                  className="btn btn-primary mx-2 my-2"
                  key={i}
                >
                  {ability.ability.name}
                </button>
              );
            })}
          </div>
          <div className="btn-group d-flex flex-wrap justify-content-center">
            {detailsData.stats.map((d, i) => {
              return (
                <button
                  type="button"
                  className="btn btn-danger rounded mx-2 my-2 "
                  key={i}
                >
                  {d.stat.name} : {d.base_stat}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Pokemon_details;
