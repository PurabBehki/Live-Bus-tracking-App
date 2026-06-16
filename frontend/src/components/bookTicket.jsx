import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";

function BookTicket() {
  const { id } = useParams();
  const [bus, setBus] = useState(null);
  const [seats, setSeats] = useState(1);
  useEffect(() => {
    API.get(`/bus/${id}`)
      .then((res) => {
        setBus(res.data);
      });
  },[id]);
  const handleBooking = async () => {console.log("handleBooking started");
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("User:", user);
    console.log("Bus:", bus);
    const res=await API.post("/booking", {
      ticketNumber: "TKT" + Date.now(),
      userName: user.name,
      email: user.email,
      busId: bus._id,
      busNumber: bus.busNumber,
      source: bus.source,
      destination: bus.destination,
      seats,
      fare: bus.fare,
      totalAmount: seats * bus.fare,
    });
    console.log("Booking Success:", res.data);
    alert("Ticket Booked Successfully");
  } catch (error) {
    console.log("Booking Error:", error);
    console.log("Response:", error.response?.data);
  }
};
  if(!bus){
    return <h2>Loading...</h2>;
  }
  return (
    <div className="app-container book-ticket-page">
      <div className="card book-ticket-card">
        <h1>Book Ticket</h1>
        <h3>{bus.busNumber}</h3>
        <p>
          {bus.source} → {bus.destination}
        </p>
        <p>
          Fare: ₹{bus.fare}
        </p>
        <label>Seats</label>
        <input type="number"
          min="1"
          value={seats}
          onChange={(e) =>
            setSeats(Number(e.target.value))
          }/>
        <div className="book-ticket-total">
          <h3>Total: ₹{seats * bus.fare}</h3>
        </div>
        <button className="btn" onClick={() => { alert("Button clicked");handleBooking(); }} >Confirm Booking </button>
      </div>
    </div>
  );
}

export default BookTicket;