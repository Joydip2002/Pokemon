import React from "react";

const Pokemon_card = ({ data, loading, details }) => {
  return (
    <>
      {loading
        ? "Loading..."
        : data &&
          data.map((d, i) => (
            <div
              className="col-md-5 m-3 d-flex bg-warning justify-content-center justify-content-around p-4 rounded-3 hovercard"
              key={i}
              onClick={() => details(d)}
            >
              <h5>{d.id} </h5>
              <h5 className="text-capitalize">{d.name}</h5>
              <img src={d.sprites.back_default} alt={d.sprites.back_default} />
            </div>
          ))}
    </>
  );
};

export default Pokemon_card;
