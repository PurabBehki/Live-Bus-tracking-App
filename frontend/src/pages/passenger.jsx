import Navbar from "../components/navbar";
import SearchRoute from "../components/search_route";
import BusStatus from "../components/bus_status";
import MapView from "../components/mapview";
import "./passenger.css";
import BusResults from "../components/busresults";
import { useState } from "react";
import bus1 from "./images/bus1.jpeg"
import bus2 from "./images/bus2.webp"
import bus3 from "./images/bus3.jpg"
import bus4 from "./images/bus4.jpg"

function Passenger() {
  const [buses, setBuses] = useState([]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      <Navbar />
      <main className="dashboard-content">
        <SearchRoute setBuses={setBuses} />
        <BusResults buses={buses} />
        <div className="card fleet-overview-card">
          <h2 className="section-title">Fleet Overview</h2>
          <MapView />
          <div className="features-section">
            <h2 className="section-title">
              Why Choose Our Bus Tracking System?
            </h2>
            <div className="features-grid">
              <div className="feature-card">
                <img src={bus1} alt="Live Tracking" onClick={scrollToTop} className="clickable-image"/>
                <h3>Live Bus Tracking</h3>
                <p>Track buses and monitor real-time location and estimate arrival time of buses.</p>
              </div>
              <div className="feature-card">
                <img src={bus2} alt="Online Booking" onClick={scrollToTop} className="clickable-image"/>
                <h3>Easy Ticket Booking</h3>
                <p>Book tickets instantly and view all bookings from your dashboard.</p>
              </div>
              <div className="feature-card">
                <img src={bus3} alt="Fleet Monitoring"/>
                <h3>Fleet Monitoring</h3>
                <p> Monitor active buses, routes, Estimate Time Arrival, and operational status. </p>
              </div>
              <div className="feature-card">
                <img src={bus4}  alt="Route Search" />
                <h3>Route Search</h3>
                <p> Find available buses quickly by selecting source and destination.</p>
              </div>
            </div>
          </div>
          <div className="app-description-section">
            <h2 className="section-title">About Our Application</h2>
            <div className="description-content">
              <div className="description-text">
                <h3>Smart Bus Tracking System</h3>
                <p>Welcome to our innovative bus tracking platform designed to revolutionize your travel experience. Our application combines cutting-edge GPS technology with user-friendly interface to provide you with real-time information about bus locations, schedules, and availability.</p>
                <p>Whether you're a daily commuter or an occasional traveler, our system ensures you never miss your bus. With features like live tracking, easy booking, and comprehensive fleet monitoring, we make your journey seamless and stress-free.</p>
                <ul className="features-list">
                  <li>✓ Real-time GPS tracking with updates</li>
                  <li>✓ Instant ticket booking and confirmation</li>
                  <li>✓ Complete fleet monitoring dashboard</li>
                  <li>✓ Route optimization and search</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Passenger;