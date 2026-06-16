import { Link } from "react-router-dom";

function BusResults({ buses, setSelectedBus }) {
  return (
    <div>
      <h2>Available Buses</h2>
      {buses.map((bus) => (
        <div key={bus._id} className="bus-card">
          <h3>{bus.busNumber}</h3>
          <p>{bus.source}→ {bus.destination}</p>
          <p>Departure: {bus.departureTime}</p>
          <p>Arrival:{bus.arrivalTime}</p>
          <p>Fare:₹{bus.fare}</p>
          <div className="bus-actions">
            <Link to={`/tracking/${bus._id}`}> <button>Track Bus</button> </Link>
            <Link to={`/book/${bus._id}`}><button className="btn secondary">Book Ticket</button> </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BusResults;