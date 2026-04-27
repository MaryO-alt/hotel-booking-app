import React, { useState } from "react";
import axios from "axios";

function BookingForm() {
  const [userId, setUserId] = useState("");
  const [roomId, setRoomId] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const handleBooking = () => {
    const formData = new FormData();
    formData.append("user_id", userId);
    formData.append("room_id", roomId);
    formData.append("check_in", checkIn);
    formData.append("check_out", checkOut);

    axios.post("http://localhost/hotel-project/api/create_booking.php", formData)
      .then(res => alert(res.data))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h2>Book a Room</h2>

      <input placeholder="User ID" onChange={(e) => setUserId(e.target.value)} />
      <br /><br />

      <input placeholder="Room ID" onChange={(e) => setRoomId(e.target.value)} />
      <br /><br />

      <input type="date" onChange={(e) => setCheckIn(e.target.value)} />
      <br /><br />

      <input type="date" onChange={(e) => setCheckOut(e.target.value)} />
      <br /><br />

      <button onClick={handleBooking}>Book Now</button>
    </div>
  );
}

export default BookingForm;