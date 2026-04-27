import React, { useEffect, useState } from "react";
import axios from "axios";
import HotelList from "./component/HotelList";
import BookingForm from "./component/BookingForm";

function App() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/hotel-project/api/get_hotels.php")
      .then((response) => {
        setHotels(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Hotel Booking System</h1>

      <HotelList hotels={hotels} />

      <hr />

      <BookingForm />
    </div>
  );
}

export default App;