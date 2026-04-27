import React from "react";
import Roomcard from "./Roomcard";
function HotelList({ hotels }) {
  return (
    <div>
      <h2>Available Hotels</h2>

      {hotels.map((hotel) => (
        <div key={hotel.id}>
          <h3>{hotel.name}</h3>
          <p>{hotel.location}</p>
          <p>{hotel.description}</p>
        </div>
      ))}
    </div>
  );
}

export default HotelList;