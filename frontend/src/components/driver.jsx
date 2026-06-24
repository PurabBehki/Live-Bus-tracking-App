import { useState, useEffect } from "react";
import API from "../services/api";
import "./driver.css";

function Driver() {
  const [busId, setBusId] =useState("");
  const [tracking, setTracking] =useState(false);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [error, setError] =useState("");
  const startTracking = () => {
    if (!busId) {
      setError("Please enter a valid Bus ID");
      return;
    }
    setError("");
    setTracking(true);
    navigator.geolocation.watchPosition(
      async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const data = await response.json();
          const locationName =
            data.address.city ||
            data.address.town ||
            data.address.village ||
            data.address.county ||
            "Unknown";
          setCurrentLocation({
            name: locationName,
            latitude: latitude.toFixed(4),
            longitude: longitude.toFixed(4),
            timestamp: new Date().toLocaleTimeString()
          });
          await API.put(`/bus/${busId}`, {
            latitude,
            longitude,
            currentStop: locationName
          });
          console.log("Location Updated:", locationName);
        } catch (err) {
          setError("Failed to update location");
          console.log(err);
        }
      },
      (error) => {
        setError("GPS access denied. Please enable location services.");
        console.log(error);
      }
    );
  };
  const stopTracking = () => {
    setTracking(false);
    setCurrentLocation(null);
    setError("");
  };
  return (
    <div className="driver-container">
      <div className="driver-card">
        <h1>🚌 Driver Control Panel</h1>
        <div className="driver-form">
          <div className="form-group">
            <label htmlFor="busId">Bus ID</label>
            <input
              id="busId"
              type="text"
              placeholder="Enter your bus ID"
              value={busId}
              onChange={(e) => setBusId(e.target.value)}
              disabled={tracking}
              className="bus-input"
            />
          </div>
          {error && <div className="error-box">{error}</div>}
          <div className="button-group">
            {!tracking ? (
              <button onClick={startTracking} className="track-btn">
                ▶️ Start Tracking
              </button>
            ) : (
              <button onClick={stopTracking} className="track-btn stop-btn">
                ⏹️ Stop Tracking
              </button>
            )}
          </div>
          {tracking && currentLocation && (
            <div className="location-box">
              <div className="status-box">
                🟢 GPS Tracking Active
              </div>
              <div className="location-details">
                <div className="location-item">
                  <span className="location-label">📍 Current Location:</span>
                  <span className="location-value">{currentLocation.name}</span>
                </div>
                <div className="location-item">
                  <span className="location-label">📐 Latitude:</span>
                  <span className="location-value">{currentLocation.latitude}</span>
                </div>
                <div className="location-item">
                  <span className="location-label">📐 Longitude:</span>
                  <span className="location-value">{currentLocation.longitude}</span>
                </div>
                <div className="location-item">
                  <span className="location-label">⏱️ Last Updated:</span>
                  <span className="location-value">{currentLocation.timestamp}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Driver;