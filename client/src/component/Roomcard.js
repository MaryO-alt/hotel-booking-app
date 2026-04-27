import React from "react";

function RoomCard({ room }) {
  return (
    <div style={{
      border: "1px solid gray",
      padding: "10px",
      margin: "10px 0"
    }}>
      <h3>{room.name}</h3>
      <p><strong>Type:</strong> {room.type}</p>
      <p><strong>Price:</strong> ${room.price}</p>
      <p><strong>Status:</strong> {room.status}</p>
    </div>
  );
}

export default RoomCard;