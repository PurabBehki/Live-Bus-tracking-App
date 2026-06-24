import { useEffect, useState } from "react";
import Navbar from "./navbar";
import API from "../services/api";
import MapView from "./mapview";

function FleetMonitoring() {
  const [buses, setBuses] = useState([]);
  const [selectedBus, setSelectedBus] = useState(null);
  console.log(selectedBus);
  useEffect(() => {
    API.get("/bus").then((res) => { setBuses(res.data); }).catch((err) => { console.log(err); });
  }, []);
  return (
    <div className="app-container">
      <Navbar />
      <main className="dashboard-content">
        <div className="card fleet-card">
          <h2>Fleet Monitoring Dashboard</h2>
          <h3>Total Active Buses: {buses.length}</h3>
          {selectedBus && (
            <div
              style={{
                marginBottom: "20px",
                padding: "15px",
                border: "1px solid #ddd",
                borderRadius: "8px"
              }}>
              <h2> Live Location - {selectedBus.busNumber}</h2>
              <MapView bus={selectedBus} />
            </div>)}
          {buses.map((bus) => (
            <div key={bus._id} onClick={() => {
              console.log("Selected:", bus);
              setSelectedBus(bus);
            }}
              className="fleet-item">
              <h3>{bus.busNumber}</h3>
              <p> {bus.source} → {bus.destination}</p>
              <p>Current Location: {bus.currentStop}</p>
              <p>Latitude: {bus.latitude}</p>
              <p>Longitude: {bus.longitude}</p>
              <p>Status: {bus.status}</p>
              <p>ETA: {bus.eta}</p>
            </div>
          ))}
        </div>
        {selectedBus && (<div className="card fleet-card">
          <h2>Live Location-{selectedBus.busNumber} </h2>
          <p>Current Stop: {selectedBus.currentStop}</p>
          <p>Route: {selectedBus.source} → {selectedBus.destination}</p>
          <p>Status: {selectedBus.status}</p>
          <p>ETA: {selectedBus.eta}</p>
        </div>
        )}
      </main>
    </div>
  );
}

export default FleetMonitoring;