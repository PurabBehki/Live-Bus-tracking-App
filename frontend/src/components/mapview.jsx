import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapView({bus}) {
  const latitude = bus?.latitude||30.3398;
  const longitude = bus?.longitude||76.3869;
  return(
    <MapContainer
      center={[latitude, longitude]} zoom={13}
      style={{ height: "400px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
      <Marker position={[latitude, longitude]}>
        <Popup>{bus?`${bus.busNumber}-${bus.currentStop}`:"Bus Location"}</Popup>
    </Marker>
    </MapContainer>
  );
}

export default MapView;